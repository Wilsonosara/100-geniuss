
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import AppLayout from "@/Components/AppLayout";
import NavBar from "@/Components/NavBar";

export default function ComingSoon() {
  return (
    <AppLayout header={<NavBar />}>
      <main className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-primary-deep">
        {/* =====================================================
            ATMOSPHERIC BACKGROUND
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_30%,rgba(23,88,46,0.28),transparent_48%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-[linear-gradient(to_bottom,rgba(12,40,21,0.05),rgba(6,20,11,0.75))]
          "
        />

        {/* =====================================================
            CENTRAL GLOW
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/15
            blur-[120px]
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        {/* =====================================================
            ENGRAVED 100GENIUS
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            select-none
            whitespace-nowrap

            text-[5rem]
            font-black
            tracking-[-0.09em]

            text-white/[0.025]

            sm:text-[8rem]
            md:text-[11rem]
            lg:text-[14rem]
          "
        >
          100GENIUS
        </div>

        {/* =====================================================
            DECORATIVE CURVE — TOP RIGHT
        ===================================================== */}

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
            border-primary/40

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

        {/* =====================================================
            DECORATIVE CURVE — BOTTOM LEFT
        ===================================================== */}

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
            border-[#6fbd89]/30

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

        {/* =====================================================
            DIAGONAL LINE
        ===================================================== */}

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

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-4xl

            px-6
            py-24

            text-center

            sm:px-8
            md:px-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}

            <div
              className="
                mx-auto
                mb-7
                flex
                w-fit
                items-center
                gap-2

                rounded-full
                border
                border-primary/30
                bg-primary/[0.08]

                px-3
                py-1.5

                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              <Sparkles size={13} />

              <span>Something new is coming</span>
            </div>

            {/* Heading */}

            <h1
              className="
                mx-auto
                max-w-3xl

                text-5xl
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]

                text-white

                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
              "
            >
              We&apos;re building
              <br />

              <span className="text-white/40">
                what&apos;s next.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-xl

                text-sm
                leading-7
                text-white/50

                sm:text-base
              "
            >
              This part of 100 Genius is still taking shape.
              We&apos;re working behind the scenes to build
              something worth coming back for.
            </p>

            {/* Status */}

            <div
              className="
                mx-auto
                mt-9
                flex
                w-fit
                items-center
                gap-2

                text-xs
                font-medium
                text-white/35
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-primary
                "
              />

              <span>Currently in development</span>
            </div>

            {/* Divider */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mx-auto
                my-9
                h-px
                max-w-[180px]
                origin-center
                bg-white/[0.08]
              "
            />

            {/* CTA */}

            <motion.a
              href="/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                mx-auto
                flex
                w-fit
                items-center
                gap-3

                rounded
                bg-white

                px-5
                py-3

                text-sm
                font-semibold
                text-primary-deep

                transition-all
                duration-300

                hover:bg-white/90
              "
            >
              <span>Back to home</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>
          </motion.div>
        </div>
      </main>
    </AppLayout>
  );
}





