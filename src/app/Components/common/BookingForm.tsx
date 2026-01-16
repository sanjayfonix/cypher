"use client";

import { Toparrow } from "@/assets/icon";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { API_ENDPOINTS, API_KEYS, sessionTypeArray } from "../../../../global_cyphr_config";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  organizationName: string;
  professionalRole: string;
  sessionType: string;
  preferredDateTime: string;
  message: string;
  agreement: boolean;
}

export default function BookingForm({ isForm = false }: { isForm?: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    organizationName: "",
    professionalRole: "",
    sessionType: "CE Credit",
    preferredDateTime: "",
    message: "",
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateName = (name: string) => {
    return /^[A-Za-z]+$/.test(name);
  };

  const validatePhone = (phone: string) => {
    // If phone is empty or just has country code prefix, it's valid (optional field)
    if (!phone || phone.trim() === '' || phone.replace(/\D/g, '').length === 0) {
      return true;
    }
    // Phone must be at least 10 digits (excluding country code symbols like +, spaces, etc.)
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10;
  };

  const isFormValid =
    formData.firstName.trim().length >= 2 && validateName(formData.firstName) &&
    formData.lastName.trim().length >= 2 && validateName(formData.lastName) &&
    validateEmail(formData.email) &&
    formData.agreement &&
    formData.message.trim().length >= 20 &&
    Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Real-time validation
    let error = "";
    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!validateEmail(value)) error = "Invalid email format";
    } else if (name === "firstName" || name === "lastName") {
      if (!value.trim()) error = `${name === "firstName" ? "First" : "Last"} Name is required`;
      else if (!validateName(value)) error = "Only letters are allowed";
      else if (value.length < 2) error = "Minimum 2 characters required";
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });

    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validate form before submission
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = "Only letters are allowed in first name";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = "Only letters are allowed in last name";
    }

    // if (formData.phoneNumber && !validatePhone(formData.phoneNumber)) {
    //   newErrors.phoneNumber = "Invalid phone number (min 10 digits)";
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Find the integer value for the session type
      const sessionTypeObj = sessionTypeArray.find(s => s.Name === formData.sessionType);
      const sessionTypeValue = sessionTypeObj ? sessionTypeObj.Value : 1;

      const apiPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        organizationName: formData.organizationName,
        professionalRole: formData.professionalRole,
        sessionType: sessionTypeValue,
        preferredDateTime: formData.preferredDateTime,
        message: formData.message,
        servicesTypeOfCase: formData.sessionType,
      };

      const response = await fetch(API_ENDPOINTS.BOOKING_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEYS.BOOKING_SESSION
        },
        body: JSON.stringify(apiPayload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Booking request submitted successfully! We'll contact you soon.",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        countryCode: "+91",
        organizationName: "",
        professionalRole: "",
        sessionType: "CE Credit",
        preferredDateTime: "",
        message: "",

        agreement: false,
      });

      // Clear success message after 10 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 10000);
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit booking request. Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      borderRadius: isForm ? '32px' : 0
    }} className="container px-4 sm:px-6 lg:px-[48px] py-8 sm:py-12">
      <div className="w-full border border-[#5B5B5B] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 lg:p-[48px]">
        <h1 className="text-white text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-center sm:text-left leading-snug">
          Book Your CE/CLE Public Speaking Session
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-[16px]">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={`w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white shadow-none rounded-lg font-normal font-inter border ${errors.firstName ? 'border-red-500' : 'border-[#3C414A]'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]`}
                minLength={2}
                required
              />
              {errors.firstName ? (
                <p className="mt-1 text-[12px] text-red-500">{errors.firstName}</p>
              ) : (
                <p className="mt-1 text-[12px] text-[#A0A4AE]">Minimum 2 characters (letters only)</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={`w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white shadow-none rounded-lg font-normal font-inter border ${errors.lastName ? 'border-red-500' : 'border-[#3C414A]'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]`}
                minLength={2}
                required
              />
              {errors.lastName ? (
                <p className="mt-1 text-[12px] text-red-500">{errors.lastName}</p>
              ) : (
                <p className="mt-1 text-[12px] text-[#A0A4AE]">Minimum 2 characters (letters only)</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="John123@example.com"
              className={`w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#3C414A]'} focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]`}
              required
            />
            {errors.email ? (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            ) : (
              <p className="mt-1 text-[12px] text-[#A0A4AE]">Must be a valid email address</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Phone Number
            </label>
            <div className={`phone-input-container w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border ${errors.phoneNumber ? 'border-red-500' : 'border-[#3C414A]'} rounded-lg`}>
              <PhoneInput
                defaultCountry="us"
                value={formData.phoneNumber}
                onChange={(phone) => {
                  setFormData(prev => ({ ...prev, phoneNumber: phone }));

                  // Real-time phone validation - only validate if user has entered meaningful digits beyond country code
                  let error = "";
                  const digitsOnly = phone.replace(/\D/g, '');
                  // Only show error if digits exist beyond typical country codes (1-3 digits) and less than 10 total
                  if (digitsOnly.length > 3 && digitsOnly.length < 10) {
                    error = "Phone number must be at least 10 digits";
                  }

                  setErrors(prev => {
                    const newErrors = { ...prev };
                    if (error) {
                      newErrors.phoneNumber = error;
                    } else {
                      delete newErrors.phoneNumber;
                    }
                    return newErrors;
                  });
                }}
                className="phone-input-selector bg-[#2A2A2A]"
              />
            </div>
            {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
            <p className="mt-1 text-[12px] text-[#A0A4AE]">Valid phone number with country code</p>
          </div>

          {/* Organization & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="organizationName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Organization Name
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Your company, law firm, or institution"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              />
            </div>
            <div>
              <label
                htmlFor="professionalRole"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Professional Role
              </label>
              <input
                type="text"
                id="professionalRole"
                name="professionalRole"
                value={formData.professionalRole}
                onChange={handleChange}
                placeholder="E.g., Claims Manager, Attorney, Investigator"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              />
            </div>
          </div>

          {/* Session Type & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sessionType"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Session Type <span className="text-red-500">*</span>
              </label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              >
                {sessionTypeArray.map((session) => (
                  <option key={session.Value} value={session.Name} className="bg-[#2A2A2A]">
                    {session.Name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="preferredDateTime"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Preferred Date & Time <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="datetime-local"
                  id="preferredDateTime"
                  name="preferredDateTime"
                  value={formData.preferredDateTime}
                  onChange={handleChange}
                  className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px] [color-scheme:dark]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us more about your audience..."
              className={`resize-none w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg ${formData.message.length < 20 && formData.message.trim() !== '' ? 'border-2 border-red-500' : 'border-[#3C414A]'} border  focus:ring-1 focus:ring-blue-500 outline-none text-[14px]`}
              maxLength={250}
              minLength={20}
            ></textarea>
            <div className="flex justify-between flex-wrap">
              <p className={`mt-1 ${formData.message.length < 20 && formData.message.trim() !== '' ? 'text-red-500 text-[14px]' : 'text-[12px] text-[#A0A4AE]'} `}>Minimum 20 characters</p>
              <p className="text-[12px] text-[#A0A4AE] mt-1">{formData.message.length}/250</p>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="appearance-none checked:after:content-['✔'] checked:border-blue-500 checked:after:text-sm
    checked:after:flex checked:after:items-center checked:after:justify-center border border-[#F1F1F1] min-h-[16px] min-w-[16px] bg-[#2A2A2A] text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="agreement" className="text-[#E3E3E3] text-[14px]">
              I agree to the terms and conditions and authorize Cyphr to contact me regarding this booking. <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg border ${submitStatus.type === "success"
                ? "bg-[#0F2A1C] text-[#45F39A] border-[#1F6B47]"
                : "bg-[#331616] text-[#FF7A7A] border-[#7A2C2C]"
                }`}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="relative group" title={!isFormValid ? "Please fill all required details to submit the form" : ""}>
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`w-full custom-button with-shadow bg-[#1057B5] mt-4 flex items-center justify-center gap-2 transition-all duration-200 ${(isSubmitting || !isFormValid) ? "opacity-50 cursor-not-allowed grayscale-[0.5]" : "hover:bg-[#0e4da1]"
                }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  Submit Booking Request <Toparrow />
                </>
              )}
            </button>
            {!isFormValid && !isSubmitting && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg border border-gray-700">
                Please fill all required details to submit
              </div>
            )}
          </div>
        </form>

      </div>
    </div>
  );
}
