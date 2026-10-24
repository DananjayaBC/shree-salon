"use client";

import { useState } from "react";

const links = ["Home", "About", "Services", "Our Plans", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-[1100px] px-6 py-5">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/salon-apsa-logo.jpg"
            alt=""
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
          <span className="font-serif text-[22px] italic text-coral">Salon Apsa</span>
        </a>
        <nav className="hidden items-center gap-10 text-[12px] text-foreground md:flex">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-coral">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="hidden rounded-full border border-coral px-5 py-2 text-[12px] text-coral hover:bg-coral hover:text-white md:inline-block"
        >
          Book Your Seat
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-coral text-coral md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="mt-4 flex flex-col items-center gap-4 rounded-2xl bg-white/70 py-5 text-[13px] text-foreground md:hidden">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-coral" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href="#"
            className="mt-1 rounded-full border border-coral px-5 py-2 text-[12px] text-coral hover:bg-coral hover:text-white"
          >
            Book Your Seat
          </a>
        </nav>
      )}
    </header>
  );
}
