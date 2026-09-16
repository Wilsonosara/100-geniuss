import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

export default function HowItWorksStep({
  number,
  eyebrow,
  title,
  description,
  items = [],
  image,
  imageAlt = "",
  cta,
  reverse = false,
  hero = false,
  brandPosition = "right",
}) {
  const brandPositionClasses = {
    right: "-right-10 top-10",
    left: "-left-10 top-1/2 -translate-y-1/2",
  };

  return (
    <section
      className={
        hero
          ? "relative flex min-h-[85svh] items-center overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
          : "relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36"
      }
    >
      {/* Subtle 100GENIUS engraving */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute select-none whitespace-nowrap text-[5rem] font-black tracking-[-0.09em] text-[var(--color-primary)]/[0.035] sm:text-[7rem] lg:text-[9rem] ${brandPositionClasses[brandPosition]}`}
      >
        100GENIUS
      </div>

      <div className="container relative z-10 px-5 sm:px-8 lg:px-12">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <PopIn delay={0.15}>
            <div className="overflow-hidden rounded bg-[#f7faf8] p-2 sm:p-3">
              <div className="overflow-hidden rounded bg-[var(--color-surface)]">
                <div className="aspect-[4/3]">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading={hero ? "eager" : "lazy"}
                    fetchPriority={hero ? "high" : "auto"}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </PopIn>

          {/* Content */}
          <div className="max-w-xl">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/5 text-sm font-semibold text-[var(--color-primary)]">
                  {number}
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {eyebrow}
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="mt-6 text-balance font-bold text-[var(--color-foreground)]">
                {title}
              </h2>
            </FadeUp>

            {description && (
              <FadeUp delay={0.2}>
                <p className="mt-5 max-w-lg text-[var(--color-muted)]">
                  {description}
                </p>
              </FadeUp>
            )}

            {items.length > 0 && (
              <FadeUp delay={0.3}>
                <ul className="mt-7 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)] sm:text-base"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}

            {cta && (
              <FadeUp delay={0.3}>
                <a href={cta.href} className="cta-1 mt-8 w-fit">
                  {cta.label}
                  <ArrowUpRight size={17} />
                </a>
              </FadeUp>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}