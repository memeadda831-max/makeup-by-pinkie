import { Calendar, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

const FLOATING_PARTICLES = [
  { id: "p1", top: "8%", left: "5%", size: 3, delay: 0, duration: 4 },
  { id: "p2", top: "15%", left: "18%", size: 4, delay: 0.5, duration: 5 },
  { id: "p3", top: "22%", right: "8%", size: 2.5, delay: 1, duration: 3.5 },
  { id: "p4", top: "60%", left: "3%", size: 5, delay: 0.3, duration: 6 },
  { id: "p5", top: "80%", left: "25%", size: 3, delay: 0.8, duration: 4.5 },
  { id: "p6", top: "72%", right: "12%", size: 4, delay: 1.5, duration: 5 },
  { id: "p7", top: "40%", right: "3%", size: 2, delay: 0.2, duration: 3 },
  { id: "p8", top: "90%", right: "25%", size: 3.5, delay: 0.9, duration: 4 },
];

export default function CTASection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="cta.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, oklch(0.38 0.08 35) 0%, oklch(0.30 0.07 30) 35%, oklch(0.25 0.06 28) 65%, oklch(0.32 0.07 33) 100%)",
      }}
    >
      {/* Large ambient glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.70 0.12 50 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.10 45 / 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.60 0.12 48 / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating sparkle particles */}
      {FLOATING_PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? (p as { right: string }).right : undefined,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "oklch(0.85 0.10 55 / 0.8)",
            boxShadow: `0 0 ${p.size * 3}px oklch(0.85 0.12 55 / 0.9)`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating decorative stars */}
      <motion.div
        className="absolute top-12 right-16 opacity-30 pointer-events-none"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Star
          className="w-10 h-10 fill-current"
          style={{ color: "oklch(0.80 0.12 55)" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-16 opacity-20 pointer-events-none"
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Sparkles
          className="w-14 h-14"
          style={{ color: "oklch(0.80 0.12 55)" }}
        />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-8 opacity-15 pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Star
          className="w-6 h-6 fill-current"
          style={{ color: "oklch(0.80 0.12 55)" }}
        />
      </motion.div>

      {/* Diagonal shimmer line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, oklch(0.75 0.10 50 / 0.5) 40px, oklch(0.75 0.10 50 / 0.5) 41px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: "oklch(0.80 0.12 55 / 0.15)",
            border: "1.5px solid oklch(0.75 0.12 55 / 0.50)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: "oklch(0.75 0.18 55)" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <span
            className="font-body text-xs font-semibold tracking-widest uppercase"
            style={{ color: "oklch(0.85 0.10 55)" }}
          >
            ⚠ Limited Slots Available for 2026 Wedding Season
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
        >
          <h2
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "oklch(0.96 0.02 58)" }}
          >
            Ready to Look
            <br />
            <span
              className="relative"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.85 0.12 55), oklch(0.78 0.16 48), oklch(0.82 0.10 52))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Absolute Best?
            </span>
          </h2>

          <p
            className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.80 0.04 50)" }}
          >
            Join hundreds of brides, celebrities, and clients across Maharashtra
            who trust Pinkie Thakur for their most unforgettable moments. Your
            transformation awaits.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <motion.a
              href="https://wa.me/919594952492?text=Hi%20Pinkie!%20I'd%20like%20to%20book%20a%20makeup%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.primary_button"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 8px 40px oklch(0.70 0.16 50 / 0.70)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-body font-bold text-base transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.78 0.14 52) 0%, oklch(0.68 0.16 45) 100%)",
                color: "oklch(0.15 0.03 35)",
                boxShadow:
                  "0 4px 24px oklch(0.70 0.14 50 / 0.50), inset 0 1px 0 oklch(0.90 0.08 56 / 0.30)",
              }}
            >
              <SiWhatsapp className="w-5 h-5" />
              Book on WhatsApp
            </motion.a>

            <motion.button
              type="button"
              data-ocid="cta.secondary_button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#gallery")}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-body font-bold text-base transition-all duration-300"
              style={{
                background: "oklch(0.96 0.02 58 / 0.07)",
                border: "1.5px solid oklch(0.80 0.08 55 / 0.60)",
                color: "oklch(0.92 0.03 56)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Sparkles className="w-5 h-5" />
              View Our Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-10"
          style={{ borderTop: "1px solid oklch(0.80 0.06 50 / 0.20)" }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Happy Brides" },
            { value: "100%", label: "Premium Products" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-3xl md:text-4xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.12 55), oklch(0.75 0.14 48))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p
                className="font-body text-xs tracking-wide"
                style={{ color: "oklch(0.72 0.04 45)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Calendar note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2"
          style={{ color: "oklch(0.68 0.06 45)" }}
        >
          <Calendar className="w-4 h-4" />
          <span className="font-body text-sm">
            Book at least 2–3 months ahead for wedding season dates
          </span>
        </motion.div>
      </div>
    </section>
  );
}
