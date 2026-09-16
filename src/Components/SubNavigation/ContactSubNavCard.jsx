import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Music2,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaLinkedin,
  FaX
} from "react-icons/fa6";
import { motion } from "motion/react";

import FadeUp from "@/Components/animations/FadeUp";
import PopIn from "@/Components/animations/PopIn";

const links = [
  {
    label: "Email Us",
    description: "Send us a message directly.",
    href: "mailto:100sgenius@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    description: "Chat with the 100 Genius team.",
    href: "https://wa.me/2349065643879",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    description: "Follow our journey and updates.",
    href: "https://www.instagram.com/100genius",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    description: "Connect with 100 Genius professionally.",
    href: "https://www.linkedin.com/company/100-genius/",
    icon: FaLinkedin,
  },
  {
    label: "TikTok",
    description: "See what we're building and learning.",
    href: "https://www.tiktok.com/@official_100genius",
    icon: FaTiktok,
  },
  {
    label: "X",
    description: "Join the conversation on X.",
    href: "https://x.com/100Geniuss",
    icon: FaX,
  },
];

export default function ContactSubNavCard() {
  return (
    <section
      aria-labelledby="contact-navigation-title"
      className="relative"
    >
      {/* =========================================
          HEADER
      ========================================= */}

      <FadeUp>
        <div className="max-w-2xl">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            Connect with 100 Genius
          </p>

          <h2
            id="contact-navigation-title"
            className="
              mt-3
              text-4xl
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              text-background

              sm:text-5xl
              md:text-6xl
            "
          >
            Let's stay connected.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-surface-muted

              sm:text-base
            "
          >
            Have a question, want to learn more, or simply want to
            follow what we're building? Reach out or connect with
            100 Genius across our platforms.
          </p>
        </div>
      </FadeUp>

      {/* =========================================
          CONTACT / SOCIAL LINKS
      ========================================= */}

      <div
        className="
          mt-10
          grid
          gap-4

          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <PopIn
              key={link.label}
              delay={index * 0.06}
            >
              <motion.a
                href={link.href}
                target={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                aria-label={`${link.label} — 100 Genius`}
                className="
                  group
                  relative
                  flex
                  min-h-[190px]
                  flex-col
                  overflow-hidden
                  rounded

                  border
                  border-white/[0.08]

                  bg-white/[0.025]

                  p-6

                  backdrop-blur-sm

                  transition-all
                  duration-300

                  hover:border-primary/35
                  hover:bg-white/[0.045]

                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary/60
                  focus:ring-offset-2
                  focus:ring-offset-primary-deep
                "
              >
                {/* Hover glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-primary/15
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon + arrow */}

                <div
                  className="
                    relative
                    flex
                    items-start
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded

                      border
                      border-white/[0.08]

                      bg-white/[0.025]

                      text-white/60

                      transition-all
                      duration-300

                      group-hover:border-primary/40
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-white/[0.08]

                      text-white/35

                      transition-all
                      duration-300

                      group-hover:border-primary/40
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </span>
                </div>

                {/* Content */}

                <div className="relative mt-auto">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-[-0.025em]
                      text-background

                      transition-colors
                      duration-300

                      group-hover:text-white
                    "
                  >
                    {link.label}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[260px]
                      text-sm
                      leading-6
                      text-surface-muted/70
                    "
                  >
                    {link.description}
                  </p>
                </div>

                {/* Bottom accent */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0

                    bg-primary

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </motion.a>
            </PopIn>
          );
        })}
      </div>

      {/* =========================================
          BOTTOM MESSAGE
      ========================================= */}

      <FadeUp delay={0.3}>
        <div
          className="
            mt-8
            flex
            flex-col
            gap-4

            border-t
            border-white/[0.07]

            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-xl
              text-xs
              leading-6
              text-white/35
            "
          >
            Follow 100 Genius for programme updates, opportunities,
            community stories, and everything we're building.
          </p>

          <a
            href="mailto:100sgenius@gmail.com"
            className="
              shrink-0
              text-sm
              font-semibold
              text-primary

              transition-colors
              hover:text-white
            "
          >
            Get in touch →
          </a>
        </div>
      </FadeUp>
    </section>
  );
}