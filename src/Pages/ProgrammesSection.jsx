import { Link } from "react-router-dom";
import programsData from "@/programmeData";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";


function TrackVisual({ type }) {
  if (type === "web") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute left-[18%] top-[16%] h-[70%] w-[62%] rounded-md border border-green-500/50 bg-primary-deep/80">
          <div className="border-b border-green-500/20 px-3 py-2">
            <div className="h-1.5 w-8 rounded-full bg-green-400/70" />
          </div>

          <div className="space-y-3 px-3 py-4">
            <div className="h-1 w-2/3 rounded-full bg-green-400/60" />
            <div className="h-1 w-4/5 rounded-full bg-white/15" />
            <div className="h-1 w-1/2 rounded-full bg-white/15" />
            <div className="h-1 w-3/4 rounded-full bg-green-400/40" />
            <div className="h-1 w-2/5 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 bg-emerald-500 px-3 py-1.5 text-[7px] font-bold uppercase tracking-wide text-white sm:text-[8px]">
          100 Genius Track
        </div>
      </div>
    );
  }

  if (type === "data") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-x-[15%] bottom-[15%] flex h-[65%] items-end justify-center gap-3">
          {[35, 58, 82, 48, 70].map((height, index) => (
            <div
              key={index}
              className="w-[11%] rounded-t bg-green-500/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <svg
          viewBox="0 0 300 150"
          className="absolute inset-[12%] h-[70%] w-[70%]"
          fill="none"
          aria-hidden="true"
        >
          <polyline
            points="10,110 65,70 120,95 175,40 235,65"
            stroke="rgb(167 243 208 / 0.7)"
            strokeWidth="3"
          />
        </svg>

        <div className="absolute bottom-0 right-0 bg-emerald-500 px-3 py-1.5 text-[7px] font-bold uppercase tracking-wide text-white sm:text-[8px]">
          100 Genius Track
        </div>
      </div>
    );
  }

  if (type === "design") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute left-[35%] top-[14%] h-[75%] w-[35%] rounded-xl border border-green-500/40 bg-primary-deep/80">
          <div className="border-b border-green-500/20 px-2 py-2">
            <div className="h-1 w-8 rounded-full bg-white/20" />
          </div>

          <div className="space-y-2 p-3">
            <div className="h-12 rounded bg-green-500/20" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            <div className="h-8 rounded bg-green-500/30" />
          </div>
        </div>

        <div className="absolute left-[25%] top-[40%] text-3xl text-green-400">
          ↗
        </div>

        <div className="absolute bottom-0 right-0 bg-emerald-500 px-3 py-1.5 text-[7px] font-bold uppercase tracking-wide text-white sm:text-[8px]">
          100 Genius Track
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/50">
        <div className="absolute inset-3 grid place-items-center rounded-full border border-green-400/30">
          <div className="grid size-8 place-items-center rounded-md bg-green-600/50 text-sm text-green-200">
            🔒
          </div>
        </div>
      </div>

      <div className="absolute left-[20%] top-[25%] size-1.5 rounded-full bg-green-400" />
      <div className="absolute right-[20%] top-[65%] size-1.5 rounded-full bg-green-400" />
      <div className="absolute left-[50%] top-[10%] size-1.5 rounded-full bg-green-400" />

      <div className="absolute bottom-0 right-0 bg-emerald-500 px-3 py-1.5 text-[7px] font-bold uppercase tracking-wide text-white sm:text-[8px]">
        100 Genius Track
      </div>
    </div>
  );
}

function TrackCard({ programme, index }) {
  return (
    <PopIn delay={0.1 + index * 0.1} className="h-full min-w-0">
      <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-background shadow-lg transition-transform duration-300 hover:-translate-y-1">
        {/* Visual */}
        <div className="relative h-36 shrink-0 bg-primary-dark sm:h-40">
          {/* Category */}
          <div className="absolute left-2 top-2 z-10 rounded-full bg-background px-3 py-1 text-[8px] font-semibold text-primary-dark sm:text-[9px]">
            {programme.category}
          </div>

          {/* Duration */}
          <div className="absolute right-2 top-2 z-10 rounded-full bg-background px-3 py-1 text-[8px] font-semibold text-primary-dark sm:text-[9px]">
            {programme.duration}
          </div>

          <TrackVisual type={programme.visual} />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <div className="flex-1 p-4 sm:p-5">
            <h3 className="text-sm font-bold leading-snug text-foreground sm:text-base">
              {programme.title}
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-muted sm:text-xs">
              {programme.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] text-muted sm:text-[10px]">
              <span className="flex items-center gap-1">
                <span aria-hidden="true">◷</span>
                {programme.duration}
              </span>

              <span>{programme.price}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center border-t border-surface-muted">
            <span className="px-4 py-3 text-[9px] text-muted sm:px-5 sm:text-[10px]">
              {programme.level}
            </span>

            <Link
              to={`/programme/${programme.slug}`}
              aria-label={`Start ${programme.title} track`}
              className="ml-auto flex items-center gap-2 border-l border-surface-muted px-4 py-3 text-[9px] font-semibold text-emerald-600 transition-colors hover:bg-primary hover:text-white sm:px-5 sm:text-[10px]"
            >
              Start This Track
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </PopIn>
  );
}

export default function TracksSection() {
  return (
    <section
      aria-labelledby="tracks-title"
      className="bg-primary-deep py-20 text-background sm:py-24 lg:py-28"
      id="programmes"
    >
      <div className="container">
        {/* Section introduction */}
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <FadeUp>
            <h2 id="tracks-title" className="text-background">
              Four Tracks. One Goal: Get You Hired.
            </h2>
          </FadeUp>


          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-[15px]">
              Choose the discipline that matches where you want to go. Every
              track is built around projects, mentorship, and career placement.
              Not lectures.
            </p>
          </FadeUp>
        </header>

        {/* Programme tracks */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {programsData.map((programme, index) => (
            <TrackCard
              key={programme.slug}
              programme={programme}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
