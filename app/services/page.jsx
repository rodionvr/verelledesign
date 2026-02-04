"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";
import MobileNav from "../../components/MobileNav";
import { useEffect, useState} from 'react'
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

const process_img =
  "https://res.cloudinary.com/drdbt16fo/image/upload/v1769228252/process-img_vul3rh.jpg";

function Services() {
  const hero_img =
    "https://i.pinimg.com/736x/74/88/87/748887505fae17fdfe2dbfab66827205.jpg";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkMobile(); // сразу проверить
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileNav /> : <Navbar />}
      <div className="px-[30px]">
        <div className="relative w-full h-[600px] flex items-center justify-center bg-none sm:bg-[url(https://res.cloudinary.com/drdbt16fo/image/upload/v1769226763/kitchen-hero-img_zq5jgy.jpg)] bg-no-repeat bg-cover">
          {/* внутренняя рамка и контент */}
          <div className="relative z-10 ">
            <div className="pointer-events-none absolute inset-4 border border-[#e6dcd2]" />

            <div className="text-center flex flex-col items-center gap-[10px] bg-[#F3F4F6] p-10 sm:p-20 max-w-[800px] mx-auto">
              <h1
                className={`text-6xl font-normal text-[#A48A7B] ${playfairdisplay.className}`}
              >
                Our Services
              </h1>

              <p>
                We provide end-to-end design services, from concept development
                to final execution. Our approach combines creativity, technical
                precision, and attention to detail at every stage.
              </p>

              <button className="mt-10 w-[350px] h-[56px] bg-[#A48A7B] text-white tracking-wide flex items-center justify-center hover:bg-[#8F7842] transition cursor-pointer">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-24 text-center">
            <p
              className={`${epilogue.className} uppercase tracking-widest text-sm text-[#8F7842]`}
            >
              Our process
            </p>

            <h2
              className={`${playfairdisplay.className} mt-4 text-4xl md:text-5xl font-normal leading-tight text-[var(--brand-color)]`}
            >
              A clear, thoughtful journey from idea to completion
            </h2>

            <p
              className={`${epilogue.className} mt-6 text-lg font-light text-[#575756]`}
            >
              Every project follows a refined process designed to remove
              uncertainty, support confident decisions, and deliver a space that
              feels intentional and personal.
            </p>
          </div>

          {/* Stages */}
          <div className="space-y-24">
            {/* 01 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  01
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Discovery & Information Gathering
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    We begin by understanding your lifestyle, goals, and
                    practical requirements. Measurements, site conditions, and
                    key constraints are carefully documented to form a strong
                    foundation for the design.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  02
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Concept & Direction
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    Ideas take shape through layouts, mood boards, and
                    conceptual sketches, defining the atmosphere, flow, and
                    overall character of the space.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  03
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Design Development
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    The concept is refined into a detailed design. Materials,
                    finishes, furnishings, and lighting are selected with care
                    to ensure cohesion and longevity.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  04
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Technical Coordination
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    We collaborate closely with contractors and specialists,
                    providing clear documentation and guidance to ensure
                    accurate execution of the design.
                  </p>
                </div>
              </div>
            </div>

            {/* 05 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  05
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Installation & Styling
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    We oversee deliveries, installation, and final styling so
                    every element is placed with intention and balance.
                  </p>
                </div>
              </div>
            </div>

            {/* 06 */}
            <div className="flex justify-center">
              <div className="grid grid-cols-[120px_1fr] gap-10 max-w-4xl w-full">
                <div
                  className={`${epilogue.className} text-6xl font-light text-[#A48A7B]`}
                >
                  06
                </div>
                <div>
                  <h3
                    className={`${playfairdisplay.className} text-3xl font-normal mb-4 text-[#575756]`}
                  >
                    Final Review & Completion
                  </h3>
                  <p
                    className={`${epilogue.className} font-light text-[#575756] leading-relaxed`}
                  >
                    A final walkthrough ensures every detail aligns with the
                    original vision, delivering a space that feels refined,
                    effortless, and uniquely yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-semibold text-[var(--brand-color)] mb-12 text-center ${playfairdisplay.className}`}
          >
            Interior Decoration & Styling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-6 flex flex-col">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://res.cloudinary.com/drdbt16fo/image/upload/v1769376546/concept_img_djqghf.jpg"
                  alt="Design Curation"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3
                className={`text-2xl font-semibold text-[#575756] mb-2 ${playfairdisplay.className}`}
              >
                Design Direction
              </h3>
              <p
                className={`text-sm text-[#575756] mb-4 font-bold ${epilogue.className}`}
              >
                $650 per one space
              </p>
              <p className={`text-[#575756] mb-4 ${epilogue.className}`}>
                Ideal for clients seeking clear design guidance, this package
                provides expert direction without full-service implementation.
              </p>
              <p
                className={`font-semibold text-[#575756] mb-2 underline ${epilogue.className}`}
              >
                What's Included
              </p>
              <ul
                className={`list-disc list-inside text-[#575756] mb-6 ${epilogue.className}`}
              >
                <li>Online or in-person consultation (60–90 minutes)</li>
                <li>Moodboard and overall style direction</li>
                <li>Curated color palette</li>
                <li>
                  General furniture and decor recommendations (no direct links)
                </li>
                <li>
                  One revision (one round of adjustments based on feedback)
                </li>
              </ul>
              <button className="border border-[#575756] text-[#575756] py-2 px-6 w-max hover:bg-[#575756] hover:text-white transition cursor-pointer">
                Get Started
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-6 flex flex-col">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://res.cloudinary.com/drdbt16fo/image/upload/v1769375986/end_to_end_h0y5zu.jpg"
                  alt="End-to-End Furnishing"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3
                className={`text-2xl font-semibold text-[#575756] mb-2 ${playfairdisplay.className}`}
              >
                End-to-End Furnishing
              </h3>
              <p
                className={`text-sm text-[#575756] mb-4 font-bold ${epilogue.className}`}
              >
                Starting from $800 per one space
              </p>
              <p className={`text-[#575756] mb-4 ${epilogue.className}`}>
                Designed for clients seeking a stylish interior update with
                minimal effort and no renovation work.
              </p>
              <p
                className={`font-semibold text-[#575756] mb-2 underline ${epilogue.className}`}
              >
                What&apos;s Included
              </p>
              <ul
                className={`list-disc list-inside text-[#575756] mb-6 ${epilogue.className}`}
              >
                <p>
                  Everything in the <strong>Design Curation</strong>, plus
                </p>
                <li>One complete design concept with moodboard</li>
                <li>Space planning and furniture layout</li>
                <li>Key furniture and lighting selections with links</li>
                <li>
                  Finish recommendations (flooring, wall finishes, trims) with
                  links
                </li>
                <li>One styled elevation</li>
                <li>Exclusive industry discounts (up to 40% off retail)</li>
                <li>
                  Two revisions (two rounds of adjustments based on feedback)
                </li>
              </ul>
              <button className="border border-[#575756] text-[#575756] py-2 px-6 w-max hover:bg-[#575756] hover:text-white transition cursor-pointer">
                Get Started
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-6 flex flex-col">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="https://res.cloudinary.com/drdbt16fo/image/upload/v1769375986/comprehensive_img_hh52ez.jpg"
                  alt="Comprehensive Home Styling"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3
                className={`text-2xl font-semibold text-[#575756] mb-2 ${playfairdisplay.className}`}
              >
                Comprehensive Home Styling
              </h3>
              <p
                className={`text-sm text-[#575756] mb-4 font-bold ${epilogue.className}`}
              >
                Starting from $2000 per one space
              </p>
              <p className={`text-[#575756] mb-4 ${epilogue.className}`}>
                Perfect for clients seeking a full-service, high-touch
                experience, this package covers everything from concept
                development to implementation and post-design support.
              </p>
              <p
                className={`font-semibold text-[#575756] mb-2 underline ${epilogue.className}`}
              >
                What's Included
              </p>
              <ul
                className={`list-disc list-inside text-[#575756] mb-6 ${epilogue.className}`}
              >
                <p>
                  Everything in the <strong>End-to-End Furnishing</strong>, plus
                </p>
                <li>Detailed layouts and technical drawings</li>
                <li>Multiple high-quality 3D renders (room by room)</li>
                <li>Finish and material boards with links to all selections</li>
                <li>Procurement support</li>
                <li>Coordination with contractors and painters</li>
                <li>Site visit (local) or video walkthrough</li>
                <li>Priority communication</li>
                <li>
                  Up to five revisions (five rounds of adjustments based on
                  feedback)
                </li>
                <li>
                  Exclusive <strong>custom gift</strong> from the designer
                </li>
              </ul>
              <button className="border border-[#575756] text-[#575756] py-2 px-6 w-max hover:bg-[#575756] hover:text-white transition cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Note below cards */}
          <p
            className={`text-center text-[#A48A7B] font-semibold mt-8 text-lg ${epilogue.className}`}
          >
            *Clients are welcome to discuss their requirements with the designer
            to create a personalized package and tailored plan.
          </p>
        </div>
      </section>

      <CallToActionBanner />

      <Footer />
    </>
  );
}

export default Services;
