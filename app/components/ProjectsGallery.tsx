import Image from "next/image";

function Photo({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d9d9] ${className}`}>
      <Image
        src={`/images/projects/${src}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-6 px-5 py-8 md:gap-[50px] md:px-16 md:py-[70px] 2xl:px-20">
        <div className="flex w-full flex-col gap-4 md:gap-[14px]">
          <div className="flex flex-col gap-2.5 font-bold md:gap-[13px]">
            <p className="text-xs uppercase leading-[18px] tracking-[1.6px] md:text-base md:leading-[21.3px] text-[#ed1d23]">
              our work
            </p>
            <h2 className="text-[28px] leading-8 text-[#0f172a] md:text-5xl md:leading-[1.0] 2xl:text-[66px] 2xl:leading-[60px]">
              Projects <span className="text-[#ed1d23]">Gallery</span>
            </h2>
          </div>
          <p className="max-w-[664px] text-sm font-normal leading-[normal] text-[#64748b] md:text-2xl md:font-medium md:leading-[1.5]">
            Completed MEP structures across Tamil Nadu and beyond.
          </p>
        </div>

        {/* Mobile: Figma mobile frame — four photos. */}
        <div className="flex w-full flex-col gap-4 md:hidden">
          <Photo
            src="project-4"
            alt="Completed white industrial facility"
            sizes="100vw"
            className="h-[220px] rounded-[2px]"
          />
          <div className="grid grid-cols-2 gap-3">
            <Photo
              src="project-2"
              alt="Steel structure under construction with blue roof sheeting"
              sizes="50vw"
              className="h-[174px]"
            />
            <Photo
              src="project-3"
              alt="Interior of a completed steel warehouse"
              sizes="50vw"
              className="h-[174px]"
            />
          </div>
          <Photo
            src="project-6"
            alt="Industrial shed with dark roofing beside a construction yard"
            sizes="100vw"
            className="h-[196px]"
          />
        </div>

        {/* Tablet: simple grid. Desktop (lg+): Figma bento layout. */}
        <div className="hidden w-full grid-cols-2 gap-4 md:grid lg:hidden">
          <Photo
            src="project-1"
            alt="Completed industrial building with teal cladding and white roof"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="project-2"
            alt="Steel structure under construction with blue roof sheeting"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="project-3"
            alt="Interior of a completed steel warehouse"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="project-4"
            alt="Completed white industrial facility"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="project-5"
            alt="Steel framework of a large industrial roof"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
          <Photo
            src="project-6"
            alt="Industrial shed with dark roofing beside a construction yard"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3]"
          />
        </div>

        <div className="hidden w-full max-w-[1760px] grid-cols-[569fr_1167fr] gap-3 lg:grid xl:gap-6">
          <div className="flex flex-col gap-3 xl:gap-5">
            <Photo
              src="project-1"
              alt="Completed industrial building with teal cladding and white roof"
              sizes="(min-width: 1920px) 569px, 33vw"
              className="aspect-[569/643]"
            />
            <Photo
              src="project-4"
              alt="Completed white industrial facility"
              sizes="(min-width: 1920px) 569px, 33vw"
              className="aspect-[569/305]"
            />
          </div>
          <div className="flex flex-col gap-3 xl:gap-5">
            <div className="grid aspect-[1167/477] grid-cols-[424fr_719fr] gap-3 xl:gap-6">
              <Photo
                src="project-2"
                alt="Steel structure under construction with blue roof sheeting"
                sizes="(min-width: 1920px) 424px, 25vw"
              />
              <Photo
                src="project-3"
                alt="Interior of a completed steel warehouse"
                sizes="(min-width: 1920px) 719px, 40vw"
              />
            </div>
            <div className="grid aspect-[1167/471] grid-cols-2 gap-3 xl:gap-6">
              <Photo
                src="project-5"
                alt="Steel framework of a large industrial roof"
                sizes="(min-width: 1920px) 571px, 32vw"
              />
              <Photo
                src="project-6"
                alt="Industrial shed with dark roofing beside a construction yard"
                sizes="(min-width: 1920px) 571px, 32vw"
              />
            </div>
          </div>
        </div>

        <a
          href="#"
          className="w-full rounded-lg bg-[#c4161c] px-6 py-[14px] text-center text-sm font-semibold md:w-auto md:rounded-[9px] md:font-extrabold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] transition hover:bg-[#a91217] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4161c] md:px-[50px] md:py-5 md:text-2xl"
        >
          View All →
        </a>
      </div>
    </section>
  );
}
