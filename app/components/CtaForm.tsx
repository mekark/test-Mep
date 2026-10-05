"use client";

import type { FormEvent, ReactNode } from "react";
import { AREAS, INDUSTRIES } from "./formOptions";
import { useIsMobile } from "./useIsMobile";

const fieldClass =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-[17px] py-[13px] text-base text-[#080808] placeholder:text-[#757575] outline-none transition focus:border-[#c4161c] focus:ring-2 focus:ring-[#c4161c]/30 max-md:px-4 md:text-xs 2xl:text-[13px]";

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
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="sr-only text-sm font-bold leading-[normal] tracking-[0.3px] text-[#5a5a5a] md:not-sr-only"
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
        className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#757575]"
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

export default function CtaForm() {
  const isMobile = useIsMobile();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Submission endpoint not defined yet — wire the form data here.
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-[693px] flex-col items-center gap-4 rounded-3xl border border-[#e2e2e2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] md:gap-[21px] md:rounded-[29px] md:px-[46px] md:py-[42px]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-[21px]">
        <h2 className="max-w-[320px] text-center text-lg font-extrabold leading-[normal] tracking-[-0.5px] md:text-[21.8px] text-[#080808]">
          Request Your Project Blueprint
        </h2>
        <p className="max-w-[316px] text-center text-xs font-medium leading-[normal] text-[#9a9a9a] md:text-[13px]">
          Get a custom layout, cost range &amp; 150-day
          <span className="md:hidden">*</span> timeline
        </p>
      </div>

      <div className="grid w-full gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-3">
        <Field label="Full Name*" htmlFor="cta-name">
          <input
            id="cta-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={isMobile ? "Enter Your name" : "Your name"}
            className={fieldClass}
          />
        </Field>
        <Field label="Project Location" htmlFor="cta-location">
          <input
            id="cta-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="Enter project location"
            className={fieldClass}
          />
        </Field>
        <Field label="Mobile Number*" htmlFor="cta-mobile">
          <input
            id="cta-mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder={isMobile ? "Mobile Number*" : "+91 98765 43210"}
            className={fieldClass}
          />
        </Field>
        <Field label="Email Address" htmlFor="cta-email">
          <input
            id="cta-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={isMobile ? "Enter Email Address" : "abcd@gmail.com"}
            className={fieldClass}
          />
        </Field>
        <Field label="Industry Type*" htmlFor="cta-industry">
          <Select
            id="cta-industry"
            name="industry"
            placeholder="Select your Industry"
            options={INDUSTRIES}
            required
          />
        </Field>
        <Field label="Project Sq. Ft*" htmlFor="cta-area">
          <Select
            id="cta-area"
            name="area"
            placeholder="Select Sq. Ft Requirement"
            options={AREAS}
            required
          />
        </Field>
        <Field
          label="Requirement Details"
          htmlFor="cta-details"
          className="md:col-span-2"
        >
          <input
            id="cta-details"
            name="details"
            type="text"
            placeholder="Enter requirement details"
            className={fieldClass}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="h-[47px] w-full cursor-pointer rounded-lg bg-[#c4161c] px-9 text-sm font-semibold md:h-[58px] md:text-base md:font-extrabold text-[#f5f5f5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] transition hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4161c]"
      >
        Get My Free Quote →
      </button>
      <p className="text-center text-xs font-medium leading-[normal] md:text-[10.67px] md:tracking-[0.3px] text-[#5a5a5a]">
        100% Transparent Consultation with single point project support
      </p>
    </form>
  );
}
