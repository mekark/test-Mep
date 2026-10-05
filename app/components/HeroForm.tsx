"use client";

import type { FormEvent, ReactNode } from "react";
import { AREAS, INDUSTRIES } from "./formOptions";
import { useIsMobile } from "./useIsMobile";

const fieldClass =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-[18px] py-2.5 text-base text-[#080808] placeholder:text-[#757575] outline-none transition focus:border-[#c4161c] focus:ring-2 focus:ring-[#c4161c]/30 md:px-5 md:py-[14px] md:text-[11px] 2xl:text-xs";

function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col md:gap-[7px] ${className}`}>
      <label
        htmlFor={htmlFor}
        className="sr-only text-sm font-bold leading-[normal] text-white md:not-sr-only"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  name,
  placeholder,
  options,
  required,
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={`${fieldClass} appearance-none pr-8 invalid:text-[#757575]`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#757575]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

export default function HeroForm() {
  const isMobile = useIsMobile();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Submission endpoint not defined yet — wire the form data here.
  }

  return (
    <form
      id="quote"
      onSubmit={onSubmit}
      className="flex w-full max-w-[760px] flex-col items-center gap-4 max-md:w-auto rounded-3xl bg-white/[0.01] px-5 py-6 shadow-[0_26px_88px_rgba(0,0,0,0.45)] backdrop-blur-[15px] max-md:mx-4 max-md:mt-6 max-md:max-w-none md:gap-[26px] md:rounded-[32px] md:px-10 md:py-11 xl:max-w-[660px] xl:justify-self-end xl:px-8 2xl:mt-[98px] 2xl:self-start 2xl:px-[50px]"
    >
      <div className="flex w-full flex-col gap-1.5 md:mx-auto md:max-w-[364px] md:text-center">
        <h2 className="text-2xl font-extrabold leading-[normal] text-white">
          Request Your Project Blueprint
        </h2>
        <p className="text-sm font-medium leading-[normal] text-white">
          Get a custom layout, cost range &amp; 150-day* timeline
        </p>
      </div>

      <div className="grid w-full gap-x-9 gap-y-3 md:grid-cols-2 md:gap-y-[13.6px]">
        <Field label="Full Name*" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={isMobile ? "Enter Your name" : "Your name"}
            className={fieldClass}
          />
        </Field>
        <Field label="Project Location" htmlFor="location">
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="Enter Project Location"
            className={fieldClass}
          />
        </Field>
        <Field label="Mobile Number*" htmlFor="mobile">
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder={isMobile ? "Mobile Number*" : "+91 98765 43210"}
            className={fieldClass}
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={isMobile ? "Enter Email Address" : "abcd@gmail.com"}
            className={fieldClass}
          />
        </Field>
        <Field label="Industry Type*" htmlFor="industry">
          <Select
            id="industry"
            name="industry"
            placeholder="Select your Industry type"
            options={INDUSTRIES}
            required
          />
        </Field>
        <Field label="Project Sq. Ft*" htmlFor="area">
          <Select
            id="area"
            name="area"
            placeholder="Select Sq.ft Requirement"
            options={AREAS}
            required
          />
        </Field>
        <Field
          label="Requirement Details"
          htmlFor="details"
          className="md:col-span-2"
        >
          <textarea
            id="details"
            name="details"
            rows={1}
            placeholder="Enter Requirement Details"
            className={`${fieldClass} h-11 resize-none md:h-[82px]`}
          />
        </Field>
      </div>

      <div className="flex w-full flex-col items-center gap-3 md:gap-3.5">
        <button
          type="submit"
          className="h-[45px] w-full cursor-pointer rounded-[10px] bg-[#c4161c] px-10 text-sm font-bold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] transition hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-16 md:rounded-[9px] md:text-lg"
        >
          Get My Free Quote →
        </button>
        <p className="text-center text-xs font-medium text-[#8a8a8a] md:tracking-[0.33px]">
          100% Transparent Consultation with single point project support
        </p>
      </div>
    </form>
  );
}
