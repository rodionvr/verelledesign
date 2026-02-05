"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CallToActionBanner from "@/components/CallToActionBanner";
import MobileNav from "../../components/MobileNav";
import { useEffect, useState } from "react";
import { Playfair_Display, Epilogue } from "next/font/google";

const playfairdisplay = Playfair_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const epilogue = Epilogue({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

  return (
    <>
      {isMobile ? <MobileNav /> : <Navbar />}
      <div className="px-[30px]">
        <section className="w-full relative">
          {/* HERO BANNER */}
          <div
            className="relative w-full h-[520px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/drdbt16fo/image/upload/v1769394771/contact-banner_qpyqoq.jpg)",
            }}
          >
            {/* Overlay for readability (очень мягкий) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT ON BANNER */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <h2
                className={`${playfairdisplay.className} text-white text-5xl md:text-7xl mb-6`}
              >
                Contact Us
              </h2>

              <div
                className={`${epilogue.className} flex flex-col md:flex-row gap-6 text-white text-sm tracking-wide`}
              >
                <span className="flex items-center gap-2">
                  verelledesign@gmail.com
                </span>

                <span className="hidden md:block">|</span>

                <span className="flex items-center gap-2">438-220-7370</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM — OVERLAP */}
          <div className="relative z-20 -mt-32 px-6 md:px-0">
            <div className="max-w-4xl mx-auto bg-[#F6F4F1] shadow-lg p-5 sm:p-10 md:p-16 flex justify-center">
              <ContactForm />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
