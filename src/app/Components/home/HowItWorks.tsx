'use client';
import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Loader2, Banknote, Facebook, Instagram, Mail, Phone, X } from "lucide-react";
import {
  fetchPhoneSearchResult,
  fetchEmailSearchResult,
  fetchNameSearchResult,
} from "@/api/apiFunctions";
import { Toparrow } from "@/assets/icon";
import ResultDetailsModal, { ResultDetailsData, ResultField } from "./ResultDetailsModal";
import HibpDetailsModal, { HibpDetailsData } from "./HibpDetailsModal";

export default function HowItWorks() {
  const [searchresults, setSearchResults] = useState(false);
  const [phoneResult, setPhoneResult] = useState<any[] | null>(null);

  const [searchLoading, setSearchLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [internalSearchQuery, setInternalSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [detailsModalData, setDetailsModalData] = useState<ResultDetailsData | null>(null);
  const [hibpDetailsData, setHibpDetailsData] = useState<HibpDetailsData | null>(null);

  // NEW: internal tab for OSINT vs Breach
  const [breachTab, setBreachTab] = useState<"normal" | "breach">("normal");

  const [mode, setMode] = useState(0);
  const [type, setType] = useState(0);
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');

  // Separate filter states for each search type
  // For the Name tab we support username (keyword), phone and email filters
  const [usernameFilters, setUsernameFilters] = useState({
    usernamePhone: '',
    usernameEmail: '',
    keyword: ''
  });

  const [phoneFilters, setPhoneFilters] = useState({
    // Can add phone-specific filters here in future
  });

  const [emailFilters, setEmailFilters] = useState({
    // Can add email-specific filters here in future
  });

  const usernamePhone = usernameFilters.usernamePhone;
  const usernameEmail = usernameFilters.usernameEmail;
  const keyword = usernameFilters.keyword;

  // Setters that update the username filter state
  const setUsernamePhone = (val: string) => {
    setUsernameFilters(prev => ({ ...prev, usernamePhone: val }));
  };
  const setUsernameEmail = (val: string) => {
    setUsernameFilters(prev => ({ ...prev, usernameEmail: val }));
  };
  const setKeyword = (val: string) => {
    setUsernameFilters(prev => ({ ...prev, keyword: val }));
  };

  const fetchResult = async () => {
    try {
      // Username search (type = 0, mode = 1)
      if (type === 0 && mode === 1) {
        if (!fullName || fullName.trim() === "") return;

        setSearchLoading(true);
        const query = fullName.trim();
        const result = await fetchNameSearchResult({ query: query, OstIndAKey: "" });

        // ✅ FIXED: Removed the .filter() that was deleting HIBP data
        if (Array.isArray(result) && result.length > 0) {
          setPhoneResult(result);
          setSearchResults(true);
        } else {
          setPhoneResult(null);
          setSearchResults(false);
        }

        setCurrentPage(1);
        setSelectedCategory("all");
        setBreachTab("normal");
      }

      // Phone search (type = 1, mode = 1)
      else if (type === 1 && mode === 1) {
        if (!phone || phone.trim() === "") return;

        setSearchLoading(true);
        const result = await fetchPhoneSearchResult({ query: phone, OstIndAKey: "" });

        // ✅ FIXED: Removed the .filter() that was deleting HIBP data
        if (Array.isArray(result) && result.length > 0) {
          setPhoneResult(result);
          setSearchResults(true);
        } else {
          setPhoneResult(null);
          setSearchResults(false);
        }

        setCurrentPage(1);
        setSelectedCategory("all");
        setBreachTab("normal");
      }

      // Email search (type = 2, mode = 1)
      else if (type === 2 && mode === 1) {
        if (!phone || phone.trim() === "") return;

        setSearchLoading(true);
        const result = await fetchEmailSearchResult({ query: phone, OstIndAKey: "" });

        // ✅ FIXED: Removed the .filter() that was deleting HIBP data
        if (Array.isArray(result) && result.length > 0) {
          setPhoneResult(result);
          setSearchResults(true);
        } else {
          setPhoneResult(null);
          setSearchResults(false);
        }

        setCurrentPage(1);
        setSelectedCategory("all");
        setBreachTab("normal");
      }
    }
    catch (e: any) {
      console.error("Search error:", e);
      setPhoneResult(null);
      setSearchResults(false);
    }
    finally {
      setSearchLoading(false);
    }
  };

  const desiredFields = useMemo(
    () => [
      { key: "name", label: "Name" },
      { key: "username", label: "Username" },
      { key: "profile_url", label: "Profile URL" },
      { key: "followers", label: "Followers" },
      { key: "following", label: "Following" },
      { key: "bio", label: "Bio" },
      { key: "age", label: "Age" },
      { key: "birthday", label: "Birthday" },
      { key: "location", label: "Location" },
      { key: "first_name", label: "First Name" },
      { key: "last_name", label: "Last Name" },
      { key: "email_hint", label: "Email Hint" },
      { key: "phone_hint", label: "Phone Hint" },
    ],
    []
  );

  // Helper function to expand complex values into individual fields
  const expandComplexValueToFields = (value: any, parentKey: string, index?: number): any[] => {
    const fields: any[] = [];

    if (value === null || value === undefined) {
      return fields;
    }

    // Handle array of objects
    if (Array.isArray(value)) {
      if (value.length === 0) return fields;

      // Check if array contains objects
      const hasObjects = value.some(item => typeof item === "object" && item !== null && !Array.isArray(item));

      if (hasObjects) {
        // Expand each object in array as separate fields
        value.forEach((item, idx) => {
          if (typeof item === "object" && item !== null && !Array.isArray(item)) {
            // Expand object properties as fields
            Object.keys(item).forEach(key => {
              const fieldKey = `${parentKey}_${idx}_${key}`;
              const fieldValue = item[key];

              // Recursively expand nested structures
              if (typeof fieldValue === "object" && fieldValue !== null && !Array.isArray(fieldValue)) {
                fields.push(...expandComplexValueToFields(fieldValue, fieldKey));
              } else if (Array.isArray(fieldValue)) {
                fields.push(...expandComplexValueToFields(fieldValue, fieldKey));
              } else {
                const parentLabel = parentKey.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());
                const keyLabel = key.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());
                fields.push({
                  key: fieldKey,
                  label: `${parentLabel} #${idx + 1} - ${keyLabel}`,
                  value: fieldValue,
                  type: typeof fieldValue
                });
              }
            });
          } else {
            // Simple array item
            fields.push({
              key: `${parentKey}_${idx}`,
              label: `${parentKey.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())} #${idx + 1}`,
              value: item,
              type: typeof item
            });
          }
        });
      } else {
        // Simple array - join as single value
        fields.push({
          key: parentKey,
          label: parentKey.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
          value: value.join(", "),
          type: "string"
        });
      }
    }
    // Handle object/dictionary
    else if (typeof value === "object") {
      Object.keys(value).forEach(key => {
        const fieldKey = `${parentKey}_${key}`;
        const fieldValue = value[key];

        // Recursively expand nested structures
        if (typeof fieldValue === "object" && fieldValue !== null && !Array.isArray(fieldValue)) {
          fields.push(...expandComplexValueToFields(fieldValue, fieldKey));
        } else if (Array.isArray(fieldValue)) {
          fields.push(...expandComplexValueToFields(fieldValue, fieldKey));
        } else {
          fields.push({
            key: fieldKey,
            label: key.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
            value: fieldValue,
            type: typeof fieldValue
          });
        }
      });
    }

    return fields;
  };

  // Helper function to format complex nested structures (for fallback display)
  const formatComplexValue = (obj: any, indent: number = 0): string => {
    const indentStr = "  ".repeat(indent);
    const nextIndent = indent + 1;

    if (obj === null || obj === undefined) {
      return "null";
    }

    if (Array.isArray(obj)) {
      if (obj.length === 0) return "[]";

      // Check if array contains objects
      const hasObjects = obj.some(item => typeof item === "object" && item !== null && !Array.isArray(item));

      if (hasObjects) {
        // Format array of objects - without "Item 1", "Item 2" labels
        const items = obj.map((item, index) => {
          if (typeof item === "object" && item !== null && !Array.isArray(item)) {
            const formatted = formatComplexValue(item, nextIndent);
            return `${indentStr}  ${formatted}`;
          } else {
            return `${indentStr}  ${String(item)}`;
          }
        });
        return `[\n${items.join("\n")}\n${indentStr}]`;
      } else {
        // Simple array
        return `[${obj.map(item => String(item)).join(", ")}]`;
      }
    }

    if (typeof obj === "object") {
      const keys = Object.keys(obj);
      if (keys.length === 0) return "{}";

      const items = keys.map(key => {
        const val = obj[key];
        let formattedVal: string;

        if (typeof val === "object" && val !== null && !Array.isArray(val)) {
          // Nested object
          formattedVal = formatComplexValue(val, nextIndent);
        } else if (Array.isArray(val)) {
          // Array value
          formattedVal = formatComplexValue(val, nextIndent);
        } else if (typeof val === "string") {
          // String value - no quotes for better readability
          formattedVal = val;
        } else if (typeof val === "boolean") {
          formattedVal = val ? "true" : "false";
        } else {
          formattedVal = String(val);
        }

        return `${indentStr}  ${key}: ${formattedVal}`;
      });

      return `{\n${items.join("\n")}\n${indentStr}}`;
    }

    return String(obj);
  };

  const formatValue = (value: any, type: string | undefined) => {
    if (value === null || value === undefined || value === "") {
      return "Not available";
    }

    if (type === "bool" || type === "boolean") return value ? "Yes" : "No";

    if (type === "datetime" || type === "date") {
      try {
        return new Date(value).toLocaleDateString();
      } catch {
        return value.toString();
      }
    }

    // Handle list type (array of objects or simple array)
    // Note: Complex arrays/objects are now expanded into individual fields,
    // so this is mainly for simple arrays or fallback cases
    if (type === "list" || Array.isArray(value)) {
      if (value.length === 0) return "Empty list";

      // Check if it's an array of objects
      const hasObjects = value.some((item: any) =>
        typeof item === "object" && item !== null && !Array.isArray(item)
      );

      if (hasObjects) {
        // For arrays of objects, show count (they should be expanded into fields)
        return `${value.length} item${value.length !== 1 ? 's' : ''} (see details)`;
      } else {
        // Simple array - join with commas
        return value.map((item: any) => String(item)).join(", ");
      }
    }

    // Handle dict/object type
    // Note: Complex objects are now expanded into individual fields,
    // so this is mainly for fallback cases
    if (type === "dict" || type === "object" || (typeof value === "object" && value !== null && !Array.isArray(value))) {
      const keys = Object.keys(value);
      if (keys.length === 0) return "Empty object";
      return `${keys.length} field${keys.length !== 1 ? 's' : ''} (see details)`;
    }

    // For primitive types, return as string
    return value.toString();
  };

  const isImageUrl = (value: unknown) => {
    if (typeof value !== "string") return false;
    try {
      const url = new URL(value);
      return /\.(png|jpe?g|gif|webp|svg)$/i.test(url.pathname);
    } catch {
      return false;
    }
  };

  const prettifyUrl = (value: string) => {
    try {
      const parsed = new URL(value);
      const path = parsed.pathname === "/" ? "" : parsed.pathname;
      return `${parsed.hostname.replace(/^www\./, "")}${path}`;
    } catch {
      return value;
    }
  };

  const getStatusBadge = (status?: string) => {
    const normalized = (status || "").toLowerCase();
    if (normalized === "found") {
      return {
        label: "Found",
        className: "bg-[#0F2A1C] text-[#45F39A] border border-[#1F6B47]",
      };
    }
    if (normalized === "pending") {
      return {
        label: "Pending",
        className: "bg-[#33260F] text-[#F0C05A] border border-[#775A1A]",
      };
    }
    return {
      label: normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : "Status",
      className: "bg-[#331616] text-[#FF7A7A] border border-[#7A2C2C]",
    };
  };

  // Helper to identify breach modules
  const isBreach = (moduleName: string, item?: any) => {
    if (!moduleName) {
      // Fallback: Check if item has breach-specific fields
      if (item && (item.body || item.timeline)) {
        return true;
      }
      return false;
    }
    const name = moduleName.toLowerCase().trim();
    // Check for "hibp" module name (case-insensitive)
    const exactMatch = moduleName.trim().toLowerCase() === "hibp";
    const nameMatch = exactMatch || name === "hibp" || name.includes("hibp");

    // Also check if item has breach-specific structure
    if (item && (item.body || item.timeline)) {
      return true;
    }

    return nameMatch;
  };

  return (
    <div id="how-it-works" className="">
      <div className="flex  flex-col lg:flex-row mt-20 justify-center items-center p-6 sm:p-12 lg:p-10 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')]   bg-repeat">
        {/* Left Column */}
        <div className="h-full flex flex-col gap-4 justify-start items-start text-center lg:text-left max-w-xl">
          <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-normal text-white">
            How it works
          </h1>
          <p className="text-left font-inter font-normal text-sm sm:text-base md:text-lg text-white">
            "Using advanced algorithms, OSINT methodology and investigative technologies, Webutation
            scours social media, public records, and other digital footprints to provide actionable
            intelligence."
          </p>
        </div>

        {/* Right Column */}
        <div className="relative h-full flex flex-col gap-6 lg:gap-8 items-center w-full max-w-3xl">
          <div className="absolute -top-2 bg-[#167BFF] h-7 w-full max-w-[38.5rem] align-middle blur-[43.8px]"></div>

          <div className="flex flex-col gap-0 w-full">
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-4 rounded-t-[12px] bg-[#09346B]">
              <button onClick={() => setMode(0)} style={{
                border: mode === 0 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 0 ? '#0C448C' : 'transparent',
                transition: 'linear 0.5s',
              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  color: mode === 0 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 0 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  All in One
                </span>
              </button>

              <button onClick={() => setMode(1)} style={{
                border: mode === 1 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 1 ? '#0C448C' : 'transparent',
              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  transition: 'linear 0.5s',
                  color: mode === 1 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 1 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  OSINT
                </span>
              </button>

              <button onClick={() => setMode(2)} style={{
                transition: 'linear 0.5s',
                border: mode === 2 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 2 ? '#0C448C' : 'transparent',
              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  color: mode === 2 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 2 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  Data Breach
                </span>
              </button>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-6 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
              {/* Sub tabs (Name / Phone / Email) are hidden when 'All in One' is selected */}
              {mode !== 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">
                  {/* Name */}
                  <button
                    style={{
                      transition: 'linear 1s',
                      backgroundColor: type === 0 ? '#E8F2FF' : '#515151',
                      border: type === 0 ? '1.2px solid #157AFF' : 'none',
                    }}
                    onClick={() => setType(0)}
                    className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer "
                  >
                    <span
                      style={{
                        color: type === 0 ? '#1E1E1E' : 'black',
                        fontWeight: mode === 0 ? 'medium' : 'normal',
                      }}
                      className="font-sans text-base sm:text-lg md:text-xl"
                    >
                      Name
                    </span>
                  </button>

                  {/* Phone Number */}
                  <button
                    style={{
                      transition: 'linear 1s',
                      backgroundColor: type === 1 ? '#E8F2FF' : '#515151',
                      border: type === 1 ? '1.2px solid #157AFF' : 'none',
                    }}
                    onClick={() => setType(1)}
                    className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer "
                  >
                    <span
                      style={{
                        color: type === 1 ? '#1E1E1E' : 'black',
                        fontWeight: mode === 1 ? 'medium' : 'normal',
                      }}
                      className="font-sans min-w-[150px] text-base sm:text-lg md:text-xl"
                    >
                      Phone Number
                    </span>
                  </button>

                  {/* Email */}
                  <button
                    style={{
                      transition: 'linear 1s',
                      backgroundColor: type === 2 ? '#E8F2FF' : '#515151',
                      border: type === 2 ? '1.2px solid #157AFF' : 'none',
                    }}
                    onClick={() => setType(2)}
                    className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer "
                  >
                    <span
                      style={{
                        color: type === 2 ? '#1E1E1E' : 'black',
                        fontWeight: mode === 2 ? 'medium' : 'normal',
                      }}
                      className="font-sans text-base sm:text-lg md:text-xl"
                    >
                      Email
                    </span>
                  </button>
                </div>
              )}

              {type === 0 && (
                <UsernameForm
                  fullName={fullName}
                  setFullName={setFullName}
                  usernamePhone={usernamePhone}
                  setUsernamePhone={setUsernamePhone}
                  usernameEmail={usernameEmail}
                  setUsernameEmail={setUsernameEmail}
                  keyword={keyword}
                  setKeyword={setKeyword}
                />
              )}
              {type === 1 && <CustomForm formType={1} controller={phone} setController={setPhone} />}
              {type === 2 && <CustomForm formType={2} controller={phone} setController={setPhone} />}
              {/* Search Button */}
              <div className="p-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    fetchResult();
                  }}
                  disabled={searchLoading}
                  className={`custom-button w-full with-shadow bg-[#1057B5] flex items-center justify-center gap-2 ${searchLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {searchLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span className="text-white">Searching...</span>
                    </>
                  ) : (
                    <>
                      <span>Search Now</span>
                      <Toparrow />
                    </>
                  )}
                </button>
              </div>
              <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
                Search by username, phone number, or email to confidentially look up information.
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Search Results Display */}
      {phoneResult && phoneResult.length > 0 && (() => {
        // ✅ 1. Separate Breach Results (Filter for HIBP)
        // Handle items with front_schemas array (each item in front_schemas is a separate breach)
        const breachResults: any[] = [];
        phoneResult.forEach((item: any) => {
          const moduleName = item?.module || "";
          const isBreachItem = isBreach(moduleName, item);

          if (isBreachItem) {
            // ✅ FIX: Check for front_schemas array (this is where breach data is)
            const frontSchemas = item.front_schemas || [];

            if (frontSchemas.length > 0) {
              // Each item in front_schemas is a separate breach
              frontSchemas.forEach((frontSchema: any, schemaIndex: number) => {
                breachResults.push({
                  ...item,
                  frontSchema, // Store the individual breach data from front_schemas
                  schemaIndex,
                  // frontSchema contains: module, image, body, tags, timeline
                });
              });
            } else {
              // Direct breach item (no front_schemas, use item-level data)
              breachResults.push(item);
            }

            console.log("Found breach item:", {
              module: moduleName,
              hasFrontSchemas: frontSchemas.length > 0,
              frontSchemasLength: frontSchemas.length
            });
          }
        });

        // Debug: Log total breach results and all modules
        console.log("Total breach results:", breachResults.length, "out of", phoneResult.length);
        console.log("All modules in results:", phoneResult.map((item: any) => item?.module));

        // ✅ 2. Separate OSINT Results (Exclude HIBP)
        const allResults: any[] = [];
        phoneResult.forEach((item: any, index: number) => {

          // SKIP if it's a breach item
          if (isBreach(item.module, item)) {
            return;
          }

          if (item.status !== 'found') return;

          const platformName = item.module || 'Unknown';
          const categoryName = item.category?.name || 'Unknown Category';
          const specFormatArray = item.spec_format || [];

          // Handle case where spec_format is empty or doesn't exist
          // This can happen with username search results
          if (specFormatArray.length > 0) {
            specFormatArray.forEach((specData: any, specIndex: number) => {
              allResults.push({
                platformName,
                categoryName,
                specData,
                specFormatArray,
                specIndex,
                frontSchemas: item.front_schemas || [],
                rawData: item.data || null,
                itemIndex: index,
                reliableSource: item.reliable_source,
                query: item.query,
                status: item.status,
              });
            });
          } else {
            // Fallback: If spec_format is empty, try to use item.data or create a result from item itself
            // This handles cases where username search returns different structure
            // Check if item has any data that can be displayed
            const hasData = item.data && typeof item.data === 'object' && Object.keys(item.data).length > 0;
            const hasSpecData = item.spec_data && typeof item.spec_data === 'object' && Object.keys(item.spec_data).length > 0;

            if (hasData || hasSpecData) {
              // Use item.data or item.spec_data as fallback specData
              const fallbackSpecData = item.data || item.spec_data || {};

              allResults.push({
                platformName,
                categoryName,
                specData: fallbackSpecData,
                specFormatArray: [fallbackSpecData],
                specIndex: 0,
                frontSchemas: item.front_schemas || [],
                rawData: item.data || null,
                itemIndex: index,
                reliableSource: item.reliable_source,
                query: item.query,
                status: item.status,
              });
            } else {
              // Even if no structured data, still add the item so it shows up
              // This ensures results are visible even if structure is unexpected
              allResults.push({
                platformName,
                categoryName,
                specData: item,
                specFormatArray: [item],
                specIndex: 0,
                frontSchemas: item.front_schemas || [],
                rawData: item.data || item,
                itemIndex: index,
                reliableSource: item.reliable_source,
                query: item.query,
                status: item.status,
              });
            }
          }
        });

        // Debug logging to help identify issues
        console.log('Processed results:', {
          totalItems: phoneResult.length,
          allResultsCount: allResults.length,
          type: type === 0 ? 'username' : type === 1 ? 'phone' : 'email'
        });

        // Helper function to get field value from result
        // Handles both normal spec_format structure and fallback data structures
        const getFieldValueFromResult = (resultSpecData: any, fieldKey: string): string | null => {
          if (!resultSpecData) return null;

          // Try direct field access (normal spec_format structure: { fieldKey: { value: ... } })
          const directField = resultSpecData[fieldKey];
          if (directField && directField.value !== undefined && directField.value !== null && directField.value !== "") {
            return String(directField.value).toLowerCase().trim();
          }

          // Try direct value access (fallback structure: { fieldKey: "value" })
          if (resultSpecData[fieldKey] !== undefined && resultSpecData[fieldKey] !== null && resultSpecData[fieldKey] !== "") {
            const directValue = resultSpecData[fieldKey];
            if (typeof directValue === 'string' || typeof directValue === 'number') {
              return String(directValue).toLowerCase().trim();
            }
          }

          // Try platform_variables array
          if (Array.isArray(resultSpecData.platform_variables)) {
            const platformField = resultSpecData.platform_variables.find((pv: any) => pv.key === fieldKey);
            if (platformField && platformField.value !== undefined && platformField.value !== null && platformField.value !== "") {
              return String(platformField.value).toLowerCase().trim();
            }
          }

          return null;
        };

        // Filter results based on category, internal search query, and optional filter fields
        // Only apply username-specific filters when type === 0 (username search)
        const filteredResults = allResults.filter((result) => {
          // Filter by category
          if (selectedCategory !== "all" && result.categoryName !== selectedCategory) {
            return false;
          }

          const { specData } = result;

          // ✅ Apply Name-tab filters ONLY when type === 0 (Name search)
          if (type === 0) {
            if (usernameFilters.usernamePhone && usernameFilters.usernamePhone.trim()) {
              const resultPhone = getFieldValueFromResult(specData, "phone") ||
                getFieldValueFromResult(specData, "phone_hint") || "";
              if (!resultPhone.includes(usernameFilters.usernamePhone.toLowerCase().trim())) return false;
            }

            if (usernameFilters.usernameEmail && usernameFilters.usernameEmail.trim()) {
              const resultEmail = getFieldValueFromResult(specData, "email") ||
                getFieldValueFromResult(specData, "email_hint") || "";
              if (!resultEmail.includes(usernameFilters.usernameEmail.toLowerCase().trim())) return false;
            }

            if (usernameFilters.keyword && usernameFilters.keyword.trim()) {
              const keywordLower = usernameFilters.keyword.toLowerCase().trim();
              let found = false;
              // Treat keyword as a "username" style filter: focus on identity fields
              const fieldsToCheck = ["username", "name", "first_name", "last_name"];
              for (const fieldKey of fieldsToCheck) {
                const fieldValue = getFieldValueFromResult(specData, fieldKey);
                if (fieldValue && fieldValue.includes(keywordLower)) {
                  found = true;
                  break;
                }
              }
              if (!found && Array.isArray(specData.platform_variables)) {
                for (const pv of specData.platform_variables) {
                  if (pv.value && String(pv.value).toLowerCase().includes(keywordLower)) {
                    found = true;
                    break;
                  }
                }
              }
              if (!found) return false;
            }
          }

          // Phone/Email search filters can be added here in future if needed
          // if (type === 1) { ... phoneFilters ... }
          // if (type === 2) { ... emailFilters ... }

          if (!internalSearchQuery.trim()) return true;

          const query = internalSearchQuery.toLowerCase();
          const { platformName, categoryName } = result;

          if (platformName?.toLowerCase().includes(query)) return true;
          if (categoryName?.toLowerCase().includes(query)) return true;

          const checkValue = (val: any): boolean => {
            if (typeof val === 'string') return val.toLowerCase().includes(query);
            if (typeof val === 'number') return val.toString().includes(query);
            return false;
          };

          // Handle both normal structure (specData.field.value) and fallback structure (specData.field)
          const checkField = (fieldName: string): boolean => {
            const field = specData[fieldName];
            if (!field) return false;

            // Normal structure: { field: { value: ... } }
            if (field.value !== undefined) {
              return checkValue(field.value);
            }

            // Fallback structure: { field: "value" }
            return checkValue(field);
          };

          if (checkField('name')) return true;
          if (checkField('username')) return true;
          if (checkField('email')) return true;
          if (checkField('phone')) return true;
          if (checkField('location')) return true;

          if (Array.isArray(specData.platform_variables)) {
            for (const pv of specData.platform_variables) {
              if (checkValue(pv.value)) return true;
            }
          }

          return false;
        });

        const filteredTotal = filteredResults.length;
        const filteredTotalPages = Math.ceil(filteredTotal / itemsPerPage);
        const filteredStartIndex = (currentPage - 1) * itemsPerPage;
        const filteredEndIndex = filteredStartIndex + itemsPerPage;
        const currentResults = filteredResults.slice(filteredStartIndex, filteredEndIndex);

        // Get unique categories from ALL OSINT results so dropdown always shows every category
        const allUniqueCategories = Array.from(new Set(allResults.map((r) => r.categoryName))).sort();

        return (
          <>
            <div className="container mx-auto px-4 py-8 overflow-visible">
              {/* Internal Result Tabs: OSINT vs Breach */}
              <div className="mb-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setBreachTab("normal")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${breachTab === "normal"
                    ? "bg-[#167BFF] text-white border border-[#167BFF]"
                    : "bg-[#1A1F2E] text-gray-300 border border-[#3C414A] hover:bg-[#222839]"
                    }`}
                >
                  OSINT Results ({filteredTotal})
                </button>
                <button
                  type="button"
                  onClick={() => setBreachTab("breach")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${breachTab === "breach"
                    ? "bg-[#167BFF] text-white border border-[#167BFF]"
                    : "bg-[#1A1F2E] text-gray-300 border border-[#3C414A] hover:bg-[#222839]"
                    }`}
                >
                  Breach ({breachResults.length})
                </button>
              </div>

              {breachTab === "normal" && (
                <>
                  {/* Search Results Header */}
                  <div className="mb-6 flex flex-col gap-4 overflow-visible">
                    <div className="font-sans font-bold text-white text-center md:text-left p-2 sm:p-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
                      Search Results ({filteredTotal} result{filteredTotal !== 1 ? 's' : ''} found)
                    </div>

                    {/* Category Filter and Search Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="relative w-full sm:w-auto">
                        <label className="block text-sm text-white mb-2 font-semibold">Filter by Category</label>
                        <div className="relative">
                          <select
                            value={selectedCategory}
                            onChange={(e) => {
                              setSelectedCategory(e.target.value);
                              setCurrentPage(1);
                            }}
                            className="w-full sm:w-64  rounded-lg border border-[#4c4c4c] bg-[#0B0F1A] px-4 py-2.5 pr-10 text-sm md:text-base text-white focus:border-[#167BFF] focus:outline-none focus:ring-1 focus:ring-[#167BFF] cursor-pointer"
                          >

                            <option value="all">All Categories ({filteredTotal})</option>
                            {allUniqueCategories.map((category) => {
                              const count = allResults.filter((r) => r.categoryName === category).length;
                              return (
                                <option key={category} value={category}>
                                  {category} ({count})
                                </option>
                              );
                            })}
                          </select>
                          {/* Custom Dropdown Arrow */}

                        </div>
                      </div>

                      <div className="flex-1 w-full">
                        <label className="block text-sm text-white mb-2 font-semibold">Search Results by</label>
                        <div className="relative">
                          <input
                            id="search-input"
                            type="text"
                            value={internalSearchQuery}
                            onChange={(e) => {
                              setInternalSearchQuery(e.target.value);
                              setCurrentPage(1);
                            }}
                            placeholder="Name, username, email, phone..."
                            className="w-full rounded-lg border border-[#4c4c4c] bg-[#0B0F1A] px-4 py-2.5 pr-10 text-xs sm:text-sm md:text-base text-white placeholder-[#b6c0e0] focus:border-[#167BFF] focus:outline-none focus:ring-1 focus:ring-[#167BFF]"
                          />
                          {internalSearchQuery && (
                            <button
                              onClick={() => {
                                setInternalSearchQuery("");
                                setCurrentPage(1);
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A8299] hover:text-white transition-colors"
                              aria-label="Clear search"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        {currentResults.map((result, resultIndex) => {
                          const { platformName, categoryName, specData, specFormatArray, specIndex, reliableSource, query, status } = result;

                          const getFieldValue = (fieldKey: string) => {
                            if (!specData) return { value: null, type: undefined };

                            // Try direct field access (normal spec_format structure: { fieldKey: { value: ... } })
                            const directField = specData[fieldKey];
                            if (directField && directField.value !== undefined && directField.value !== null && directField.value !== "") {
                              return { value: directField.value, type: directField.type };
                            }

                            // Try direct value access (fallback structure: { fieldKey: "value" })
                            if (specData[fieldKey] !== undefined && specData[fieldKey] !== null && specData[fieldKey] !== "") {
                              const directValue = specData[fieldKey];
                              if (typeof directValue === 'string' || typeof directValue === 'number' || typeof directValue === 'boolean') {
                                return { value: directValue, type: typeof directValue };
                              }
                            }

                            // Try platform_variables array
                            if (Array.isArray(specData.platform_variables)) {
                              const platformField = specData.platform_variables.find((pv: any) => pv.key === fieldKey);
                              if (platformField && platformField.value !== undefined && platformField.value !== null && platformField.value !== "") {
                                return { value: platformField.value, type: platformField.type };
                              }
                            }

                            return { value: null, type: undefined };
                          };

                          const displayFields = desiredFields
                            .map((field) => {
                              const fieldData = getFieldValue(field.key);
                              return {
                                ...field,
                                value: fieldData.value,
                                type: fieldData.type,
                              };
                            })
                            .filter((field) => {
                              const value = field.value;
                              if (value === null || value === undefined || value === "") return false;
                              if (typeof value === "string" && value.trim() === "") return false;
                              if (Array.isArray(value) && value.length === 0) return false;
                              return true;
                            });

                          const additionalFields: any[] = [];
                          if (Array.isArray(specData.platform_variables)) {
                            specData.platform_variables.forEach((pv: any) => {
                              // Filter out "surveys" field
                              if (pv.key === "surveys" || pv.key?.toLowerCase() === "surveys") return;

                              if (desiredFields.some((df) => df.key === pv.key)) return;
                              if (pv.value !== undefined && pv.value !== null && pv.value !== "") {
                                if (typeof pv.value === "string" && pv.value.trim() === "") return;
                                if (Array.isArray(pv.value) && pv.value.length === 0) return;

                                // Check if value is complex (array of objects or nested object)
                                const isComplex = (Array.isArray(pv.value) && pv.value.some((item: any) =>
                                  typeof item === "object" && item !== null && !Array.isArray(item)
                                )) || (typeof pv.value === "object" && pv.value !== null && !Array.isArray(pv.value) && Object.keys(pv.value).length > 0);

                                if (isComplex) {
                                  // Expand complex values into individual fields
                                  const expandedFields = expandComplexValueToFields(pv.value, pv.key);
                                  expandedFields.forEach(field => {
                                    // Field key already includes parent key from expandComplexValueToFields
                                    additionalFields.push(field);
                                  });
                                } else {
                                  // Simple value - add as is
                                  additionalFields.push({
                                    key: pv.key,
                                    label: pv.key.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
                                    value: pv.value,
                                    type: pv.type,
                                  });
                                }
                              }
                            });
                          }

                          const allDisplayFields = [...displayFields, ...additionalFields];
                          const profileField = getFieldValue("profile_url");
                          const pictureField = getFieldValue("picture_url");
                          const idField = getFieldValue("id");
                          const profileUrl = typeof profileField.value === "string" ? profileField.value : "";
                          const pictureSource = typeof pictureField.value === "string" && pictureField.value ? pictureField.value : null;
                          const profileImageSource = typeof profileField.value === "string" && isImageUrl(profileField.value) ? profileField.value : null;
                          const cardImage = pictureSource || profileImageSource;
                          const statusBadge = getStatusBadge(status);
                          const specName = specData?.name?.value;
                          const specTitle = specData?.title?.value;
                          const cardTitle = specName || specTitle || platformName;
                          const recordId = idField.value !== null && idField.value !== undefined && idField.value !== "" ? idField.value : null;

                          const formattedFields: ResultField[] = allDisplayFields.map((field) => ({
                            key: field.key,
                            label: field.label,
                            formattedValue: field.key === "profile_url"
                              ? profileUrl ? prettifyUrl(profileUrl) : "Not available"
                              : formatValue(field.value, field.type),
                          }));
                          const previewFields = formattedFields.slice(0, 1);
                          const hasMoreFields = formattedFields.length > previewFields.length;

                          return (
                            <div
                              key={`${result.itemIndex}-${specIndex}-${resultIndex}`}
                              className="relative flex h-full min-h-[24rem] flex-col rounded-2xl border border-[#1E2535] bg-gradient-to-b from-[#0D111C] via-[#0A0F19] to-[#06070C] p-5 shadow-[0_35px_80px_rgba(4,7,16,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-[#167BFF] hover:shadow-[0_50px_110px_rgba(22,123,255,0.25)]"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex flex-col">
                                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#7D879C]">
                                    {categoryName}
                                  </p>
                                  <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                                    {cardTitle}
                                    {specFormatArray.length > 1 && ` (${specIndex + 1})`}
                                  </h3>
                                  {recordId && (
                                    <p className="text-[0.65rem] text-[#9CA3AF] mt-1 break-all">
                                      ID: {recordId}
                                    </p>
                                  )}
                                </div>
                                <span className={`rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-wide ${statusBadge.className}`}>
                                  {statusBadge.label}
                                </span>
                              </div>

                              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#192032] bg-[#0F1524] p-3">
                                <div
                                  className="relative h-14 w-14 shrink-0 rounded-full border border-[#27304A] bg-[#0B0F1A] cursor-pointer transition-transform hover:scale-105"
                                  onClick={() => cardImage && setSelectedImage(cardImage)}
                                >
                                  {cardImage ? (
                                    <img
                                      src={cardImage}
                                      alt={`${cardTitle} profile image`}
                                      className="h-full w-full rounded-full object-cover"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full items-center justify-center rounded-full text-[0.65rem] text-[#7A8299]">
                                      No Photo
                                    </div>
                                  )}
                                  <div className="pointer-events-none absolute inset-0 rounded-full border border-[#167BFF33]" />
                                </div>
                                <div className="flex flex-1 flex-col gap-1 text-xs text-[#B4BCD1]">
                                  <span className="text-[0.55rem] uppercase tracking-[0.3em] text-[#6A7390]">Platform</span>
                                  <span className="text-sm font-semibold text-white">{platformName}</span>
                                  {query && (
                                    <span className="text-[0.7rem] text-[#7D879C] break-all">
                                      {query}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {formattedFields.length > 0 && (
                                <div className="mt-4 space-y-2.5">
                                  {previewFields.map((field) => {
                                    if (field.key === "profile_url") {
                                      const truncatedDisplay = field.formattedValue.length > 40
                                        ? `${field.formattedValue.substring(0, 40)}...`
                                        : field.formattedValue;
                                      return (
                                        <div key={field.key} className="flex items-center justify-between gap-2.5 rounded-xl border border-[#1A2134] bg-[#10172A] p-3 text-xs">
                                          <div className="flex flex-col flex-1 min-w-0">
                                            <span className="text-gray-400 font-medium">{field.label}</span>
                                            <span className="text-[0.7rem] text-[#7D879C] leading-relaxed truncate" title={profileUrl || undefined}>
                                              {truncatedDisplay}
                                            </span>
                                          </div>
                                          {profileUrl ? (
                                            <Link href={profileUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#167BFF] px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#0C448C]">
                                              Visit
                                            </Link>
                                          ) : (
                                            <span className="text-xs text-gray-500">N/A</span>
                                          )}
                                        </div>
                                      );
                                    }
                                    // Check if the value is a complex structure (contains newlines or brackets)
                                    const isComplexValue = field.formattedValue.includes('\n') ||
                                      field.formattedValue.includes('{') ||
                                      field.formattedValue.includes('[');

                                    return (
                                      <div key={field.key} className="rounded-xl border border-[#141B2C] bg-[#0C1323] p-3 text-xs">
                                        <span className="text-gray-400 font-medium">{field.label}</span>
                                        {isComplexValue ? (
                                          <pre className="mt-1 text-[0.7rem] text-gray-200 leading-relaxed whitespace-pre-wrap break-words overflow-x-auto max-h-48 overflow-y-auto font-mono bg-[#0A0F19] p-2 rounded border border-[#1A2134]">
                                            {field.formattedValue}
                                          </pre>
                                        ) : (
                                          <p className="mt-1 text-[0.8rem] text-gray-200 leading-relaxed break-words">
                                            {field.formattedValue}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                  {hasMoreFields && (
                                    <button
                                      type="button"
                                      className="w-full rounded-2xl border border-[#167BFF33] px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#167BFF] hover:bg-[#0C448C]"
                                      onClick={() => {
                                        setDetailsModalData({
                                          title: cardTitle,
                                          category: categoryName,
                                          platform: platformName,
                                          statusBadge,
                                          recordId,
                                          query: query || null,
                                          profileUrl: profileUrl || null,
                                          reliableSource: Boolean(reliableSource),
                                          fields: formattedFields,
                                          cardImage,
                                        });
                                      }}
                                    >
                                      View more details
                                    </button>
                                  )}
                                </div>
                              )}

                              {reliableSource && (
                                <div className="mt-4 flex items-center justify-between rounded-2xl border border-[#10243A] bg-[#0B1624] px-4 py-2.5 text-[0.65rem] text-[#69B3FF]">
                                  <span className="font-semibold tracking-wide">✓ Reliable Source</span>
                                  <span className="text-[#7D879C]">Verified by Webutation</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {filteredTotalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#3C414A]">
                          <div className="text-sm text-gray-400">
                            Showing {filteredStartIndex + 1} to {Math.min(filteredEndIndex, filteredTotal)} of {filteredTotal} results
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === 1 ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed' : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'}`}
                            >
                              Previous
                            </button>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map((page) => {
                                if (page === 1 || page === filteredTotalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                  return (
                                    <button
                                      key={page}
                                      onClick={() => setCurrentPage(page)}
                                      className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === page ? 'bg-[#167BFF] text-white border border-[#167BFF]' : 'bg-[#3C414A] text-gray-300 hover:bg-[#515151] border border-[#3C414A]'}`}
                                    >
                                      {page}
                                    </button>
                                  );
                                } else if (page === currentPage - 2 || page === currentPage + 2) {
                                  return <span key={page} className="text-gray-500 px-2">...</span>;
                                }
                                return null;
                              })}
                            </div>
                            <button
                              onClick={() => setCurrentPage(prev => Math.min(filteredTotalPages, prev + 1))}
                              disabled={currentPage === filteredTotalPages}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === filteredTotalPages ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed' : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'}`}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* ✅ SHOW BREACH VIEW WHEN TAB IS ACTIVE */}
              {breachTab === "breach" && (
                <BreachResultsView results={breachResults} />
              )}

              {selectedImage && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2"
                  onClick={() => setSelectedImage(null)}
                  style={{ backdropFilter: 'none' }}
                >
                  <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 z-10 rounded-full bg-[#1E2535] p-3 text-white hover:bg-[#167BFF] transition-colors shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <img
                      src={selectedImage}
                      alt="Profile preview"
                      className="w-auto h-auto max-w-[95vw] max-h-[95vh] min-w-[400px] min-h-[400px] object-contain rounded-xl shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                      style={{ imageRendering: 'auto', filter: 'none', objectFit: 'contain' }}
                      loading="eager"
                    />
                  </div>
                </div>
              )}
              <ResultDetailsModal
                isOpen={Boolean(detailsModalData)}
                onClose={() => setDetailsModalData(null)}
                data={detailsModalData}
              />
              <HibpDetailsModal
                isOpen={Boolean(hibpDetailsData)}
                onClose={() => setHibpDetailsData(null)}
                data={hibpDetailsData}
              />
            </div>
          </>
        );
      })()}
    </div>
  );
}

// Breach results view
function BreachResultsView({ results }: { results: any[] }) {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeBreachId, setActiveBreachId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const yearRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const breachRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);

  // Helper function to format date timestamp
  const formatDate = (dateValue: any): string => {
    // Convert to string if not already
    const dateString = dateValue?.toString() || "";

    if (!dateString || dateString === "N/A" || dateString.trim() === "" || dateString === "null" || dateString === "undefined") {
      return "N/A";
    }

    try {
      // Check if already in correct format YYYY-MM-DDTHH:mm:ss or YYYY-MM-DDTHH:mm:ssZ
      const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
      if (isoRegex.test(dateString)) {
        // Extract just the date and time part (remove timezone if present)
        const match = dateString.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/);
        if (match) {
          return match[1];
        }
        return dateString;
      }

      // Try to parse the date
      let date: Date;

      // Handle different date formats
      if (dateString.includes('T')) {
        // ISO format with time
        date = new Date(dateString);
      } else if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
        // Date only format YYYY-MM-DD
        date = new Date(dateString + 'T00:00:00');
      } else {
        // Try parsing as is
        date = new Date(dateString);
      }

      if (isNaN(date.getTime())) {
        // If not a valid date, return as is
        console.warn("Invalid date format:", dateString);
        return dateString;
      }

      // Format as YYYY-MM-DDTHH:mm:ss (same format as shown in image)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    } catch (error) {
      console.error("Date formatting error:", error, dateString);
      return dateString;
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Observe year elements
    Object.entries(yearRefs.current).forEach(([year, element]) => {
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveYear(year);
              }
            });
          },
          {
            threshold: 0.3,
            rootMargin: '-20% 0px -20% 0px',
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Observe breach elements
    Object.entries(breachRefs.current).forEach(([id, element]) => {
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveBreachId(id);
              }
            });
          },
          {
            threshold: 0.4,
            rootMargin: '-10% 0px -10% 0px',
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [results]);

  // Scroll tracking for timeline progress
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const totalScrollable = scrollHeight - clientHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [results]);

  if (!results || results.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-400">
        No breach records found for this query.
      </div>
    );
  }

  // Process and group breaches by year
  const processedBreaches = results.map((item: any) => {
    const frontSchema = item.frontSchema;
    const body = frontSchema?.body || item.body || {};
    const tags = Array.isArray(frontSchema?.tags) ? frontSchema.tags : (Array.isArray(item.tags) ? item.tags : []);
    const timeline = frontSchema?.timeline || item.timeline || {};
    const hibpTimeline = timeline.group_items?.hibp || [];

    // Get the earliest year from timeline for grouping
    const years = hibpTimeline.map((t: any) => Number(t.year)).filter((y: number) => !isNaN(y));
    const earliestYear = years.length > 0 ? Math.min(...years) : null;

    const title = body.Title || body.title || frontSchema?.module || item.module || "Breach";
    const domain = body.Domain || body.domain || "Unknown domain";
    const breachDate = body["Breach Date"] || body.breachDate || body.breach_date || "N/A";
    const image = frontSchema?.image || item.image || null;

    return {
      ...item,
      title,
      domain,
      breachDate,
      image,
      tags,
      timeline: hibpTimeline,
      year: earliestYear,
    };
  });

  // Group breaches by year (oldest first)
  const breachesByYear = processedBreaches.reduce((acc: any, breach: any) => {
    const year = breach.year || "Unknown";
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(breach);
    return acc;
  }, {});

  // Sort years (oldest first)
  const sortedYears = Object.keys(breachesByYear).sort((a, b) => {
    if (a === "Unknown") return 1;
    if (b === "Unknown") return -1;
    return Number(a) - Number(b);
  });

  return (
    <div className="mt-6">
      <div className="mb-6 font-sans font-bold text-white text-center md:text-left p-2 sm:p-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
        Breach Results ({results.length} breach{results.length !== 1 ? "es" : ""} found)
      </div>

      {/* Timeline Container with Scrolling - Hidden Scrollbar */}
      <div className="relative">
        {/* Fixed Timeline Line on Left - Outside scroll container */}
        <div
          ref={timelineContainerRef}
          className="absolute left-4 sm:left-8 top-0 w-0.5 bg-[#3C414A] z-10"
          style={{
            height: '800px',
          }}
        >
          {/* Progress Indicator - Animated */}
          <div
            className="absolute top-0 left-0 w-full bg-[#167BFF] transition-all duration-300 ease-out origin-top"
            style={{
              height: `${scrollProgress}%`,
              boxShadow: '0 0 10px rgba(22, 123, 255, 0.5)',
            }}
          />
          {/* Progress Glow Effect */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#167BFF] transition-all duration-300 ease-out z-20"
            style={{
              top: `calc(${scrollProgress}% - 6px)`,
              boxShadow: '0 0 15px rgba(22, 123, 255, 0.8)',
            }}
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="relative max-h-[800px] overflow-y-auto pr-2 sm:pr-4 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="relative space-y-6 sm:space-y-8 pl-12 sm:pl-16 md:pl-20">
            {sortedYears.map((year, yearIndex) => {
              const yearBreaches = breachesByYear[year];
              const isYearActive = activeYear === year;

              return (
                <div key={year} className="relative">
                  {/* Year Label and Marker - Aligned with Timeline */}
                  <div
                    ref={(el) => { yearRefs.current[year] = el; }}
                    className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 transition-all duration-300 ${isYearActive ? 'scale-105' : ''
                      }`}
                  >
                    <div className="relative z-10 w-16 sm:w-20 md:w-24">
                      <div className={`text-right text-xs sm:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${isYearActive ? 'text-[#167BFF] text-sm sm:text-base' : 'text-[#7D879C]'
                        }`}>
                        {year}
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-[#0B0F1A] transition-all duration-300 ${isYearActive
                          ? 'bg-[#167BFF] w-4 h-4 sm:w-5 sm:h-5 shadow-[0_0_10px_rgba(22,123,255,0.5)]'
                          : 'bg-[#167BFF] opacity-50'
                        }`}></div>
                    </div>
                  </div>

                  {/* Breaches for this year */}
                  <div className="ml-4 sm:ml-6 md:ml-8 space-y-3 sm:space-y-4">
                    {yearBreaches.map((breach: any, breachIndex: number) => {
                      const sortedTimeline = [...(breach.timeline || [])].sort(
                        (a: any, b: any) => Number(a.year) - Number(b.year)
                      );

                      // Make domain clickable
                      const domainUrl = breach.domain && breach.domain !== "Unknown domain"
                        ? (breach.domain.startsWith('http') ? breach.domain : `https://${breach.domain}`)
                        : null;

                      const breachId = `${breach.module}-${breach.schemaIndex || 0}-${breachIndex}`;
                      const isBreachActive = activeBreachId === breachId;

                      return (
                        <div
                          ref={(el) => { breachRefs.current[breachId] = el; }}
                          key={breachId}
                          className={`relative rounded-xl sm:rounded-2xl border p-3 sm:p-4 md:p-5 shadow-[0_35px_80px_rgba(4,7,16,0.55)] transition-all duration-300 ${isBreachActive
                              ? 'border-[#167BFF] bg-gradient-to-b from-[#0F1F3A] via-[#0A1528] to-[#050A14] shadow-[0_35px_80px_rgba(22,123,255,0.3)] scale-[1.02]'
                              : 'border-[#1E2535] bg-gradient-to-b from-[#101320] via-[#080B14] to-[#05060A]'
                            }`}
                        >
                          {/* Header with Image and Title */}
                          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                            {breach.image && (
                              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[#0B0F1A] border border-[#27304A] overflow-hidden flex-shrink-0">
                                <img
                                  src={breach.image}
                                  alt={breach.title}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight mb-1">
                                {breach.title}
                              </h3>
                              {domainUrl ? (
                                <Link
                                  href={domainUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#69B3FF] hover:text-[#167BFF] text-xs sm:text-sm underline break-all"
                                >
                                  {breach.domain}
                                </Link>
                              ) : (
                                <p className="text-[0.7rem] sm:text-[0.75rem] text-[#9CA3AF]">
                                  {breach.domain}
                                </p>
                              )}
                              {breach.breachDate && breach.breachDate !== "N/A" && (
                                <p className="text-[0.65rem] sm:text-[0.7rem] text-[#7D879C] mt-1">
                                  Breach Date: {breach.breachDate}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Fields that were breached (Tags) */}
                          {breach.tags && breach.tags.length > 0 && (
                            <div className="mt-3 sm:mt-4">
                              <p className="text-[0.65rem] sm:text-[0.7rem] text-gray-400 mb-2 font-medium">
                                Fields that were breached
                              </p>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {breach.tags.map((t: any, i: number) => (
                                  <span
                                    key={i}
                                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[0.65rem] sm:text-[0.7rem] rounded-full bg-[#162033] text-[#69B3FF] border border-[#1F3B63]"
                                  >
                                    {t.tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Timeline Details */}
                          {sortedTimeline.length > 0 && (
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#27304A]">
                              <div className="space-y-2">
                                {sortedTimeline.map((t: any, i: number) => (
                                  <div
                                    key={i}
                                    className="rounded-lg bg-[#0F1524] border border-[#27304A] p-2 sm:p-3 text-[0.65rem] sm:text-[0.7rem]"
                                  >
                                    {t.end && (
                                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-1">
                                        <span className="text-gray-400">End</span>
                                        <span className="text-gray-100 break-all">{formatDate(t.end)}</span>
                                      </div>
                                    )}
                                    {t.content && (
                                      <p className="mt-2 text-gray-300 leading-relaxed">
                                        {t.content}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents
interface UsernameFormProps {
  fullName: string;
  setFullName: (val: string) => void;
  usernamePhone: string;
  setUsernamePhone: (val: string) => void;
  usernameEmail: string;
  setUsernameEmail: (val: string) => void;
  keyword: string;
  setKeyword: (val: string) => void;
}

export function UsernameForm({
  fullName,
  setFullName,
  usernamePhone,
  setUsernamePhone,
  usernameEmail,
  setUsernameEmail,
  keyword,
  setKeyword
}: UsernameFormProps) {
  return (
    <div className="w-full  p-4">
      <div className="mb-3">
        <label className="block text-sm text-white mb-4">Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter name"
          className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">Username (optional)</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter username"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">Phone (optional)</label>
          <input
            type="text"
            value={usernamePhone}
            onChange={(e) => setUsernamePhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">Email (optional)</label>
          <input
            type="email"
            value={usernameEmail}
            onChange={(e) => setUsernameEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

interface formInput {
  formType: number;
  controller: string;
  setController: (val: string) => void;
}

export function CustomForm({ formType, controller, setController }: formInput) {
  return (
    <div className="w-full  p-4">
      <div>
        <label className="block text-sm text-white font-inter mb-4">{formType === 1 ? 'Phone Number' : 'Email'}</label>
        <div className="flex items-end justify-between gap-4 flex-wrap sm:flex-nowrap">
          <input
            value={controller}
            onChange={(e) => setController(e.target.value)}
            type="text"
            placeholder={formType === 1 ? "Enter Phone Number" : "Enter Email address"}
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
          />
        </div>
      </div>
    </div>
  );
}