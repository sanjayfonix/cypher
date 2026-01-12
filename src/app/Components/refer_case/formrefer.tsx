"use client";
import { Toparrow } from "@/assets/icon";
import React, { useState, useMemo } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Combobox, Transition } from '@headlessui/react';
import { ChevronDown, Check, Search } from 'lucide-react';
import { typeOfCaseArray, typesOfAssignmentsArray } from '../../../../global_cyphr_config';

// --- Types ---
interface FormData {
  caseTypes: string[];
  referrer: {
    firstName: string;
    lastName: string;
    companyName: string;
    city: string;
    state: string;
    phone: string;
    email: string;
  };
  claimant: {
    claimFile: string;
    typeOfAssignment: string;
    subject: string;
    address: string;
    ssn: string;
    dob: string;
    dol: string;
    allegedInjury: string;
    phone: string;
    email: string;
    employer: string;
    tpa: string;
    representedBy: string;
    hobbies: string;
    maritalStatus: string;
    gender: string;
    specialCharacteristics: string;
  };
  files: File[];
  notes: string;
}

interface StepProps {
  formData: FormData;
  updateFormData: (section: keyof FormData, field: string, value: any) => void;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

// --- Constants & Data ---
const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const MAJOR_US_CITIES = [
  "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
  "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
  "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Long Beach", "Omaha",
  "Raleigh", "Colorado Springs", "Miami", "Virginia Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "New Orleans", "Wichita"
];

// --- Reusable Components ---
const SearchableSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error = false,
  errorMessage = ""
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { Name: string; Description?: string }[] | string[];
  placeholder: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}) => {
  const [query, setQuery] = useState('');
  const [hoveredDescription, setHoveredDescription] = useState<{ text: string, index: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const normalizedOptions = useMemo(() => {
    return options.map(opt => typeof opt === 'string' ? { Name: opt } : opt);
  }, [options]);

  const filteredOptions = query === ''
    ? normalizedOptions
    : normalizedOptions.filter((option) =>
      option.Name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="flex flex-col gap-2 w-full" ref={containerRef}>
      <label className="text-white font-inter font-medium text-base">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <div className="relative group/select">
        <Combobox value={value} onChange={(val: string | null) => onChange(val || '')}>
          <div className={`relative w-full  cursor-default overflow-hidden rounded-lg bg-[#1E1E1E] text-left border-[0.5px] ${error ? 'border-red-500' : 'border-[#3C414A]'} focus-within:ring-2 focus-within:ring-blue-500 transition-all`}>
            <Combobox.Input
              className="w-full border-none py-3 pl-[11px] pr-10 text-white bg-[#1E1E1E] focus:outline-none focus:ring-0"
              placeholder={placeholder}
              displayValue={(val: string) => val}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <div className="relative">
              <Combobox.Options className="absolute mt-1 max-h-64 w-full overflow-y-auto  bg-[#1E1E1E] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 border-2 border-[#3C414A] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {filteredOptions.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-400">
                    Nothing found.
                  </div>
                ) : (
                  filteredOptions.map((option, index) => (
                    <Combobox.Option
                      key={option.Name}
                      onMouseEnter={() => setHoveredDescription(option.Description ? { text: option.Description, index } : null)}
                      onMouseLeave={() => setHoveredDescription(null)}
                      onMouseMove={handleMouseMove}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-300'
                        }`
                      }
                      value={option.Name}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center">
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {option.Name}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </div>
          </Transition>
        </Combobox>

        {hoveredDescription && (
          <div
            className="absolute pointer-events-none z-[100] w-64 sm:w-80 p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl text-xs text-gray-300 left-1/2 transform -translate-x-1/2 -translate-y-full -mt-10"
            style={{
              top: `${tooltipPos.y}px`,
            }}
          >
            <p className="leading-relaxed">{hoveredDescription.text}</p>
            <div className="absolute left-1/2 -translate-x-1/2 border-8 border-transparent top-full border-t-gray-900" />
          </div>
        )}
      </div>
      {error && errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

// --- Step Components ---
const CaseTypeStep = ({ formData, updateFormData }: Omit<StepProps, 'errors' | 'setErrors'>) => {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  const handleCheckboxChange = (item: string) => {
    const currentTypes = formData.caseTypes;
    const newTypes = currentTypes.includes(item)
      ? currentTypes.filter((t) => t !== item)
      : [...currentTypes, item];
    updateFormData("caseTypes", "", newTypes);
  };

  return (
    <div className="p-8">
      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-10">
        Select case types:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {typeOfCaseArray.map((caseItem, index) => (
          <label
            key={index}
            onMouseEnter={() => setHoveredCase(caseItem.Name)}
            onMouseLeave={() => setHoveredCase(null)}
            className={`relative flex items-center gap-3 border-[0.5px] rounded-lg px-3 py-2 w-full cursor-pointer transition ${formData.caseTypes.includes(caseItem.Name)
              ? "bg-blue-500/20 border-blue-500"
              : "bg-[#FFFFFF1A] border-[#3C414A] hover:border-blue-500"
              }`}
          >
            <input
              type="checkbox"
              checked={formData.caseTypes.includes(caseItem.Name)}
              onChange={() => handleCheckboxChange(caseItem.Name)}
              className="appearance-none h-3 w-3 border border-[#FFFFFFCC] rounded-xs checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer"
            />
            <span className="text-[#FFFFFFCC] text-sm font-normal font-inter">
              {caseItem.Name}
            </span>

            {/* Tooltip */}
            {hoveredCase === caseItem.Name && (
              <div className={`absolute ${index < 8 ? 'top-full mt-2' : 'bottom-full mb-2'} w-full sm:w-80 p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 text-xs text-gray-300 pointer-events-none transition-opacity duration-200 ${index % 2 === 0 ? "left-0" : "sm:right-0 sm:left-auto left-0"
                }`}>
                <p className="leading-relaxed">{caseItem.Description}</p>
                <div className={`absolute ${index < 8 ? 'bottom-full border-b-gray-900' : 'top-full border-t-gray-900'} border-8 border-transparent ${index % 2 === 0 ? "left-4" : "sm:right-4 sm:left-auto left-4"
                  }`} />
              </div>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

const ReferrerInformationStep = ({ formData, updateFormData, errors, setErrors }: StepProps) => {
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone || phone.trim() === '' || phone.trim() === '+') return true;
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length === 0 || digitsOnly.length >= 10;
  };

  const handleInputChange = (field: string, value: string) => {
    updateFormData("referrer", field, value);

    let error = "";
    if (field === "firstName" || field === "lastName") {
      if (!value.trim()) error = `${field === "firstName" ? "First" : "Last"} name is required`;
      else if (value.trim().length < 2) error = "Minimum 2 characters";
      else if (!/^[A-Za-z\s]*$/.test(value)) error = "Alphabets only allowed";
    } else if (field === "companyName") {
      if (!value.trim()) error = "Company name is required";
      else if (value.trim().length < 2) error = "Minimum 2 characters";
    } else if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!validateEmail(value)) error = "Invalid email format";
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) newErrors[field] = error;
      else delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <div className="p-8">
      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-6">
        Referrer Information:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First & Last Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-white font-inter font-medium text-base">
            First Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.referrer.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="John"
            className={`py-3 px-[11px] bg-[#1E1E1E] rounded-lg border-[0.5px] ${errors.firstName ? 'border-red-500' : 'border-[#3C414A]'} text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-white font-inter font-medium text-base">
            Last Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.referrer.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Doe"
            className={`py-3 px-[11px] bg-[#1E1E1E] rounded-lg border-[0.5px] ${errors.lastName ? 'border-red-500' : 'border-[#3C414A]'} text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
        </div>

        {/* Company Name */}
        <div className="flex flex-col md:col-span-2 gap-2">
          <label htmlFor="companyName" className="text-white font-inter font-medium text-base">
            Company Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            value={formData.referrer.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            placeholder="Company LLC"
            className={`py-3 px-[11px] bg-[#1E1E1E] rounded-lg border-[0.5px] ${errors.companyName ? 'border-red-500' : 'border-[#3C414A]'} text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.companyName && <p className="text-xs text-red-500">{errors.companyName}</p>}
        </div>

        {/* City & State (Same Row) */}
        <div className="flex flex-col md:flex-row gap-4 md:col-span-2">
          <SearchableSelect
            label="City"
            value={formData.referrer.city}
            onChange={(val) => updateFormData("referrer", "city", val)}
            options={MAJOR_US_CITIES}
            placeholder="Search city..."
          />
          <SearchableSelect
            label="State"
            value={formData.referrer.state}
            onChange={(val) => updateFormData("referrer", "state", val)}
            options={US_STATES}
            placeholder="Search state..."
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col md:col-span-2 gap-2">
          <label className="text-white text-base font-inter font-medium">
            Phone Number
          </label>
          <div className={`phone-input-container w-full bg-[#1E1E1E] border-[0.5px] ${errors.phone ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg transition-all`}>
            <PhoneInput
              defaultCountry="us"
              value={formData.referrer.phone}
              onChange={(phone, meta) => {
                updateFormData("referrer", "phone", phone);

                // Real-time phone validation using country metadata
                let error = "";
                const digitsOnly = phone.replace(/\D/g, '');
                const dialCode = meta.country.dialCode;

                // If digits length is greater than dial code, it means user started typing local digits
                if (digitsOnly.length > dialCode.length && digitsOnly.length < 10) {
                  error = "Phone number must be at least 10 digits";
                }

                setErrors(prev => {
                  const newErrors = { ...prev };
                  if (error) {
                    newErrors.phone = error;
                  } else {
                    delete newErrors.phone;
                  }
                  return newErrors;
                });
              }}
              className="phone-input-selector"
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          <p className="font-normal font-inter text-xs text-[#A0A4AE]">Valid phone number with country code</p>
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2 gap-2">
          <label htmlFor="email" className="text-white text-base font-inter font-medium">
            Email <span className="text-blue-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.referrer.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john123@example.com"
            className={`py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.email ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          <p className="font-normal font-inter text-xs text-[#A0A4AE]">Must be a valid email address</p>
        </div>
      </div>
    </div>
  );
};

const ClaimantInformationStep = ({ formData, updateFormData, errors, setErrors }: StepProps) => {
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleTextareaChange = (value: string) => {
    const words = getWordCount(value);
    if (words <= 500) {
      updateFormData("claimant", "specialCharacteristics", value);
    }
  };

  const validateDate = (date: string) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return regex.test(date);
  };

  const handleInputChange = (field: string, value: string) => {
    updateFormData("claimant", field, value);

    let error = "";
    if (["claimFile", "typeOfAssignment", "subject"].includes(field)) {
      if (!value.trim()) error = "This field is required";
      else if (value.trim().length < 2) error = "Minimum 2 characters";
    } else if (field === "dol") {
      if (!value.trim()) error = "DOL is required";
      else if (!validateDate(value)) error = "Invalid format (MM/DD/YYYY)";
    } else if (field === "dob" && value.trim() !== "") {
      if (!validateDate(value)) error = "Invalid format (MM/DD/YYYY)";
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) newErrors[field] = error;
      else delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <div className="p-8">
      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-6">
        Claimant Information:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {/* Row 1 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="claimFile" className="text-white text-base font-inter font-medium">Claim <span className="text-blue-500">*</span></label>
          <input
            type="text"
            id="claimFile"
            value={formData.claimant.claimFile}
            onChange={(e) => handleInputChange("claimFile", e.target.value)}
            placeholder="Enter here"
            className={`py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.claimFile ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.claimFile && <p className="text-xs text-red-500">{errors.claimFile}</p>}
        </div>
        <SearchableSelect
          label="Type of assignment"
          value={formData.claimant.typeOfAssignment}
          onChange={(val) => handleInputChange("typeOfAssignment", val)}
          options={typesOfAssignmentsArray}
          placeholder="Search or select type of assignment..."
          required={true}
          error={!!errors.typeOfAssignment}
          errorMessage={errors.typeOfAssignment}
        />

        {/* Row 2 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white text-base font-inter font-medium">Subject <span className="text-blue-500">*</span></label>
          <input
            type="text"
            id="subject"
            value={formData.claimant.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            placeholder="Enter here"
            className={`py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.subject ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-white text-base font-inter font-medium">Address</label>
          <input
            type="text"
            id="address"
            value={formData.claimant.address}
            onChange={(e) => updateFormData("claimant", "address", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ssn" className="text-white text-base font-inter font-medium">Last four of SS number</label>
          <input
            type="text"
            id="ssn"
            value={formData.claimant.ssn}
            onChange={(e) => updateFormData("claimant", "ssn", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="text-white text-base font-inter font-medium">DOB (Date Of Birth)</label>
          <input
            type="text"
            id="dob"
            value={formData.claimant.dob}
            onChange={(e) => handleInputChange("dob", e.target.value)}
            placeholder="MM/DD/YYYY"
            className={`w-full py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.dob ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.dob && <p className="text-xs text-red-500">{errors.dob}</p>}
        </div>

        {/* Row 4 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="dol" className="text-white text-base font-inter font-medium">DOL (Date Of Loss) <span className="text-blue-500">*</span></label>
          <input
            type="text"
            id="dol"
            value={formData.claimant.dol}
            onChange={(e) => handleInputChange("dol", e.target.value)}
            placeholder="MM/DD/YYYY"
            className={`w-full py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.dol ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.dol && <p className="text-xs text-red-500">{errors.dol}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="allegedInjury" className="text-white text-base font-inter font-medium">Alleged injury</label>
          <input
            type="text"
            id="allegedInjury"
            value={formData.claimant.allegedInjury}
            onChange={(e) => updateFormData("claimant", "allegedInjury", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* New Row: Marital Status & Gender */}
        <div className="flex flex-col md:flex-row gap-4 md:col-span-2">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="maritalStatus" className="text-white text-base font-inter font-medium">Marital Status</label>
            <select
              id="maritalStatus"
              value={formData.claimant.maritalStatus}
              onChange={(e) => updateFormData("claimant", "maritalStatus", e.target.value)}
              className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="gender" className="text-white text-base font-inter font-medium">Gender</label>
            <select
              id="gender"
              value={formData.claimant.gender}
              onChange={(e) => updateFormData("claimant", "gender", e.target.value)}
              className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="claimantPhone" className="text-white text-base font-inter font-medium">Phone Number</label>
          <div className={`phone-input-container w-full bg-[#1E1E1E] border-[0.5px] ${errors.claimantPhone ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg transition-all`}>
            <PhoneInput
              defaultCountry="us"
              value={formData.claimant.phone}
              onChange={(phone, meta) => {
                updateFormData("claimant", "phone", phone);

                // Real-time phone validation using country metadata
                let error = "";
                const digitsOnly = phone.replace(/\D/g, '');
                const dialCode = meta.country.dialCode;

                if (digitsOnly.length > dialCode.length && digitsOnly.length < 10) {
                  error = "Phone number must be at least 10 digits";
                }

                setErrors(prev => {
                  const newErrors = { ...prev };
                  if (error) {
                    newErrors.claimantPhone = error;
                  } else {
                    delete newErrors.claimantPhone;
                  }
                  return newErrors;
                });
              }}
              className="phone-input-selector"
            />
          </div>
          {errors.claimantPhone && <p className="text-xs text-red-500 mt-1">{errors.claimantPhone}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="claimantEmail" className="text-white text-base font-inter font-medium">Email</label>
          <input
            type="email"
            id="claimantEmail"
            value={formData.claimant.email}
            onChange={(e) => {
              const value = e.target.value;
              updateFormData("claimant", "email", value);

              // Real-time email validation
              let error = "";
              if (value.trim() !== "" && !validateEmail(value)) {
                error = "Invalid email format";
              }

              setErrors(prev => {
                const newErrors = { ...prev };
                if (error) {
                  newErrors.claimantEmail = error;
                } else {
                  delete newErrors.claimantEmail;
                }
                return newErrors;
              });
            }}
            placeholder="Enter here"
            className={`py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] ${errors.claimantEmail ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.claimantEmail && <p className="text-xs text-red-500 mt-1">{errors.claimantEmail}</p>}
        </div>

        {/* Row 6 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="employer" className="text-white text-base font-inter font-medium">Employer or insured</label>
          <input
            type="text"
            id="employer"
            value={formData.claimant.employer}
            onChange={(e) => updateFormData("claimant", "employer", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tpa" className="text-white text-base font-inter font-medium">TPA (Third Party Administrator)</label>
          <input
            type="text"
            id="tpa"
            value={formData.claimant.tpa}
            onChange={(e) => updateFormData("claimant", "tpa", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Row 7 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="representedBy" className="text-white text-base font-inter font-medium">Subject represented by</label>
          <input
            type="text"
            id="representedBy"
            value={formData.claimant.representedBy}
            onChange={(e) => updateFormData("claimant", "representedBy", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hobbies" className="text-white text-base font-inter font-medium">Hobbies</label>
          <input
            type="text"
            id="hobbies"
            value={formData.claimant.hobbies}
            onChange={(e) => updateFormData("claimant", "hobbies", e.target.value)}
            placeholder="Enter here"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Special Characteristics Textarea */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="specialCharacteristics" className="text-white text-base font-inter font-medium">Special Physical Characteristics</label>
          <textarea
            maxLength={500}
            id="specialCharacteristics"
            value={formData.claimant.specialCharacteristics}
            onChange={(e) => handleTextareaChange(e.target.value)}
            placeholder="glasses, tattoos, hair style"
            className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px] resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-gray-500 italic">e.g., glasses, tattoos, hair style</p>
            <p className={`text-xs ${getWordCount(formData.claimant.specialCharacteristics) > 500 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
              {`${formData.claimant.specialCharacteristics.length} / 500 words`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadDocumentsStep = ({ formData, updateFormData, errors, setErrors }: StepProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleNotesChange = (value: string) => {
    const words = getWordCount(value);
    if (words <= 1000) {
      updateFormData("notes", "", value);
    }
  };

  const allowedFormats = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
    'application/vnd.ms-powerpoint', // ppt
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
    'application/vnd.ms-excel', // xls
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
    'text/plain' // txt
  ];

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles: File[] = [];
    let errorMessage = "";

    Array.from(newFiles).forEach(file => {
      if (file.size > 32 * 1024 * 1024) {
        errorMessage = `File "${file.name}" exceeds 32MB limit.`;
      } else if (!allowedFormats.includes(file.type)) {
        errorMessage = `File "${file.name}" has an unsupported format. Please use PDF, PPTX, Excel, DOCX, or TXT.`;
      } else {
        validFiles.push(file);
      }
    });

    if (errorMessage) {
      setErrors(prev => ({ ...prev, upload: errorMessage }));
    } else {
      setErrors(prev => {
        const next = { ...prev };
        delete next.upload;
        return next;
      });
      updateFormData("files", "", [...formData.files, ...validFiles]);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...formData.files];
    updatedFiles.splice(index, 1);
    updateFormData("files", "", updatedFiles);
  };

  return (
    <div className="p-8">
      <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-2">
        Upload Documents <span className="text-blue-500">*</span>
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Allowed formats: PDF, PPTX, Excel (XLS/XLSX), DOCX, TXT. Max size 32MB per file.
      </p>

      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`flex flex-col gap-6 items-center justify-center p-12 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer ${isDragging
          ? "border-blue-500 bg-blue-500/10"
          : errors.upload
            ? "border-red-500 bg-red-500/5"
            : "border-[#3C414A] bg-[#1E1E1E] hover:border-blue-500/50 hover:bg-gray-800"
          }`}
      >
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          accept=".pdf,.pptx,.ppt,.xlsx,.xls,.docx,.txt"
        />

        <svg
          width="48"
          height="48"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isDragging ? "text-blue-500" : "text-gray-400"}
        >
          <path
            d="M17.5 30V9.625L11 16.125L7.5 12.5L20 0L32.5 12.5L29 16.125L22.5 9.625V30H17.5ZM5 40C3.625 40 2.44833 39.5108 1.47 38.5325C0.491666 37.5542 0.00166667 36.3767 0 35V27.5H5V35H35V27.5H40V35C40 36.375 39.5108 37.5525 38.5325 38.5325C37.5542 39.5125 36.3767 40.0017 35 40H5Z"
            fill="currentColor"
          />
        </svg>

        <div className="text-center">
          <p className="text-white font-medium">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500 mt-1">Please attach any previous FROI, incident or police reports, BOPs, etc.</p>
        </div>
      </div>

      {errors.upload && (
        <p className="text-red-500 text-sm mt-4 text-center font-medium">{errors.upload}</p>
      )}

      {formData.files.length > 0 && (
        <div className="mt-8 space-y-3">
          <p className="text-sm font-medium text-white">Selected Files ({formData.files.length}):</p>
          {formData.files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-[#ffffff0a] border border-[#3C414A] rounded-lg">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 bg-blue-500/20 rounded">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-white truncate max-w-[200px] sm:max-w-md">{file.name}</p>
                  <p className="text-[10px] text-gray-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="p-1 hover:bg-red-500/20 rounded-full transition-colors text-gray-400 hover:text-red-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Notes Textarea */}
      <div className="flex flex-col gap-2 mt-8">
        <label htmlFor="notes" className="text-white text-base font-inter font-medium">Notes</label>
        <textarea
          maxLength={1000}
          id="notes"
          value={formData.notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          placeholder="Add any additional notes or comments..."
          className="py-3 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px] resize-none"
        />
        <div className="flex justify-end items-center mt-1">
          <p className={`text-xs ${getWordCount(formData.notes) > 1000 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
            {`${formData.notes.length} / 1000 words`}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const CaseDetails = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    caseTypes: [],
    referrer: {
      firstName: "",
      lastName: "",
      companyName: "",
      city: "",
      state: "",
      phone: "",
      email: "",
    },
    claimant: {
      claimFile: "",
      typeOfAssignment: "",
      subject: "",
      address: "",
      ssn: "",
      dob: "",
      dol: "",
      allegedInjury: "",
      phone: "",
      email: "",
      employer: "",
      tpa: "",
      representedBy: "",
      hobbies: "",
      maritalStatus: "",
      gender: "",
      specialCharacteristics: "",
    },
    files: [],
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Map case types to values - Always an array
      const typeOfCase = formData.caseTypes.map(name =>
        typeOfCaseArray.find(c => c.Name === name)?.Value
      ).filter(Boolean) as number[];

      // Map type of assignment to value - Always an integer
      const assignmentValue = typesOfAssignmentsArray.find(a => a.Name === formData.claimant.typeOfAssignment)?.Value;
      const typeOfAssignment = assignmentValue;

      // Convert files to Base64
      const uploadedFiles = await Promise.all(
        formData.files.map(async (file) => {
          const base64Content = await fileToBase64(file);
          // Split to get only the base64 string part (removing data:application/pdf;base64, etc.)
          const actualContent = base64Content.split(",")[1];
          return {
            fileName: file.name,
            fileContent: actualContent,
          };
        })
      );

      const requestBody = {
        typeOfCase: typeOfCase,
        referrerInformation: {
          firstName: formData.referrer.firstName,
          lastName: formData.referrer.lastName,
          companyName: formData.referrer.companyName,
          city: formData.referrer.city,
          state: formData.referrer.state,
          phoneNumber: formData.referrer.phone,
          email: formData.referrer.email
        },
        claimantInformation: {
          claim: formData.claimant.claimFile,
          typeOfAssignment: typeOfAssignment,
          subject: formData.claimant.subject,
          address: formData.claimant.address,
          lastFourOfSSN: formData.claimant.ssn,
          dateOfBirth: formData.claimant.dob,
          dateOfLoss: formData.claimant.dol,
          allegedInjury: formData.claimant.allegedInjury,
          maritalStatus: formData.claimant.maritalStatus,
          gender: formData.claimant.gender,
          phoneNumber: formData.claimant.phone,
          email: formData.claimant.email,
          employerOrInsured: formData.claimant.employer,
          tpa: formData.claimant.tpa,
          subjectRepresentedBy: formData.claimant.representedBy,
          hobbies: formData.claimant.hobbies,
          specialPhysicalCharacteristics: formData.claimant.specialCharacteristics
        },
        documents: {
          uploadedFiles: uploadedFiles,
          notes: formData.notes
        }
      };

      const firstUrl = "https://41ae7b753004e478ae9fccc9566122.19.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9d92c539ada14bc6b85a39e32b8a2d14/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Vorj6ao8FHhbFAfTWZs5T_TaLsjD2oEPJs4OzZjiff8";
      const apiKey = "75d4ebc7-a6cf-f011-bbd3-000d3a35068f";

      const firstResponse = await fetch(firstUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!firstResponse.ok) {
        throw new Error("Failed to submit the case. Please try again.");
      }

      const responseText = await firstResponse.text();
      let workorderid = "";

      try {
        // Try parsing as JSON first
        const result = JSON.parse(responseText);
        workorderid = result.workorderid;
      } catch (e) {
        // If not JSON, extract GUID from the text string
        const guidRegex = /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i;
        const match = responseText.match(guidRegex);
        if (match) {
          workorderid = match[0];
        }
      }

      if (!workorderid) {
        throw new Error("Case submitted but no Work Order ID could be retrieved from the response.");
      }

      // Second API Call
      const secondUrl = "https://41ae7b753004e478ae9fccc9566122.19.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/fa15cee7c118490d98b2b3697cc038df/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FJXEOOnLEZLZUscQv-7kvSt_C5WuBRWyz-3Y0MNy1YM";

      await fetch(secondUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey
        },
        body: JSON.stringify({ workorderid })
      });

      setSubmitMessage({
        type: 'success',
        text: `Case submitted successfully! Your Work Order ID is ${workorderid}`
      });

    } catch (err: any) {
      setSubmitMessage({
        type: 'error',
        text: err.message || "An unexpected error occurred. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (
    section: keyof FormData,
    field: string,
    value: any
  ) => {
    setFormData((prev) => {
      if (section === "caseTypes") {
        return { ...prev, caseTypes: value };
      }
      if (section === "files") {
        return { ...prev, files: value };
      }
      if (section === "notes") {
        return { ...prev, notes: value };
      }
      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          [field]: value,
        },
      };
    });
  };

  const stepsTitle = [
    "Type of Case",
    "Referrer Information",
    "Claimant Information",
    "Upload Documents",
  ];

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => {
    if (!phone || phone.trim() === '' || phone.trim() === '+') return true;
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length === 0 || digitsOnly.length >= 10;
  };

  const isStepValid = useMemo(() => {
    if (currentStep === 0) return formData.caseTypes.length > 0;

    if (currentStep === 1) {
      const r = formData.referrer;
      const step1Fields = ["firstName", "lastName", "companyName", "email", "phone"];
      const hasStep1Errors = Object.keys(errors).some(key => step1Fields.includes(key));

      return (
        r.firstName.trim().length >= 2 &&
        r.lastName.trim().length >= 2 &&
        r.companyName.trim().length >= 2 &&
        validateEmail(r.email) &&
        !hasStep1Errors
      );
    }

    if (currentStep === 2) {
      const c = formData.claimant;
      const step2Fields = ["claimFile", "typeOfAssignment", "subject", "dol", "dob", "claimantPhone", "claimantEmail"];
      const hasStep2Errors = Object.keys(errors).some(key => step2Fields.includes(key));
      const validateDate = (date: string) => /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(date);

      return (
        c.claimFile.trim().length >= 2 &&
        c.typeOfAssignment.trim().length >= 2 &&
        c.subject.trim().length >= 2 &&
        validateDate(c.dol) &&
        (c.dob === "" || validateDate(c.dob)) &&
        (c.email === "" || validateEmail(c.email)) &&
        !hasStep2Errors
      );
    }

    if (currentStep === 3) {
      return formData.files.length > 0 && !errors.upload;
    }
    return true;
  }, [currentStep, formData, errors]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <CaseTypeStep formData={formData} updateFormData={updateFormData} />
        );
      case 1:
        return (
          <ReferrerInformationStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <ClaimantInformationStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <UploadDocumentsStep
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );

      default:
        return null;
    }
  };

  const onNext = () => {
    if (isStepValid && currentStep < stepsTitle.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container text-white p-4 flex items-center justify-center">
      <div className="mx-auto flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10 w-full border border-[#5B5B5B40]">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h1 className="text-[32px] md:text-[48px] font-bold font-sans text-white mb-5 md:mb-7">
            Cyphr Case Details
          </h1>
          <p className="text-[#FFFFFFCC] font-medium text-lg md:text-2xl">
            If you could fill out as much of the information below that would be
            helpful. No worries if you don't have everything, we'll find the
            rest.
          </p>
          <div className="flex mx-[15px] md:mx-[25px] my-[25px] md:my-[55px] flex-col">
            {stepsTitle.map((title, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col justify-start gap-1 items-center">
                  <div
                    className={`${index !== 0 ? "mt-1" : ""
                      } relative flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full font-bold transition-all duration-300 ${index <= currentStep
                        ? "bg-[#167BFF] text-white shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                        : "bg-white text-[#167BFF]"
                      }`}
                  >
                    {index < currentStep ? (
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 23 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 8.21521L5.88451 12.0997M11.3228 5.88451L15.2073 2M8.21521 8.21521L12.0997 12.0997L21.4225 2"
                          stroke="white"
                          strokeWidth="2.3307"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div
                    style={{
                      border:
                        index < currentStep
                          ? "0.5px solid #167BFF"
                          : "0.5px solid #FFFFFF",
                    }}
                    className={`w-0 ${index === 3 ? "hidden" : ""
                      } border h-[40px] md:h-[50px]`}
                  />
                </div>
                <span
                  className={`mt-[10px] md:mt-[12.5px] text-base md:text-lg transition-colors duration-300 ${index <= currentStep ? "text-white" : "text-gray-100"
                    }`}
                >
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div
          className="overflow-hidden relative w-full md:w-2/3 p-4 rounded-3xl min-h-[600px] md:h-auto flex flex-col border border-[#5B5B5B80]"
          style={{
            background:
              "linear-gradient(110.77deg, rgba(3, 10, 20, 0) 0%, rgba(22, 123, 255, 0.12) 91.47%)",
          }}
        >
          {/* Glow effects */}
          <div
            className="absolute pointer-events-none -z-1 blur-[16.2px]"
            style={{
              width: "80%",
              height: 78,
              top: -63,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.6,
              borderRadius: "50%",
              backgroundColor: "#167BFF",
            }}
          />
          <div
            className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
            style={{
              width: "50%",
              height: 659,
              top: -551,
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.4,
              borderRadius: "50%",
              backgroundColor: "#1470E8",
            }}
          />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {submitMessage && (
              <div className={`mx-8 mt-4 p-4 rounded-lg border ${submitMessage.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-red-500/10 border-red-500 text-red-400'} font-medium text-center`}>
                {submitMessage.text}
              </div>
            )}
            {renderStep()}
          </div>

          {/* Fixed Buttons */}
          <div className="mt-4 flex items-center sm:items-start flex-col sm:flex-row justify-center gap-4 relative group/btn">
            {/* Tooltip for disabled button */}
            {!isStepValid && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 border border-gray-700 shadow-2xl text-center">
                {currentStep === 0
                  ? "Need to select at least one case type."
                  : currentStep === 3
                    ? "Please select at least one file to submit the case."
                    : "All * marked fields are required and must be filled correctly."}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
              </div>
            )}

            {currentStep > 0 && (
              <button
                onClick={onPrev}
                className="custom-button relative bottom-4 with-shadow bg-[#1057B5] w-[80%] sm:w-[100px] mx-2"
              >
                Back
              </button>
            )}
            {currentStep < stepsTitle.length - 1 ? (
              <button
                onClick={onNext}
                disabled={!isStepValid}
                className={`custom-button relative bottom-4 with-shadow bg-[#1057B5] w-[80%] sm:w-[300px] md:w-[500px] transition-all ${!isStepValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next <Toparrow />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid || isSubmitting}
                className={`custom-button with-shadow relative bottom-4 bg-[#1057B5] mx-auto sm:mx-2 w-[80%] sm:w-[300px] md:w-[500px] transition-all ${(!isStepValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Submitting..." : "Submit Case"} <Toparrow />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
