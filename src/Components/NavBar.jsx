import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/logo.webp";
import SubNavigationContainer from "./SubNavigationContainer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

/*
 * Routes that open the full-screen sub-navigation.
 */
const subNavigationRoutes = ["/programmes", "/contact"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);
  const linkRefs = useRef([]);

  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Determine whether the current route
   * should display the sub-navigation.
   */
  const isSubNavOpen = subNavigationRoutes.includes(
    location.pathname
  );

  /*
   * Track the active navigation underline.
   */
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
  });

  /*
   * Lock the main page while the
   * sub-navigation is open.
   */
  useEffect(() => {
    if (!isSubNavOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isSubNavOpen]);

  /*
   * Calculate the position of the
   * shared navigation underline.
   */
  useEffect(() => {
    const updateUnderline = () => {
      /*
       * Find the active navigation item.
       */
      const activeIndex = navLinks.findIndex((link) => {
        /*
         * Home should not remain active
         * while a sub-navigation is open.
         */
        if (link.href === "/") {
          return (
            location.pathname === "/" &&
            !isSubNavOpen
          );
        }

        /*
         * Programmes is active when
         * its sub-navigation is open.
         */
        if (link.href === "/programmes") {
          return location.pathname === "/programmes";
        }

        /*
         * Contact is active when
         * its sub-navigation is open.
         */
        if (link.href === "/contact") {
          return location.pathname === "/contact";
        }

        /*
         * Normal routes.
         */
        return link.href === location.pathname;
      });

      /*
       * No active route.
       */
      if (activeIndex === -1) {
        setUnderline({
          left: 0,
          width: 0,
        });

        return;
      }

      /*
       * Hide underline on mobile.
       */
      if (window.innerWidth < 768) {
        setUnderline({
          left: 0,
          width: 0,
        });

        return;
      }

      const activeLink = linkRefs.current[activeIndex];
      const nav = navRef.current;

      if (!activeLink || !nav) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setUnderline({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    updateUnderline();

    window.addEventListener("resize", updateUnderline);

    return () => {
      window.removeEventListener(
        "resize",
        updateUnderline
      );
    };
  }, [
    location.pathname,
    isSubNavOpen,
  ]);

  /*
   * Close the mobile navigation.
   */
  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  /*
   * Programmes behaves like a navigation
   * link that opens/closes its sub-navigation.
   */
  const handleProgrammesClick = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/programmes") {
      navigate("/");
      return;
    }

    navigate("/programmes");
  };

  /*
   * Close any active sub-navigation.
   *
   * For now, return to Home.
   */
  const closeSubNavigation = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <nav
        className="
          fixed
          z-50
          w-full

          border-white/10

          bg-[image:var(--gradient-nav)]
          backdrop-blur-md

          supports-[backdrop-filter]:bg-black/10
        "
      >
        <div
          className="
            container
            relative
            z-100

            flex
            items-center
            justify-between
            gap-10
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            onClick={handleNavigation}
            className="h-[clamp(2.75rem,4vw,3.5rem)] w-[clamp(2.75rem,4vw,3.5rem)]"
          >
            <img
              src={logo}
              alt="100 Genius"
            />
          </NavLink>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className={`
              flex
              flex-1

              max-md:absolute
              max-md:left-0
              max-md:right-0
              max-md:top-18
              max-md:z-50

              max-md:flex-col
              max-md:min-h-[calc(100dvh-4.5rem)]

              max-md:bg-primary-deep

              max-md:px-2
              max-md:pb-8

              max-md:transition-all
              max-md:duration-300
              max-md:ease-out

              ${
                isMenuOpen
                  ? "max-md:translate-y-0 max-md:opacity-100"
                  : "max-md:pointer-events-none max-md:-translate-y-1 max-md:opacity-0"
              }
            `}
          >
            <ul
              ref={navRef}
              className="
                relative

                flex
                h-fit
                flex-1
                items-center
                gap-1

                p-1

                max-md:flex-col
              "
            >
              {navLinks.map((link, index) => {
                const isProgramme =
                  link.href === "/programmes";

                const isSubNavigationLink =
                  subNavigationRoutes.includes(
                    link.href
                  );

                const isActive =
                  location.pathname === link.href;

                return (
                  <li
                    key={link.label}
                    className={`
                      max-md:w-full
                      max-md:text-center

                      max-md:transition-all
                      max-md:duration-300

                      ${
                        isMenuOpen
                          ? "max-md:translate-y-0 max-md:opacity-100"
                          : "max-md:-translate-y-3 max-md:opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${index * 80}ms`
                        : `${(navLinks.length - index) * 40}ms`,
                    }}
                  >
                    {isProgramme ? (
                      /*
                       * =================================================
                       * PROGRAMMES SUB-NAVIGATION BUTTON
                       * =================================================
                       */

                      <button
                        ref={(element) => {
                          linkRefs.current[index] =
                            element;
                        }}
                        type="button"
                        onClick={
                          handleProgrammesClick
                        }
                        aria-expanded={
                          location.pathname ===
                          "/programmes"
                        }
                        aria-haspopup="true"
                        className={`
                          block
                          w-full

                          px-3
                          py-2

                          text-left
                          font-semibold

                          transition-colors
                          duration-200

                          ${
                            isActive
                              ? "text-background"
                              : "text-surface-muted hover:text-background"
                          }

                          max-md:py-5
                          max-md:text-center
                          max-md:hover:bg-[#010a04]
                        `}
                      >
                        Programmes
                      </button>
                    ) : isSubNavigationLink ? (
                      /*
                       * =================================================
                       * CONTACT SUB-NAVIGATION
                       *
                       * Contact uses a normal route so the URL
                       * remains /contact, while the container
                       * automatically opens its sub-navigation.
                       * =================================================
                       */

                      <NavLink
                        ref={(element) => {
                          linkRefs.current[index] =
                            element;
                        }}
                        to={link.href}
                        onClick={handleNavigation}
                        className={`
                          block
                          px-3
                          py-2

                          font-semibold

                          transition-colors
                          duration-200

                          ${
                            isActive
                              ? "text-background"
                              : "text-surface-muted hover:text-background"
                          }

                          max-md:py-5
                        `}
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      /*
                       * =================================================
                       * NORMAL NAVIGATION LINK
                       * =================================================
                       */

                      <NavLink
                        ref={(element) => {
                          linkRefs.current[index] =
                            element;
                        }}
                        to={link.href}
                        onClick={handleNavigation}
                        className={({ isActive }) => `
                          block
                          px-3
                          py-2

                          font-semibold

                          transition-colors
                          duration-200

                          ${
                            isActive
                              ? "text-background"
                              : "text-surface-muted hover:text-background"
                          }

                          max-md:py-5
                          max-md:hover:bg-[#010a04]
                        `}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}

              {/* =================================================
                  SHARED MOVING UNDERLINE
              ================================================= */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  bottom-0

                  h-0.5

                  rounded-full

                  bg-background

                  transition-all
                  duration-300
                  ease-out

                  max-md:hidden
                "
                style={{
                  left: underline.left,
                  width: underline.width,
                }}
              />
            </ul>

            {/* =================================================
                APPLY BUTTON
            ================================================= */}

            <Link
              to="/apply"
              onClick={handleNavigation}
              className={`
                cta-1

                max-md:justify-center

                max-md:transition-all
                max-md:duration-500
                max-md:ease-out

                ${
                  isMenuOpen
                    ? "max-md:translate-y-0 max-md:opacity-100"
                    : "max-md:translate-y-8 max-md:opacity-0"
                }
              `}
              style={{
                transitionDelay: isMenuOpen
                  ? "320ms"
                  : "0ms",
              }}
            >
              <span>Apply Now</span>
              <span aria-hidden="true">
                →
              </span>
            </Link>

            {/* =================================================
                MOBILE BOTTOM HANDLE
            ================================================= */}

            <span
              aria-hidden="true"
              className={`
                absolute
                bottom-2
                left-1/2

                h-1
                w-12

                -translate-x-1/2

                rounded

                bg-white

                transition-all
                duration-300
                ease-out

                md:hidden

                ${
                  isMenuOpen
                    ? "max-md:scale-x-100 max-md:opacity-100"
                    : "max-md:scale-x-0 max-md:opacity-0"
                }
              `}
              style={{
                transitionDelay: isMenuOpen
                  ? "500ms"
                  : "0ms",
              }}
            />
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
            className="block  md:hidden group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded border border-primary/25 bg-primary/10 backdrop-blur-xl shadow-[0_0_25px_rgba(23,88,46,0.12)] transition-all duration-300 hover:border-primary/45 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(23,88,46,0.25)] active:scale-95"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isMenuOpen}
          >
            <Menu
              strokeWidth={1.5}
              className="text-background"
            />
          </button>
        </div>
      </nav>

      {/* =====================================================
          SUB-NAVIGATION
      ===================================================== */}

      <SubNavigationContainer
        open={isSubNavOpen}
        onClose={closeSubNavigation}
      />
    </>
  );
}
