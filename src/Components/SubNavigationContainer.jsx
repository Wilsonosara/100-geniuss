import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FadeUp from "./animations/FadeUp";
import ProgrammesSubNavCard from "./SubNavigation/ProgrammesSubNavCard";
import ContactSubNavCard from "./SubNavigation/ContactSubNavCard";

export default function SubNavigationContainer({
  open = true,
  onClose,
}) {
  const location = useLocation();
  console.log("Current location:", location.pathname);

  /*
   * Determine which sub-navigation content
   * should be displayed from the current URL.
   */
  const renderSubNavigation = () => {
    switch (location.pathname) {
      case "/programmes":
        return <ProgrammesSubNavCard />;

      case "/contact":
        return <ContactSubNavCard />;


      default:
        return null;
    }
  };

  /*
   * Lock the main document while the sub-navigation is open.
   * The sub-navigation gets its own scroll context.
   */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            fixed
            inset-x-0
            top-0
            z-40

            h-[90svh]

            max-md:h-[100svh]

            overflow-hidden

            bg-primary-deep
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          "
        >
          {/* =========================================
              ATMOSPHERIC BACKGROUND
          ========================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_20%,rgba(23,88,46,0.28),transparent_48%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(to_bottom,rgba(12,40,21,0.05),rgba(6,20,11,0.75))]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary/15
              blur-[120px]
            "
          />

          {/* =========================================
              ENGRAVED 100GENIUS
          ========================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              top-16
              select-none
              whitespace-nowrap

              text-[7rem]
              font-black
              tracking-[-0.09em]
              text-white/[0.025]

              sm:text-[9rem]
              md:text-[11rem]
              lg:text-[13rem]
            "
          >
            100GENIUS
          </div>

          {/* =========================================
              DECORATIVE CURVE — TOP RIGHT
          ========================================= */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[25%]
              -top-[30%]
              h-[600px]
              w-[600px]
              rounded-full
              border
              border-primary/50
              opacity-60
            "
            animate={{
              rotate: [0, 8, 0],
              x: [0, -8, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =========================================
              DECORATIVE CURVE — BOTTOM LEFT
          ========================================= */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-[40%]
              -left-[25%]
              h-[600px]
              w-[600px]
              rounded-full
              border
              border-[#6fbd89]/35
              opacity-50
            "
            animate={{
              rotate: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =========================================
              DIAGONAL LINE
          ========================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[-20%]
              top-[58%]
              h-px
              w-[140%]
              rotate-[-12deg]
              bg-gradient-to-r
              from-transparent
              via-primary/60
              to-transparent
              opacity-40
            "
          />

          {/* =========================================
              SCROLLABLE CONTENT

              IMPORTANT:
              data-lenis-prevent prevents your
              SmoothScroll / Lenis from stealing
              the wheel event.
          ========================================= */}

          <div
            data-lenis-prevent
            className="
              relative
              z-10

              h-full
              w-full

              overflow-y-auto
              overscroll-contain

              px-6
              pb-24

              pt-[5.75rem]

              sm:px-8
              md:px-10
              lg:px-12
              lg:pt-[6.5rem]

              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="mx-auto w-full max-w-7xl">

              {/* =================================
                  BACK BUTTON
              ================================= */}

              <FadeUp>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close sub-navigation"
                  className="
                    group
                    mb-10

                    flex
                    items-center
                    gap-2

                    text-sm
                    font-medium
                    text-white/45

                    transition-colors
                    duration-200

                    hover:text-white
                  "
                >
                  <ArrowLeft
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />

                  <span>Back</span>
                </button>
              </FadeUp>

              {/* =================================
                  URL-BASED SUB NAVIGATION
              ================================= */}

              {renderSubNavigation()}

            </div>
          </div>

          {/* =========================================
              SOFT BOTTOM FADE
          ========================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20

              h-10

              bg-gradient-to-t
              from-primary-deep
              via-primary-deep/70
              to-transparent
            "
          />

          {/* =========================================
              SOFT BOTTOM LINE
          ========================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              z-30

              h-px
              w-[75%]
              -translate-x-1/2

              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent

              blur-[0.5px]

              max-md:w-[90%]
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}