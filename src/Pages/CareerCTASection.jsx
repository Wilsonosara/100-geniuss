import { Link } from "react-router-dom";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

export default function CareerCTASection({ slug }) {
  const applyUrl = slug ? `/apply?programme=${slug}` : "/apply";

  return (
    <section
      aria-labelledby="career-cta-title"
      className="bg-primary-deep text-background"
    >
      <div className="container">
        <div className="flex min-h-[480px] flex-col items-center justify-center py-20 text-center sm:min-h-[520px] sm:py-24 lg:min-h-[560px] lg:py-28">
          
          {/* Eyebrow */}
          <FadeUp>
            <p className="mb-5 rounded-full bg-primary/40 px-3 py-1 text-[clamp(0.55rem,0.7vw,0.7rem)] font-semibold uppercase tracking-[0.16em] text-green-400">
              Ready to start?
            </p>
          </FadeUp>

          {/* Main heading */}
          <FadeUp delay={0.1}>
            <h2
              id="career-cta-title"
              className="max-w-3xl text-background"
            >
              Your Tech Career Is{" "}
              <span className="text-emerald-400">
                One Decision Away
              </span>
            </h2>
          </FadeUp>

          {/* Supporting copy */}
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-2xl text-[clamp(0.875rem,1vw,1rem)] leading-7 text-white/55">
              The next cohort is filling fast. Apply today and take the
              first step toward a career in tech, backed by mentors who
              have already done it.
            </p>
          </FadeUp>

          {/* CTAs */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <PopIn delay={0.3}>
              <Link
                to={applyUrl}
                className="cta-1 min-h-10 w-full justify-center px-6 py-3 text-sm sm:w-auto"
                aria-label={
                  slug
                    ? "Apply for this technology programme"
                    : "Apply for the next technology programme cohort"
                }
              >
                Apply for the Next Cohort
                <span aria-hidden="true">→</span>
              </Link>
            </PopIn>

            <PopIn delay={0.4}>
              <Link
                to="https://wa.me/2349167636839?text=Hello%20100%20Genius%2C%20I%27d%20like%20to%20learn%20more."
                target="_blank"
                className="
                  flex
                  min-h-10
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-white/30
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-background
                  transition-colors
                  hover:border-white/60
                  hover:bg-white/5
                  sm:w-auto
                "
                aria-label="Talk to a technology programme mentor"
              >
                Talk to a Mentor
              </Link>
            </PopIn>
          </div>

          {/* Supporting qualification */}
          <FadeUp delay={0.5}>
            <p className="mt-6 text-[clamp(0.6rem,0.7vw,0.7rem)] text-white/30">
              No experience needed · In-person & online · Lagos, Nigeria
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}