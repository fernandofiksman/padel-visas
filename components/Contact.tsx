import { CTAButton } from "./CTAButton";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <aside className="rounded-lg bg-[#10281D] p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D7C4A3]">
            Consultation
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold">
            Start with a focused eligibility conversation.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/72">
            Share your achievements, proposed U.S. work, and timing. We will
            help you understand whether an O-1 strategy is worth exploring.
          </p>
          <CTAButton
            href="https://wa.me/13055550100"
            variant="light"
            className="mt-8"
          >
            WhatsApp Us
          </CTAButton>
        </aside>

        <form className="grid gap-5 rounded-lg border border-[#163D2B]/10 bg-[#FBF8F1] p-6 sm:p-8">
          {[
            ["Name", "Your full name"],
            ["Email", "you@example.com"],
            ["Role in padel", "Player, coach, founder, creator..."],
            ["U.S. opportunity", "What are you planning to do?"]
          ].map(([label, placeholder]) => (
            <label
              key={label}
              className="grid gap-2 text-sm font-semibold text-[#30473B]"
            >
              {label}
              <input
                className="min-h-12 rounded-lg border border-[#163D2B]/12 bg-white px-4 text-base outline-none transition focus:border-[#163D2B]/45 focus:ring-4 focus:ring-[#163D2B]/10"
                placeholder={placeholder}
              />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-semibold text-[#30473B]">
            Message
            <textarea
              className="min-h-36 rounded-lg border border-[#163D2B]/12 bg-white px-4 py-3 text-base outline-none transition focus:border-[#163D2B]/45 focus:ring-4 focus:ring-[#163D2B]/10"
              placeholder="Tell us about your achievements, timeline, and goals."
            />
          </label>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#163D2B] px-6 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(22,61,43,0.18)] transition hover:bg-[#0F2F21]"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
