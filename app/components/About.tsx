import { KnowMore, Pill, Sparkle } from "./Decor";

export default function About() {
  return (
    <section className="relative mx-auto w-full max-w-[1100px] px-6 pb-10 pt-16">
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-[330px]">
          <Pill>About Us</Pill>
          <h2 className="mt-3 font-serif text-[32px] font-light leading-tight text-foreground sm:text-[40px] lg:text-[44px]">
            The No 1 Salon in Delhi
          </h2>
          <p className="mt-4 text-[10.5px] leading-[1.9] text-grey">
            Aliquet auctor orci id massa porttitor a quis. Ac quis leo consequat egestas. Faucibus eget metus augue
            pharetra lectus. Venenatis cras aenean tempus parturient lorem nullam dolor. Posuere scelerisque gravida
            magna morbi feugiat.
          </p>
          <p className="mt-4 text-[10.5px] leading-[1.9] text-grey">
            In tortor semper diam adipiscing proin volutpat aliquet sollicitudin consequat. Lobortis pulvinar sem eget
            feugiat varius ut gravida. A arcu nibh tempor lobortis magna morbi feugiat.
          </p>
          <KnowMore className="mt-8" />
        </div>
        <div className="relative mt-12 w-full max-w-[400px] lg:mr-10 lg:mt-0 lg:w-auto lg:max-w-none">
          <Sparkle className="absolute -left-16 top-28 hidden lg:block" size={26} />
          <img
            src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80"
            alt="Bride with tiara holding flowers"
            className="circle-glow aspect-square h-auto w-full rounded-full object-cover lg:h-[400px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
