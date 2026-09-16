import { useEffect, useRef, useState } from "react";
import FadeUp from "@/Components/animations/FadeUp";

function JourneyCard({
  step,
  index,
  isEven,
  isActive,
  onEnter,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter(index);
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [index, onEnter]);

  return (
    <>
      {/* Timeline node */}
      <FadeUp
        delay={0.05}
        className="absolute left-5 top-8 z-10 md:left-1/2"
      >
        <div
          aria-hidden="true"
          className={`
            flex
            size-3
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-2
            border-background
            transition-all
            duration-300
            ${
              isActive
                ? "bg-primary shadow-[0_0_0_5px_rgba(23,88,46,0.22)]"
                : "bg-primary shadow-[0_0_0_4px_rgba(23,88,46,0.12)]"
            }
          `}
        />
      </FadeUp>

      {/* Step card */}
      <FadeUp
        delay={0.1}
        className="
          relative
          ml-10
          w-[calc(100%-2.5rem)]
          md:ml-0
          md:w-[calc(50%-2.5rem)]
        "
      >
        <article
          ref={cardRef}
          className={`
            relative
            w-full
            rounded-xl
            border-2
            bg-background
            p-5
            shadow-[0_8px_30px_rgba(12,40,21,0.08)]
            transition-all
            duration-200
            sm:p-6
            lg:p-7

            ${
              isActive
                ? "border-primary shadow-[0_14px_35px_rgba(23,88,46,0.16)]"
                : "border-surface-muted hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(12,40,21,0.12)]"
            }
          `}
        >
          {/* Connector */}
          <span
            aria-hidden="true"
            className={`
              absolute
              top-8
              hidden
              h-px
              w-10
              transition-colors
              duration-200
              md:block
              ${
                isEven
                  ? "md:-right-10"
                  : "md:-left-10"
              }
              ${
                isActive
                  ? "bg-primary"
                  : "bg-surface-muted"
              }
            `}
          />

          {/* Card header */}
          <div className="flex items-start justify-between gap-4">
            <span
              className="
                text-sm
                font-bold
                tracking-wide
                text-primary
                sm:text-base
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {step.weeks && (
              <span
                className="
                  shrink-0
                  rounded-full
                  bg-surface
                  px-3
                  py-1
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-muted
                  sm:text-xs
                "
              >
                {step.weeks}
              </span>
            )}
          </div>

          {/* Card content */}
          <div className="mt-5">
            <h3
              className={`
                text-lg
                font-bold
                leading-tight
                transition-colors
                duration-200
                sm:text-xl
                ${
                  isActive
                    ? "text-primary"
                    : "text-foreground"
                }
              `}
            >
              {step.title}
            </h3>

            <p
              className={`
                mt-3
                text-sm
                leading-6
                transition-colors
                duration-200
                sm:text-[0.95rem]
                ${
                  isActive
                    ? "text-primary/80"
                    : "text-muted"
                }
              `}
            >
              {step.description}
            </p>
          </div>
        </article>
      </FadeUp>
    </>
  );
}

export default function JourneySection({ programme }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalWeeks = programme?.duration?.match(/\d+/)?.[0];

  if (!programme?.steps?.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="programme-journey-title"
      className="bg-background section-spacing overflow-hidden"
    >
      <div className="container">
        {/* Section heading */}
        <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
          <FadeUp>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Programme Roadmap
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              id="programme-journey-title"
              className="text-foreground"
            >
              Your Journey to Genius
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              A structured learning path
              {totalWeeks ? ` across ${totalWeeks} weeks` : ""}
              {" "}designed to take you from foundational skills to
              practical, real-world projects.
            </p>
          </FadeUp>
        </header>

        {/* Timeline */}
        <ol className="relative mx-auto max-w-5xl">
          {/* Central timeline */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-surface-muted
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {programme.steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <li
                key={`${step.title}-${index}`}
                className={`
                  relative
                  mb-10
                  last:mb-0
                  md:mb-14
                  lg:mb-16
                  md:flex
                  md:items-center
                  ${
                    isEven
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >
                <JourneyCard
                  step={step}
                  index={index}
                  isEven={isEven}
                  isActive={activeIndex === index}
                  onEnter={setActiveIndex}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}