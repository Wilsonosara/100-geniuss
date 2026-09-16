import { ArrowRight, Search } from "lucide-react";
import heroImage from "/images/hero-img.webp";
import { Link } from "react-router-dom";
import programsData from "@/programmeData";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

export default function HeroSection({ programme }) {
  const isProgrammeHero = Boolean(programme);

  const currentIndex = programme
    ? programsData.findIndex((item) => item.slug === programme.slug)
    : -1;

  const nextProgramme =
    currentIndex !== -1
      ? programsData[(currentIndex + 1) % programsData.length]
      : null;

  const backgroundImage = programme?.image || heroImage;

  return (
    <section
      className="
        relative
        flex
        min-h-dvh
        items-center
        overflow-hidden
        bg-primary-deep
        section-safe-top
      "
    >
      {/* Fallback background */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          bg-primary-deep
          grid-background
        "
      />

      {/* Background image */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Hero gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[image:var(--gradient-hero)]
        "
      />

      {/* Content */}
      <div className="container relative z-10 flex-1">
        <div className="flex max-w-[650px] flex-col gap-3 max-md:gap-14">
          {isProgrammeHero ? (
            <>
              <FadeUp delay={0.1}>
                <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
                  {programme.hero?.eyebrow}
                </span>
              </FadeUp>

              <FadeUp delay={0.2}>
                <h1 className="fw-extrabold text-background text-shadow-lg">
                  {programme.hero?.title || programme.title}
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="text-surface">
                  {programme.hero?.description || programme.description}
                </p>
              </FadeUp>

              <PopIn delay={0.4}>
                <div className="flex flex-wrap gap-4 max-md:flex-col">
                  <Link
                    to={`/apply?programme=${programme.slug}`}
                    className="cta-1 flex flex-1 items-center justify-center"
                  >
                    {programme.hero?.cta || "Start Learning"}
                    <ArrowRight strokeWidth={1.5} size={18} />
                  </Link>

                  {nextProgramme && (
                    <Link
                      to={`/programme/${nextProgramme.slug}`}
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        border-2
                        border-text-background
                        py-1.5
                        text-center
                        text-background
                        transition-all
                        duration-200
                        ease-out
                        hover:bg-background
                        hover:text-primary
                      "
                    >
                      Next: {nextProgramme.shortTitle}
                      <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              </PopIn>
            </>
          ) : (
            <>
              <FadeUp delay={0.15}>
                <h1 className="fw-extrabold text-background text-shadow-lg">
                  Turn Your Tech Ambition
                  <span className="text-green-400">
                    &nbsp; Into a Paying Career
                  </span>
                  &nbsp;in 6 Months
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="text-surface">
                  Join 500+ graduates who built real skills, real portfolios,
                  and landed real jobs through hands-on mentorship in Full-Stack
                  Web Dev, Data Analytics, UI/UX Design, and Cybersecurity.
                </p>
              </FadeUp>

              <PopIn delay={0.45}>
                <div className="flex flex-wrap gap-4 max-md:flex-col">
                  <Link
                    to="/apply"
                    className="cta-1 flex flex-1 items-center justify-center"
                  >
                    Apply For The Next Cohort
                    <ArrowRight strokeWidth={1.5} size={18} />
                  </Link>

                  <a
                    href="#programmes"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      border-2
                      border-text-background
                      py-1.5
                      text-center
                      text-background
                      transition-all
                      duration-200
                      ease-out
                      hover:bg-background
                      hover:text-primary
                    "
                  >
                    Explore Programmes
                    <Search size={18} />
                  </a>
                </div>
              </PopIn>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
