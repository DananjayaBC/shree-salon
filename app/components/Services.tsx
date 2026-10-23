import { KnowMore, Pill } from "./Decor";

const items = [
  { t: "Hair Straightening", img: "photo-1562322140-8baeececf3df" },
  { t: "Skin Care / Waxing", img: "photo-1616394584738-fc6e612e71b9" },
  { t: "Face Makeovers", img: "photo-1487412720507-e7ab37603c6f" },
  { t: "Bridal Makeup", img: "photo-1583391733956-3750e0ff4e8b" },
];

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-20 pt-10 text-center">
      <Pill>Our Services</Pill>
      <h2 className="mt-3 font-serif text-[32px] font-light leading-tight text-foreground sm:text-[40px] lg:text-[44px]">
        We make sure you look appealing
      </h2>
      <p className="mt-1 text-[11px] text-grey">
        Lorem ipsum dolor sit amet consectetur. Eros aliquam et nullam id orci eleifend in.
      </p>
      <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
        {items.map((it) => (
          <div key={it.t}>
            <img
              src={`https://images.unsplash.com/${it.img}?w=600&q=80`}
              alt={it.t}
              className="arch mx-auto aspect-[205/290] h-auto w-full max-w-[205px] object-cover lg:h-[290px] lg:w-[205px]"
            />
            <p className="mt-6 font-serif text-[18px] text-foreground sm:text-[22px]">{it.t}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <KnowMore />
      </div>
    </section>
  );
}
