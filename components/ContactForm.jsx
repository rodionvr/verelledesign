"use client";

import React from "react";

export default function ContactForm() {

  const [result, setResult] = React.useState("Send");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "004685ff-84e1-425a-9499-7fc12363cdb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto p-6 md:p-10 bg-white border-[var(--brand-color)] border-[1px] rounded-none space-y-8"
    >
      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-medium text-[#575756] tracking-wide">
            First Name*
          </label>
          <input
            type="text"
            name="first_name"
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
            name="last_name"
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
            name="email"
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
            name="phone"
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
          name="project_type"
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
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full border-[var(--brand-color)] border-[1px] px-4 py-3 rounded-none focus:outline-none focus:border-[var(--brand-color)] transition resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full md:w-auto border-[var(--brand-color)] border-[1px] px-8 py-3 text-[var(--brand-color)] text-sm tracking-wide rounded-none hover:bg-[var(--brand-color)] hover:text-white transition cursor-pointer"
      >
        {result}
      </button>
    </form>
  );
}
