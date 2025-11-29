'use client';
import { useMemo, useState } from "react";
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
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [usernamePhone, setUsernamePhone] = useState('');
  const [usernameEmail, setUsernameEmail] = useState('');
  const [keyword, setKeyword] = useState('');

  const fetchResult = async () => {
    try {
      // Username search (type = 0, mode = 1)
      if (type === 0 && mode === 1) {
        if (!fullName || fullName.trim() === "") return;

        setSearchLoading(true);

        const query = fullName.trim();

        const result = await fetchNameSearchResult({ query: query, OstIndAKey: "" });

        // REMOVE hibp MODULES (legacy breach module)
        const filtered = Array.isArray(result)
          ? result.filter((r: any) => r?.module?.toLowerCase() !== "hibp")
          : [];

        console.log("name search filtered result is ", filtered);

        if (filtered.length > 0) {
          setPhoneResult(filtered);
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

        // REMOVE hibp MODULES (legacy breach module)
        const filtered = Array.isArray(result)
          ? result.filter((r: any) => r?.module?.toLowerCase() !== "hibp")
          : [];

        console.log("phone search filtered result is ", filtered);

        if (filtered.length > 0) {
          setPhoneResult(filtered);
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

        // REMOVE hibp MODULES (legacy breach module)
        const filtered = Array.isArray(result)
          ? result.filter((r: any) => r?.module?.toLowerCase() !== "hibp")
          : [];

        console.log("email search filtered result iss ", filtered);

        if (filtered.length > 0) {
          setPhoneResult(filtered);
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

  const formatValue = (value: any, type: string | undefined) => {
    if (value === null || value === undefined || value === "") {
      return "Not available";
    }
    if (type === "bool") return value ? "Yes" : "No";
    if (type === "datetime") {
      try {
        return new Date(value).toLocaleDateString();
      } catch {
        return value.toString();
      }
    }
    if (Array.isArray(value)) {
      return value.length ? value.join(", ") : "Not available";
    }
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

  const tabsData = [
    {
      icon: Instagram,
      title: "Instagram",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Facebook,
      title: "Facebook",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: X,
      title: "X",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Phone,
      title: "Phone Number",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: false },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Banknote,
      title: "Bank Details",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Email ID",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
  ];

  return (
    <div id="how-it-works" className="">
      <div className="flex  flex-col lg:flex-row mt-20 justify-center items-center p-6 sm:p-12 lg:p-10 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')]   bg-repeat">
        {/* Left Column */}
        <div className="h-full flex flex-col gap-4 justify-start items-start text-center lg:text-left max-w-xl">
          {/* First Text */}
          <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-normal text-white">
            How it works
          </h1>

          {/* Second Text */}
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
            {/* First Div - Top Row */}
            <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-4 rounded-t-[12px] bg-[#09346B]">
              {/* First inner div */}
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

            {/* Second Div - Bottom Content */}
            <div className="flex flex-col gap-6 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
              {/* Placeholder for next row content */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">

                {/* First Div - Username */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 0 ? '#E8F2FF' : '#515151',
                  border: type === 0 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(0)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 0 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 0 ? 'medium' : 'normal'
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl">
                    Username
                  </span>
                </button>

                {/* Second Div - Phone Number */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 1 ? '#E8F2FF' : '#515151',
                  border: type === 1 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(1)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 1 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 1 ? 'medium' : 'normal'
                    }}
                    className="font-sans min-w-[150px] text-base sm:text-lg md:text-xl">
                    Phone Number
                  </span>
                </button>

                {/* Third Div - Email */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 2 ? '#E8F2FF' : '#515151',
                  border: type === 2 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(2)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 2 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 2 ? 'medium' : 'normal'
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl">
                    Email
                  </span>
                </button>
              </div>
              {type === 0 && <UsernameForm
                fullName={fullName}
                setFullName={setFullName}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                usernamePhone={usernamePhone}
                setUsernamePhone={setUsernamePhone}
                usernameEmail={usernameEmail}
                setUsernameEmail={setUsernameEmail}
                keyword={keyword}
                setKeyword={setKeyword}
              />}
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

            </div>
          </div>

          <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
            Search by username, phone number, or email to confidentially look up information.
          </p>
        </div>
      </div>

      {/* Search Results Display */}
      {phoneResult && phoneResult.length > 0 && (() => {
        // Breach results: module === "HaveIBeenPwnd!"
        const breachResults = phoneResult.filter((item: any) =>
        item.module?.toLowerCase().includes("haveibeenpwn")
        );

        // Flatten all OSINT-style results (exclude breach modules)
        const allResults: any[] = [];
        phoneResult.forEach((item: any, index: number) => {
          // skip breach items from normal OSINT result cards
          if (item.module && typeof item.module === "string" &&
            item.module.toLowerCase() === "haveibeenpwnd!") {
            return;
          }

          if (item.status !== 'found') return;

          const platformName = item.module || 'Unknown';
          const categoryName = item.category?.name || 'Unknown Category';
          const specFormatArray = item.spec_format || [];

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
        });

        // Get unique categories
        const uniqueCategories = Array.from(new Set(allResults.map((r) => r.categoryName))).sort();

        // Helper function to get field value from result
        const getFieldValueFromResult = (resultSpecData: any, fieldKey: string): string | null => {
          // Check direct fields
          const directField = resultSpecData[fieldKey];
          if (directField && directField.value !== undefined && directField.value !== null && directField.value !== "") {
            return String(directField.value).toLowerCase().trim();
          }
          // Check platform_variables
          if (Array.isArray(resultSpecData.platform_variables)) {
            const platformField = resultSpecData.platform_variables.find((pv: any) => pv.key === fieldKey);
            if (platformField && platformField.value !== undefined && platformField.value !== null && platformField.value !== "") {
              return String(platformField.value).toLowerCase().trim();
            }
          }
          return null;
        };

        // Filter results based on category, internal search query, and optional filter fields
        const filteredResults = allResults.filter((result) => {
          // Filter by category
          if (selectedCategory !== "all" && result.categoryName !== selectedCategory) {
            return false;
          }

          // Filter by optional fields (client-side filtering)
          const { specData } = result;

          // Filter by City
          if (city && city.trim()) {
            const resultCity = getFieldValueFromResult(specData, "city") ||
              getFieldValueFromResult(specData, "location") ||
              "";
            if (!resultCity.includes(city.toLowerCase().trim())) {
              return false;
            }
          }

          // Filter by State
          if (state && state.trim()) {
            const resultState = getFieldValueFromResult(specData, "state") ||
              getFieldValueFromResult(specData, "location") ||
              "";
            if (!resultState.includes(state.toLowerCase().trim())) {
              return false;
            }
          }

          // Filter by Phone Number
          if (usernamePhone && usernamePhone.trim()) {
            const resultPhone = getFieldValueFromResult(specData, "phone") ||
              getFieldValueFromResult(specData, "phone_hint") ||
              "";
            if (!resultPhone.includes(usernamePhone.toLowerCase().trim())) {
              return false;
            }
          }

          // Filter by Email
          if (usernameEmail && usernameEmail.trim()) {
            const resultEmail = getFieldValueFromResult(specData, "email") ||
              getFieldValueFromResult(specData, "email_hint") ||
              "";
            if (!resultEmail.includes(usernameEmail.toLowerCase().trim())) {
              return false;
            }
          }

          // Filter by Keyword (searches in all fields)
          if (keyword && keyword.trim()) {
            const keywordLower = keyword.toLowerCase().trim();
            let found = false;

            // Check all possible fields
            const fieldsToCheck = ["name", "username", "email", "phone", "location", "city", "state", "bio", "first_name", "last_name"];
            for (const fieldKey of fieldsToCheck) {
              const fieldValue = getFieldValueFromResult(specData, fieldKey);
              if (fieldValue && fieldValue.includes(keywordLower)) {
                found = true;
                break;
              }
            }

            // Also check platform_variables
            if (!found && Array.isArray(specData.platform_variables)) {
              for (const pv of specData.platform_variables) {
                if (pv.value && String(pv.value).toLowerCase().includes(keywordLower)) {
                  found = true;
                  break;
                }
              }
            }

            if (!found) {
              return false;
            }
          }

          // Filter by internal search query
          if (!internalSearchQuery.trim()) return true;

          const query = internalSearchQuery.toLowerCase();
          const { platformName, categoryName } = result;

          // Search in platform name and category
          if (platformName?.toLowerCase().includes(query)) return true;
          if (categoryName?.toLowerCase().includes(query)) return true;

          // Search in spec_format fields
          const checkValue = (val: any): boolean => {
            if (typeof val === 'string') return val.toLowerCase().includes(query);
            if (typeof val === 'number') return val.toString().includes(query);
            return false;
          };

          // Check direct fields
          if (specData.name && checkValue(specData.name.value)) return true;
          if (specData.username && checkValue(specData.username.value)) return true;
          if (specData.email && checkValue(specData.email.value)) return true;
          if (specData.phone && checkValue(specData.phone.value)) return true;
          if (specData.location && checkValue(specData.location.value)) return true;

          // Check platform_variables
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

        return (
          <>
            <div className="container mx-auto px-4 py-8">
              {/* Internal Result Tabs: OSINT vs Breach */}
              <div className="mb-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setBreachTab("normal")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    breachTab === "normal"
                      ? "bg-[#167BFF] text-white border border-[#167BFF]"
                      : "bg-[#1A1F2E] text-gray-300 border border-[#3C414A] hover:bg-[#222839]"
                  }`}
                >
                  OSINT Results ({filteredTotal})
                </button>
                <button
                  type="button"
                  onClick={() => setBreachTab("breach")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    breachTab === "breach"
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
                  <div className="mb-6 flex flex-col gap-4">
                    <div className="font-sans font-bold text-white text-center md:text-left p-2 sm:p-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
                      Search Results ({filteredTotal} result{filteredTotal !== 1 ? 's' : ''} found)
                    </div>

                    {/* Category Filter and Search Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      {/* Category Dropdown */}
                      <div className="w-full sm:w-auto">
                        <label className="block text-sm text-white mb-2 font-semibold">Filter by Category</label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setCurrentPage(1);
                          }}
                          className="w-full sm:w-64 rounded-lg border border-[#4c4c4c] bg-[#0B0F1A] px-4 py-2.5 text-sm md:text-base text-white focus:border-[#167BFF] focus:outline-none focus:ring-1 focus:ring-[#167BFF] cursor-pointer"
                        >
                          <option value="all">All Categories ({allResults.length})</option>
                          {uniqueCategories.map((category) => {
                            const count = allResults.filter((r) => r.categoryName === category).length;
                            return (
                              <option key={category} value={category}>
                                {category} ({count})
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* Search Filter */}
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
                    {/* Results Grid */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        {currentResults.map((result, resultIndex) => {
                          const { platformName, categoryName, specData, specFormatArray, specIndex, reliableSource, query, status } = result;

                          // Extract all fields from spec_format
                          const getFieldValue = (fieldKey: string) => {
                            const directField = specData[fieldKey];
                            if (directField && directField.value !== undefined && directField.value !== null && directField.value !== "") {
                              return { value: directField.value, type: directField.type };
                            }
                            if (Array.isArray(specData.platform_variables)) {
                              const platformField = specData.platform_variables.find((pv: any) => pv.key === fieldKey);
                              if (platformField && platformField.value !== undefined && platformField.value !== null && platformField.value !== "") {
                                return { value: platformField.value, type: platformField.type };
                              }
                            }
                            return { value: null, type: undefined };
                          };

                          // Get all fields with data from desiredFields
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
                              // Only show fields that have actual data
                              const value = field.value;
                              if (value === null || value === undefined || value === "") return false;
                              if (typeof value === "string" && value.trim() === "") return false;
                              if (Array.isArray(value) && value.length === 0) return false;
                              return true;
                            });

                          // Get additional fields from platform_variables that have data
                          const additionalFields: any[] = [];
                          if (Array.isArray(specData.platform_variables)) {
                            specData.platform_variables.forEach((pv: any) => {
                              // Skip if already in desiredFields
                              if (desiredFields.some((df) => df.key === pv.key)) return;

                              // Only add if has value
                              if (pv.value !== undefined && pv.value !== null && pv.value !== "") {
                                if (typeof pv.value === "string" && pv.value.trim() === "") return;
                                if (Array.isArray(pv.value) && pv.value.length === 0) return;

                                additionalFields.push({
                                  key: pv.key,
                                  label: pv.key.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
                                  value: pv.value,
                                  type: pv.type,
                                });
                              }
                            });
                          }

                          // Combine displayFields with additionalFields
                          const allDisplayFields = [...displayFields, ...additionalFields];

                          const profileField = getFieldValue("profile_url");
                          const pictureField = getFieldValue("picture_url");
                          const idField = getFieldValue("id");
                          const profileUrl = typeof profileField.value === "string" ? profileField.value : "";
                          const pictureSource =
                            typeof pictureField.value === "string" && pictureField.value
                              ? pictureField.value
                              : null;
                          const profileImageSource =
                            typeof profileField.value === "string" && isImageUrl(profileField.value)
                              ? profileField.value
                              : null;

                          const cardImage = pictureSource || profileImageSource;
                          const statusBadge = getStatusBadge(status);
                          const specName = specData?.name?.value;
                          const specTitle = specData?.title?.value;
                          const cardTitle = specName || specTitle || platformName;
                          const recordId =
                            idField.value !== null &&
                            idField.value !== undefined &&
                            idField.value !== ""
                              ? idField.value
                              : null;

                          const formattedFields: ResultField[] = allDisplayFields.map((field) => ({
                            key: field.key,
                            label: field.label,
                            formattedValue:
                              field.key === "profile_url"
                                ? profileUrl
                                  ? prettifyUrl(profileUrl)
                                  : "Not available"
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

                              {/* Display selected fields - only show fields with data */}
                              {formattedFields.length > 0 && (
                                <div className="mt-4 space-y-2.5">
                                  {previewFields.map((field) => {
                                    if (field.key === "profile_url") {
                                      const truncatedDisplay =
                                        field.formattedValue.length > 40
                                          ? `${field.formattedValue.substring(0, 40)}...`
                                          : field.formattedValue;
                                      return (
                                        <div key={field.key} className="flex items-center justify-between gap-2.5 rounded-xl border border-[#1A2134] bg-[#10172A] p-3 text-xs">
                                          <div className="flex flex-col flex-1 min-w-0">
                                            <span className="text-gray-400 font-medium">{field.label}</span>
                                            <span
                                              className="text-[0.7rem] text-[#7D879C] leading-relaxed truncate"
                                              title={profileUrl || undefined}
                                            >
                                              {truncatedDisplay}
                                            </span>
                                          </div>
                                          {profileUrl ? (
                                            <Link
                                              href={profileUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="rounded-full border border-[#167BFF] px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#0C448C]"
                                            >
                                              Visit
                                            </Link>
                                          ) : (
                                            <span className="text-xs text-gray-500">N/A</span>
                                          )}
                                        </div>
                                      );
                                    }

                                    return (
                                      <div key={field.key} className="rounded-xl border border-[#141B2C] bg-[#0C1323] p-3 text-xs">
                                        <span className="text-gray-400 font-medium">{field.label}</span>
                                        <p className="mt-1 text-[0.8rem] text-gray-200 leading-relaxed">
                                          {field.formattedValue}
                                        </p>
                                      </div>
                                    );
                                  })}
                                  {hasMoreFields && (
                                    <button
                                      type="button"
                                      className="w-full rounded-2xl border border-[#167BFF33] px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#167BFF] hover:bg-[#0C448C]"
                                      onClick={() =>
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
                                        })
                                      }
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

                      {/* Pagination Controls */}
                      {filteredTotalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#3C414A]">
                          <div className="text-sm text-gray-400">
                            Showing {filteredStartIndex + 1} to {Math.min(filteredEndIndex, filteredTotal)} of {filteredTotal} results
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Previous Button */}
                            <button
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === 1
                                  ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed'
                                  : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'
                                }`}
                            >
                              Previous
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-1">
                              {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map((page) => {
                                // Show first page, last page, current page, and pages around current
                                if (
                                  page === 1 ||
                                  page === filteredTotalPages ||
                                  (page >= currentPage - 1 && page <= currentPage + 1)
                                ) {
                                  return (
                                    <button
                                      key={page}
                                      onClick={() => setCurrentPage(page)}
                                      className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === page
                                          ? 'bg-[#167BFF] text-white border border-[#167BFF]'
                                          : 'bg-[#3C414A] text-gray-300 hover:bg-[#515151] border border-[#3C414A]'
                                        }`}
                                    >
                                      {page}
                                    </button>
                                  );
                                } else if (
                                  page === currentPage - 2 ||
                                  page === currentPage + 2
                                ) {
                                  return (
                                    <span key={page} className="text-gray-500 px-2">
                                      ...
                                    </span>
                                  );
                                }
                                return null;
                              })}
                            </div>

                            {/* Next Button */}
                            <button
                              onClick={() => setCurrentPage(prev => Math.min(filteredTotalPages, prev + 1))}
                              disabled={currentPage === filteredTotalPages}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === filteredTotalPages
                                  ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed'
                                  : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'
                                }`}
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


              <div className="flex flex-col lg:flex-row gap-6">
                {/* Results Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {currentResults.map((result, resultIndex) => {
                      const {
                        platformName,
                        categoryName,
                        specData,
                        specFormatArray,
                        specIndex,
                        reliableSource,
                        query,
                        status,
                        frontSchemas,
                        rawData,
                      } = result;

                      // Extract all fields from spec_format
                      const getFieldValue = (fieldKey: string) => {
                        const directField = specData[fieldKey];
                        if (directField && directField.value !== undefined && directField.value !== null && directField.value !== "") {
                          return { value: directField.value, type: directField.type };
                        }
                        if (Array.isArray(specData.platform_variables)) {
                          const platformField = specData.platform_variables.find((pv: any) => pv.key === fieldKey);
                          if (platformField && platformField.value !== undefined && platformField.value !== null && platformField.value !== "") {
                            return { value: platformField.value, type: platformField.type };
                          }
                        }
                        return { value: null, type: undefined };
                      };

                      // Get all fields with data from desiredFields
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
                          // Only show fields that have actual data
                          const value = field.value;
                          if (value === null || value === undefined || value === "") return false;
                          if (typeof value === "string" && value.trim() === "") return false;
                          if (Array.isArray(value) && value.length === 0) return false;
                          return true;
                        });

                      // Get additional fields from platform_variables that have data
                      const additionalFields: any[] = [];
                      if (Array.isArray(specData.platform_variables)) {
                        specData.platform_variables.forEach((pv: any) => {
                          // Skip if already in desiredFields
                          if (desiredFields.some((df) => df.key === pv.key)) return;

                          // Only add if has value
                          if (pv.value !== undefined && pv.value !== null && pv.value !== "") {
                            if (typeof pv.value === "string" && pv.value.trim() === "") return;
                            if (Array.isArray(pv.value) && pv.value.length === 0) return;

                            additionalFields.push({
                              key: pv.key,
                              label: pv.key.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
                              value: pv.value,
                              type: pv.type,
                            });
                          }
                        });
                      }

                      // Combine displayFields with additionalFields
                      const allDisplayFields = [...displayFields, ...additionalFields];

                      const profileField = getFieldValue("profile_url");
                      const pictureField = getFieldValue("picture_url");
                      const idField = getFieldValue("id");
                      const profileUrl = typeof profileField.value === "string" ? profileField.value : "";
                      const pictureSource =
                        typeof pictureField.value === "string" && pictureField.value
                          ? pictureField.value
                          : null;
                      const profileImageSource =
                        typeof profileField.value === "string" && isImageUrl(profileField.value)
                          ? profileField.value
                          : null;

                      const cardImage = pictureSource || profileImageSource;
                      const statusBadge = getStatusBadge(status);
                      const specName = specData?.name?.value;
                      const specTitle = specData?.title?.value;
                      const cardTitle = specName || specTitle || platformName;
                      const recordId =
                        idField.value !== null &&
                        idField.value !== undefined &&
                        idField.value !== ""
                          ? idField.value
                          : null;

                      const formattedFields: ResultField[] = allDisplayFields.map((field) => ({
                        key: field.key,
                        label: field.label,
                        formattedValue:
                          field.key === "profile_url"
                            ? profileUrl
                              ? prettifyUrl(profileUrl)
                              : "Not available"
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

                          {/* Display selected fields - only show fields with data */}
                          {formattedFields.length > 0 && (
                            <div className="mt-4 space-y-2.5">
                              {previewFields.map((field) => {
                                if (field.key === "profile_url") {
                                  const truncatedDisplay =
                                    field.formattedValue.length > 40
                                      ? `${field.formattedValue.substring(0, 40)}...`
                                      : field.formattedValue;
                                  return (
                                    <div key={field.key} className="flex items-center justify-between gap-2.5 rounded-xl border border-[#1A2134] bg-[#10172A] p-3 text-xs">
                                      <div className="flex flex-col flex-1 min-w-0">
                                        <span className="text-gray-400 font-medium">{field.label}</span>
                                        <span
                                          className="text-[0.7rem] text-[#7D879C] leading-relaxed truncate"
                                          title={profileUrl || undefined}
                                        >
                                          {truncatedDisplay}
                                        </span>
                                      </div>
                                      {profileUrl ? (
                                        <Link
                                          href={profileUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="rounded-full border border-[#167BFF] px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#0C448C]"
                                        >
                                          Visit
                                        </Link>
                                      ) : (
                                        <span className="text-xs text-gray-500">N/A</span>
                                      )}
                                    </div>
                                  );
                                }

                                return (
                                  <div key={field.key} className="rounded-xl border border-[#141B2C] bg-[#0C1323] p-3 text-xs">
                                    <span className="text-gray-400 font-medium">{field.label}</span>
                                    <p className="mt-1 text-[0.8rem] text-gray-200 leading-relaxed">
                                      {field.formattedValue}
                                    </p>
                                  </div>
                                );
                              })}
                              {hasMoreFields && (
                                <button
                                  type="button"
                                  className="w-full rounded-2xl border border-[#167BFF33] px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#167BFF] hover:bg-[#0C448C]"
                                  onClick={() => {
                                    const isHibp =
                                      typeof platformName === "string" &&
                                      platformName.toLowerCase() === "hibp";

                                    if (isHibp) {
                                      const hibpSchema =
                                        Array.isArray(frontSchemas) &&
                                        frontSchemas.length > 0
                                          ? frontSchemas[specIndex] ||
                                            frontSchemas[0]
                                          : null;

                                      const hibpBody = hibpSchema?.body || {};
                                      const hibpTags = hibpSchema?.tags || [];
                                      const hibpTimeline =
                                        hibpSchema?.timeline || null;
                                      const hibpRecords = rawData?.data || [];

                                      setHibpDetailsData({
                                        title:
                                          hibpBody?.Title ||
                                          cardTitle ||
                                          "HIBP Breach",
                                        category: categoryName,
                                        platform: platformName,
                                        statusBadge,
                                        recordId,
                                        query: query || null,
                                        fields: formattedFields,
                                        cardImage,
                                        frontBody: hibpBody,
                                        tags: hibpTags,
                                        timeline: hibpTimeline,
                                        records: hibpRecords,
                                      });
                                      return;
                                    }

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

                  {/* Pagination Controls */}
                  {filteredTotalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#3C414A]">
                      <div className="text-sm text-gray-400">
                        Showing {filteredStartIndex + 1} to {Math.min(filteredEndIndex, filteredTotal)} of {filteredTotal} results
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Previous Button */}
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                          disabled={currentPage === 1}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === 1
                              ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed'
                              : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'
                            }`}
                        >
                          Previous
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1">
                          {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map((page) => {
                            // Show first page, last page, current page, and pages around current
                            if (
                              page === 1 ||
                              page === filteredTotalPages ||
                              (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                              return (
                                <button
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                  className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === page
                                      ? 'bg-[#167BFF] text-white border border-[#167BFF]'
                                      : 'bg-[#3C414A] text-gray-300 hover:bg-[#515151] border border-[#3C414A]'
                                    }`}
                                >
                                  {page}
                                </button>
                              );
                            } else if (
                              page === currentPage - 2 ||
                              page === currentPage + 2
                            ) {
                              return (
                                <span key={page} className="text-gray-500 px-2">
                                  ...
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>

                        {/* Next Button */}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(filteredTotalPages, prev + 1))}
                          disabled={currentPage === filteredTotalPages}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage === filteredTotalPages
                              ? 'bg-[#3C414A] text-gray-500 cursor-not-allowed'
                              : 'bg-[#09346B] text-white hover:bg-[#0C448C] border border-[#167BFF]'
                            }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Image Popup Modal */}
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
                    style={{
                      imageRendering: 'auto',
                      filter: 'none',
                      objectFit: 'contain'
                    }}
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
          </>
        );
      })()}
    </div>
  );
}

/**
 * Breach tab view – shows all "HaveIBeenPwnd!" modules with timeline, tags, domain, counts etc.
 */
function BreachResultsView({ results }: { results: any[] }) {
  if (!results || results.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-400">
        No breach records found for this query.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-6 font-sans font-bold text-white text-center md:text-left p-2 sm:p-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
        Breach Results ({results.length} breach{results.length !== 1 ? "es" : ""} found)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {results.map((item: any, index: number) => {
          const body = item.body || {};
          const tags = Array.isArray(item.tags) ? item.tags : [];
          const hibpTimeline = item.timeline?.group_items?.hibp || [];

          const sortedTimeline = [...hibpTimeline].sort(
            (a, b) => Number(b.year) - Number(a.year)
          );

          const title = body.Title || item.module || "Breach";
          const domain = body.Domain || "Unknown domain";
          const breachDate = body["Breach Date"] || "N/A";
          const addedDate = body["Added Date"] || "N/A";
          const modifiedDate = body["Modified Date"] || "N/A";
          const pwnCount = body["Pwn Count"] ?? "N/A";

          return (
            <div
              key={index}
              className="relative flex h-full flex-col rounded-2xl border border-[#1E2535] bg-gradient-to-b from-[#101320] via-[#080B14] to-[#05060A] p-5 shadow-[0_35px_80px_rgba(4,7,16,0.55)]"
            >
              {/* Image + title */}
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-xl bg-[#0B0F1A] border border-[#27304A] overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-[0.6rem] text-[#7A8299] px-2 text-center">
                      No Image
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#7D879C]">
                    Breach Source
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                    {title}
                  </h3>
                  <p className="text-[0.75rem] text-[#9CA3AF] mt-1 truncate">
                    {domain}
                  </p>
                </div>
              </div>

              {/* Pwn Count + dates */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-gray-200">
                <div className="flex items-center justify-between rounded-xl border border-[#141B2C] bg-[#0C1323] px-3 py-2">
                  <span className="text-gray-400 font-medium">Pwn Count</span>
                  <span className="font-semibold text-[#F97373]">
                    {pwnCount}
                  </span>
                </div>
                <div className="rounded-xl border border-[#141B2C] bg-[#0C1323] px-3 py-2 space-y-1">
                  <div className="flex justify-between text-[0.7rem]">
                    <span className="text-gray-400">Breach Date</span>
                    <span className="text-gray-100">{breachDate}</span>
                  </div>
                  <div className="flex justify-between text-[0.7rem]">
                    <span className="text-gray-400">Added Date</span>
                    <span className="text-gray-100">{addedDate}</span>
                  </div>
                  <div className="flex justify-between text-[0.7rem]">
                    <span className="text-gray-400">Modified Date</span>
                    <span className="text-gray-100">{modifiedDate}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-4">
                  <p className="text-[0.7rem] text-gray-400 mb-2 font-medium">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t: any, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[0.7rem] rounded-full bg-[#162033] text-[#69B3FF] border border-[#1F3B63]"
                      >
                        {t.tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              {sortedTimeline.length > 0 && (
                <div className="mt-5">
                  <p className="text-[0.7rem] text-gray-400 mb-2 font-medium">Timeline</p>
                  <div className="space-y-2">
                    {sortedTimeline.map((t: any, i: number) => (
                      <div
                        key={i}
                        className="rounded-lg bg-[#0F1524] border border-[#27304A] p-3 text-[0.7rem] text-gray-200"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold">Year</span>
                          <span>{t.year}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-400">Start</span>
                          <span>{t.start || "N/A"}</span>
                        </div>
                        {t.end && (
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-400">End</span>
                            <span>{t.end}</span>
                          </div>
                        )}
                        {t.content && (
                          <p className="mt-1 text-gray-300 leading-relaxed">
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
}

// components/SearchForm.tsx

interface UsernameFormProps {
  fullName: string;
  setFullName: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  state: string;
  setState: (val: string) => void;
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
  city,
  setCity,
  state,
  setState,
  usernamePhone,
  setUsernamePhone,
  usernameEmail,
  setUsernameEmail,
  keyword,
  setKeyword
}: UsernameFormProps) {
  return (
    <div className="w-full  p-4">
      {/* Full Name */}
      <div className="mb-3">
        <label className="block text-sm text-white mb-4">Full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter full name"
          className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* City, State */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
        {/* City */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">City (optional)</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* State */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">State (optional)</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Phone Number, Email */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
        {/* Phone Number */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">Phone Number (optional)</label>
          <input
            type="text"
            value={usernamePhone}
            onChange={(e) => setUsernamePhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
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

      {/* Keyword */}
      <div className="mt-4">
        <label className="block text-sm text-white mb-2 sm:mb-4">Keyword (optional)</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
          className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
      {/* Full Name */}
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
