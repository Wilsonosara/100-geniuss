import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

// 
import wilson from "@/assets/founders/wilson.webp";
import bless from "@/assets/founders/blessing.webp";
import sandra from "@/assets/founders/sandra.webp";

const founders = [
  {
    name: "Wilson Osara",
    role: "Co-Founder & CEO",
    image: wilson,
    text: "Building 100 Genius to help ambitious people learn, build and create meaningful opportunities.",
  },
  {
    name: "Blessing Nwokolo",
    role: "Co-Founder",
    image: bless,
    text: "Creating experiences and programmes that turn curiosity into practical skills.",
  },
  {
    name: "Sandra Andrew-Urom",
    role: "Co-Founder",
    image: sandra,
    text: "Helping shape a community where people can connect, grow and build together.",
  },
];

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-24 sm:py-32 lg:py-40">
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/20
          blur-[120px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/10
          blur-[130px]
        "
        animate={{
          x: [0, -70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          ENGRAVING
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[7%]
          -translate-x-1/2
          select-none
          whitespace-nowrap
          text-[18vw]
          font-black
          uppercase
          leading-none
          tracking-[-0.09em]
          text-white/[0.025]
        "
      >
        100GENIUS
      </div>

      {/* Fine engraved line */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-white/[0.04]
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ===================================================
            HEADER
        =================================================== */}

        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary/70" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-primary
                "
              >
                The people behind it
              </p>

              <span className="h-px w-8 bg-primary/70" />
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-background
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Built by people
              <br />
              <span className="text-white/30">
                who believe in more.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-white/45
                sm:text-base
                sm:leading-8
              "
            >
              100 Genius is being shaped by people who believe that
              access to the right knowledge, community and
              opportunities can change what someone is capable of.
            </p>
          </div>
        </FadeUp>

        {/* ===================================================
            FOUNDERS
        =================================================== */}

        <div
          className="
            mt-16
            flex
            gap-5
            overflow-x-auto
            pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:mt-20
            lg:grid
            lg:grid-cols-3
            lg:overflow-visible
          "
        >
          {founders.map((founder, index) => (
            <PopIn key={`${founder.name}-${index}`}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  w-[290px]
                  shrink-0
                  overflow-hidden
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  sm:w-[320px]
                  lg:w-full
                "
              >
                {/* =========================================
                    PORTRAIT
                ========================================= */}

                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-white/[0.025]
                  "
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                      group-hover:grayscale-0
                    "
                  />

                  {/* Dark image treatment */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-primary-deep
                      via-primary-deep/10
                      to-transparent
                    "
                  />

                  {/* Engraving inside image */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-3
                      -left-2
                      select-none
                      text-[75px]
                      font-black
                      uppercase
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.045]
                      transition-all
                      duration-700
                      group-hover:text-white/[0.07]
                    "
                  >
                    100
                  </div>

                  {/* Founder number */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        border
                        border-white/15
                        bg-primary-deep/60
                        text-[10px]
                        font-semibold
                        text-white/70
                        backdrop-blur-sm
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/40
                      "
                    >
                      Founder
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-9
                      w-9
                      translate-y-2
                      items-center
                      justify-center
                      border
                      border-white/10
                      bg-primary-deep/50
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="text-white/70"
                    />
                  </div>

                  {/* Bottom role */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-primary
                      "
                    >
                      {founder.role}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-semibold
                        tracking-[-0.035em]
                        text-white
                      "
                    >
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <div className="relative p-5 sm:p-6">
                  {/* tiny top accent */}
                  <div
                    className="
                      absolute
                      left-5
                      top-0
                      h-px
                      w-10
                      -translate-y-1/2
                      bg-primary
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-7
                      text-white/40
                      transition-colors
                      duration-300
                      group-hover:text-white/55
                    "
                  >
                    {founder.text}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-white/20
                      "
                    >
                      100 Genius
                    </span>

                    <span
                      className="
                        h-px
                        w-8
                        bg-white/10
                        transition-all
                        duration-500
                        group-hover:w-14
                        group-hover:bg-primary/50
                      "
                    />
                  </div>
                </div>
              </motion.article>
            </PopIn>
          ))}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <FadeUp>
          <div
            className="
              mx-auto
              mt-20
              flex
              max-w-3xl
              flex-col
              items-center
              text-center
              sm:mt-24
            "
          >
            <div className="h-10 w-px bg-gradient-to-b from-primary/50 to-transparent" />

            <p
              className="
                mt-5
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              And this is only the beginning.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-background
          to-transparent
          opacity-20
        "
      />
    </section>
  );
}
