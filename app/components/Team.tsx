import { Pill } from "./Decor";

const team = [
  { n: "Lara Vela", img: "photo-1529626455594-4ff0802cfb7e" },
  { n: "Rithi Bhatia", img: "photo-1544005313-94ddf0286df2" },
  { n: "Kingsuk Varlay", img: "photo-1500648767791-00dcc994a43e" },
  { n: "Dani Zavecta", img: "photo-1534528741775-53994a69daeb" },
  { n: "Nisha Chatterjee", img: "photo-1531746020798-e6953c6e8e04" },
];

export default function Team() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-16 pt-6 text-center">
      <Pill>Our Team</Pill>
      <h2 className="mt-3 font-serif text-[32px] font-light leading-tight text-foreground sm:text-[40px] lg:text-[44px]">
        Our Team Make Our Vision Clear
      </h2>
      <p className="mt-1 text-[11px] text-grey">
        Scelerisque odio id congue enim ornare eget sem nisl. Tincidunt elit et tellus leo donec cursus enim curabitur.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {team.map((m) => (
          <div key={m.n}>
            <img
              src={`https://images.unsplash.com/${m.img}?w=400&q=80`}
              alt={m.n}
              className="mx-auto aspect-square h-auto w-full max-w-[150px] rounded-full object-cover lg:h-[150px] lg:w-[150px]"
            />
            <p className="mt-5 font-serif text-[20px] text-foreground">{m.n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
