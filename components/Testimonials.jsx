"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfairdisplay = Playfair_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const testimonials = [
  {
    id: 1,
    name: "Diana B.",
    text: "Uliana was amazing to work with. She really listened to what we wanted and translated it into a design that felt both beautiful and practical. The visuals helped us make decisions so much faster.",
  },
  {
    id: 2,
    name: "Rodion V.",
    text: "The process felt very organized and stress-free. Everything was explained clearly, and the final concept came together better than we expected.",
  },
  {
    id: 3,
    name: "Nika E.",
    text: 'Great eye for details, colors, and layout. The space now feels cohesive and intentional, not just "decorated".',
  },
  {
    id: 4,
    name: "Olga K.",
    text: "Professional, responsive, and very easy to communicate with. The renderings made it easy to understand the design before committing to anything.",
  },
  {
    id: 5,
    name: "Alina G.",
    text: "What I appreciated most was the balance between aesthetics and function. The design feels realistic and livable, not just pretty on screen.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const getCardPosition = (index) => {
    const position =
      (index - currentIndex + testimonials.length) % testimonials.length;
    return position;
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="testimonials h-150 px-[30px] bg-[#A48A7B] flex flex-col items-center justify-center mt-[40px]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[30px]">
        <h2
          className={`text-center text-4xl font-semibold text-white ${playfairdisplay.className} mb-8`}
        >
          WHAT OUR CLIENTS SAY
        </h2>

        <div className="relative w-full max-w-6xl h-64 flex items-center justify-center">
          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center perspective">
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              let transform = "";
              let opacity = 0;
              let zIndex = 0;
              let scale = 0.8;
              let extraClass = "";

              if (position === 0) {
                // Main card - center
                transform = "translateX(0) scale(1)";
                opacity = 1;
                zIndex = 10;
                scale = 1;
              } else if (position === 1) {
                // Right card (desktop only)
                transform = "translateX(120px) scale(0.85)";
                opacity = 0.6;
                zIndex = 5;
                scale = 0.85;
                extraClass = "hidden md:block";
              } else if (position === testimonials.length - 1) {
                // Left card (desktop only)
                transform = "translateX(-120px) scale(0.85)";
                opacity = 0.6;
                zIndex = 5;
                scale = 0.85;
                extraClass = "hidden md:block";
              } else {
                // Other cards
                transform = "translateX(0) scale(0.7)";
                opacity = 0;
                zIndex = 0;
                scale = 0.7;
                extraClass = "hidden";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-96 transition-all duration-500 ease-out ${extraClass}`}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                >
                  <div className="bg-[#FFFFFF] shadow-lg p-8 h-80 flex flex-col justify-between hover:shadow-xl transition-shadow">
                    <div>
                      <p className="text-gray-600 text-lg italic mb-6">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="border-t border-[#D4C4B8] pt-6">
                      <p
                        className={`font-semibold text-[#7A6C61] text-lg ${playfairdisplay.className}`}
                      >
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={handlePrev}
            className="bg-white hover:bg-gray-100 text-[#A48A7B] rounded-full p-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-white hover:bg-gray-100 text-[#A48A7B] rounded-full p-3 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
