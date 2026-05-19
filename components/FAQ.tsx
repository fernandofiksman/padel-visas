const faqs = [
  {
    question: "Can padel players qualify for an O-1 visa?",
    answer:
      "Yes. The O-1 can fit athletes with strong evidence of distinction, recognition, competitive results, media, sponsorships, or other markers of extraordinary ability."
  },
  {
    question: "Is the O-1 only for players?",
    answer:
      "No. Coaches, club leaders, tournament professionals, creators, academy owners, trainers, and brand operators may also have viable paths depending on their achievements."
  },
  {
    question: "What kind of U.S. opportunity do I need?",
    answer:
      "The petition should connect your extraordinary ability to specific U.S. work, such as competing, coaching, running events, growing an academy, creating media, or expanding a brand."
  },
  {
    question: "How early should I start?",
    answer:
      "Start as soon as a U.S. opportunity is realistic. Strong petitions benefit from time to gather evidence, secure letters, and shape the case strategy."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B6F4E]">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#10281D] sm:text-5xl">
            Common questions, answered clearly.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-[#163D2B]/10 rounded-lg border border-[#163D2B]/10 bg-white">
          {faqs.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold text-[#163D2B]">
                {item.question}
                <span className="text-2xl leading-none text-[#8B6F4E] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5A675E]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
