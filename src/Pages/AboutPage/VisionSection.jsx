import { ArrowUpRight } from "lucide-react";

const visionCards = [
  {
    number: "01",
    title: "Grow Together",
    description:
      "We envision a community where ambitious people do not have to figure everything out alone. A place to learn from one another, exchange ideas, and keep moving forward.",
    className: "bg-[var(--color-primary-deep)]",
    top: "2rem", // Kept low but gave a tiny bit of breathing room from the viewport top
  },
  {
    number: "02",
    title: "Build With Purpose",
    description:
      "We want learning to lead somewhere — to projects, businesses, portfolios, experiments, and work that creates something meaningful.",
    className: "bg-[var(--color-primary-dark)]",
    top: "3rem", // Adjusted to stack 1rem below card 1
  },
  {
    number: "03",
    title: "Make Potential Visible",
    description:
      "Talent should not stay hidden. We want people to have a place to share what they are building, find their people, and become visible to opportunities.",
    className: "bg-[var(--color-primary)]",
    top: "4rem", // Adjusted to stack 1rem below card 2
  },
  {
    number: "04",
    title: "Create Opportunity",
    description:
      "Our vision is a community where relationships, skills, and shared progress open doors — turning ambition into possibilities that reach beyond the community.",
    className: "bg-[#228b4a]",
    top: "5rem", // Adjusted to stack 1rem below card 3
  },
];

export default function VisionSection() {
  return (
    <section
      aria-labelledby="vision-title"
      className="relative bg-[var(--color-background)]"
    >
      {/* Section intro */}
      <div className="container">
        <header className="px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
              Our Vision
            </p>

            <h2
              id="vision-title"
              className="text-balance text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-7xl"
            >
              A community built for people who want to{" "}
              <span className="text-[var(--color-primary)]">
                become more.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg lg:text-xl">
              We believe potential grows faster when ambitious people have
              the right community around them — people to learn with, build
              with, share with, and grow alongside.
            </p>
          </div>
        </header>
      </div>

      {/* Stacking cards */}
      <div className="container px-4 pb-32 sm:px-6 lg:px-8">
        {/* Parent holds the flex flow */}
        <div className="relative flex flex-col gap-0">
          {visionCards.map((card, index) => (
            /* 1. Wrapper element gets sticky, top, and z-index */
            <div
              key={card.number}
              className="sticky pb-[15vh] last:pb-0" // pb creates room for the next card to scroll up over this one
              style={{
                top: card.top,
                zIndex: index + 1,
              }}
            >
              {/* 2. Child element remains static inside its sticky wrapper */}
              <article
                className={`relative flex min-h-[28rem] w-full items-center overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_30px_100px_rgba(12,40,21,0.22)] sm:min-h-[34rem] lg:min-h-[38rem] ${card.className}`}
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/[0.07] blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-black/[0.08] blur-3xl"
                />

                <div className="relative flex min-h-[28rem] w-full flex-col justify-between p-7 sm:min-h-[34rem] sm:p-10 lg:min-h-[38rem] lg:p-14">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs font-semibold tracking-[0.25em] text-white/50">
                      {card.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:h-12 sm:w-12"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="max-w-4xl">
                    <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                      {card.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base lg:text-lg">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-10 flex items-center gap-4 sm:mt-12">
                    <span className="h-px w-12 bg-white/30 sm:w-20" />

                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                      100 Genius
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
