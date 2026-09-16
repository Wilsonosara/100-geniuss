import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import AppLayout from "@/Components/AppLayout";
import NavBar from "@/Components/NavBar";

export default function NotFoundPage() {
  return (
    <AppLayout header={<NavBar />}>
      <main className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-primary-deep">
        {/* =====================================================
            ATMOSPHERE
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_45%,rgba(23,88,46,0.24),transparent_48%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-[linear-gradient(to_bottom,rgba(12,40,21,0.05),rgba(6,20,11,0.8))]
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

            text-[7rem]
            font-black
            tracking-[-0.09em]

            text-white/[0.025]

            sm:text-[10rem]
            md:text-[14rem]
            lg:text-[18rem]
          "
        >
          100GENIUS
        </div>

        {/* =====================================================
            DECORATIVE CURVE
        ===================================================== */}

        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[30%]
            -top-[35%]

            h-[650px]
            w-[650px]

            rounded-full
            border
            border-primary/40

            opacity-60
          "
          animate={{
            rotate: [0, 7, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
            max-w-3xl

            px-6
            py-24

            text-center

            sm:px-8
            md:px-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            {/* 404 */}

            <p
              className="
                text-[7rem]
                font-black
                leading-none
                tracking-[-0.08em]

                text-white

                sm:text-[9rem]
                md:text-[11rem]
              "
            >
              404
            </p>

            {/* Heading */}

            <h1
              className="
                mt-2

                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.04em]

                text-white

                sm:text-4xl
              "
            >
              This page got lost.
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-4
                max-w-md

                text-sm
                leading-7
                text-white/45

                sm:text-base
              "
            >
              The page you&apos;re looking for doesn&apos;t
              exist, may have moved, or isn&apos;t ready yet.
            </p>

            {/* Actions */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:flex-row
              "
            >
              <button
                type="button"
                onClick={() => window.history.back()}
                className="
                  group
                  flex
                  items-center
                  gap-2

                  rounded
                  border
                  border-white/[0.10]
                  bg-white/[0.03]

                  px-5
                  py-3

                  text-sm
                  font-medium
                  text-white/70

                  transition-all
                  duration-300

                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <ArrowLeft
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />

                <span>Go back</span>
              </button>

              <Link
                to="/"
                className="
                  group
                  flex
                  items-center
                  gap-2

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
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </AppLayout>
  );
}