import { CTAButton } from "./CTAButton";

export function VisaIntro() {
  return (
    <section id="o1-visa" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B6F4E]">
            What is an O-1 visa?
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#10281D] sm:text-5xl">
            A visa pathway for extraordinary ability.
          </h2>
          <CTAButton href="#contact" variant="secondary" className="mt-8">
            Discuss Eligibility
          </CTAButton>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Evidence", "Awards, rankings, press, contracts, appearances, memberships, and proof of commercial or cultural impact."],
            ["Narrative", "A clear argument connecting padel achievements to the U.S. opportunity and the standards USCIS evaluates."],
            ["Execution", "A polished petition package, timeline management, and guidance from strategy through filing."]
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-lg bg-white p-6 shadow-[0_20px_55px_rgba(18,40,29,0.08)]"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#163D2B]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5A675E]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
