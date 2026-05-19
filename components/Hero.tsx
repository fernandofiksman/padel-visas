import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-89px)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-14">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8B6F4E]">
            Boutique immigration counsel for padel professionals
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-[#10281D] sm:text-6xl lg:text-7xl">
            U.S. Visas for Padel Professionals
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4D5B52] sm:text-xl">
            Helping players, coaches, and industry professionals build their
            future in the United States.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#contact">Schedule a Consultation</CTAButton>
            <CTAButton href="https://wa.me/13055550100" variant="secondary">
              WhatsApp Us
            </CTAButton>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-y border-[#163D2B]/10 py-5">
            {[
              ["O-1", "visa strategy"],
              ["Padel", "industry focus"],
              ["U.S.", "career expansion"]
            ].map(([value, label]) => (
              <div key={value}>
                <p className="font-serif text-2xl font-semibold text-[#163D2B]">
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#68766D]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#EDE4D5] shadow-[0_28px_80px_rgba(18,40,29,0.18)] lg:min-h-[620px]">
          <Image
            src="/images/hero-padel-court.png"
            alt="Padel player on a premium court"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,241,0.72),rgba(251,248,241,0.08)_42%,rgba(16,40,29,0.08))]" />
          <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl border border-white/50 bg-white/78 p-4 shadow-[0_18px_45px_rgba(16,40,29,0.16)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6F4E]">
              Miami to the world
            </p>
            <p className="mt-2 text-sm leading-6 text-[#30473B]">
              Built for international padel talent ready to train, compete,
              coach, invest, and grow in the United States.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
