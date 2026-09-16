import frontendDeveloperImage from "@/assets/mentors/frontend-developer.jpeg";
import dataAnalystImage from "@/assets/mentors/data-analyst.webp";
import graphicDesignerImage from "@/assets/mentors/graphic-designer.webp";

const mentors = [
  {
    name: "Pascal",
    role: "Software Engineer",
    description:
      "Builds production web apps and mentors developers toward real engineering roles.",
    image: frontendDeveloperImage,
  },
  {
    name: "Ohema Jessica",
    role: "AI/ML Specialist",
    description:
      "Makes complex machine learning concepts practical, clear, and applicable.",
    image: dataAnalystImage,
  },
  {
    name: "James",
    role: "Product Designer",
    description:
      "Teaches practical design thinking shaped by years of real client work.",
    image: graphicDesignerImage,
  },
];

const marqueeMentors = [...mentors, ...mentors];

export default function MentorsSection() {
  return (
    <section className="section-spacing relative isolate overflow-hidden bg-background py-16 md:py-24">
      {/* =====================================================
          PREMIUM ABSTRACT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Large flowing primary curve */}
        <svg
          viewBox="0 0 1600 700"
          fill="none"
          className="
            absolute
            -left-[12%]
            top-[5%]
            h-[70%]
            w-[125%]
            min-w-[1000px]
            opacity-[0.14]
            animate-benefit-curve-one
          "
        >
          <path
            d="
              M-100 520
              C180 180 420 120 650 280
              C880 440 1080 520 1320 270
              C1450 135 1570 90 1720 110
            "
            stroke="var(--color-primary)"
            strokeWidth="1.5"
          />

          <path
            d="
              M-120 555
              C180 215 420 155 650 315
              C880 475 1080 555 1320 305
              C1450 170 1570 125 1720 145
            "
            stroke="var(--color-primary)"
            strokeWidth="0.75"
            opacity="0.45"
          />
        </svg>

        {/* Secondary opposing curve */}
        <svg
          viewBox="0 0 1400 800"
          fill="none"
          className="
            absolute
            -right-[18%]
            bottom-[-10%]
            h-[85%]
            w-[110%]
            min-w-[900px]
            opacity-[0.11]
            animate-benefit-curve-two
          "
        >
          <path
            d="
              M1500 80
              C1250 210 1160 390 930 450
              C700 510 580 350 390 430
              C230 495 130 650 -80 720
            "
            stroke="var(--color-primary-dark)"
            strokeWidth="1.5"
          />

          <path
            d="
              M1500 115
              C1250 245 1160 425 930 485
              C700 545 580 385 390 465
              C230 530 130 685 -80 755
            "
            stroke="var(--color-primary-dark)"
            strokeWidth="0.75"
            opacity="0.4"
          />
        </svg>

        {/* Small architectural curve */}
        <svg
          viewBox="0 0 900 500"
          fill="none"
          className="
            absolute
            -bottom-[15%]
            left-[22%]
            h-[55%]
            w-[65%]
            opacity-[0.08]
            animate-benefit-curve-three
          "
        >
          <path
            d="
              M-50 420
              C170 120 330 100 470 270
              C610 440 730 420 950 80
            "
            stroke="var(--color-primary)"
            strokeWidth="1"
          />
        </svg>

        {/* Extremely subtle center glow */}
        <div
          className="
            absolute
            left-[55%]
            top-[45%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/[0.035]
            blur-[100px]
          "
        />

        {/* Fine horizontal light */}
        <div
          className="
            absolute
            left-0
            right-0
            top-[28%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/[0.06]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-1">
          {/* Intro */}
          <div className="max-w-[480px]">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              You're not learning from a course. You're{" "}
              <span className="text-primary">learning</span> from the{" "}
              <span className="text-primary">people</span> doing the{" "}
              <span className="text-primary">work.</span>
            </h2>

            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every mentor is a working professional first, and a teacher
              second. Get direct access to industry insights and real-world
              feedback.
            </p>
          </div>

          {/* Mentor marquee */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
            "
          >
            <div className="animate-marquee flex gap-2 py-4 sm:gap-3">
              {marqueeMentors.map((mentor, index) => (
                <article
                  key={`${mentor.name}-${index}`}
                  className="
                    group
                    relative
                    h-[430px]
                    w-[290px]
                    shrink-0
                    overflow-hidden
                    rounded
                    bg-primary-deep
                    shadow-xl
                    transition-transform
                    duration-500
                    hover:-translate-y-1.5
                    sm:h-[480px]
                    sm:w-[330px]
                  "
                >
                  <img
                    src={mentor.image}
                    alt={`${mentor.name} — ${mentor.role}`}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/10"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[65%]
                      bg-gradient-to-t
                      from-primary-deep
                      via-primary-deep/80
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      p-5
                      sm:p-6
                    "
                  >
                    <p
                      className="
                        mb-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-green-300
                      "
                    >
                      {mentor.role}
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-extrabold
                        leading-tight
                        tracking-tight
                        text-background
                        sm:text-3xl
                      "
                    >
                      {mentor.name}
                    </h3>

                    <div className="my-4 h-px w-10 bg-white/30" />

                    <p
                      className="
                        max-w-[280px]
                        text-sm
                        leading-relaxed
                        text-white/75
                      "
                    >
                      {mentor.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
