import Image from "next/image";
import type { ReactNode } from "react";
import CtaForm from "./CtaForm";

const INCLUDES = [
  "Industrial Construction",
  "Warehouse Construction",
  "Factory Construction",
  "Turnkey Construction",
  "Commercial Building Construction",
];

// Mobile reading order of the checklist (Figma): 2 columns, row by row.
const MOBILE_ORDER: Record<string, string> = {
  "Industrial Construction": "max-md:order-1",
  "Turnkey Construction": "max-md:order-2",
  "Factory Construction": "max-md:order-3",
  "Warehouse Construction": "max-md:order-4",
  "Commercial Building Construction": "max-md:order-5",
};

const PHONE_DISPLAY = "+91 97909 24754";
const PHONE_TEL = "+919790924754";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 26.67 26"
      className="ml-auto size-6 shrink-0 md:size-[26.67px]"
      fill="none"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="2.222"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.78 7.58H18.89V18.42M7.78 18.42L18.89 7.58" />
    </svg>
  );
}

function ContactCard({
  href,
  icon,
  children,
  external,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex w-full max-w-[693px] items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 transition md:h-[120px] md:gap-[21px] md:rounded-[29px] md:px-7 md:py-0 hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#cc000a] md:size-16 md:rounded-3xl">
        {icon}
      </span>
      <span className="min-w-0">{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090909] text-white">
      {/* Background */}
      <Image
        src="/images/cta/cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover opacity-15 md:opacity-30"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-black to-[76%] md:hidden" />
      <div className="absolute inset-0 -z-20 max-md:hidden bg-[linear-gradient(-62.6deg,rgba(16,21,25,0)_0.65%,rgb(8,11,15)_83.17%)]" />
      <div className="pointer-events-none absolute left-[180px] -top-[61px] -z-10 size-[274px] rounded-full bg-[rgba(228,0,21,0.3)] opacity-90 blur-[62px] md:left-auto md:-right-[213px] md:-top-[267px] md:size-[1035px]" />

      <div className="mx-auto grid max-w-[1920px] items-center gap-[14px] px-5 py-8 md:gap-12 md:px-16 md:py-14 xl:grid-cols-[minmax(0,1fr)_480px] xl:gap-16 xl:py-24 2xl:min-h-[1055px] 2xl:grid-cols-[minmax(0,956px)_600px] 2xl:justify-between 2xl:gap-[123px] 2xl:px-[120px] 2xl:pb-[110px] 2xl:pt-[149px]">
        <div className="flex min-w-0 flex-col gap-[14px] md:gap-[30px]">
          <div className="flex flex-col gap-3 max-md:px-1.5 md:gap-[25.47px]">
            <h2 className="max-w-[956px] text-[28px] font-extrabold leading-8 md:text-6xl md:leading-[1.1] 2xl:text-[80px] 2xl:leading-[81.6px]">
              Ready to Build{" "}
              <span className="text-[#cc000a]">Smarter Infrastructure?</span>
            </h2>
            <p className="max-w-[886px] text-sm font-medium leading-[normal] text-white/65 md:text-2xl md:leading-[37.33px]">
              Mekark delivers complete MEP turnkey solutions for factories,
              warehouses, commercial buildings, and industrial facilities —
              including HVAC, electrical, plumbing, firefighting, and utility
              systems under one roof.
            </p>
          </div>

          <ul className="grid gap-x-[27px] gap-y-[14px] pt-3 max-md:grid-cols-[150px_minmax(0,1fr)] md:grid-cols-[repeat(2,max-content)] md:gap-x-[30px] md:gap-y-[18.67px] md:pt-0">
            {INCLUDES.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-2.5 md:gap-4 ${MOBILE_ORDER[item]} ${
                  i === INCLUDES.length - 1 ? "col-span-2" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="grid size-6 shrink-0 place-items-center rounded-full bg-[rgba(196,22,28,0.5)] text-[15px] font-semibold md:size-[37.33px] md:text-[17.33px] text-[#f9f9f9]"
                >
                  ✓
                </span>
                <span className="whitespace-nowrap text-xs md:text-xl md:font-semibold">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 md:mt-3 md:gap-[33.33px]">
            <ContactCard
              href={`tel:${PHONE_TEL}`}
              icon={
                <svg
                  aria-hidden="true"
                  viewBox="0 0 26.67 26.67"
                  className="size-6 md:size-[26.67px]"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.222"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.3689 18.4089C15.5984 18.5143 15.8569 18.5384 16.1019 18.4772C16.3469 18.416 16.5637 18.2731 16.7167 18.0722L17.1111 17.5556C17.3181 17.2796 17.5865 17.0556 17.8951 16.9013C18.2036 16.747 18.5439 16.6667 18.8889 16.6667H22.2222C22.8116 16.6667 23.3768 16.9008 23.7936 17.3175C24.2103 17.7343 24.4444 18.2995 24.4444 18.8889V22.2222C24.4444 22.8116 24.2103 23.3768 23.7936 23.7936C23.3768 24.2103 22.8116 24.4444 22.2222 24.4444C16.9179 24.4444 11.8308 22.3373 8.08009 18.5866C4.32936 14.8359 2.22222 9.74877 2.22222 4.44444C2.22222 3.85507 2.45635 3.28984 2.8731 2.8731C3.28984 2.45635 3.85507 2.22222 4.44444 2.22222H7.77778C8.36715 2.22222 8.93238 2.45635 9.34913 2.8731C9.76587 3.28984 10 3.85507 10 4.44444V7.77778C10 8.12277 9.91968 8.46302 9.76539 8.77159C9.61111 9.08015 9.3871 9.34856 9.11111 9.55556L8.59111 9.94556C8.38713 10.1013 8.24336 10.3229 8.18421 10.5726C8.12507 10.8224 8.1542 11.0849 8.26667 11.3156C9.7852 14.3999 12.2827 16.8942 15.3689 18.4089Z" />
                </svg>
              }
            >
              <span className="block text-[10px] font-bold uppercase leading-4 text-[#a9a9a9] md:text-base md:leading-[21.33px]">
                Call Now
              </span>
              <span className="block whitespace-nowrap text-sm font-extrabold leading-6 md:text-[21.33px] md:leading-8">
                {PHONE_DISPLAY}
              </span>
            </ContactCard>

            <ContactCard
              href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
              external
              icon={
                <Image
                  src="/images/cta/whatsapp.webp"
                  alt=""
                  width={39}
                  height={39}
                  className="size-[30px] md:size-[38.67px]"
                />
              }
            >
              <span className="block whitespace-nowrap text-sm font-bold leading-6 md:text-[26px] md:leading-[27.46px]">
                WhatsApp Us Now
              </span>
            </ContactCard>
          </div>
        </div>

        <CtaForm />
      </div>
    </section>
  );
}
