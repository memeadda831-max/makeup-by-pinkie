import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 blur-subtle border-b border-border shadow-glow-soft"
          : "bg-card/80 blur-subtle"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-w-0"
          >
            <span className="font-display text-base md:text-xl font-bold text-foreground leading-tight tracking-wide truncate">
              Makeup by
            </span>
            <span
              className="font-display text-sm md:text-lg font-semibold text-accent leading-tight truncate"
              style={{ letterSpacing: "0.08em" }}
            >
              Pinkie Thakur
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              type="button"
              data-ocid="navbar.cta_button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleNavClick("#appointment")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold font-body shadow-elevated hover:shadow-glow-warm transition-smooth hover:scale-105"
            >
              Book Now
            </motion.button>
            <button
              type="button"
              data-ocid="navbar.hamburger_button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl transition-smooth flex items-center justify-center"
              style={{
                background: isOpen
                  ? "oklch(0.88 0.06 48 / 0.8)"
                  : "oklch(0.92 0.04 50 / 0.6)",
                color: "oklch(0.25 0.08 35)",
                border: "1.5px solid oklch(0.80 0.06 48 / 0.6)",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-ocid="navbar.mobile_menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "oklch(0.99 0.008 52 / 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1.5px solid oklch(0.84 0.06 50 / 0.7)",
              boxShadow: "0 8px 32px oklch(0.60 0.08 44 / 0.18)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left w-full px-5 py-4 rounded-xl font-body text-base font-semibold transition-smooth"
                  style={{
                    color: "oklch(0.22 0.08 35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "oklch(0.91 0.04 48 / 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1 px-1">
                <a
                  href="tel:09594952492"
                  data-ocid="navbar.mobile_cta_button"
                  className="block w-full py-4 rounded-2xl font-body font-bold text-base text-center transition-smooth"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.42 0.14 38), oklch(0.52 0.14 44))",
                    color: "oklch(0.97 0.01 55)",
                    boxShadow: "0 4px 16px oklch(0.48 0.12 40 / 0.38)",
                  }}
                >
                  📞 Book Now — 09594952492
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
