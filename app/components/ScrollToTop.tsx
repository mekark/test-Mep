"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 grid size-11 cursor-pointer place-items-center rounded-full bg-[#c4161c] text-white shadow-[0_8px_16px_rgba(196,22,28,0.35)] transition duration-300 hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-8 md:right-8 md:size-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 15 7-7 7 7" />
      </svg>
    </button>
  );
}
