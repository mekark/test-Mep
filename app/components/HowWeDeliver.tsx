import type { ReactNode } from "react";

type IconProps = { w: number; h: number; children: ReactNode };

function Icon({ w, h, children }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="#ED1D23"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible max-md:scale-[0.6]"
    >
      {children}
    </svg>
  );
}

const STEPS: {
  title: string;
  text: string;
  icon: ReactNode;
}[] = [
  {
    title: "Site Survey & Needs Assessment",
    text: "Our team conducts a detailed on-site assessment to understand the facility, evaluate existing conditions, define operational requirements and identify the complete mechanical, electrical, plumbing and utility scope.",
    icon: (
      <Icon w={36.1065} h={36.0799}>
        <path d="M18.0532 11.375L28.0532 6.375L18.0532 1.375V18.0417" />
        <path d="M11.3866 18.025L2.21991 23.2583C1.96342 23.4037 1.75007 23.6145 1.60164 23.8692C1.45321 24.124 1.375 24.4135 1.375 24.7083C1.375 25.0032 1.45321 25.2927 1.60164 25.5474C1.75007 25.8022 1.96342 26.013 2.21991 26.1583L16.3866 34.2583C16.8933 34.5509 17.4681 34.7049 18.0532 34.7049C18.6384 34.7049 19.2132 34.5509 19.7199 34.2583L33.8866 26.1583C34.1431 26.013 34.3564 25.8022 34.5049 25.5474C34.6533 25.2927 34.7315 25.0032 34.7315 24.7083C34.7315 24.4135 34.6533 24.124 34.5049 23.8692C34.3564 23.6145 34.1431 23.4037 33.8866 23.2583L24.7199 18.0417M8.86991 19.4583L27.2366 29.9583M27.2366 19.4583L8.88658 29.9583" />
      </Icon>
    ),
  },
  {
    title: "System Design & Engineering",
    text: "Our MEP design and engineering team develops coordinated systems using STAAD Pro, Tekla and Autodesk tools, with solutions planned around the facility's layout, operational requirements and future scalability.",
    icon: (
      <Icon w={32.7505} h={32.7502}>
        <path d="M18.0252 7.60833L21.2419 13.3417M28.2686 16.375C26.7172 17.9551 24.8665 19.2101 22.8245 20.0669C20.7826 20.9237 18.5905 21.3649 16.3761 21.3649C14.1617 21.3649 11.9695 20.9237 9.92761 20.0669C7.88569 19.2101 6.03498 17.9551 4.48358 16.375M31.3752 31.375L27.7752 24.975M1.37524 31.375L14.7419 7.60833" />
        <path d="M16.3752 8.04167C18.2162 8.04167 19.7086 6.54928 19.7086 4.70833C19.7086 2.86738 18.2162 1.375 16.3752 1.375C14.5343 1.375 13.0419 2.86738 13.0419 4.70833C13.0419 6.54928 14.5343 8.04167 16.3752 8.04167Z" />
      </Icon>
    ),
  },
  {
    title: "Procurement & Material Planning",
    text: "We manage material planning and procurement through trusted suppliers, ensuring the required specifications, quality standards and project timelines are maintained with transparent sourcing.",
    icon: (
      <Icon w={36.0833} h={34.976}>
        <path d="M18.0417 29.151L11.425 33.1177C10.9066 33.4292 10.3131 33.5937 9.70834 33.5937C9.10352 33.5937 8.51011 33.4292 7.99167 33.1177L2.99167 30.1177C2.4996 29.8221 2.09222 29.4044 1.80898 28.9051C1.52575 28.4057 1.37626 27.8417 1.375 27.2677V21.8677C1.37626 21.2937 1.52575 20.7297 1.80898 20.2303C2.09222 19.731 2.4996 19.3133 2.99167 19.0177L9.70834 14.9844L18.0417 19.9844M18.0417 29.151V19.9844M18.0417 29.151L24.6583 33.1177C25.1768 33.4292 25.7702 33.5937 26.375 33.5937C26.9798 33.5937 27.5732 33.4292 28.0917 33.1177L33.0917 30.1177C33.5837 29.8221 33.9911 29.4044 34.2744 28.9051C34.5576 28.4057 34.7071 27.8417 34.7083 27.2677V21.8677C34.7071 21.2937 34.5576 20.7297 34.2744 20.2303C33.9911 19.731 33.5837 19.3133 33.0917 19.0177L26.375 14.9844L18.0417 19.9844M18.0417 19.9844L9.70834 24.9844M18.0417 19.9844L26.375 24.9844M9.70834 24.9844L1.80834 20.2344M9.70834 24.9844V33.601M26.375 24.9844L34.275 20.2344M26.375 24.9844V33.601" />
        <path d="M18.0417 19.9844L9.70834 14.9844V7.70103C9.70959 7.12698 9.85908 6.56299 10.1423 6.06368C10.4255 5.56437 10.8329 5.14667 11.325 4.85103L16.325 1.85103C16.8434 1.53955 17.4369 1.375 18.0417 1.375C18.6465 1.375 19.2399 1.53955 19.7583 1.85103L24.7583 4.85103C25.2504 5.14667 25.6578 5.56437 25.941 6.06368C26.2243 6.56299 26.3737 7.12698 26.375 7.70103V14.9844L18.0417 19.9844ZM18.0417 19.9844V10.8177M18.0417 10.8177L10.1417 6.0677M18.0417 10.8177L25.9417 6.0677" />
      </Icon>
    ),
  },
  {
    title: "Installation & Integration",
    text: "Our experienced execution teams coordinate installation across all MEP disciplines, ensuring mechanical, electrical, plumbing, HVAC, fire fighting and utility systems integrate seamlessly within the facility.",
    icon: (
      <Icon w={40} h={40}>
        <path d="M24.5 10.5C24.1946 10.8115 24.0236 11.2304 24.0236 11.6667C24.0236 12.1029 24.1946 12.5218 24.5 12.8333L27.1667 15.5C27.4782 15.8054 27.8971 15.9764 28.3333 15.9764C28.7696 15.9764 29.1885 15.8054 29.5 15.5L34.6767 10.325C35.21 9.78833 36.115 9.95833 36.315 10.6883C36.8186 12.5198 36.7901 14.4568 36.233 16.2727C35.6758 18.0885 34.613 19.7082 33.169 20.9421C31.7249 22.176 29.9593 22.9731 28.0788 23.2401C26.1982 23.5072 24.2805 23.2331 22.55 22.45L9.36667 35.6333C8.70363 36.2962 7.80444 36.6684 6.86691 36.6683C5.92938 36.6681 5.03032 36.2955 4.3675 35.6325C3.70468 34.9695 3.3324 34.0703 3.33256 33.1327C3.33271 32.1952 3.70529 31.2962 4.36833 30.6333L17.5517 17.45C16.7686 15.7195 16.4945 13.8018 16.7616 11.9212C17.0286 10.0407 17.8257 8.27508 19.0596 6.83103C20.2935 5.38697 21.9131 4.32419 23.729 3.76704C25.5449 3.2099 27.4819 3.18144 29.3133 3.685C30.0433 3.885 30.2133 4.78833 29.6783 5.325L24.5 10.5Z" />
      </Icon>
    ),
  },
  {
    title: "Testing & Commissioning",
    text: "All installed systems undergo systematic testing, calibration and validation to verify performance, safety and operational readiness before final handover.",
    icon: (
      <Icon w={40} h={40}>
        <path d="M21.6667 8.33333H35M21.6667 20H35M21.6667 31.6667H35M5 28.3333L8.33333 31.6667L15 25M5 11.6667L8.33333 15L15 8.33333" />
      </Icon>
    ),
  },
  {
    title: "Handover & After-Sales Support",
    text: "We provide complete project documentation, compliance reports and handover support, followed by ongoing maintenance and AMC services to help maintain long-term system performance.",
    icon: (
      <Icon w={40} h={40}>
        <path d="M20.6817 9.70667L15.9767 14.31C15.3518 14.9351 15.0007 15.7828 15.0007 16.6667C15.0007 17.5505 15.3518 18.3982 15.9767 19.0233C16.6018 19.6482 17.4495 19.9993 18.3333 19.9993C19.2172 19.9993 20.0649 19.6482 20.69 19.0233L23.54 16.1733C23.913 15.8002 24.3559 15.5041 24.8433 15.3022C25.3308 15.1002 25.8532 14.9963 26.3808 14.9963C26.9085 14.9963 27.4309 15.1002 27.9184 15.3022C28.4058 15.5041 28.8487 15.8002 29.2217 16.1733L32.3567 19.31C32.9816 19.9351 33.3326 20.7828 33.3326 21.6667C33.3326 22.5505 32.9816 23.3982 32.3567 24.0233C35 21.38 36.6667 19.1667 36.6667 15.8333C36.6666 13.9787 36.104 12.1676 35.0531 10.6394C34.0022 9.11124 32.5125 7.93776 30.7807 7.274C29.0488 6.61023 27.1564 6.48741 25.3533 6.92174C23.5502 7.35607 21.9213 8.32713 20.6817 9.70667ZM32.3567 24.0233C32.0279 24.3521 31.6377 24.6129 31.2081 24.7908C30.7786 24.9688 30.3183 25.0603 29.8533 25.0603C29.3884 25.0603 28.928 24.9688 28.4985 24.7908C28.069 24.6129 27.6787 24.3521 27.35 24.0233C27.7059 24.3452 27.9927 24.736 28.1929 25.1721C28.3931 25.6082 28.5025 26.0804 28.5146 26.5601C28.5266 27.0398 28.441 27.517 28.263 27.9625C28.0849 28.4081 27.8182 28.8129 27.4789 29.1522C27.1396 29.4915 26.7348 29.7583 26.2892 29.9363C25.8436 30.1144 25.3665 30.2 24.8868 30.1879C24.4071 30.1759 23.9349 30.0664 23.4988 29.8662C23.0627 29.666 22.6718 29.3792 22.35 29.0233C22.679 29.3511 22.9402 29.7404 23.1186 30.1691C23.297 30.5979 23.3892 31.0576 23.3898 31.522C23.3904 31.9863 23.2995 32.4463 23.1222 32.8755C22.9449 33.3047 22.6848 33.6947 22.3567 34.0233C22.04 34.3401 21.6626 34.5899 21.2473 34.7576C20.8319 34.9253 20.387 35.0076 19.9391 34.9995C19.4912 34.9914 19.0495 34.8931 18.6405 34.7105C18.2314 34.5279 17.8634 34.2647 17.5583 33.9367L8.33333 25C5.83333 22.5 3.33333 19.6667 3.33333 15.8333C3.3337 13.9788 3.89657 12.168 4.9476 10.6401C5.99862 9.11214 7.48838 7.93892 9.22013 7.27537C10.9519 6.61181 12.8442 6.48912 14.6471 6.9235C16.45 7.35788 18.0788 8.3289 19.3183 9.70833C19.5036 9.88056 19.7473 9.97615 20.0003 9.97584C20.2533 9.97553 20.4968 9.87934 20.6817 9.70667" />
      </Icon>
    ),
  },
];

export default function HowWeDeliver() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-[50px] px-6 py-8 md:px-16 md:py-20 2xl:px-20 max-md:gap-6">
        <h2 className="max-w-[1130px] text-[28px] font-bold leading-8 text-[#0f172a] md:text-5xl md:leading-[normal] 2xl:text-[66px]">
          How We Deliver Your <span className="text-[#ed1d23]">MEP Project</span>
        </h2>

        <ol className="relative grid gap-y-5 md:grid-cols-2 md:gap-x-5 md:gap-y-12 lg:grid-cols-3 xl:grid-cols-6 2xl:gap-x-[27px]">
          <span
            aria-hidden="true"
            className="absolute left-[72px] right-[calc((100%-100px)/6-13px)] top-[46px] hidden h-px bg-[#e4dfe0] xl:block 2xl:right-[calc((100%-135px)/6-13px)]"
          />
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`relative flex gap-4 md:flex-col md:gap-6 xl:gap-[53px] ${
                i < STEPS.length - 1
                  ? "max-md:after:absolute max-md:after:-bottom-5 max-md:after:left-[25px] max-md:after:top-[25px] max-md:after:w-px max-md:after:bg-[#e4dfe0]"
                  : ""
              }`}
            >
              <div className="relative z-10 grid size-[50px] shrink-0 place-items-center rounded-lg border border-[#e4dfe0] bg-white md:h-[92px] md:w-[100px] md:rounded-[18px]">
                {step.icon}
              </div>
              <div className="flex min-w-0 flex-col gap-2 md:gap-3">
                <span
                  className={`font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-[normal] md:text-[26px] md:leading-[21.333px] md:text-[#ed1d23] ${
                    i < 4 ? "text-[#ff8f92]" : "text-[#ffa5a8]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-[normal] text-[#0c0d0f] md:min-h-[50px] md:text-[17px] md:leading-[25px] 2xl:text-[21px]">
                  {step.title}
                </h3>
                <p className="text-sm leading-[normal] text-[#64748b] md:text-base 2xl:text-lg">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
