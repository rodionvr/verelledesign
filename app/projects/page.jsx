import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Offering from "@/components/Offering";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";
import { projects } from "../data/projects";
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

function Projects() {
  return (
    <>
      <Navbar />
      <div className="px-[30px]">
        <div className="relative w-full h-[600px] flex items-center justify-center bg-none sm:bg-[url(https://res.cloudinary.com/drdbt16fo/image/upload/v1770163186/projects_hero_bgje6b.jpg)] bg-no-repeat bg-cover">
          {/* внутренняя рамка и контент */}
          <div className="relative z-10">
            <div className="pointer-events-none absolute inset-4 border border-[#e6dcd2]" />

            <div className="text-center flex flex-col items-center gap-[10px] bg-[#F3F4F6] p-10 sm:p-20 max-w-[800px] mx-auto">
              <h1
                className={`text-6xl font-normal text-[#A48A7B] ${playfairdisplay.className}`}
              >
                Our Projects
              </h1>

              <p>
                A selection of completed projects highlighting our design
                philosophy, attention to detail, and commitment to creating
                meaningful spaces tailored to each client.
              </p>

              <button className="mt-10 w-[350px] h-[56px] bg-[#A48A7B] text-white tracking-wide flex items-center justify-center hover:bg-[#8F7842] transition cursor-pointer">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>

        <section className="projects">
          <h2
            className={`text-3xl text-center mt-10 mb-10 font-normal text-[#A48A7B] ${playfairdisplay.className}`}
          >
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-1/2 mx-auto justify-center gap-2 md:gap-4">
            {/* flex-wrap  */}
            {Object.values(projects).map((project, i) => {
              return (
                <Link href={project.link} key={i}>
                  <Offering source={project.cover} title={project.title} />
                </Link>
              );
            })}
          </div>
        </section>
        <CallToActionBanner />
        <Footer />
      </div>
    </>
  );
}

export default Projects;
