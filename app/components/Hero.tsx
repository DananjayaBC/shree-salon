import { KnowMore, PalmLeaf, Sparkle } from "./Decor";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-10 pt-6 lg:pb-16">
      <Sparkle className="absolute right-10 top-6 lg:right-24 lg:top-10" size={30} />
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* Left */}
        <div className="w-full pt-6 lg:w-[320px] lg:pt-16">
          <h1 className="font-serif text-[48px] font-light leading-[1.05] text-foreground sm:text-[56px] lg:text-[64px]">
            Beauty
            <br />
            Says
            <br />
            <span className="text-coral">Everything</span>
          </h1>
          <KnowMore className="mt-8 lg:mt-14" />
        </div>

        <div className="mt-10 flex flex-wrap items-start gap-x-8 gap-y-10 lg:contents">
          {/* Center blob */}
          <div className="relative ml-8 h-[410px] w-[260px] lg:ml-4 lg:h-[460px] lg:w-[300px]">
            <div className="arch absolute left-0 top-0 h-[345px] w-[240px] bg-coral lg:h-[400px] lg:w-[280px]" />
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              alt="Woman with face mask"
              className="absolute left-2 top-6 h-[365px] w-[260px] object-cover object-top lg:h-[420px] lg:w-[300px]"
              style={{ borderRadius: "140px 140px 0 0" }}
            />
            <Sparkle className="absolute -left-10 bottom-10" size={26} />
            {/* Certified badge */}
            <div className="absolute -left-10 bottom-0 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-white shadow-md">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <defs>
                  <path id="badgePath" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text fontSize="8" fill="#2b2b2b" letterSpacing="1.5" fontFamily="Poppins, sans-serif">
                  <textPath href="#badgePath">CERTIFIED • VERIFIED • CERTIFIED • VERIFIED •</textPath>
                </text>
              </svg>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right small arch with rotating text */}
          <div className="relative h-[320px] w-[260px] lg:ml-6 lg:mt-10">
            <svg viewBox="0 0 260 260" className="spin-slow absolute left-0 top-0 h-[260px] w-[260px]">
              <defs>
                <path id="ringPath" d="M130,130 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
              </defs>
              <text fontSize="9" fill="#f07167" letterSpacing="2" fontFamily="Poppins, sans-serif">
                <textPath href="#ringPath">
                  BEAUTY SALON • HAIR • SKIN • MAKEUP • BRIDAL • SPA • SHREE SALON DELHI • BEAUTY SALON •
                </textPath>
              </text>
            </svg>
            <div className="arch absolute left-[40px] top-[40px] h-[260px] w-[180px] bg-pink" />
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80"
              alt="Woman with green leaf"
              className="arch absolute left-[48px] top-[48px] h-[244px] w-[164px] object-cover"
            />
          </div>

          {/* Scroll down */}
          <div className="ml-auto mt-24 hidden flex-col items-center gap-3 lg:flex">
            <span
              className="text-[11px] tracking-[0.3em] text-coral"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              SCROLL DOWN
            </span>
            <span className="block h-40 w-px bg-coral" />
          </div>
        </div>
      </div>
      <PalmLeaf className="absolute -left-10 top-[430px] hidden h-[220px] w-[160px] lg:block" />
    </section>
  );
}
