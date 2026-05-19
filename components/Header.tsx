import Link from "next/link";
import { CTAButton } from "./CTAButton";

const navItems = [
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#o1-visa", label: "O-1 Visa" },
  { href: "#about", label: "About Vanessa" },
  { href: "#faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#163D2B]/10 bg-[#FBF8F1]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Padel Visas home">
          <span className="block font-serif text-2xl font-semibold tracking-normal text-[#163D2B]">
            Padel Visas
          </span>
          <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8B6F4E]">
            O-1 Immigration Counsel
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-semibold text-[#30473B] lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#8B6F4E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CTAButton href="#contact" variant="secondary">
            Schedule a Consultation
          </CTAButton>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-2 overflow-x-auto border-t border-[#163D2B]/8 px-5 py-3 text-sm font-semibold text-[#30473B] sm:px-8 lg:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-[#163D2B]/10 bg-white/70 px-4 py-2 transition hover:text-[#8B6F4E]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
