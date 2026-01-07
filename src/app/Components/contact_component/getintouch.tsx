"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowRight, Phone, } from "lucide-react";

import { Bell, Email, Headquators } from "@/assets/icon";
import Button from "../common/Button";
import { PointerGrid } from "../home/GridAnimation";
import Link from "next/link";
import { GlassIcon } from "../home/GlassIcon";
import Head from "next/head";
import { submitContactForm, ContactFormData } from "@/api/contact";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { emailId, headquarters, phoneNumber } from "../../../../global_cyphr_config";
import ContactSection from "../common/Getintouch";


export default function GetContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Consulting & Advisory",
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

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (getWordCount(form.message) > 500) {
      newErrors.message = "Message exceeds 500 words";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({ type: "error", message: "Please fix the errors in the form." });
      return;
    }

    if (!form.terms) {
      setStatus({
        type: "error",
        message: "Please accept the terms and conditions.",
      });
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
        service: "Consulting & Advisory",
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
    form.terms &&
    getWordCount(form.message) <= 500 &&
    Object.keys(errors).length === 0;

  const getDisabledReason = () => {
    if (!form.firstName.trim() || form.firstName.length < 2) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!form.lastName.trim() || form.lastName.length < 2) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!validateEmail(form.email)) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (!form.terms) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    if (getWordCount(form.message) > 500) return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
    return "All * marked fields are required and must be filled and valid and terms and conditions must be accepted";
  };


  return (
    <div className="mt-10">
      <ContactSection />
    </div >
  );
}
