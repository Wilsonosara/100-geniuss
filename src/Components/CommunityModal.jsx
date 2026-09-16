import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2349065643879";

const benefits = [
  {
    title: "Opportunities",
    text: "Discover what's next",
  },
  {
    title: "Learn together",
    text: "Grow with the community",
  },
  {
    title: "Build together",
    text: "Connect with ambitious people",
  },
];

// Human-readable labels for programme slugs — extend as needed
const PROGRAMME_LABELS = {
  "data-analysis": "Data Analysis",
};

const VARIANTS = {
  default: {
    heading: () => (
      <>
        Don&apos;t build
        <br />
        <span className="text-white/45">alone.</span>
      </>
    ),
    subtext: () =>
      "Join ambitious people discovering opportunities, learning valuable skills, sharing ideas and building the future together.",
  },
  application: {
    heading: (data) => (
      <>
        {data?.firstName ? `${data.firstName}, you're` : "You're"}
        <br />
        <span className="text-white/45">in good company.</span>
      </>
    ),
    subtext: (data) => {
      const programmeLabel =
        PROGRAMME_LABELS[data?.programme] ?? data?.programme;
      return `Your ${programmeLabel ?? ""} application is in${
        data?.firstName ? `, ${data.firstName}` : ""
      }. While you wait, join the community — get tips from people who've been through it and hear about opportunities first.`;
    },
  },
  error: {
    heading: () => (
      <>
        Something
        <br />
        <span className="text-white/45">went wrong.</span>
      </>
    ),
    subtext: (data) =>
      `We couldn't send your application email right now${
        data?.firstName ? `, ${data.firstName}` : ""
      }. Please try applying again in a few minutes. In the meantime, join the community — we're happy to help if the issue continues.`,
  },
};

export default function CommunityJoinModal({
  open,
  onClose,
  variant = "default",
  data,
}) {
  const copy = VARIANTS[variant] ?? VARIANTS.default;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ===============================
              BACKGROUND OVERLAY
          =============================== */}
          <motion.div
            className="fixed inset-0 z-[999] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="
                absolute inset-0
                h-full w-full
                cursor-default
                bg-[rgba(6,20,11,0.78)]
                backdrop-blur-md
              "
            />

            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[radial-gradient(circle_at_50%_30%,rgba(23,88,46,0.28),transparent_45%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[linear-gradient(to_bottom,rgba(12,40,21,0.1),rgba(6,20,11,0.75))]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2 top-1/2
                h-[500px] w-[500px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-primary/20
                blur-[120px]
              "
            />
          </motion.div>

          {/* ===============================
              MODAL WRAPPER
          =============================== */}
          <div
            className="
              fixed inset-0 z-[1000]
              flex items-center justify-center
              overflow-y-auto
              p-4 sm:p-6
            "
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="community-modal-title"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="
                relative
                w-full max-w-[580px]
                overflow-hidden
                rounded
                border border-white/[0.10]
                bg-primary-deep
                shadow-[0_35px_120px_rgba(0,0,0,0.5)]
              "
            >
              {/* ===============================
                  MODAL BACKGROUND DESIGN
              =============================== */}

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 top-0
                  h-[220px]
                  bg-[radial-gradient(circle_at_70%_0%,rgba(23,88,46,0.42),transparent_60%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8 top-5
                  select-none
                  whitespace-nowrap
                  text-[5.5rem]
                  font-black
                  tracking-[-0.09em]
                  text-white/[0.025]
                  sm:text-[7rem]
                "
              >
                100GENIUS
              </div>

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  -right-[32%]
                  -top-[25%]
                  h-[460px] w-[460px]
                  rounded-full
                  border
                  border-primary/50
                  opacity-70
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

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[40%]
                  -left-[30%]
                  h-[460px] w-[460px]
                  rounded-full
                  border
                  border-[#6fbd89]/35
                  opacity-60
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

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[-20%]
                  top-[54%]
                  h-px
                  w-[140%]
                  rotate-[-12deg]
                  bg-gradient-to-r
                  from-transparent
                  via-primary/70
                  to-transparent
                  opacity-50
                "
              />

              {/* ===============================
                  CLOSE BUTTON
              =============================== */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="
                  absolute right-4 top-4 z-20
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  text-white/55
                  backdrop-blur-sm
                  transition-all duration-200
                  hover:scale-105
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <X size={18} strokeWidth={1.8} />
              </button>

              {/* ===============================
                  CONTENT
              =============================== */}
              <div className="relative z-10 px-6 pb-7 pt-11 sm:px-10 sm:pb-10 sm:pt-14">

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2
                    id="community-modal-title"
                    className="
                      max-w-[460px]
                      text-[2.5rem]
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.05em]
                      text-white
                      sm:text-[3.5rem]
                    "
                  >
                    {copy.heading(data)}
                  </h2>

                  <p className="mt-5 max-w-[470px] text-[0.98rem] leading-7 text-white/60 sm:text-[1.05rem]">
                    {copy.subtext(data)}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-4 flex flex-col gap-1"
                >
                  {benefits.map(({  title, text }) => (
                    <div
                      key={title}
                      className="
                        rounded
                        border border-white/[0.07]
                        bg-white/[0.025]
                        p-1 px-2
                        backdrop-blur-sm
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-primary/30
                        hover:bg-white/[0.045]
                      "
                    >

                      <p className="text-xs font-semibold text-white/90">
                        {title}
                      </p>

                      <p className=" text-[11px] leading-5 text-white/40">
                        {text}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="my-7 h-px origin-left bg-white/[0.08]"
                />

                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="
                    group
                    flex w-full
                    items-center justify-between
                    rounded
                    bg-[#25D366]
                    px-4 py-3.5
                    text-[#06200f]
                    shadow-[0_15px_40px_rgba(37,211,102,0.12)]
                    transition-shadow
                    hover:shadow-[0_20px_50px_rgba(37,211,102,0.22)]
                    sm:px-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded
                        bg-[#06200f]/10
                      "
                    >
                      <MessageCircle size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-left text-sm font-bold leading-tight">
                        Join the WhatsApp community
                      </p>

                      <p className="mt-1 text-left text-xs text-[#06200f]/60">
                        Connect. Learn. Build. Grow.
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </motion.a>

                <motion.button
                  type="button"
                  onClick={onClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="
                    mx-auto mt-4 block
                    text-xs font-medium
                    text-white/35
                    transition-colors
                    hover:text-white/65
                  "
                >
                  Maybe later
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}