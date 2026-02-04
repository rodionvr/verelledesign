"use client";

import { projects } from "../../data/projects";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

export default function Project({ params }) {
  const { projectId } = React.use(params);
  const project = projects[projectId];

  const [imageSizes, setImageSizes] = useState({});

  useEffect(() => {
    project.image_url.forEach((url) => {
      const img = new window.Image();
      img.src = url;

      img.onload = () => {
        setImageSizes((prev) => ({
          ...prev,
          [url]: {
            width: img.naturalWidth,
            height: img.naturalHeight,
          },
        }));
      };
    });
  }, [project.image_url]);

  return (
    <>
      <Navbar />
      <div className="p-[30px]">
        <div className="project-description">
          <h1
            className={`text-4xl font-bold mb-6 text-center ${playfairdisplay.className}`}
          >
            {project.title}
            <div className="relative z-10 max-w-3xl mx-auto my-12 px-8 py-10">
              {/* рамка */}
              <div className="pointer-events-none absolute inset-0 border border-[#e6dcd2]"></div>

              {/* контент */}
              <div className="relative flex flex-col sm:flex-row justify-center gap-6 text-base tracking-wide uppercase text-gray-700">
                <p>
                  <span className="opacity-60 mr-2">Category</span>
                  {project.category}
                </p>
                <p>
                  <span className="opacity-60 mr-2">Type</span>
                  {project.type}
                </p>
              </div>
            </div>
          </h1>
        </div>
        <div className="masonry mx-auto sm:w-1/2">
          {project.image_url.map((url) => (
            <div key={url} className="masonry-item overflow-hidden">
              <Image
                src={url}
                alt={project.title}
                width={1200}
                height={800}
                className="masonry-img"
                sizes="(max-width: 640px) 100vw, 50vw"
                onLoadingComplete={(img) => {
                  if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add("landscape");
                  }
                }}
              />
            </div>
          ))}
        </div>
        <CallToActionBanner />
        <Footer />
      </div>
    </>
  );
}
