import Image from "next/image";
import HeroForm from "./HeroForm";
import TrustedMarquee from "./TrustedMarquee";

const HIGHLIGHTS = [
  "One Team for Complete MEP Execution",
  "Engineering Before Execution",
  "Built for Industrial Environments",
  "Single-Point Project Responsibility",
  "Production-Ready MEP Systems",
];

const STATS = [
  { value: "200", accent: "+", label: "Projects", accentColor: "text-[#c4161c]" },
  { value: "18", accent: "+", label: "Years Experience", accentColor: "text-[#cc000a]" },
  { value: "40,000 ", accent: "MT", label: "Annual Production", accentColor: "text-[#ed1d23]" },
  { value: "175", accent: "+", label: "Engineering Team", accentColor: "text-[#c4161c]" },
];

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-[15px] shrink-0 md:size-6"
      fill="none"
      stroke="#E40015"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#060606] text-white">
      {/* Background */}
      <Image
        src="/images/hero/hero-bg.webp"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="-z-30 object-cover object-[70%_center] max-md:hidden 2xl:object-left"
      />
      {/* Mobile background + hero image card (Figma mobile frame) */}
      <Image
        src="/images/hero/hero-mobile-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover md:hidden"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#060606_0%,rgba(6,6,6,0.94)_42%,rgba(6,6,6,0.55)_56%,rgba(6,6,6,0.25)_74%,rgba(6,6,6,0.4)_100%)] md:hidden" />
      <div className="pointer-events-none absolute inset-x-0 top-[130px] -z-10 h-[216px] overflow-hidden bg-[#060606] md:hidden">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-x-0 top-0 h-[114px] bg-gradient-to-b from-[#060606] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[87px] bg-gradient-to-b from-transparent to-[#1e1e1e]" />
        <div className="absolute bottom-0 right-[30px] h-[192px] w-[186px]">
          <Image
            src="/images/hero/hero-worker.webp"
            alt=""
            fill
            sizes="186px"
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-20 max-md:hidden bg-[#060606]/85 xl:bg-transparent xl:bg-[linear-gradient(to_right,#060606_24.8%,rgba(6,6,6,0.8)_42.7%,rgba(6,6,6,0)_88%)]" />
      <div className="pointer-events-none absolute bottom-[-106px] right-[134px] -z-10 hidden h-[850px] w-[824px] 2xl:block">
        <Image
          src="/images/hero/hero-worker.webp"
          alt=""
          fill
          sizes="824px"
          className="object-cover"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex h-16 items-center justify-between px-5 md:absolute md:inset-x-0 md:top-0 md:h-auto md:px-16 md:py-[17px] 2xl:px-20">
        <Image
          src="/images/hero/mekark-logo.webp"
          alt="Mekark"
          width={132}
          height={46}
          loading="eager"
          fetchPriority="high"
          className="h-9 w-[103px] object-cover md:h-[46px] md:w-[132px]"
        />
        <a
          href="#quote"
          className="rounded-lg bg-[#c4161c] px-4 py-2 text-sm font-semibold leading-5 md:px-6 md:py-2.5 md:text-base md:leading-[22px] text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] transition hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get Free Quote
        </a>
      </header>

      {/* Content */}
      <div className="mx-auto grid max-w-[1920px] items-center gap-y-[13px] px-5 pb-12 pt-4 md:min-h-[842px] md:gap-12 md:pb-16 md:pt-28 md:px-16 2xl:px-20 xl:grid-cols-[minmax(0,1fr)_480px] xl:gap-10 xl:py-28 2xl:min-h-[1123px] 2xl:grid-cols-[minmax(0,880px)_660px] 2xl:justify-between 2xl:pb-24 2xl:pt-[132px] min-[1900px]:pr-[107px]">
        <div className="contents md:flex md:min-w-0 md:flex-col md:items-start md:gap-6">
          <span className="-mb-1.5 flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-medium leading-4 md:hidden">
            <span aria-hidden="true" className="size-2 rounded-full bg-[#e40015]" />
            Mekark MEP &amp; Utility Systems
          </span>
          <h1 className="max-w-[880px] text-[25px] font-bold leading-[30px] max-md:flex max-md:h-[203px] max-md:flex-col max-md:justify-between md:text-[44px] md:leading-[1.1] xl:text-[clamp(2.5rem,3.6vw,3.375rem)] xl:leading-[1.08]">
            Industrial MEP Solutions Provider{" "}
            <span className="max-md:-ml-5 max-md:block max-md:w-[230px] max-md:bg-[#c4161c] max-md:px-5 max-md:py-0.5 max-md:text-sm max-md:leading-[15px]">
              for Factories, Warehouses &amp; Manufacturing Plants
            </span>
          </h1>
          <p className="max-w-[880px] text-sm leading-[normal] text-[#a9a9a9] max-md:mt-10 md:text-xl md:leading-[26px]">
            Mekark is an Industrial MEP Solutions Provider delivering complete
            MEP design, engineering and execution for factories, warehouses,
            manufacturing plants and industrial facilities across South India.
          </p>
          <p className="max-w-[880px] text-sm leading-[normal] text-[#a9a9a9] md:text-xl md:leading-[26px]">
            As an MEP Design &amp; Build Company and Turnkey MEP Solutions
            Provider, we deliver integrated HVAC, electrical, plumbing,
            firefighting, mechanical and industrial utility systems — from
            design and engineering through installation, testing and
            commissioning.
          </p>

          <ul className="grid gap-x-6 gap-y-1.5 font-[family-name:var(--font-inter)] text-xs leading-5 text-white/70 md:grid-cols-[repeat(2,max-content)] md:gap-y-5 md:text-base xl:text-[15px] 2xl:text-lg">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 max-md:px-3">
                <ChevronIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <TrustedMarquee />

          <dl className="grid w-full grid-cols-2 gap-3 md:flex md:w-fit md:items-start md:gap-x-8 md:gap-y-6 md:border-t md:border-[#e2e2e2] md:py-4 2xl:gap-x-12">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1 max-md:rounded-[10px] max-md:border max-md:border-white/[0.08] max-md:bg-[#1a1a1a] max-md:px-5 max-md:py-3 md:gap-[5px]">
                <dt className="whitespace-nowrap text-[10px] font-semibold uppercase leading-[normal] text-[#9a9a9a] md:text-sm 2xl:text-base">
                  {s.label}
                </dt>
                <dd className="whitespace-nowrap text-2xl font-extrabold leading-[normal] text-white md:text-4xl 2xl:text-[42px]">
                  {s.value}
                  <span className={s.accentColor}>{s.accent}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-[14px] max-md:order-last max-md:mt-1 max-md:justify-center md:gap-[30px]">
            <a
              href="#"
              className="flex h-12 items-center gap-[10px] rounded-full bg-white px-6 text-sm font-bold max-md:w-[140px] max-md:justify-center max-md:px-5 md:h-[55px] md:text-base text-[#e5091f] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              WhatsApp
              <svg
                aria-hidden="true"
                viewBox="0 0 18 18"
                className="size-[18px]"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0613 10.7865C12.8378 10.6748 11.742 10.1363 11.538 10.0613C11.334 9.98628 11.1855 9.95027 11.0363 10.1738C10.8878 10.3965 10.461 10.8983 10.3312 11.0468C10.2007 11.196 10.071 11.214 9.84825 11.103C9.6255 10.9905 8.907 10.7558 8.05575 9.99678C7.3935 9.40578 6.94575 8.67603 6.816 8.45253C6.68625 8.22978 6.80175 8.10902 6.9135 7.99802C7.014 7.89827 7.13625 7.73778 7.248 7.60803C7.35975 7.47828 7.3965 7.38453 7.47075 7.23528C7.54575 7.08678 7.50825 6.95702 7.452 6.84527C7.3965 6.73352 6.951 5.63628 6.765 5.19003C6.58425 4.75578 6.4005 4.81502 6.264 4.80752C6.1335 4.80152 5.985 4.80003 5.8365 4.80003C5.688 4.80003 5.4465 4.85552 5.2425 5.07902C5.03775 5.30177 4.4625 5.84103 4.4625 6.93828C4.4625 8.03478 5.2605 9.09452 5.37225 9.24377C5.484 9.39302 6.9435 11.6438 9.17925 12.609C9.71175 12.8385 10.1265 12.9758 10.4497 13.0778C10.9837 13.248 11.4698 13.224 11.8538 13.1663C12.2813 13.1025 13.1723 12.627 13.3583 12.1065C13.5443 11.586 13.5435 11.1398 13.488 11.0468C13.4325 10.9538 13.284 10.8983 13.0605 10.7865M8.994 16.3388H8.991C7.66307 16.339 6.35953 15.982 5.217 15.3053L4.947 15.1448L2.1405 15.8813L2.88975 13.1453L2.7135 12.8648C1.97107 11.6831 1.57818 10.3154 1.58025 8.91977C1.58175 4.83227 4.90725 1.50678 8.997 1.50678C9.97108 1.50382 10.936 1.69451 11.8358 2.06776C12.7355 2.44102 13.5521 2.9894 14.238 3.68103C14.9284 4.36825 15.4755 5.18559 15.8479 6.08573C16.2202 6.98587 16.4102 7.95093 16.407 8.92502C16.4055 13.0125 13.08 16.3388 8.994 16.3388ZM15.303 2.61602C14.4766 1.78448 13.4935 1.1251 12.4105 0.67606C11.3276 0.227022 10.1663 -0.00275648 8.994 2.49524e-05C4.0785 2.49524e-05 0.0765 4.00128 0.075 8.91903C0.0725805 10.4841 0.483149 12.0221 1.26525 13.3778L0 18L4.728 16.7595C6.03613 17.4715 7.50165 17.8449 8.991 17.8455H8.99475C13.9102 17.8455 17.9123 13.8443 17.9138 8.92578C17.9174 7.75372 17.6886 6.59258 17.2406 5.50953C16.7926 4.42647 16.1343 3.443 15.3038 2.61602"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-12 items-center gap-[10px] rounded-full border border-white px-6 text-sm font-bold max-md:w-[140px] max-md:justify-center max-md:px-5 md:h-[55px] md:text-base text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call Now
              <svg
                aria-hidden="true"
                viewBox="0 0 18 18"
                className="size-[18px]"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.75 1.5C11.5402 1.5 13.2571 2.21116 14.523 3.47703C15.7888 4.7429 16.5 6.45979 16.5 8.25M9.75 4.5C10.7446 4.5 11.6984 4.89509 12.4017 5.59835C13.1049 6.30161 13.5 7.25544 13.5 8.25M10.374 12.426C10.5289 12.4971 10.7034 12.5134 10.8688 12.4721C11.0341 12.4308 11.1805 12.3344 11.2838 12.1987L11.55 11.85C11.6897 11.6637 11.8709 11.5125 12.0792 11.4084C12.2875 11.3042 12.5171 11.25 12.75 11.25H15C15.3978 11.25 15.7794 11.408 16.0607 11.6893C16.342 11.9706 16.5 12.3522 16.5 12.75V15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5C11.4196 16.5 7.9858 15.0777 5.45406 12.5459C2.92232 10.0142 1.5 6.58042 1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.25C5.64782 1.5 6.02936 1.65804 6.31066 1.93934C6.59196 2.22064 6.75 2.60218 6.75 3V5.25C6.75 5.48287 6.69578 5.71254 6.59164 5.92082C6.4875 6.1291 6.33629 6.31028 6.15 6.45L5.799 6.71325C5.66131 6.81838 5.56426 6.96794 5.52434 7.13651C5.48442 7.30509 5.50409 7.48228 5.58 7.638C6.60501 9.7199 8.29082 11.4036 10.374 12.426Z" />
              </svg>
            </a>
          </div>
        </div>

        <HeroForm />
      </div>
    </section>
  );
}
