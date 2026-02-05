"use client"
import Link from "next/link";
import Image from "next/image";
import Navbar from "..//components/Navbar";
import MobileNav from "..//components/MobileNav";
import Offering from "@/components/Offering";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";
import './globals.css'
import { Playfair_Display, Epilogue } from 'next/font/google';
import { useEffect, useState} from 'react'

const playfairdisplay = Playfair_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const epilogue = Epilogue({
  weight: '400',
  subsets: ['latin'],
});




export default function Home() {

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
      <div className="px-[15px] sm:px-[30px]">
        {/* HERO SECTION */}
        <div
          className="h-[400px] sm:h-[500px] md:h-[600px] w-full bg-[url(https://res.cloudinary.com/drdbt16fo/image/upload/v1768260236/hero-grey_px9mui.png)] bg-no-repeat bg-cover flex flex-col items-center justify-center"
        >
          <div className="text-center text-white flex flex-col gap-2 sm:gap-3">
            <h3 className="text-lg sm:text-xl">OUR MISSION</h3>
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-normal ${playfairdisplay.className}`}>
              DESIGN THE SPACE <br />YOU&apos;VE ALWAYS IMAGINED
            </h1>
          </div>
          <a
            href="#"
            className="mt-6 sm:mt-10 bg-white text-[#A48A7B] py-3 sm:py-5 px-6 sm:px-10 text-lg sm:text-xl hover:bg-gray-100 transition duration-200"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>

        {/* OFFERINGS */}
        <section className="offerings mt-10 w-full">
          <h2 className={`text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#A48A7B] ${playfairdisplay.className}`}>
            WHAT WE OFFER
          </h2>
          <p className="text-center mx-auto text-sm sm:text-base md:text-lg text-[#575756] w-full sm:w-4/5 md:w-3/4 px-4 sm:px-0 mt-5 mb-5">
            We believe every space should reflect the people who live in it. Our approach focuses on understanding your lifestyle, your vision, and your unique needs. We guide you through every stage of your project - from concept to final touches - ensuring a seamless, thoughtful, and personal design experience.
          </p>
          <div className="offerings grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto sm:w-[80%]">
            <Link href="/projects"><Offering source="https://res.cloudinary.com/drdbt16fo/image/upload/v1768268619/interior_daumfm.jpg" title="RESIDENTIAL DESIGN" /></Link>
            <Link href="/projects"><Offering source="https://res.cloudinary.com/drdbt16fo/image/upload/v1768268619/kitchen_y6pjkf.jpg" title="KITCHEN DESIGN" /></Link>
            <Link href="/projects"><Offering source="https://res.cloudinary.com/drdbt16fo/image/upload/v1768268619/bath_fvq1dy.jpg" title="BATHROOM DESIGN" /></Link>
            <Link href="/projects"><Offering source="https://res.cloudinary.com/drdbt16fo/image/upload/v1768943932/commercial-design_csvwf0.jpg" title="COMMERCIAL DESIGN" /></Link>
          </div>
        </section>

        <Testimonials />

        {/* PERSONAL DESIGN SECTION */}
        <section className="w-full py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <p className={`${epilogue.className} text-sm uppercase tracking-widest text-[#8F7842]`}>What sets us apart</p>

              <h2 className={`${playfairdisplay.className} text-3xl sm:text-4xl md:text-5xl font-light mt-4 text-[#1F1F1F]`}>
                Design that feels personal, intentional, and timeless
              </h2>

              <p className={`${epilogue.className} mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#5A5A5A]`}>
                We don’t believe in one-size-fits-all interiors. Every space we design starts with listening — to your lifestyle, your taste, and how you want to feel in your home.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-10 sm:mt-16">
              {/* Item 1 */}
              <div className="bg-[#F6F4F1] p-4 sm:p-6 md:p-8">
                <h3 className={`${playfairdisplay.className} text-lg sm:text-xl font-medium text-[#1F1F1F]`}>
                  Thoughtful, not trendy
                </h3>
                <p className={`${epilogue.className} mt-2 sm:mt-4 text-sm sm:text-base md:text-base text-[#5A5A5A] leading-relaxed`}>
                  We design spaces that stand the test of time. Instead of chasing trends, we focus on balance, proportion, and materials that age beautifully — so your home still feels right years from now.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-[#F6F4F1] p-4 sm:p-6 md:p-8">
                <h3 className={`${playfairdisplay.className} text-lg sm:text-xl font-medium text-[#1F1F1F]`}>
                  Clear process, zero guesswork
                </h3>
                <p className={`${epilogue.className} mt-2 sm:mt-4 text-sm sm:text-base md:text-base text-[#5A5A5A] leading-relaxed`}>
                  From concept to completion, you always know what’s happening next. We guide you through every decision with clarity, visuals, and honest communication — no overwhelm, no surprises.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-[#F6F4F1] p-4 sm:p-6 md:p-8">
                <h3 className={`${playfairdisplay.className} text-lg sm:text-xl font-medium text-[#1F1F1F]`}>
                  Design that fits real life
                </h3>
                <p className={`${epilogue.className} mt-2 sm:mt-4 text-sm sm:text-base md:text-base text-[#5A5A5A] leading-relaxed`}>
                  Beautiful spaces should also be functional. We design around how you actually live — morning routines, entertaining, storage needs — so your space works effortlessly day after day.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-[#F6F4F1] p-4 sm:p-6 md:p-8">
                <h3 className={`${playfairdisplay.className} text-lg sm:text-xl font-medium text-[#1F1F1F]`}>
                  A collaborative experience
                </h3>
                <p className={`${epilogue.className} mt-2 sm:mt-4 text-sm sm:text-base md:text-base text-[#5A5A5A] leading-relaxed`}>
                  This is your space, not our ego project. We collaborate closely, welcome your input, and refine every detail together — creating a result that feels deeply personal and uniquely yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CallToActionBanner />
        <Footer />
      </div>

    </>
  );
}
