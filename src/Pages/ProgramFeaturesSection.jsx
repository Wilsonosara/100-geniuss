import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";
import student1 from "@/assets/students/student1.webp";
import student2 from "@/assets/students/student2.webp";
import student3 from "@/assets/students/student3.webp";
import student4 from "@/assets/students/student4.webp";
import student5 from "@/assets/students/student5.webp";
import student6 from "@/assets/students/student6.webp";
import student7 from "@/assets/students/student7.webp";

const features = [
  {
    id: "portfolio",
    title: "A real portfolio you actually built",
    description:
      "No slides, no template projects. You write code every week and ship production-ready work. By graduation, you'll have something you can confidently show recruiters and clients.",
    visual: "code",
  },
  {
    id: "cohort",
    title: "50 students maximum per cohort",
    description:
      "We cap every cohort at 50 so you get enough attention from your mentors. You'll never get lost in a crowd or feel like you're learning alone.",
    visual: "cohort",
  },
  {
    id: "job",
    title: "Job support from week 14",
    description:
      "You'll build a CV, LinkedIn profile, and portfolio that actually represent your skills. Mock interviews and recruiter introductions start while you're still in class.",
    visual: "job",
  },
  {
    id: "certificate",
    title: "A verifiable certificate",
    description:
      "Graduate with a certificate that confirms what you actually learned and built during the programme.",
    visual: "certificate",
  },
  {
    id: "payment",
    title: "Pay in three monthly instalments",
    description:
      "Spread your tuition across three payments so you can focus on learning without the pressure of paying everything upfront.",
    visual: "payment",
  },
];

function FeatureIcon({ children }) {
  return (
    <span
      aria-hidden="true"
      className="
        mt-1
        grid
        size-[clamp(2.25rem,4vw,4rem)]
        shrink-0
        place-items-center
        rounded-lg
        bg-primary/80
        text-[clamp(0.7rem,1vw,1rem)]
        font-bold
        text-green-300
      "
    >
      {children}
    </span>
  );
}

function CodeVisual() {
  return (
    <div className="relative w-full">
      <div className="absolute -right-2 -top-4 z-10 rounded-md bg-background px-2 py-1 text-[7px] font-bold text-foreground shadow-lg">
        Ready to GitHub
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-[#061c0d]/90 shadow-2xl">
        <div className="flex gap-1 border-b border-white/5 bg-white/[0.03] px-4 py-3">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
        </div>

        <div className="space-y-3 px-5 py-7 sm:px-6 sm:py-8 lg:px-7 lg:py-10">
          <div className="h-1.5 w-2/5 rounded-full bg-green-500/40" />
          <div className="h-1.5 w-4/5 rounded-full bg-green-500/30" />
          <div className="h-1.5 w-3/5 rounded-full bg-green-500/40" />
          <div className="h-1.5 w-2/5 rounded-full bg-green-500/30" />
          <div className="h-1.5 w-11/12 rounded-full bg-green-500/20" />
        </div>

        <div className="flex items-center gap-1.5 border-t border-white/5 px-4 py-3 text-[7px] text-white/40">
          <span className="size-1.5 rounded-full bg-green-400" />
          <span>Deployment successful</span>
          <span className="ml-auto text-green-400">Save</span>
        </div>
      </div>
    </div>
  );
}

function CohortVisual() {
  const students = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    "https://images.unsplash.com/photo-1759852692971-a2abc6799cbd?auto=format&fit=crop&w=150&h=150&q=70",
    "https://images.unsplash.com/photo-1594750852491-e09aa1d75c78?auto=format&fit=crop&w=150&h=150&q=70",
    "https://images.unsplash.com/photo-1694175271713-a6e2cc378980?auto=format&fit=crop&w=150&h=150&q=70",
    "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&w=150&h=150&q=70",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=150&h=150&q=70",
    "https://images.unsplash.com/photo-1612214495858-4f32b96155a7?auto=format&fit=crop&w=150&h=150&q=70",
  ];

  // Scatter the students randomly across 20 positions
  const cohort = Array.from({ length: 20 }, (_, index) =>
    index < students.length ? students[index] : null
  ).sort(() => Math.random() - 0.5);

  return (
    <div className="w-full rounded-xl border border-white/5 bg-[#061c0d]/90 p-5 shadow-2xl sm:p-6">
      <div className="flex items-center justify-between text-[7px] text-white/40 sm:text-[8px]">
        <span>COHORT 12 — WEB DEV</span>
        <span className="text-green-400">Enrolling now</span>
      </div>

      <div className="my-5 grid grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {cohort.map((student, index) => (
          <figure
            key={index}
            className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full bg-green-900"
          >
            {student ? (
              <img
                src={student}
                alt=""
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <span className="text-xs font-medium text-green-300/50 sm:text-sm">
                ?
              </span>
            )}
          </figure>
        ))}
      </div>

      <div className="flex items-center justify-between text-[7px] text-white/35 sm:text-[8px]">
        <span>20+ seats</span>
        <span className="h-0.5 w-10 bg-green-400" />
      </div>
    </div>
  );
}

function JobVisual() {
  return (
    <div className="relative w-full">
      <div className="w-full rounded-xl border border-white/5 bg-[#061c0d]/90 p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-green-800 text-[8px] font-bold">
            JS
          </span>

          <div>
            <strong className="block text-[9px] text-white/85 sm:text-[10px]">
              Frontend Developer
            </strong>

            <span className="text-[7px] text-white/35 sm:text-[8px]">
              Remote · Full-time
            </span>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {["CV reviewed", "LinkedIn profile", "Mock interview"].map(
            (item) => (
              <div
                key={item}
                className="flex justify-between py-3 text-[8px] text-white/40 sm:text-[9px]"
              >
                <span>{item}</span>
                <span className="text-green-400">Done</span>
              </div>
            ),
          )}
        </div>

        <div className="mt-4 h-1 rounded-full bg-white/5">
          <span className="block h-full w-3/4 rounded-full bg-green-500" />
        </div>
      </div>

      <span className="absolute -bottom-4 right-0 rounded-md bg-background px-2 py-1 text-[7px] font-bold text-foreground shadow-lg">
        ✓ Application ready
      </span>
    </div>
  );
}

function CertificateVisual() {
  return (
    <div className="w-full rounded-xl border border-white/5 bg-[#061c0d]/90 p-6 shadow-2xl sm:p-7 lg:p-8">
      <span className="text-[7px] text-white/35 sm:text-[8px]">
        PROGRAMME CERTIFICATE
      </span>

      <strong className="mt-4 block text-base text-white/90 sm:text-lg">
        Software Engineering
      </strong>

      <div className="my-4 h-px w-3/4 bg-white/10" />

      <span className="text-[7px] text-white/40 sm:text-[8px]">
        Verified graduate
      </span>

      <div className="mt-8 flex justify-between text-[7px] text-white/35 sm:text-[8px]">
        <span>Issued 2026</span>
        <span className="text-green-400">✓ Verified</span>
      </div>
    </div>
  );
}

function PaymentVisual() {
  return (
    <div className="w-full rounded-xl border border-white/5 bg-[#061c0d]/90 p-5 shadow-2xl sm:p-6">
      <span className="text-[7px] text-white/35 sm:text-[8px]">
        TOTAL PROGRAMME FEE
      </span>

      <strong className="mt-1 block text-2xl text-white/95 sm:text-3xl">
        ₦300,000
      </strong>

      <span className="text-[7px] text-white/35 sm:text-[8px]">
        Split into 3 monthly payments
      </span>

      <div className="mt-4 space-y-2">
        {["Month 1", "Month 2", "Month 3"].map((month) => (
          <div
            key={month}
            className="flex items-center justify-between rounded-md bg-white/[0.04] px-3 py-2.5 text-[7px] text-white/45 sm:text-[8px]"
          >
            <span>{month}</span>
            <strong className="text-green-400">₦100,000</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisual({ type }) {
  switch (type) {
    case "code":
      return <CodeVisual />;

    case "cohort":
      return <CohortVisual />;

    case "job":
      return <JobVisual />;

    case "certificate":
      return <CertificateVisual />;

    case "payment":
      return <PaymentVisual />;

    default:
      return null;
  }
}

export default function ProgramFeaturesSection() {
  return (
    <section
      aria-labelledby="program-features-title"
      className="bg-primary-deep py-24 text-background sm:py-28 lg:py-36"
    >
      <div className="container">

        {/* Section heading */}
        <header className="mx-auto mb-24 max-w-2xl text-center sm:mb-32">
          <FadeUp>
            <h2
              id="program-features-title"
              className="text-background"
            >
              No shortcuts. No inflated promises.
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">
              Here is exactly what your programme gives you. No hidden
              shortcuts and no empty promises.
            </p>
          </FadeUp>
        </header>

        {/* Features */}
        <div className="flex flex-col gap-28 sm:gap-36 lg:gap-44">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={feature.id}
                className={`grid w-full items-center gap-12 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 xl:gap-28 ${
                  isReversed
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Content */}
                <FadeUp
                  delay={0.05}
                  className="w-full max-w-xl"
                >
                  <div className="flex items-start gap-4">
                    <FeatureIcon>
                      {String(index + 1).padStart(2, "0")}
                    </FeatureIcon>

                    <h3 className="max-w-md text-lg font-semibold leading-snug tracking-tight text-background sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-[15px]">
                    {feature.description}
                  </p>
                </FadeUp>

                {/* Visual */}
                <PopIn
                  delay={0.15}
                  className="flex w-full items-center justify-end"
                >
                  <div
                    aria-hidden="true"
                    className="w-full"
                  >
                    <FeatureVisual type={feature.visual} />
                  </div>
                </PopIn>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}