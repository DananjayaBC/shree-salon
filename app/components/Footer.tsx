import { Flower } from "./Decor";

const links = ["Home", "About", "Services", "Our Plans", "Contact"];

export default function Footer() {
  return (
    <footer className="relative mt-4 w-full overflow-hidden">
      <div className="mx-auto w-[130%] -translate-x-[11.5%] rounded-t-[50%] bg-pink/60 pb-6 pt-20">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="flex justify-center">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white">
              <Flower size={40} />
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center gap-6 text-center text-[10px] text-foreground lg:flex-row lg:justify-between lg:gap-0 lg:text-left">
            <div className="flex gap-4 text-coral">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Instagram">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                <path d="M6 9h3v12H6zM7.5 3a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM11 9h3v1.7c.5-.9 1.7-1.9 3.5-1.9 3.6 0 4.5 2.4 4.5 5.5V21h-3v-6c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21h-3z" />
              </svg>
            </div>
            <nav className="flex flex-wrap justify-center gap-5 lg:gap-10">
              {links.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </nav>
            <p>&copy; 2024 Shree Salon. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
