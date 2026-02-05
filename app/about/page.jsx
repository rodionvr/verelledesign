"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
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

function About() {

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
        <div className="hero-banner-about">
          <div className="w-full">
            {/* IMAGE */}
            <div className="relative w-full h-[600px] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drdbt16fo/image/upload/v1769389833/designer_photo_2_hlvxsn.jpg"
                alt="Uliana – Interior Designer"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[50%_20%]"
              />

              {/* TITLE — CENTER BOTTOM */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <h2
                  className={`${playfairdisplay.className} text-white text-6xl md:text-7xl font-semibold leading-[1.05] pb-5`}
                >
                  Meet Uliana
                </h2>
              </div>
            </div>

            {/* SUBTITLE UNDER IMAGE — CENTER */}
            <div className="flex justify-center">
              <h2
                className={`${playfairdisplay.className} text-[#A99082] text-4xl md:text-7xl leading-tight text-center`}
              >
                Ottawa-based Interior Solutions specialist
              </h2>
            </div>
          </div>
        </div>
        <div className="about-text-content mx-auto mt-10 max-w-3xl">
          <p
            className={`${epilogue.className}
            text-center
      text-base 
      sm:text-lg 
      md:text-xl 
      leading-relaxed 
      text-[#575756]
      font-light
    `}
          >
            Uliana is an interior specialist with an international design
            background and a strong foundation in both aesthetics and
            functionality. She began her design education in Russia, completing
            a four-year diploma program, and later continued her professional
            development in Canada, earning a second diploma in Interior
            Decorating at Algonquin College.
          </p>

          <p
            className={`${epilogue.className}
      mt-6
      text-center
      text-base 
      sm:text-lg 
      md:text-xl 
      leading-relaxed 
      text-[#575756]
      font-light
    `}
          >
            Her experience spans multiple areas of design, allowing her to
            approach interiors holistically — with careful consideration of
            space, proportion, materials, and the way people truly live in their
            homes. Uliana believes that meaningful interiors are not defined by
            trends, but by timeless solutions that age gracefully and remain
            relevant over time.
          </p>

          <p
            className={`${epilogue.className}
      mt-6
      text-center
      text-base 
      sm:text-lg 
      md:text-xl 
      leading-relaxed 
      text-[#575756]
      font-light
    `}
          >
            Through Verelle, she creates thoughtful, long-lasting interiors that
            balance elegance, comfort, and practicality. Each project is
            tailored to the client’s lifestyle, with close attention to detail,
            materiality, and atmosphere. Her goal is to design spaces that feel
            refined yet lived-in — interiors that support everyday life while
            quietly elevating it.
          </p>
        </div>
        <CallToActionBanner />
        <Footer />
      </div>
    </>
  );
}

export default About;
