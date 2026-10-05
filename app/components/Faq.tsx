"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Item = { q: string; a: string };

const CATEGORIES: { label: string; items: Item[] }[] = [
  {
    label: "General",
    items: [
      {
        q: "What is an Industrial MEP Solutions Provider?",
        a: "An industrial MEP solutions provider manages Mechanical, Electrical and Plumbing systems for factories, manufacturing plants, warehouses and industrial facilities. This includes HVAC, electrical, plumbing, fire fighting and utility systems, with services covering design, engineering, installation and commissioning.",
      },
      {
        q: "What is a Turnkey MEP Design & Build Company?",
        a: "A turnkey MEP design & build company takes single-point responsibility for the complete MEP scope — from design and engineering through procurement, installation, testing and commissioning.",
      },
      {
        q: "What's the difference between an MEP Solutions Provider and an MEP Design & Build Company?",
        a: "An MEP solutions provider delivers MEP systems and services across a project, while an MEP design & build company owns both the design and the execution under one contract, giving one team accountability for coordination, cost and timelines.",
      },
    ],
  },
  { label: "Technical", items: [] },
  { label: "About Mekark", items: [] },
  { label: "Projects & Support", items: [] },
];

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 23.47 23.47"
      className="size-5 md:size-[23.47px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.956"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.89 11.73H18.58M11.73 4.89V18.58" />
    </svg>
  );
}

export default function Faq() {
  const uid = useId();
  const [category, setCategory] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const items = CATEGORIES[category].items;

  return (
    <section className="bg-[#f9f6f7] md:bg-white">
      <div className="mx-auto flex max-w-[1920px] items-center px-5 py-8 md:px-16 md:py-14 xl:min-h-[924px] 2xl:pl-[107px] 2xl:pr-20">
        <div className="w-full items-center gap-12 max-md:flex max-md:flex-col max-md:items-stretch max-md:gap-0 md:grid xl:grid-cols-[minmax(0,460px)_minmax(0,1fr)] xl:gap-[64px] 2xl:grid-cols-[598px_minmax(0,983px)] 2xl:gap-[152px]">
          <div className="flex flex-col items-start max-md:contents xl:pb-[75px]">
            <span className="rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18.67px] py-2 text-[10px] font-semibold leading-[normal] text-[#cc000a] max-md:order-1 max-md:mt-1.5 max-md:self-start md:border-[#ffd8d3] md:bg-[#ffece9] md:px-[17.33px] md:py-[9.33px] md:text-base md:font-normal md:leading-[21.33px] md:text-[#e60c19] xl:mt-[35.6px]">
              FAQ
            </span>
            <h2 className="mt-3 text-[28px] font-bold leading-8 text-[#070506] max-md:order-2 md:mt-5 md:text-6xl md:leading-[1.1] md:tracking-[-1.6px] md:text-[#101116] xl:text-[52px] 2xl:text-[66.67px] 2xl:leading-[73.33px]">
              Frequently <span className="max-md:lowercase">Asked</span>
              <br />
              <span className="max-md:lowercase max-md:text-[#cc000a]">Questions
              <span className="md:hidden">.</span>
              </span>
            </h2>
            <Image
              src="/images/faq/faq-illustration.webp"
              alt="Engineers inspecting industrial piping and equipment"
              width={525}
              height={501}
              sizes="(min-width: 1536px) 525px, (min-width: 1280px) 460px, 80vw"
              className="mt-8 h-auto w-full max-w-[525px] max-md:order-4 max-md:mt-3"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-[30px] max-md:contents">
            <div
              role="tablist"
              aria-label="FAQ categories"
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:order-3 max-md:mt-3 md:mx-0 md:gap-3 md:px-0 md:pb-0"
            >
              {CATEGORIES.map((c, i) => (
                <button
                  key={c.label}
                  type="button"
                  role="tab"
                  aria-selected={category === i}
                  onClick={() => {
                    setCategory(i);
                    setOpen(0);
                  }}
                  className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-[#e3e4e8] px-3.5 py-2.5 text-xs font-medium transition-colors md:px-5 md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e60c19] ${
                    category === i
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-[#f4f4f6]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {items.length === 0 ? (
              <p className="border-b border-[#e3e4e8] py-8 text-lg text-[#4b4d53] max-md:order-5 max-md:mt-6 max-md:py-4 max-md:text-sm">
                No questions in this category yet.
              </p>
            ) : (
              <div role="tabpanel" className="max-md:order-5 max-md:mt-6 max-md:flex max-md:flex-col max-md:gap-3">
                {items.map((item, i) => {
                  const isOpen = open === i;
                  const panelId = `${uid}-panel-${i}`;
                  const btnId = `${uid}-btn-${i}`;
                  return (
                    <div
                      key={item.q}
                      className="border-b border-[#e3e4e8] max-md:border-[#e2e2e2] max-md:border-b-0 max-md:border-t max-md:pt-3 max-md:first:border-t-0 max-md:first:pt-0 max-md:last:border-b max-md:last:pb-3"
                    >
                      <h3>
                        <button
                          id={btnId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="flex w-full cursor-pointer items-center justify-between gap-4 py-0 text-left md:gap-6 md:py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e60c19] md:py-[28.17px]"
                        >
                          <span className="relative block max-md:pl-6 md:flex md:items-baseline md:gap-[18.78px]">
                            <span
                              className={`font-mono text-sm text-[#4b4d53] max-md:absolute max-md:left-0 max-md:font-sans max-md:text-base max-md:font-medium ${isOpen ? "max-md:text-[#c4161c]" : "max-md:text-[#101116]"}`}
                            >
                              <span className="md:hidden">{i + 1}.</span>
                              <span className="max-md:hidden">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </span>
                            <span
                              className={`max-w-[803px] text-base font-medium leading-[normal] md:text-[23.47px] md:font-bold md:leading-[32.27px] ${isOpen ? "text-[#c4161c] md:text-[#101116]" : "text-[#101116]"}`}
                            >
                              {item.q}
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            className={`grid size-6 shrink-0 place-items-center rounded-full border transition-all duration-300 md:size-[46.94px] ${
                              isOpen
                                ? "rotate-45 border-[#c4161c] bg-[#c4161c] text-white md:border-[#e60c19] md:bg-[#e60c19]"
                                : "border-transparent bg-[#f0f0f0] text-[#9a9a9a] md:border-[#e3e4e8] md:bg-white md:text-[#06070B]"
                            }`}
                          >
                            <PlusIcon />
                          </span>
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-2.5 text-sm leading-[normal] text-[#4b4d53] max-md:pl-6 md:pt-0 md:pb-[28.17px] md:pl-[46.94px] md:pr-[56.33px] md:text-[18.78px] md:leading-[30.51px]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
