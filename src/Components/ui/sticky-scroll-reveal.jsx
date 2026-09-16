import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => {
      if (cardLength === 1) return 0;

      return index / (cardLength - 1);
    });

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        const currentDistance = Math.abs(
          latest - cardsBreakpoints[acc]
        );

        return distance < currentDistance ? index : acc;
      },
      0
    );

    setActiveCard(closestBreakpointIndex);
  });

  /* Brand background progression */
  const backgroundColors = [
    "#071c10",
    "#0d2f1b",
    "#143f23",
    "#17582e",
  ];

  /* Brand gradients */
  const linearGradients = [
    "linear-gradient(135deg, #071c10 0%, #17582e 100%)",
    "linear-gradient(135deg, #0d2f1b 0%, #1d6b3a 100%)",
    "linear-gradient(135deg, #143f23 0%, #2d7a4a 100%)",
    "linear-gradient(135deg, #17582e 0%, #228b4a 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] =
    useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[
        activeCard % linearGradients.length
      ]
    );
  }, [activeCard]);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor:
          backgroundColors[
            activeCard % backgroundColors.length
          ],
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="
        relative
        flex
        h-[40rem]
        w-full
        justify-center
        gap-[clamp(2rem,5vw,6rem)]
        overflow-y-auto
        rounded-[clamp(1rem,2vw,1.5rem)]
        p-[clamp(1rem,3vw,3rem)]
         scrollbar-hidden
      "
    >
      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <div
        className="
          relative
          flex
          w-full
          max-w-2xl
          items-start
          px-[clamp(0.25rem,1vw,1rem)]
        "
      >
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="
                pt-[clamp(5rem,10vh,8rem)]
                first:pt-[clamp(2rem,4vh,3rem)]
              "
            >
              {/* Number */}

              <motion.p
                animate={{
                  opacity:
                    activeCard === index ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/55
                "
              >
                {String(index + 1).padStart(2, "0")}
              </motion.p>

              {/* Title */}

              <motion.h3
                animate={{
                  opacity:
                    activeCard === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.3 }}
                className="
                  max-w-xl
                  text-[clamp(2rem,4.5vw,3.5rem)]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-white
                "
              >
                {item.title}
              </motion.h3>

              {/* Description */}

              <motion.p
                animate={{
                  opacity:
                    activeCard === index ? 0.75 : 0.35,
                }}
                transition={{ duration: 0.3 }}
                className="
                  mt-5
                  max-w-lg
                  text-[clamp(1rem,1.2vw,1.125rem)]
                  leading-[1.65]
                  text-white/70
                "
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          {/* Bottom scroll runway */}
          <div className="h-[40svh]" />
        </div>
      </div>

      {/* =====================================================
          RIGHT STICKY VISUAL
      ====================================================== */}

      <motion.div
        animate={{
          background: backgroundGradient,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className={cn(
          `
            sticky
            top-[5vh]
            hidden
            h-[25rem]
            w-[clamp(18rem,32vw,30rem)]
            shrink-0
            self-start
            overflow-hidden
            rounded-[clamp(1rem,2vw,1.5rem)]
            border
            border-white/10
            shadow-[0_25px_80px_rgba(7,28,16,0.3)]
            lg:flex
            lg:items-center
            lg:justify-center
          `,
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </motion.div>
    </motion.div>
  );
};