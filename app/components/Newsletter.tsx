export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-6 pb-24 pt-6">
      <form className="mx-auto flex w-full max-w-[720px] flex-col items-stretch gap-2 rounded-[32px] bg-white p-2 shadow-[0_8px_30px_rgba(240,113,103,0.15)] sm:h-[60px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:rounded-full sm:py-0 sm:pl-8 sm:pr-2">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full bg-transparent px-5 py-3 font-serif text-[18px] text-foreground outline-none placeholder:text-pink sm:px-0 sm:py-0"
        />
        <button type="button" className="h-[46px] shrink-0 rounded-full bg-coral px-10 font-serif text-[20px] text-white">
          Subcribe
        </button>
      </form>
    </section>
  );
}
