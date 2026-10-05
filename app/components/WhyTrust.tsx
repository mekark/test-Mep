const CARDS = [
  {
    title: "MEP Design & Build Company",
    text: "Integrated MEP design, engineering, procurement and execution delivered through a single design & build team, ensuring coordinated project delivery from planning through commissioning.",
    red: true,
  },
  {
    title: "Turnkey MEP Solutions Provider",
    text: "One partner for complete MEP delivery — from engineering and procurement to installation, testing and commissioning, with integrated execution under a single point of responsibility.",
  },
  {
    title: "MEP Construction Company",
    text: "Industrial MEP construction solutions engineered for manufacturing plants, warehouses and large commercial facilities.",
    red: true,
    reserveTitle: true,
  },
  {
    title: "Industrial Mechanical Solutions Provider",
    text: "Precision mechanical solutions covering HVAC, piping, equipment installation and industrial utility systems, engineered and executed to meet the operational requirements of each facility.",
  },
  {
    title: "Industrial HVAC Solutions Company",
    text: "HVAC systems for factories, warehouses and controlled environments, designed for efficient and reliable operation.",
    red: true,
  },
  {
    title: "Factory HVAC Solutions Provider",
    text: "Factory HVAC solutions engineered around production requirements, ventilation, temperature control and operational efficiency.",
  },
  {
    title: "Industrial Electrical Solutions",
    text: "Industrial electrical installation and distribution systems designed for safe, reliable factory operations.",
    red: true,
    lower: true,
  },
  {
    title: "Industrial Plumbing Solutions",
    text: "Industrial plumbing systems designed, installed and commissioned for factories, warehouses and commercial facilities.",
    lower: true,
  },
];

const cardBase = "border border-black bg-[#1e1e1e]";
// Mobile (Figma): cards become a plain editorial list with hairline dividers.
const rowMobile =
  "max-md:flex-row max-md:gap-[10px] max-md:rounded-none max-md:bg-transparent max-md:px-0 max-md:py-4 max-md:[border-width:0_0_1px_0] max-md:border-white/10";
const numberClass =
  "font-[family-name:var(--font-space-grotesk)] text-[28px] font-bold uppercase leading-5 tracking-[1.6px] max-md:w-[50px] max-md:shrink-0 max-md:font-sans max-md:text-[26px] max-md:font-extrabold max-md:normal-case max-md:leading-[25px] max-md:tracking-normal 2xl:text-[34px]";
const mobileTitle = "max-md:text-lg max-md:leading-[normal]";
const mobileText =
  "max-md:text-sm max-md:leading-[normal] max-md:text-[#64748b]";

export default function WhyTrust() {
  return (
    <section className="bg-[#0a0a0a] text-white md:bg-[#040303]">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-1.5 px-6 py-5 md:gap-[80px] md:px-16 md:py-20 2xl:px-[106.67px]">
        <div className="flex flex-col gap-3 md:gap-6 xl:flex-row xl:items-end xl:justify-between xl:gap-[52px]">
          <h2 className="max-w-[1050px] text-[28px] font-bold leading-8 md:text-6xl md:leading-[1.05] 2xl:text-[88px] 2xl:leading-[90px]">
            Why Leading Industries Trust{" "}
            <span className="text-[#eb1a20]">Mekark.</span>
          </h2>
          <p className="max-w-[604px] text-sm leading-[normal] text-[#64748b] md:text-2xl md:leading-[30px] md:text-[#e8e8e8] xl:text-right">
            Trusted by engineering heads,
            <br className="hidden max-md:block xl:block" /> consultants and
            industrial leaders across India.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 md:gap-4 xl:grid-cols-4 2xl:grid-rows-[309px_309px_307px] 2xl:gap-x-[31.33px] 2xl:gap-y-[30px]">
          {/* 01 — feature card */}
          <li
            className={`${cardBase} ${rowMobile} flex flex-col gap-6 rounded-tl-[33px] px-5 py-8 md:col-span-2 md:px-9 md:py-[34px]`}
          >
            <span className={`${numberClass} max-md:text-[#e53935]`}>01</span>
            <div className="flex min-w-0 max-w-[761px] flex-col gap-4 max-md:gap-2.5">
              <h3
                className={`${mobileTitle} text-2xl font-bold leading-10 text-[#f0f0f0] md:text-[30px] xl:text-2xl 2xl:text-[30px]`}
              >
                Industrial MEP Solutions
              </h3>
              <p
                className={`${mobileText} text-lg font-medium leading-[1.4] text-[#d6d6d6] md:text-2xl md:leading-[33.33px] xl:text-xl xl:leading-[30px] 2xl:text-2xl 2xl:leading-[33.33px]`}
              >
                Complete mechanical, electrical and plumbing systems delivered
                through integrated MEP design, engineering and execution for
                factories, manufacturing plants, warehouses and industrial
                facilities.
              </p>
            </div>
          </li>

          {CARDS.map((card, i) => (
            <li
              key={card.title}
              className={`${cardBase} ${rowMobile} flex flex-col gap-6 px-5 pb-8 ${
                card.lower ? "pt-[38px]" : "pt-[26px]"
              }`}
            >
              <span
                className={`${numberClass} ${
                  card.red ? "text-[#fb2c36]" : "text-white"
                } ${(i + 2) % 2 === 1 ? "max-md:text-[#e53935]" : "max-md:text-[#ccc]"}`}
              >
                {String(i + 2).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-col gap-[13.33px] max-md:gap-2.5">
                <h3
                  className={`${mobileTitle} text-xl font-bold leading-[26px] text-[#f0f0f0] 2xl:text-2xl 2xl:leading-[30px] ${
                    card.reserveTitle ? "2xl:min-h-[60px]" : ""
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`${mobileText} font-[family-name:var(--font-inter)] text-base leading-[24px] text-[#d6d6d6] 2xl:text-lg 2xl:leading-[26px]`}
                >
                  {card.text}
                </p>
              </div>
            </li>
          ))}

          {/* 10 — highlighted card */}
          <li
            className={`${rowMobile} flex flex-col gap-[21px] rounded-br-[33px] border border-black bg-[#e50818] px-5 py-8 md:col-span-2 md:px-10 md:pt-[35px]`}
          >
            <span className={`${numberClass} text-white max-md:text-[#ccc]`}>10</span>
            <div className="flex min-w-0 max-w-[544px] flex-col gap-[21.33px] max-md:gap-2.5 2xl:mt-[31px]">
              <h3
                className={`${mobileTitle} text-2xl font-bold leading-[30px] md:text-[32px] xl:text-2xl 2xl:text-[32px]`}
              >
                Industrial Utility Solutions Provider
              </h3>
              <p
                className={`${mobileText} text-lg font-medium leading-[30px] md:text-2xl xl:text-xl 2xl:text-2xl`}
              >
                Complete utility infrastructure supporting water, compressed
                air, piping and essential industrial services.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
