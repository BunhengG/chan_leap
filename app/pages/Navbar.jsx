
"use client";

import { useState, useEffect } from "react";
import ElevatedButton from "../components/ElevatedButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // To copy email
  const copyEmail = () => {
    navigator.clipboard.writeText("sengchanleap2002@gmail.com").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  // To download CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/seng_chanleap_CV.pdf";
    link.download = "seng_chanleap_CV.pdf";
    link.click();
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => setActiveSection(id), 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "experience", "contact"];
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // To get active
  const getLinkClass = (id) =>
    activeSection === id
      ? "font-bold text-white border-b-2 border-white pb-1 transition-all duration-300"
      : "font-bold text-white/70 hover:text-white hover:border-b-2 hover:pb-1 hover:border-white transition-all duration-200";

  return (
    <nav
      className={`w-full flex justify-between  items-center py-4 px-6 fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Left Section (Desktop) */}
        <div className="flex items-center gap-4">
          <p className="hidden lg:block text-lg text-white/80 hover:text-white px-2">
            sengchanleap2002<span className="italic">@gmail.com</span>
          </p>

          <div className="hidden md:flex gap-4">
            <ElevatedButton onClick={copyEmail} text="Copy" />
            <ElevatedButton onClick={downloadCV} text="CV" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={(e) => handleScroll(e, "home")}
            className={getLinkClass("home")}
          >
            HOME
          </button>
          <button
            onClick={(e) => handleScroll(e, "experience")}
            className={getLinkClass("experience")}
          >
            EXPERIENCES
          </button>
       
          <button
            onClick={(e) => handleScroll(e, "contact")}
            className={getLinkClass("contact")}
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full py-16 bg-background shadow-md flex flex-col items-center transition-all duration-300 md:hidden">
          <button
            onClick={(e) => handleScroll(e, "home")}
            className={getLinkClass("home")}
          >
            HOME
          </button>
          <button
            onClick={(e) => handleScroll(e, "experience")}
            className={getLinkClass("experience")}
          >
            EXPERIENCES
          </button>
          <button
            onClick={(e) => handleScroll(e, "contact")}
            className={getLinkClass("contact")}
          >
            CONTACT ME
          </button>

          {/* Mobile "Copy" and "CV" Buttons */}
          <div className="my-6 flex gap-2">
            <ElevatedButton onClick={copyEmail} text="Copy" />
            <ElevatedButton onClick={downloadCV} text="CV" />
          </div>
        </div>
      )}

      {/* Email Copied Notification */}
      {isCopied && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 p-3 bg-green-500 text-white rounded-lg shadow-md animate-bounce">
          Email copied to clipboard!
        </div>
      )}
    </nav>
  );
}
