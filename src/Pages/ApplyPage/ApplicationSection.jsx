import { useEffect, useId, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import submitApplication from "@/service/submitApplication";
import { Loader } from "lucide-react";
import CommunityJoinModal from "@/Components/CommunityModal";

const tracks = [
  {
    value: "frontend-development",
    label: "Frontend Development",
  },
  {
    value: "data-analysis",
    label: "Data Analysis",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
  },
  {
    value: "full-stack-development",
    label: "Full-Stack Development",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  track: "",
  privacy: false,
};

/* =========================================================
   FADE UP
========================================================= */

function FadeUp({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-[opacity,transform]
        duration-700
        ease-out
        motion-reduce:transition-none
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   POP IN
   Used specifically for form controls
========================================================= */

function PopIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        origin-center
        transition-[opacity,transform]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${visible ? "scale-100 opacity-100" : "scale-[0.96] opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function ApplicationSection() {
  const formId = useId();
  const [searchParams] = useSearchParams();

  const selectedTrack = searchParams.get("programme") || "";

  const [form, setForm] = useState({
    ...initialForm,
    track: selectedTrack,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); 
  const [modalVariant, setModalVariant] = useState("application");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    /* First name */

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (form.firstName.trim().length < 2) {
      newErrors.firstName = "Enter a valid first name.";
    }

    /* Last name */

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (form.lastName.trim().length < 2) {
      newErrors.lastName = "Enter a valid last name.";
    }

    /* Email */

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    /* Phone */

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else {
      const phone = form.phone.replace(/[\s()-]/g, "");

      if (!/^(?:\+234|234|0)[789][01]\d{8}$/.test(phone)) {
        newErrors.phone = "Enter a valid Nigerian phone number.";
      }
    }

    /* Track */

    if (!form.track) {
      newErrors.track = "Please select a programme.";
    }

    /* Privacy */

    if (!form.privacy) {
      newErrors.privacy =
        "You need to agree to the privacy policy before applying.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(false);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const applicationData = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      programme: form.track,
      privacy: form.privacy,
    };

    console.log("Application:", applicationData);

    setSubmitted(true);

    // Send applicationData to your backend here.
    await handleSubmitApplication(applicationData);
  };

  async function handleSubmitApplication(applicationData) {
    setIsSubmitting(true);
    try {
      const res = await submitApplication(applicationData);
      setSubmittedData(applicationData)
      setShowCommunityModal(true);
      setModalVariant('application')
    } catch (err) {
      setModalVariant("error");
      console.error("error sending mail:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby={`${formId}-title`}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-background
        section-safe-top
      "
    >
      {showCommunityModal && (
        <CommunityJoinModal
          open={showCommunityModal}
          onClose={() => setShowCommunityModal(false)}
          variant={modalVariant}
          data={submittedData}
        />
      )}
      <div className="container ">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-[clamp(2.5rem,5vw,4.5rem)] max-w-3xl">
          <FadeUp>
            <h1 id={`${formId}-title`} className="max-w-3xl text-foreground">
              Take the first step toward your tech career.
            </h1>
          </FadeUp>

          <FadeUp delay={120}>
            <p
              className="
                mt-5
                max-w-2xl
                text-muted
              "
            >
              Tell us a little about yourself and choose the programme you would
              like to join. Our team will get in touch with the next steps.
            </p>
          </FadeUp>
        </div>

        {/* =====================================================
            APPLICATION AREA
            STATIC CONTAINER — NO FADE ANIMATION
        ====================================================== */}

        <div
          className="
            grid
            min-h-[clamp(560px,65svh,720px)]
            overflow-hidden
            rounded-[clamp(1rem,2vw,1.5rem)]
            border
            border-primary/10
            bg-surface
            shadow-[0_25px_70px_rgba(12,40,21,0.10)]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* ===================================================
              LEFT — FIGURE / VISUAL
          ==================================================== */}

          <div
            className="
              relative
              isolate
              min-h-[360px]
              overflow-hidden
              bg-primary-deep
              p-[clamp(1.5rem,4vw,4rem)]
              lg:min-h-full
            "
          >
            {/* Grid */}

            <div
              aria-hidden="true"
              className="
                grid-background
                pointer-events-none
                absolute
                inset-0
                -z-10
                opacity-30
              "
            />

            {/* Large glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-[15%]
                top-[10%]
                -z-10
                size-[clamp(15rem,30vw,30rem)]
                rounded-full
                bg-primary
                opacity-30
                blur-[100px]
              "
            />

            {/* Abstract ellipse */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-[25%]
                top-[15%]
                -z-10
                h-[70%]
                w-[100%]
                rotate-[28deg]
                rounded-[50%]
                border
                border-white/10
              "
            />

            {/* Abstract ellipse */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[35%]
                bottom-[5%]
                -z-10
                h-[60%]
                w-[100%]
                rotate-[-25deg]
                rounded-[50%]
                border
                border-primary/40
              "
            />

            {/* Figure container */}

            <div
              className="
                relative
                flex
                h-full
                min-h-[330px]
                flex-col
                justify-between
              "
            >
              <div>
                <FadeUp>
                  <h2 className="mt-6 max-w-lg text-white">
                    Apply to
                    <br />
                    100 GENIUS.
                    <br />
                    Academy.
                  </h2>
                </FadeUp>

                <FadeUp delay={120}>
                  <p
                    className="
                      mt-5
                      max-w-md
                      text-sm
                      leading-7
                      text-white/55
                    "
                  >
                    Choose a track that matches where you want to go and build
                    practical skills with guidance from experienced mentors.
                  </p>
                </FadeUp>
              </div>

              {/* Decorative number */}

              <div
                aria-hidden="true"
                className="
                  select-none
                  text-[clamp(8rem,18vw,14rem)]
                  font-bold
                  leading-none
                  tracking-[-0.1em]
                  text-white/[0.045]
                "
              >
                100
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT — FORM
          ==================================================== */}

          <div
            className="
              flex
              items-center
              bg-background
              p-[clamp(1.5rem,4vw,4.5rem)]
            "
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full max-w-2xl"
            >
              {/* =================================================
                  FORM HEADING
              ================================================= */}

              <div className="mb-8">
                <FadeUp>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-primary
                    "
                  >
                    Application
                  </p>
                </FadeUp>

                <FadeUp delay={100}>
                  <h3 className="mt-2 text-foreground">
                    Tell us about yourself.
                  </h3>
                </FadeUp>

                <FadeUp delay={180}>
                  <p className="mt-2 text-sm text-muted">
                    It only takes a few minutes to complete.
                  </p>
                </FadeUp>
              </div>

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {submitted && (
                <FadeUp>
                  <div
                    role="status"
                    className="
                      mb-6
                      rounded-md
                      border
                      border-primary/20
                      bg-primary/5
                      px-4
                      py-3
                      text-sm
                      text-primary
                    "
                  >
                    Your application has been submitted successfully.
                  </div>
                </FadeUp>
              )}

              {/* =================================================
                  INPUTS
              ================================================= */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* First name */}

                <div>
                  <FadeUp delay={220}>
                    <label
                      htmlFor={`${formId}-first-name`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      First name
                    </label>
                  </FadeUp>

                  <PopIn delay={280}>
                    <input
                      id={`${formId}-first-name`}
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      placeholder="Your first name"
                      required
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby={
                        errors.firstName
                          ? `${formId}-first-name-error`
                          : undefined
                      }
                      className="
                        h-12
                        w-full
                        rounded-md
                        border
                        border-surface-muted
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted/60
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />
                  </PopIn>

                  {errors.firstName && (
                    <p
                      id={`${formId}-first-name-error`}
                      className="mt-1.5 text-xs text-danger"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last name */}

                <div>
                  <FadeUp delay={260}>
                    <label
                      htmlFor={`${formId}-last-name`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      Last name
                    </label>
                  </FadeUp>

                  <PopIn delay={320}>
                    <input
                      id={`${formId}-last-name`}
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      placeholder="Your last name"
                      required
                      aria-invalid={Boolean(errors.lastName)}
                      aria-describedby={
                        errors.lastName
                          ? `${formId}-last-name-error`
                          : undefined
                      }
                      className="
                        h-12
                        w-full
                        rounded-md
                        border
                        border-surface-muted
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted/60
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />
                  </PopIn>

                  {errors.lastName && (
                    <p
                      id={`${formId}-last-name-error`}
                      className="mt-1.5 text-xs text-danger"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email */}

                <div className="sm:col-span-2">
                  <FadeUp delay={300}>
                    <label
                      htmlFor={`${formId}-email`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      Email address
                    </label>
                  </FadeUp>

                  <PopIn delay={360}>
                    <input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? `${formId}-email-error` : undefined
                      }
                      className="
                        h-12
                        w-full
                        rounded-md
                        border
                        border-surface-muted
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted/60
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />
                  </PopIn>

                  {errors.email && (
                    <p
                      id={`${formId}-email-error`}
                      className="mt-1.5 text-xs text-danger"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}

                <div className="sm:col-span-2">
                  <FadeUp delay={340}>
                    <label
                      htmlFor={`${formId}-phone`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      Phone number
                    </label>
                  </FadeUp>

                  <PopIn delay={400}>
                    <input
                      id={`${formId}-phone`}
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+234 801 234 5678"
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? `${formId}-phone-error` : undefined
                      }
                      className="
                        h-12
                        w-full
                        rounded-md
                        border
                        border-surface-muted
                        bg-background
                        px-4
                        text-sm
                        text-foreground
                        outline-none
                        transition
                        placeholder:text-muted/60
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />
                  </PopIn>

                  {errors.phone && (
                    <p
                      id={`${formId}-phone-error`}
                      className="mt-1.5 text-xs text-danger"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Programme */}

                <div className="sm:col-span-2">
                  <FadeUp delay={380}>
                    <label
                      htmlFor={`${formId}-track`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-foreground
                      "
                    >
                      Choose a programme
                    </label>
                  </FadeUp>

                  <PopIn delay={440}>
                    <div className="relative">
                      <select
                        id={`${formId}-track`}
                        name="track"
                        value={form.track}
                        onChange={handleChange}
                        required
                        aria-invalid={Boolean(errors.track)}
                        aria-describedby={
                          errors.track ? `${formId}-track-error` : undefined
                        }
                        className="
                          h-12
                          w-full
                          appearance-none
                          rounded-md
                          border
                          border-surface-muted
                          bg-background
                          px-4
                          pr-10
                          text-sm
                          text-foreground
                          outline-none
                          transition
                          focus:border-primary
                          focus:ring-2
                          focus:ring-primary/10
                        "
                      >
                        <option value="" disabled>
                          Select a track
                        </option>

                        {tracks.map((track) => (
                          <option key={track.value} value={track.value}>
                            {track.label}
                          </option>
                        ))}
                      </select>

                      <svg
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          size-4
                          -translate-y-1/2
                          text-muted
                        "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </PopIn>

                  {errors.track && (
                    <p
                      id={`${formId}-track-error`}
                      className="mt-1.5 text-xs text-danger"
                    >
                      {errors.track}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  PRIVACY
              ================================================= */}

              <FadeUp delay={500}>
                <label
                  className="
                    mt-6
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                  "
                >
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={form.privacy}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.privacy)}
                    className="
                      mt-0.5
                      size-4
                      shrink-0
                      accent-[var(--color-primary)]
                    "
                  />

                  <span className="text-xs leading-5 text-muted">
                    I agree to the processing of my information for the purpose
                    of this application and accept the academy's privacy policy.
                  </span>
                </label>
              </FadeUp>

              {errors.privacy && (
                <FadeUp delay={520}>
                  <p className="mt-1.5 text-xs text-danger">{errors.privacy}</p>
                </FadeUp>
              )}

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <FadeUp delay={560}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                        cta-1
                        mt-7
                        min-h-12
                        w-full
                        justify-center
                        rounded-md
                        px-6
                        py-3
                        text-sm
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={15} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </FadeUp>

              {/* =================================================
                  FOOTNOTE
              ================================================= */}

              <FadeUp delay={640}>
                <p
                  className="
                    mt-4
                    text-center
                    text-[0.7rem]
                    leading-5
                    text-muted
                  "
                >
                  We’ll review your application and contact you with the next
                  steps.
                </p>
              </FadeUp>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
