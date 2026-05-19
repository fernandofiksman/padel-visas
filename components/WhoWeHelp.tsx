const audiences = [
  "Padel players",
  "Coaches",
  "Club directors",
  "Tournament professionals",
  "Academy owners",
  "Content creators",
  "Fitness trainers",
  "Padel brands"
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B6F4E]">
            Who we help
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#10281D] sm:text-5xl">
            Immigration strategy for the people shaping padel.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience}
              className="rounded-lg border border-[#163D2B]/10 bg-[#FBF8F1] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#163D2B]/25"
            >
              <div className="mb-8 h-1.5 w-12 rounded-full bg-[#163D2B]" />
              <h3 className="font-serif text-2xl font-semibold text-[#163D2B]">
                {audience}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#5A675E]">
                Position your achievements, influence, and U.S. opportunities
                within a thoughtful O-1 visa case narrative.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
