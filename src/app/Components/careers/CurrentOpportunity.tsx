"use client";

import { Toparrow } from "@/assets/icon";
import { Laptop, Fingerprint, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // 👈 new imports

export default function CurrentOpportunities() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  const opportunities = [
    { 
      id: 1, 
      slug: "osint-knowledge-base-intern", 
      icon: <Laptop className="w-12 h-12 text-[#167BFF]" />, 
      title: "OSINT Knowledge Base Intern (Unpaid)", 
      type: "Internship",
      location: "Remote",
      email: "careers@cyphr.llc",
      description: "Gain hands-on experience with cutting-edge OSINT tools. Test and evaluate diverse tools, work in Linux environments, and build skills in virtual machine setups and Python scripting for intelligence gathering." 
    },
    { 
      id: 2, 
      slug: "junior-developer-intern", 
      icon: <Laptop className="w-12 h-12 text-[#167BFF]" />, 
      title: "Junior Developer Intern (Unpaid)", 
      type: "Internship",
      location: "Remote",
      email: "careers@cyphr.llc",
      description: "Gain production-level experience building features for distributed monitoring tools, AI integrations, and scalable data solutions used in fraud detection and threat intelligence." 
    },
    { 
      id: 3, 
      slug: "content-product-development-intern", 
      icon: <Users className="w-12 h-12 text-[#167BFF]" />, 
      title: "Content & Product Development Intern (Unpaid)", 
      type: "Internship",
      location: "Remote",
      email: "marketing@cyphr.llc",
      description: "Craft compelling narratives for elite audiences in government, policy, and professional sectors. Write engaging articles, develop product descriptions, and support content strategy." 
    },
    { 
      id: 4, 
      slug: "data-privacy-solutions-architect", 
      icon: <Fingerprint className="w-12 h-12 text-[#167BFF]" />, 
      title: "Data Privacy Solutions Architect", 
      type: "Contractor",
      location: "Remote (U.S. Citizens Only)",
      email: "devops@cyphr.llc",
      description: "Help clients minimize data exposure to big tech and cyber risks. Configure secure hardware ecosystems for local processing, encryption, and anonymization to enhance client protection." 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past a certain point (e.g., 100px)
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative">
      <div className="container text-white py-16 px-4 flex flex-col lg:flex-row gap-12">
        {/* Left Part (sticky on scroll) */}
        <div className={`lg:w-2/5 pr-6 flex flex-col justify-center ${isSticky ? 'lg:sticky lg:top-24 lg:self-start' : ''}`}>
          <h2 className="text-3xl md:text-[48px] font-bold font-sans mb-8">
            Current Opportunities
          </h2>
          <p className="text-[#F1F1F1] tracking-normal mb-6 font-inter font-normal text-base sm:max-w-[90%]">
            Explore a range of exciting career opportunities with us. We are
            constantly looking for talented individuals to join our team in
            various roles. Whether you're an experienced professional or just
            starting your career, we offer dynamic and challenging positions
            that allow you to grow, innovate, and make an impact.
          </p>
        </div>

        {/* Right Part (animated cards) */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="rounded-[32px] border border-[#6D6D6D99] p-8 bg-gradient-to-b from-[#030A14] to-[#167BFF]/40 flex flex-col hover:scale-[1.02] transition-transform"
            >
              <div className="mb-6">{item.icon}</div>
              
              <h3 className="text-[22px] font-semibold font-sans text-white mb-3 leading-tight">
                {item.title}
              </h3>
              
              {/* Job metadata */}
              <div className="flex flex-col gap-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-[#167BFF]">
                  <span className="font-medium">{item.type}</span>
                  <span className="text-[#6D6D6D]">•</span>
                  <span className="text-[#A0A4AE]">{item.location}</span>
                </div>
                <a 
                  href={`mailto:${item.email}`}
                  className="text-[#167BFF] hover:text-[#1e8fff] transition-colors underline decoration-dotted"
                >
                  {item.email}
                </a>
              </div>
              
              <p className="text-[#A0A4AE] text-[15px] font-normal font-inter leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              
              <button
                onClick={() =>
                  router.push(`/pages/careers/jobdisc/${item.id}?slug=${item.slug}`)
                }
                className="text-ellipsis whitespace-nowrap min-w-[130px] md:w-fit w-[100%] mt-auto custom-button with-border bg-transparent"
              >
                Read full job description
                <Toparrow />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}