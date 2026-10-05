import Image from "next/image";

// Rendered logo size (px) inside the 90x40 chip, taken from the Figma design.
const LOGOS = [
  { name: "VWU", file: "vwu", size: 42 },
  { name: "Voltas", file: "voltas", size: 75 },
  { name: "TVS", file: "tvs", size: 75 },
  { name: "Tata Electronics", file: "tata", size: 75 },
  { name: "Schwing Stetter", file: "stetter", size: 75 },
  { name: "SRF", file: "srf", size: 75 },
  { name: "Saveetha", file: "saveetha", size: 48 },
  { name: "Sarvam", file: "sarvam", size: 31 },
  { name: "Sanmar", file: "sanmar1", size: 51 },
  { name: "Sanmar Group", file: "sanmar2", size: 40 },
  { name: "Reliance", file: "reliance", size: 44 },
  { name: "Orbittal", file: "orbittal", size: 49 },
  { name: "NSI", file: "nsi", size: 46 },
  { name: "MRF", file: "mrf", size: 30 },
  { name: "L&T", file: "lt", size: 32 },
  { name: "LAF", file: "laf", size: 56 },
  { name: "Komatsu", file: "komatsu", size: 30 },
];

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 gap-[50px] pr-[50px]"
      aria-hidden={hidden || undefined}
    >
      {LOGOS.map((logo) => (
        <li
          key={logo.file}
          className="relative flex h-10 w-[90px] shrink-0 items-center justify-center rounded-lg bg-[#f9f6f7]"
        >
          <Image
            src={`/images/logos/${logo.file}.webp`}
            alt={hidden ? "" : logo.name}
            width={logo.size}
            height={logo.size}
            sizes="75px"
            loading="lazy"
            className="max-w-none shrink-0 object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

// Mobile design shows the first four logos as a static row.
const MOBILE_LOGOS = [
  { ...LOGOS[0], size: 39 },
  { ...LOGOS[1], size: 50 },
  { ...LOGOS[2], size: 52 },
  { ...LOGOS[3], size: 54 },
];

export default function TrustedMarquee() {
  return (
    <div className="relative w-full max-w-[847px] overflow-hidden rounded-[10px] bg-[linear-gradient(175.67deg,#08090a_1.3%,#654528_91.2%)] px-4 py-6 md:rounded-[18px] md:bg-[linear-gradient(180deg,#060606_0.2%,rgba(105,63,29,0.5)_99.8%)] md:px-8 md:pb-[17px] md:pt-5">
      <p className="mb-4 text-sm font-semibold uppercase leading-5 text-[#ed1d23] md:mb-[15px] md:ml-[9px] md:text-[#fa7783]">
        Trusted Across India
      </p>
      <ul className="grid grid-cols-4 gap-3 md:hidden">
        {MOBILE_LOGOS.map((logo) => (
          <li
            key={logo.file}
            className="flex h-10 w-full items-center justify-center overflow-hidden rounded-md bg-[#f9f6f7]"
          >
            <Image
              src={`/images/logos/${logo.file}.webp`}
              alt={logo.name}
              width={logo.size}
              height={logo.size}
              sizes="54px"
              className="max-w-none shrink-0 object-cover"
            />
          </li>
        ))}
      </ul>
      <div className="hidden h-[75px] items-center overflow-hidden md:flex">
        <div className="animate-marquee flex w-max">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </div>
  );
}
