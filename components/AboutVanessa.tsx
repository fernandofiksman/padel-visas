import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function AboutVanessa() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.5rem] bg-[#EDE4D5] shadow-[0_24px_70px_rgba(18,40,29,0.14)]">
          <Image
            src="/images/vanessa-cohen.jpg"
            alt="Vanessa Cohen"
            fill
            sizes="(max-width: 1024px) 100vw, 36vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B6F4E]">
            About Vanessa Cohen
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#10281D] sm:text-5xl">
            Sophisticated legal strategy with a personal understanding of
            international ambition.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#526057]">
            <p>
              Vanessa Cohen helps athletes, creators, operators, and founders
              translate a career of achievement into a compelling U.S.
              immigration case.
            </p>
            <p>
              Her approach is boutique, meticulous, and deeply collaborative:
              clarify the story, shape the evidence, and make the petition feel
              as strong as the career behind it.
            </p>
          </div>
          <CTAButton href="#contact" variant="secondary" className="mt-8">
            Schedule With Vanessa
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
