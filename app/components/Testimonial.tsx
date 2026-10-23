import { Sparkle } from "./Decor";

const avatars = [
  { pos: "left-[90px] top-[70px]", img: "photo-1529626455594-4ff0802cfb7e" },
  { pos: "right-[160px] top-[70px]", img: "photo-1534030347209-467a5b0ad3e6" },
  { pos: "left-[170px] bottom-[90px]", img: "photo-1517841905240-472988babdf9" },
  { pos: "right-[110px] bottom-[90px]", img: "photo-1531746020798-e6953c6e8e04" },
];

export default function Testimonial() {
  return (
    <section className="relative mt-10 w-full overflow-hidden">
      <div className="band-curve relative mx-auto w-[120%] -translate-x-[8.3%] bg-pink py-20 lg:h-[520px] lg:py-0">
        <div className="relative mx-auto h-full w-full max-w-[1100px] px-[12%] lg:px-0">
          {avatars.map((a) => (
            <img
              key={a.img}
              src={`https://images.unsplash.com/${a.img}?w=200&q=80`}
              alt=""
              className={`absolute ${a.pos} hidden h-11 w-11 rounded-full border-2 border-white object-cover lg:block`}
            />
          ))}
          <Sparkle className="absolute left-[250px] top-[100px] hidden lg:block" size={22} />
          <Sparkle className="absolute bottom-[150px] right-[250px] hidden lg:block" size={22} />
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white font-serif text-[36px] leading-none text-coral">
              &rdquo;
            </span>
            <p className="mt-8 max-w-[640px] text-[11px] leading-[1.9] text-grey">
              Lorem ipsum dolor sit amet consectetur. Tristique pretium lorem tincidunt quis proin. Convallis ut
              ultrices auctor etiam. Nec a elit et a tincidunt. Vel in eget enim faucibus dignissim eget massa eget
              non.
            </p>
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&q=80"
              alt="Trisha Sarsinda"
              className="mt-8 h-12 w-12 rounded-full object-cover"
            />
            <p className="mt-2 text-[10px] text-foreground">Trisha Sarsinda</p>
            <div className="mt-2 flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              <span className="h-1.5 w-1.5 rounded-full bg-grey/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-grey/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
