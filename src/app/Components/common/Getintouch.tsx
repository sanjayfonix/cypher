"use client";
import React, { useState, useMemo, useRef } from "react";
import { Email, Headquators, Toparrow } from "@/assets/icon";
import { GlassIcon } from "../home/GlassIcon";
import { PointerGrid } from "../home/GridAnimation";
import Link from "next/link";
import { ContactFormData, submitContactForm } from "@/api/contact";
import { Phone, Check, ChevronDown } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { Combobox, Transition } from '@headlessui/react';
import Button from "./Button";
import { emailId, headquarters, phoneNumber, typesOfAssignmentsArray } from "../../../../global_cyphr_config";

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
  const containerRef = useRef<HTMLDivElement>(null);

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
      <div className="relative group/select" ref={containerRef}>
        <Combobox value={value} onChange={(val: string | null) => onChange(val || '')}>
          <div className={`relative w-full cursor-default overflow-hidden rounded-lg bg-[#0E1014] text-left border ${error ? 'border-red-500' : 'border-gray-700'} focus-within:ring-2 focus-within:ring-blue-500 transition-all`}>
            <Combobox.Input
              className="w-full border-none py-3 pl-[11px] pr-10 text-white bg-transparent focus:outline-none focus:ring-0"
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
              <Combobox.Options className="absolute mt-1 max-h-64 w-full overflow-y-auto rounded-md bg-[#0E1014] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 border border-gray-700 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

        {/* Absolute tooltip relative to group/select container */}
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

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: typesOfAssignmentsArray[0].Name,
    message: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [lastSubmitted, setLastSubmitted] = useState<number>(0);


  const [errors, setErrors] = useState<Record<string, string>>({});

  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone || phone.trim() === '' || phone.trim() === '+') return true;
    const digitsOnly = phone.replace(/\D/g, '');
    // If it's just a country code (e.g. "1" for US), we treat it as empty/valid
    // We'll handle refined validation in the onChange handler where we have country context
    return digitsOnly.length === 0 || digitsOnly.length >= 10;
  };


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    const finalValue = type === "checkbox" ? checked : value;

    // Alphabet only validation for names (pre-filtering input)
    if (name === "firstName" || name === "lastName") {
      if (value !== "" && !/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }

    // Update form state
    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // Real-time validation
    let error = "";
    if (name === "firstName") {
      if (!value.trim()) error = "First name is required";
      else if (value.trim().length < 2) error = "Minimum 2 characters";
    } else if (name === "lastName") {
      if (!value.trim()) error = "Last name is required";
      else if (value.trim().length < 2) error = "Minimum 2 characters";
    } else if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!validateEmail(value)) error = "Invalid email format";
    } else if (name === "terms") {
      if (!checked) error = "Please accept the terms";
    } else if (name === "message") {
      const words = getWordCount(value);
      if (words > 500) error = "Message cannot exceed 500 words";
    }

    // Update errors state immediately for real-time feedback
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Debouncing/Rate limiting: prevent submission if clicked within last 3 seconds
    const now = Date.now();
    if (now - lastSubmitted < 3000) {
      return;
    }
    setLastSubmitted(now);


    const newErrors: Record<string, string> = {};

    // Validate first name
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (form.firstName.trim().length < 2) {
      newErrors.firstName = "Minimum 2 characters";
    }

    // Validate last name
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (form.lastName.trim().length < 2) {
      newErrors.lastName = "Minimum 2 characters";
    }

    // Validate email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate phone (optional but must be valid if provided)


    // Validate message word count
    if (getWordCount(form.message) > 500) {
      newErrors.message = "Message exceeds 500 words";
    }

    // Validate terms acceptance
    if (!form.terms) {
      newErrors.terms = "Please accept the terms and conditions";
    }

    // If there are any errors, show them and prevent submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({ type: "error", message: "Please fix the errors in the form." });
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrors({});

    const payload: ContactFormData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phone,
      servicesTypeOfCase: form.service,
      message: form.message,
    };

    try {
      await submitContactForm(payload);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: typesOfAssignmentsArray[0].Name,
        message: "",
        terms: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.firstName.trim().length >= 2 &&
    form.lastName.trim().length >= 2 &&
    validateEmail(form.email) &&
    Object.keys(errors).length === 0 && // Relies on real-time validation for phone
    form.terms &&
    getWordCount(form.message) <= 500;

  const getDisabledReason = () => {
    if (!form.firstName.trim() || form.firstName.length < 2) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!form.lastName.trim() || form.lastName.length < 2) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!validateEmail(form.email)) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (errors.phone) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!form.terms) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (getWordCount(form.message) > 500) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
  };


  return (
    <div
      id="contact-us"
      className="
        relative container 
        border border-[#5B5B5B] 
        rounded-3xl
        text-white 
        flex flex-col md:flex-row 
        items-start justify-between 
        p-6 sm:p-10 md:p-12  
        my-10 gap-8 md:gap-10 
        overflow-visible
        scroll-mt-32
      "
    >
      <div className="hidden lg:block absolute z-30 left-0 bottom-0  -translate-x-1/3">
        <div className="relative flex items-center justify-center">
          <PointerGrid width={200} height={200} horizontal={{
            direction: 'right', y: 185,
            fromX: 200,
            toX: 80
          }} />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(00,99,235,0.25),transparent_30%)] pointer-events-none" />

      <div className="md:w-1/2 relative z-10 mb-10 md:mb-0">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-4">
          Get in touch
        </h2>
        <p className="text-gray-300 text-[14px] md:text-[16px] mb-6">
          Fill out the form or contact us directly to discuss how <br /> Cyphr
          can provide intelligence solutions tailored to your <br />{" "}
          organization's needs.
        </p>

        {/* Contact Info */}


        <div className="flex items-center gap-3 mb-4">

          <GlassIcon arcLength={150} size={46} icon={<Headquators />}>

          </GlassIcon>

          <div>
            <p className="text-gray-100 text-lg md:text-2xl font-bold">
              Headquarters
            </p>
            <p className="text-gray-300">{headquarters}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <GlassIcon arcLength={150} size={46} icon={<Email />}>

          </GlassIcon>
          <div>
            <p className="text-gray-100 text-lg md:text-2xl font-bold">
              Email
            </p>
            <p className="text-gray-300"> {emailId}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">

          <GlassIcon arcLength={150} size={46} icon={<Phone color="#157AFF" />}>

          </GlassIcon>

          <div>
            <p className="text-gray-100 text-lg md:text-2xl font-bold">
              Phone Number
            </p>
            <p className="text-gray-300">{phoneNumber}</p>
          </div>
        </div>

        <div className="border-b-2 border-gray-600 mr-8 my-6 hidden md:block"></div>

        <h3 className="text-[18px] md:text-[24px] mb-4 tracking-wide p-2">
          We're here to help with your investigative <br /> intelligence
          needs, Reach out to us today <br />
          for expert support
        </h3>
      </div>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 md:pl-8 md:border-l md:border-gray-700 relative z-10 flex flex-col gap-4"
      >
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-100 mb-1">
              First Name <span className="text-blue-500">*</span>
            </label>

            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className={`w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
            />
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
            <p className="text-xs text-gray-500 mt-1">
              Alphabets only, minimum 2 characters
            </p>
          </div>

          <div>
            <label className="block text-sm text-gray-100 mb-1">
              Last Name <span className="text-blue-500">*</span>
            </label>

            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={`w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
            />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
            <p className="text-xs text-gray-500 mt-1">
              Alphabets only, minimum 2 characters
            </p>
          </div>
        </div>


        {/* Email */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">Email <span className="text-blue-500">*</span></label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="John123@example.com"
            className={`w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          <p className="text-xs text-gray-500 mt-1">
            Must be a valid email address
          </p>
        </div>


        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">
            Phone Number
          </label>
          <div className={`phone-input-container w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg`}>
            <PhoneInput
              defaultCountry="us"
              value={form.phone}
              onChange={(phone, meta) => {
                setForm(prev => ({ ...prev, phone }));

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
          <p className="text-xs text-gray-500 mt-1">
            Valid phone number with country code
          </p>
        </div>


        {/* Select Dropdown */}
        <SearchableSelect
          label="Services / Industry of Interest"
          value={form.service}
          onChange={(val) => setForm(prev => ({ ...prev, service: val }))}
          options={typesOfAssignmentsArray}
          placeholder="Search or select service..."
          required={true}
          error={!!errors.service}
          errorMessage={errors.service}
        />

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">Message</label>
          <textarea
            maxLength={500}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us more about your intelligence needs..."
            className={`w-full h-28 bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none`}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <p className="text-xs text-red-500">{errors.message}</p>
            ) : (
              <p className="text-xs text-gray-500">Minimum 20 characters</p>
            )}
            <p className={`text-xs ${getWordCount(form.message) > 500 ? 'text-red-500' : 'text-gray-400'}`}>
              {form.message.length}  / 500 words
            </p>

          </div>
        </div>


        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 mt-2">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="mt-1 accent-blue-500"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-300">
              I accept the terms and conditions of Webutation's DPA (
              <Link href={'/pages/legal'}><span className="text-blue-400 underline cursor-pointer">
                Data Processing Agreement
              </span></Link>
              ) and authorize the company to contact me for relevant purposes. <span className="text-blue-500">*</span>
            </p>
            {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
          </div>
        </div>

        {/* Status Messages */}
        {status && (
          <div
            className={`p-3 rounded-lg text-sm ${status.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/50"
              : "bg-red-500/20 text-red-400 border border-red-500/50"
              }`}
          >
            {status.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="relative group/btn">
          {!isFormValid && !loading && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 border border-gray-700 shadow-xl">
              {getDisabledReason()}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800" />
            </div>
          )}
          <div className={(loading || !isFormValid) ? "opacity-70 pointer-events-none" : ""}>
            <Button
              color="bg-[#1057B5]"
              text={loading ? "Sending..." : "Explore Services"}
              isIcon={!loading}
            />
          </div>
        </div>

      </form>
    </div>
  );
}
