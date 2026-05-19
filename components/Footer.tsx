import Link from "next/link";
import { CTAButton } from "./CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-[#163D2B]/10 bg-[#10281D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl font-semibold">Padel Visas</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Boutique immigration strategy for padel athletes, coaches, creators,
            founders, and the professionals building the sport in the United States.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D7C4A3]">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            <Link href="#who-we-help" className="hover:text-white">
              Who We Help
            </Link>
            <Link href="#o1-visa" className="hover:text-white">
              O-1 Visa
            </Link>
            <Link href="#about" className="hover:text-white">
              About Vanessa
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D7C4A3]">
            Start
          </p>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Tell us about your padel career, U.S. opportunity, and timeline.
          </p>
          <CTAButton href="#contact" variant="light" className="mt-5">
            Book a Consultation
          </CTAButton>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/52">
        © 2026 Padel Visas. Attorney advertising. No attorney-client relationship
        is formed by submitting information through this website.
      </div>
    </footer>
  );
}
