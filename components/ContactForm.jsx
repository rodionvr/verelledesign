import { Playfair_Display } from "next/font/google";

const playfairdisplay = Playfair_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ContactForm() {
  return (
    <section className="max-w-3xl mx-auto p-6 md:p-10 bg-white border-[var(--brand-color)] border-[1px] rounded-none space-y-8">
      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-[#575756] tracking-wide">
            First Name*
          </label>
          <input
            type="text"
            required
            className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-[#575756] tracking-wide">
            Last Name*
          </label>
          <input
            type="text"
            required
            className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-[#575756] tracking-wide">
            Email Address*
          </label>
          <input
            type="email"
            required
            className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-[#575756] tracking-wide">
            Phone Number*
          </label>
          <input
            type="tel"
            required
            className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition"
          />
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-[#575756] tracking-wide">
          Design Project*
        </label>
        <select
          required
          className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none bg-white focus:outline-none focus:border-[var(--brand-color)] transition"
        >
          <option>Select</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Renovation</option>
          <option>Consultation</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-[#575756] tracking-wide">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition resize-none"
        />
      </div>

      {/* Submit */}
      <button className="w-full md:w-auto border-[var(--brand-color)] border-[1px] px-8 py-3 text-[var(--brand-color)] text-sm tracking-wide rounded-none hover:bg-[var(--brand-color)] hover:text-white transition cursor-pointer">
        Send Message
      </button>
    </section>
  );
}
