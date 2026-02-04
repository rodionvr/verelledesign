import { Playfair_Display, Epilogue } from "next/font/google";

const playfairdisplay = Playfair_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const epilogue = Epilogue({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
});

function CallToActionBanner() {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      {/* Видео */}
      <div className="relative w-full md:w-1/2 aspect-video overflow-hidden">
        <video
          src="/cta_video.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85"
        />
      </div>

      {/* Текстовый блок */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="text-center p-6 md:p-10 bg-[var(--secondary)] h-full flex flex-col justify-center items-center">
          <h2 className={`text-3xl md:text-4xl ${playfairdisplay.className}`}>
            Ready to discuss your project?
          </h2>
          <p className={`${epilogue.className} text-base md:text-normal mt-5`}>
            Book Your 1:1 Complimentary Discovery Call
          </p>
          <p
            className={`${epilogue.className} text-base md:text-normal mt-5 font-light`}
          >
            In this 30-minute discovery call, we&apos;ll explore your vision,
            understand your needs, and map out the best next steps to bring it
            all to life. No pressure - just a relaxed, inspiring chat that gets
            you closer to the space you&apos;ve been imagining.
          </p>
          <button className="bg-[var(--brand-color)] text-white text-lg md:text-xl px-6 md:px-10 py-3 mt-5 hover:bg-[var(--hoverprimary)] transition-colors duration-300 cursor-pointer font-extralight">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToActionBanner;
