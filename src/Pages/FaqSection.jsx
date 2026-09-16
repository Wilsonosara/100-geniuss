import { useEffect, useRef, useState } from "react";
import FadeUp from "@/Components/animations/FadeUp";

const testimonials = [
  {
    initials: "DW",
    name: "Daniel Wesley",
    role: "Web Developer",
    quote:
      "100 Genius Academy completely changed my life. I went from zero experience to job-ready, and I have the mentors to thank for it.",
  },
  {
    initials: "AC",
    name: "Amanda Cole",
    role: "UI/UX Designer",
    quote:
      "The mentors don't just teach. They show you exactly what real work looks like. That's what turned me into a hireable designer.",
  },
  {
    initials: "BB",
    name: "Bamidele Bolu",
    role: "Junior Developer",
    quote:
      "It's intense. It's also the reason I'm working as a junior developer today. Every hour was worth it.",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative diagonal background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -left-[8%] top-[-20%] h-[150%] w-[18%] bg-background/80"
          style={{
            transform: "skewX(-24deg)",
          }}
        />

        <div
          className="absolute left-[24%] top-[-20%] h-[150%] w-[16%] bg-background/75"
          style={{
            transform: "skewX(-24deg)",
          }}
        />

        <div
          className="absolute left-[58%] top-[-20%] h-[150%] w-[17%] bg-background/75"
          style={{
            transform: "skewX(-24deg)",
          }}
        />

        <div
          className="absolute left-[88%] top-[-20%] h-[150%] w-[14%] bg-background/70"
          style={{
            transform: "skewX(-24deg)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <FadeUp>
            <h2
              id="testimonials-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              From first lesson to first job.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-1 text-2xl font-bold leading-tight text-primary sm:text-3xl">
              In their own words.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-foreground/65 sm:text-base">
              Three graduates. Three different tracks. One outcome: a career
              in tech.
            </p>
          </FadeUp>
        </header>

        {/* Testimonials */}
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[210px] flex-col rounded-xl border border-black/10 bg-background p-6 shadow-[0_10px_24px_rgba(12,40,21,0.18)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div
                aria-hidden="true"
                className="mb-5 text-4xl font-bold leading-none text-emerald-500"
              >
                “
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-sm leading-6 text-foreground sm:text-[15px]">
                  {testimonial.quote}
                </p>
              </blockquote>

              {/* Author */}
              <footer className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-background"
                >
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold leading-4 text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="text-[10px] leading-4 text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({ faq, isOpen, onToggle, index }) {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`
        overflow-hidden
        rounded-xl
        bg-background
        border
        transition-all
        duration-300
        ${
          isInView
            ? "border-primary border-[3px]"
            : "border-transparent"
        }
        ${
          isOpen
            ? "shadow-[0_6px_18px_rgba(0,0,0,0.14)]"
            : "shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
        }
      `}
    >
      <button
        id={questionId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface/40 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:px-6"
      >
        <span>{faq.question}</span>

        <span
          aria-hidden="true"
          className={`shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-surface px-5 py-4 sm:px-6">
            <p className="text-sm leading-6 text-foreground/75">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FAQ SECTION
========================================================= */

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      {/* Third section from footer */}
      <TestimonialsSection />

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="relative isolate overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"
      >
        {/* Decorative diagonal background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute -left-[8%] top-[-20%] h-[150%] w-[18%] bg-background/80"
            style={{
              transform: "skewX(-24deg)",
            }}
          />

          <div
            className="absolute left-[24%] top-[-20%] h-[150%] w-[16%] bg-background/75"
            style={{
              transform: "skewX(-24deg)",
            }}
          />

          <div
            className="absolute left-[58%] top-[-20%] h-[150%] w-[17%] bg-background/75"
            style={{
              transform: "skewX(-24deg)",
            }}
          />

          <div
            className="absolute left-[88%] top-[-20%] h-[150%] w-[14%] bg-background/70"
            style={{
              transform: "skewX(-24deg)",
            }}
          />
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <header className="mb-10 text-center sm:mb-12">
              <FadeUp>
                <h2
                  id="faq-heading"
                  className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
                >
                  Questions Before You Apply
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-foreground/65 sm:text-base">
                  Answers to the most common questions from prospective
                  students.
                </p>
              </FadeUp>
            </header>

            {/* FAQ */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}