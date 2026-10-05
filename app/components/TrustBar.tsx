const ITEMS = [
  "25+ Years of Industry Experience",
  "End-to-End Turnkey Execution",
  "Industrial, Commercial & Infrastructure Projects",
  "Powered by STAAD Pro, TEKLA & Autodesk",
  "Trusted MEP Consultant in Chennai & Across India",
];

function ItemSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {ITEMS.map((text) => (
        <li
          key={text}
          className="flex shrink-0 items-center gap-6 px-8 2xl:gap-8 2xl:px-[42.67px]"
        >
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-[#e60c19] 2xl:size-2"
          />
          <span className="whitespace-nowrap text-sm font-medium leading-5 text-[#e9e9e9] 2xl:text-[18.67px] 2xl:leading-[27px]">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TrustBar() {
  return (
    <section
      aria-label="Why choose Mekark"
      className="relative flex h-[60px] items-center overflow-hidden bg-[radial-gradient(ellipse_50%_100%_at_50%_50%,#241a24,#131723)] 2xl:h-20"
    >
      <div className="animate-marquee flex w-max [animation-duration:45s]">
        <ItemSet />
        <ItemSet hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[rgba(19,23,35,0.8)] from-[13%] to-[rgba(19,23,35,0)] md:w-[280px] 2xl:w-[560px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[rgba(19,23,35,0.8)] from-[13%] to-[rgba(19,23,35,0)] md:w-[280px] 2xl:w-[560px]" />
    </section>
  );
}
