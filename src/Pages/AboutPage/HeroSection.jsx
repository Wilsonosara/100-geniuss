import { ArrowUpRight, Users, BookOpen, Code2, Share2, BriefcaseBusiness } from "lucide-react";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";
const journeyStages = [
  {
    number: "01",
    title: "Learn",
    description:
      "Gain practical, in-demand skills through learning designed around real-world problems.",
    label: "Learn new skills",
    icon: BookOpen,

    // Temporary remote placeholder.
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Young people learning and collaborating together around a table",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn what you learn into real projects you can show, improve, and be proud of.",
    label: "Build real projects",
    icon: Code2,

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Developer working on a project with code displayed on a laptop",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Put your work out there, get feedback, build in public, and become visible to the right people.",
    label: "Share your journey",
    icon: Share2,

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Team members discussing and sharing ideas during a collaborative session",
  },
  {
    number: "04",
    title: "Get Hired",
    description:
      "Turn your skills, projects, network, and growing visibility into real opportunities.",
    label: "Unlock opportunities",
    icon: BriefcaseBusiness,

    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Young professional collaborating with colleagues in a modern workspace",
  },
];

export default function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="section-safe-top bg-[var(--color-background)]"
    >
      <div className="container">
        {/* 
          Main hero container.

          The rounded container creates the feeling that this is one
          intentional composition rather than several unrelated sections.
        */}
        <div className="relative overflow-hidden rounded border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/40 shadow-[0_20px_80px_rgba(12,40,21,0.08)]">
          {/* Very subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl"
          />

          <div className="relative">
            {/* =========================================================
                HERO HEADER
            ========================================================== */}
            <header className="px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-12 lg:pt-10">
              <nav
                aria-label="About 100 Genius"
                className="flex items-center justify-between gap-6"
              >
                <PopIn>
                <a
                  href="/community"
                  className="group inline-flex items-center gap-2 rounded bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-xl sm:px-5 sm:py-3"
                >
                  <Users
                    aria-hidden="true"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />

                  <span>Join Our Community</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                </PopIn>
              </nav>

              {/* Hero copy */}
              <div className="mt-14 grid items-end gap-8 lg:mt-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="max-w-4xl">
                  <FadeUp>
                  <h1
                    id="about-hero-title"
                    className="max-w-4xl text-balance font-bold text-[var(--color-foreground)]"
                  >
                    Learn. Build.
                    <span className="text-[var(--color-primary)]">Share.</span>
                    <br className="hidden sm:block" />
                    <span className="text-[var(--color-primary)]">
                      Get Hired.
                    </span>
                  </h1>
                  </FadeUp>

                    <FadeUp delay={0.1}>
                  <p className="mt-6 max-w-2xl text-pretty text-base text-[var(--color-muted)] sm:text-lg lg:text-xl">
                    We are building a community where ambitious people learn
                    practical skills, build real things, share their journey,
                    and create opportunities together.
                  </p>
                  </FadeUp>
                </div>

                {/* Small supporting statement */}
                <aside className="hidden lg:block lg:justify-self-end lg:max-w-xs">
                  <div className="border-l-2 border-[var(--color-primary)] pl-5">
                    <FadeUp delay={0.3}>
                    <p className="font-medium leading-relaxed text-[var(--color-foreground)]">
                      You don't have to figure out your future alone.
                    </p>
                    </FadeUp >

                       <FadeUp delay={0.5}>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      Learn alongside people who are building, sharing, and
                      moving forward with you.
                    </p>
                    </FadeUp>
                  </div>
                </aside>
              </div>
            </header>

            {/* =========================================================
                JOURNEY
            ========================================================== */}

            <div className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-5 lg:pb-5">
              <ol
                aria-label="The 100 Genius journey"
                className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {journeyStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <FadeUp delay={index / 10} key={stage.title + index}>
                    <li >
                      <article className="group relative isolate min-h-[31rem] overflow-hidden rounded bg-[var(--color-primary-deep)]">
                        {/* Image */}
                        <img
                          src={stage.image}
                          alt={stage.imageAlt}
                          loading="lazy"
                          className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Image treatment */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/5 via-[var(--color-primary-deep)]/35 to-[var(--color-primary-deep)]/95"
                        />

                        {/* Green tint */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 bg-[var(--color-primary)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                        />

                        {/* Content */}
                        <div className="flex h-full min-h-[31rem] flex-col justify-between p-5 sm:p-6">
                          {/* Top */}
                          <div className="flex items-start justify-between">
                            <span className="text-xs font-semibold tracking-[0.2em] text-white/65">
                              {stage.number}
                            </span>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[var(--color-primary)]">
                              <Icon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />
                            </div>
                          </div>

                          {/* Bottom */}
                          <div>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                              {stage.title}
                            </h2>

                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                              {stage.description}
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/65">
                                {stage.label}
                              </span>

                              <span
                                aria-hidden="true"
                                className="h-px flex-1 bg-white/25"
                              />

                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-primary-deep)]"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                    </FadeUp>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}