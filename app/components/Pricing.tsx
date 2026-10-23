import { Pill } from "./Decor";

const plans = [
  {
    price: "$125",
    name: "Basic Plans",
    items: ["Nail Cutting", "Hair Coloring", "Spa Therapy", "Body Massages", "Manicure"],
  },
  {
    price: "$304",
    name: "Medium Plan",
    items: ["Nail Cutting", "Dubble Hair Coloring", "Spa Therapy", "Body Massages", "Manicure"],
  },
  {
    price: "$394",
    name: "Favorite Plan",
    items: ["Nail Cutting", "Dubble Hair Coloring", "Spa Therapy", "Body Massages", "Customized Manicure"],
    featured: true,
  },
  {
    price: "$620",
    name: "Ultra Plan",
    items: ["Nail Cutting, Coloring", "Customized Hair Coloring", "Ultra Spa Therapy", "Body Massages", "Customized Manicure"],
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-20 pt-6 text-center">
      <Pill>Top Packages</Pill>
      <h2 className="mt-3 font-serif text-[32px] font-light leading-tight text-foreground sm:text-[40px] lg:text-[44px]">Best Pricing Plans</h2>
      <p className="mx-auto mt-1 max-w-[520px] text-[10.5px] leading-relaxed text-grey">
        Showcase any special promotions or bundled packages prominently, with attractive graphics to catch the
        customer&apos;s eye. Include a section for seasonal offers or loyalty discounts t
      </p>
      <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`arch flex w-full max-w-[320px] flex-col items-center px-5 pb-8 pt-12 md:max-w-none shadow-[0_8px_30px_rgba(240,113,103,0.12)] ${
              p.featured ? "bg-plum text-white" : "bg-white text-foreground"
            }`}
          >
            <p className={`font-serif text-[40px] font-medium leading-none ${p.featured ? "text-white" : "text-coral"}`}>
              {p.price}
            </p>
            <p className="mt-12 font-serif text-[24px]">{p.name}</p>
            <ul className={`mt-5 space-y-1.5 text-[10px] ${p.featured ? "text-white" : "text-grey"}`}>
              {p.items.map((i) => (
                <li key={i} className="flex items-center justify-center gap-1.5">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-8 rounded-full bg-coral px-7 py-1.5 text-[10px] text-white">
              See plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
