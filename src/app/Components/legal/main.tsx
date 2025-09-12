"use client";
import { Toparrow } from "@/assets/icon";
import { useRef } from "react";

export default function LegalPage() {
  const privacyRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);

const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <div className="flex min-h-screen containerr text-gray-300">
      {/* Sidebar */}
      <aside className=" hidden lg:block w-64 h-auto   mt-10">
        <div className="flex flex-col border border-[#3c414a] bg-[#0f1012]">
          <button
            className="text-left p-2 flex justify-between border-b border-[#3c414a] cursor-pointer hover:text-white hover:bg-blue-500 transition"
            onClick={() => scrollToSection(privacyRef)}
          >
            Privacy Policy
            <Toparrow/>
          </button>
          
          <button
            className="text-left p-2 flex justify-between border-b border-[#3c414a] cursor-pointer hover:text-white hover:bg-blue-500 transition"
            onClick={() => scrollToSection(termsRef)}
          >
            Terms of Service
            <Toparrow/>
          </button>
          <button
            className="text-left p-2 flex justify-between border-b border-[#3c414a] cursor-pointer hover:text-white hover:bg-blue-500 transition"
            onClick={() => scrollToSection(dataRef)}
          >
            Data Processing
            <Toparrow/>
          </button>
          <button
            className="text-left p-2 flex justify-between  cursor-pointer hover:text-white hover:bg-blue-500 transition"
            onClick={() => scrollToSection(securityRef)}
          >
            Security
            <Toparrow/>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 space-y-16 overflow-y-auto">
        {/* Privacy Policy */}
        <section ref={privacyRef} className="scroll-mt-20">
          <h1 className="text-[40px] font-bold text-[#157aff] mb-4">Privacy Policy</h1>
          <p className="mb-6 text-[16px]">
            At Cyphr, we are committed to protecting your personal data. This Privacy Policy explains how we
            collect, use, and protect your personal information when you interact with our website and services.
            By using Cyphr’s platform, you agree to the terms outlined in this policy. We ensure that your
            information is handled ethically and in full compliance with applicable privacy laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-100 mb-3">Types of Data We Collect</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Information You Provide Directly</strong>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Contact Information:</strong> When you sign up, subscribe, or create an account, we
                  collect information like your name, email, username, and contact info.
                </li>
                <li>
                  <strong>User-Generated Content:</strong> If you contribute content, we may collect your
                  submissions, including text, images, or other media.
                </li>
                <li>
                  <strong>Preferences:</strong> We collect preferences you set while interacting with our
                  website and services.
                </li>
              </ul>
            </li>
            <li>
              <strong>Automatically Collected Information</strong>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your
                  experience and track browsing behavior.
                </li>
                <li>
                  <strong>Log Files:</strong> Data like IP addresses, browser type, and timestamps are
                  collected automatically.
                </li>
                <li>
                  <strong>Analytics:</strong> We use analytics tools to gather insights into how users
                  interact with Cyphr’s platform.
                </li>
              </ul>
            </li>
            <li>
              <strong>Third-Party Sources</strong>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Social Media:</strong> If you connect through social media platforms, we may collect
                  information from your social media profiles as per the privacy settings of the platforms.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Data Processing */}
        <section ref={dataRef} className="scroll-mt-20">
          <h1 className="text-[40px] font-bold text-[#157aff] mb-4">Data Processing</h1>
          <p className="mb-4">
            Cyphr processes your data to provide advanced investigative intelligence and forensic solutions.
            We are committed to ensuring that any data you share with us is handled in compliance with privacy
            regulations.
          </p>

          <h2 className="text-xl font-semibold mb-2">Data Storage and Use</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>We process data to help you analyze and investigate data security risks and fraud.</li>
            <li>All personal data is securely stored and used only for the intended purposes.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Third-Party Data Sharing</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              We do not share your personal data with third parties, except where necessary to provide
              services or comply with legal obligations.
            </li>
          </ul>
        </section>

        {/* Terms of Service */}
        <section ref={termsRef} className="scroll-mt-20">
          <h1 className="text-[40px] font-bold text-[#157aff] mb-4">Terms of Service</h1>
          <p className="mb-4">
            These Terms of Service govern your use of the Cyphr platform. By accessing or using our services,
            you agree to comply with these terms. If you disagree with any part of the terms, please do not use
            our services.
          </p>

          <h2 className="text-xl font-semibold mb-2">Use of Services</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You may use Cyphr’s tools and services only for lawful purposes.</li>
            <li>We reserve the right to suspend or terminate your access if you violate our terms.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Account Creation and Security</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
        </section>

        {/* Security */}
        <section ref={securityRef} className="scroll-mt-20">
          <h1 className="text-[40px] font-bold text-[#157aff] mb-4">Security</h1>
          <p className="mb-4">
            At Cyphr, we take the security of your data very seriously. We implement industry-standard
            security measures to protect your personal information from unauthorized access, alteration, or
            destruction.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Security Measures</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>We use SSL/TLS encryption to secure data during transmission.</li>
            <li>Access control: Only authorized personnel can access sensitive data.</li>
            <li>Regular audits: We regularly evaluate infrastructure and update systems to meet the highest standards.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Your Role in Security</h2>
          <p>
            You are also responsible for maintaining the security of your account, including choosing strong
            passwords and monitoring any unusual activity.
          </p>
        </section>
      </main>
    </div>
  );
}
