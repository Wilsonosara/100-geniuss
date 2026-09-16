import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FadeUp from "@/Components/animations/FadeUp";

const PARTNERS = [
  "Andela",
  "Flutterwave",
  "Paystack",
  "Interswitch",
  "SeamlessHR",
  "Cowrywise",
];

const STATS = [
  {
    id: "students",
    value: "500+",
    label: "Students Trained",
    gridClass: "col-span-1 md:col-span-3",
  },
  {
    id: "mentors",
    value: "20+",
    label: "Expert Mentors",
    gridClass: "col-span-1 md:col-span-2",
  },
  {
    id: "completion",
    value: "95%",
    label: "Completion Rate",
    gridClass: "col-span-1 md:col-span-2",
  },
  {
    id: "placement",
    value: "80%",
    label: "Job Placement Rate",
    gridClass: "col-span-1 md:col-span-3",
  },
];

export default function OutcomesSection() {
  return (
    <section
      className="section-spacing relative w-full overflow-hidden bg-background"
      aria-labelledby="outcomes-heading"
    >
      {/* Decorative Background Stripes */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 100px, var(--color-surface) 100px, var(--color-surface) 200px)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* =====================================================
            PARTNERS MARQUEE
        ====================================================== */}

        <FadeUp delay={0.05}>
          <div className="mb-20">
            <h3 className="text-xs md:text-sm font-semibold text-muted uppercase tracking-widest text-center mb-8">
              Our Graduates Work At
            </h3>

            <div className="overflow-hidden flex w-full group">
              <ul className="animate-marquee items-center gap-12 pr-12 text-muted font-medium text-sm md:text-base">
                {PARTNERS.map((partner) => (
                  <li
                    key={partner}
                    className="hover:text-foreground transition-colors cursor-default whitespace-nowrap"
                  >
                    {partner}
                  </li>
                ))}
              </ul>

              <ul
                className="animate-marquee items-center gap-12 pr-12 text-muted font-medium text-sm md:text-base"
                aria-hidden="true"
              >
                {PARTNERS.map((partner) => (
                  <li
                    key={partner}
                    className="hover:text-foreground transition-colors cursor-default whitespace-nowrap"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <FadeUp delay={0.1}>
          <div className="mb-12">
            <h2
              id="outcomes-heading"
              className="font-bold text-foreground text-center"
            >
              Real people. Real outcomes.{" "}
              <span className="text-primary">
                Numbers we stand behind.
              </span>
            </h2>
          </div>
        </FadeUp>

        {/* =====================================================
            OUTCOMES
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Stats Grid */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                index={index}
              />
            ))}
          </div>

          {/* Right Side: Hero Image */}

          <FadeUp delay={0.3}>
            <div className="w-full h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src="/path-to-your-image/dirt-bike.jpg"
                alt="Student navigating through a forest on a dirt bike"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ stat, index }) {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <motion.article
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-1 ${stat.gridClass}`}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 12,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Animated Number */}

      <AnimatedCounter
        value={stat.value}
        start={isInView}
        delay={0.15 + index * 0.08}
      />

      {/* Label */}

      <p className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-widest">
        {stat.label}
      </p>
    </motion.article>
  );
}

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  value,
  start,
  duration = 1.5,
  delay = 0,
}) {
  const [count, setCount] = useState(0);

  const number = parseInt(value.replace(/\D/g, ""), 10);

  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!start) return;

    let animationFrame;
    let timeout;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / (duration * 1000),
        1
      );

      // Premium ease-out curve
      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(Math.round(number * eased));

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    timeout = setTimeout(() => {
      animationFrame =
        requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [start, number, duration, delay]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={start ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3,
        delay,
      }}
      className="text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-sm"
    >
      {count}
      {suffix}
    </motion.p>
  );
}