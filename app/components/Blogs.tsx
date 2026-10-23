import { KnowMore, Pill } from "./Decor";

const small = [
  {
    d: "25.09.2024",
    a: "Devera Dash",
    t: "Include a section for seasonal offers or loyalty discounts to encourage",
    img: "photo-1604654894610-df63bc536371",
  },
  {
    d: "01.02.2024",
    a: "Papuya Gini",
    t: "Pricing table that includes service names, duration, and prices. Consider",
    img: "photo-1580618672591-eb180b1a973f",
  },
  {
    d: "10.07.2024",
    a: "Kamlesh Babu",
    t: "Include a section for seasonal offers or loyalty discounts to encourage",
    img: "photo-1492106087820-71f1a00d2b11",
  },
];

function Meta({ d, a }: { d: string; a: string }) {
  return (
    <div className="flex items-center gap-4 text-[9px] text-foreground">
      <span className="flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f07167" strokeWidth="2">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        {d}
      </span>
      <span className="flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f07167" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
        {a}
      </span>
    </div>
  );
}

export default function Blogs() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-16 pt-6">
      <div className="text-center">
        <Pill>Top Blogs</Pill>
        <h2 className="mt-3 font-serif text-[32px] font-light leading-tight text-foreground sm:text-[40px] lg:text-[44px]">
          Latest News &amp; Blogs
        </h2>
        <p className="mx-auto mt-1 max-w-[520px] text-[10.5px] leading-relaxed text-grey">
          Showcase any special promotions or bundled packages prominently, with attractive graphics to catch the
          customer&apos;s eye. Include a section for seasonal offers or loyalty discounts t
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80"
            alt="Hairdresser blow-drying client"
            className="arch h-[300px] w-full object-cover sm:h-[400px]"
          />
          <div className="mt-6">
            <Meta d="25.09.2024" a="Devera Dash" />
          </div>
          <h3 className="mt-2 text-[16px] font-semibold leading-snug text-foreground">
            Utilize a clean, easy-to-read pricing table that includes service...
          </h3>
          <p className="mt-2 text-[10px] leading-[1.8] text-grey">
            Organize services into clear categories, such as Haircuts, Treatments, and Coloring, with accompanying
            images for visual appeal. Each category should feature a brief description......
          </p>
          <a href="#" className="mt-3 inline-block text-[10px] text-coral">
            Read Full Blog &rarr;
          </a>
        </div>
        <div className="flex flex-col gap-8 py-2 lg:justify-between lg:gap-0">
          {small.map((b) => (
            <div key={b.d} className="flex items-center gap-4 lg:gap-6">
              <img
                src={`https://images.unsplash.com/${b.img}?w=400&q=80`}
                alt=""
                className="h-[96px] w-[96px] shrink-0 rounded-full lg:h-[130px] lg:w-[130px] object-cover"
              />
              <div>
                <Meta d={b.d} a={b.a} />
                <h3 className="mt-2 text-[15px] font-semibold leading-snug text-foreground">{b.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 text-center">
        <KnowMore label="View All Blogs" />
      </div>
    </section>
  );
}
