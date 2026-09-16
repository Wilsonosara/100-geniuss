import { StickyScroll } from "@/Components/ui/sticky-scroll-reveal";
import FadeUp from "@/Components/animations/FadeUp";

export default function BenefitsSection({ programme }) {
  if (!programme?.benefits?.length) {
    return null;
  }

  const content = programme.benefits.map((benefit, index) => ({
    title: benefit.title,
    description: benefit.description,

    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
        {/* Inner abstract curves */}

        <div
          aria-hidden="true"
          className="
            absolute
            -right-[30%]
            top-[5%]
            h-[90%]
            w-[115%]
            rotate-[30deg]
            rounded-[50%]
            border-2
            border-white/[0.10]
            animate-benefit-curve-one
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -left-[35%]
            top-[20%]
            h-[80%]
            w-[120%]
            rotate-[-25deg]
            rounded-[50%]
            border
            border-primary/[0.45]
            animate-benefit-curve-two
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-[10%]
            top-[25%]
            h-[65%]
            w-[90%]
            rotate-[40deg]
            rounded-[50%]
            border
            border-white/[0.07]
            animate-benefit-curve-three
          "
        />

        {/* Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[45%]
            w-[45%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary
            opacity-[0.15]
            blur-[100px]
            animate-benefit-glow
          "
        />

        {/* Number */}

        <span
          className="
            relative
            z-10
            select-none
            text-[clamp(7rem,14vw,12rem)]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-white/[0.09]
            animate-benefit-number
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    ),
  }));

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--color-primary-deep)]
        py-[clamp(5rem,10vw,9rem)]
      "
    >
      {/* Ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-18rem]
          -z-10
          h-[45rem]
          w-[45rem]
          -translate-x-1/2
          rounded-full
          bg-primary
          opacity-[0.10]
          blur-[160px]
        "
      />

      {/* Large primary curve */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[30rem]
          top-[-8rem]
          -z-10
          h-[65rem]
          w-[100rem]
          rotate-[18deg]
          rounded-[50%]
          border-[3px]
          border-white/[0.075]
        "
      />

      {/* Second large curve */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[35rem]
          top-[15%]
          -z-10
          h-[60rem]
          w-[95rem]
          rotate-[-17deg]
          rounded-[50%]
          border-2
          border-primary/[0.25]
        "
      />

      {/* Third curve */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[20rem]
          top-[35%]
          -z-10
          h-[50rem]
          w-[80rem]
          rotate-[24deg]
          rounded-[50%]
          border
          border-white/[0.10]
        "
      />

      {/* Crossing curve */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[20rem]
          bottom-[-15rem]
          -z-10
          h-[55rem]
          w-[90rem]
          rotate-[12deg]
          rounded-[50%]
          border-[3px]
          border-primary/[0.18]
        "
      />

      {/* Diagonal strokes */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[22%]
          -z-10
          h-[2px]
          w-[120%]
          rotate-[-8deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.14]
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[68%]
          -z-10
          h-[2px]
          w-[120%]
          rotate-[7deg]
          bg-gradient-to-r
          from-transparent
          via-primary/[0.55]
          to-transparent
        "
      />

      {/* Technical accents */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[12%]
          -z-10
          h-24
          w-24
          rounded-full
          border-2
          border-white/[0.08]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[14%]
          -z-10
          h-16
          w-16
          rounded-full
          border
          border-primary/[0.25]
        "
      />

      {/* Content */}

      <div className="container">
        <header className="mb-[clamp(3rem,7vw,6rem)] max-w-2xl">
          <FadeUp>
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/50
              "
            >
              What You Get
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="max-w-3xl text-white">
              Everything you need to move from learning to doing.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-xl text-white/60">
              Get practical experience, guidance, and support
              throughout your programme.
            </p>
          </FadeUp>
        </header>

        <StickyScroll content={content} />
      </div>
    </section>
  );
}