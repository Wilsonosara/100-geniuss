
import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import  programsData from '../../programmeData'
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

export default function ProgrammesSubNavCard() {
  return (
    <section
      aria-labelledby="programme-navigation-title"
      className="relative"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <FadeUp>
        <div className="max-w-2xl">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            100 Genius Programmes
          </p>

          <h2
            id="programme-navigation-title"
            className="
              mt-3
              text-4xl
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              text-background
              sm:text-5xl
              md:text-6xl
            "
          >
            Explore our programmes
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-surface-muted
              sm:text-base
            "
          >
            Choose a practical learning programme designed to help you
            develop in-demand skills, build real-world projects, and
            prepare for meaningful career opportunities.
          </p>
        </div>
      </FadeUp>

      {/* =========================================================
          PROGRAMMES
      ========================================================= */}

      <div
        className="
          mt-10
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {programsData.map((program, index) => (
          <PopIn key={program.slug} delay={index * 0.06}>
            <Link
              to={`/programme/${program.slug}`}
              aria-label={`Explore ${program.title} programme`}
              className="
                group
                relative
                flex
                h-full
                min-h-[230px]
                flex-col
                overflow-hidden
                rounded
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/35
                hover:bg-white/[0.045]
                focus:outline-none
                focus:ring-2
                focus:ring-primary/60
                focus:ring-offset-2
                focus:ring-offset-primary-deep
              "
            >
              {/* subtle hover glow */}
              <motion.div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-primary
                    "
                  >
                    {program.category}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    text-white/45
                    transition-all
                    duration-300
                    group-hover:border-primary/40
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </div>

              {/* =================================================
                  PROGRAMME CONTENT
              ================================================= */}

              <div className="relative mt-7">
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-background
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-2xl
                  "
                >
                  {program.title}
                </h3>

                <p
                  className="
                    mt-3
                    line-clamp-3
                    text-sm
                    leading-6
                    text-surface-muted/75
                  "
                >
                  {program.description}
                </p>
              </div>

              {/* =================================================
                  PROGRAMME META
              ================================================= */}

              <div
                className="
                  relative
                  mt-auto
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  border-t
                  border-white/[0.07]
                  pt-4
                "
              >
                <span className="flex items-center gap-1.5 text-xs text-white/45">
                  <Clock3 size={13} strokeWidth={1.7} />
                  {program.duration}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-white/45">
                  <Layers3 size={13} strokeWidth={1.7} />
                  {program.level}
                </span>
              </div>

              {/* =================================================
                  BOTTOM CTA
              ================================================= */}

              <div
                className="
                  relative
                  mt-4
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.07]
                  pt-4
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    text-background
                  "
                >
                  {program.price}
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  View programme →
                </span>
              </div>
            </Link>
          </PopIn>
        ))}
      </div>

      {/* =========================================================
          SEO / DISCOVERY SUPPORT
      ========================================================= */}

      <FadeUp delay={0.25}>
        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.07]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="max-w-xl text-xs leading-6 text-white/35">
            Explore frontend development, data analysis, cybersecurity,
            and full-stack development programmes from 100 Genius.
          </p>

          <Link
            to="/programmes"
            className="
              shrink-0
              text-sm
              font-semibold
              text-primary
              transition-colors
              hover:text-white
            "
          >
            View all programmes
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
