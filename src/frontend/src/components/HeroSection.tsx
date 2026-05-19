import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";
import HeroScene from "./HeroScene";

// Shimmer button wrapper
function ShimmerButton({
  children,
  className,
  style,
  onClick,
  href,
  target,
  rel,
  dataOcid,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  dataOcid?: string;
}) {
  const [shimmerX, setShimmerX] = useState(-100);
  const timeRef = useRef(0);

  useAnimationFrame((t) => {
    const elapsed = t - timeRef.current;
    // Every 3 seconds run a shimmer sweep
    if (elapsed > 3000) {
      timeRef.current = t;
    }
    const progress = ((t % 3000) / 3000) * 260 - 60;
    setShimmerX(progress);
  });

  const inner = (
    <span
      className="relative inline-flex items-center gap-2 w-full justify-center"
      style={{ overflow: "hidden" }}
    >
      {children}
      <span
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          transform: `translateX(${shimmerX}%)`,
          transition: "transform 0.05s linear",
          borderRadius: "inherit",
        }}
      />
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        data-ocid={dataOcid}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
        className={className}
        style={style}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      type="button"
      data-ocid={dataOcid}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={className}
      style={style}
    >
      {inner}
    </motion.button>
  );
}

// Floating decorative badge around portrait
function FloatingBadge({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className={className}
      style={{
        backdropFilter: "blur(12px)",
        background: "oklch(0.99 0.01 55 / 0.88)",
        border: "1px solid oklch(0.75 0.06 40 / 0.5)",
        borderRadius: "14px",
        padding: "6px 14px",
        boxShadow: "0 4px 20px oklch(0.45 0.08 30 / 0.18)",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.02 55) 0%, oklch(0.94 0.03 50) 40%, oklch(0.92 0.04 45) 100%)",
      }}
    >
      {/* Three.js 3D background canvas — fully transparent */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Ambient glow overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.09 35 / 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/5 w-[380px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.08 50 / 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.05 55 / 0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* ── Left: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Animated top badge */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
              style={{
                background: "oklch(0.99 0.01 55 / 0.85)",
                backdropFilter: "blur(14px)",
                border: "1px solid oklch(0.70 0.07 40 / 0.5)",
                boxShadow: "0 4px 24px oklch(0.45 0.08 30 / 0.15)",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "oklch(0.55 0.1 30)" }}
              />
              <span
                className="font-body text-xs font-bold tracking-[0.18em] uppercase"
                style={{ color: "oklch(0.42 0.09 30)" }}
              >
                Celebrity &amp; Bridal Makeup Artist
              </span>
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  delay: 1,
                }}
                className="text-sm"
              >
                ✨
              </motion.span>
            </motion.div>

            {/* Main heading — dramatic two-line */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-display leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" }}
            >
              <span
                className="block font-light tracking-wide"
                style={{
                  color: "oklch(0.38 0.07 35)",
                  fontSize: "0.65em",
                  letterSpacing: "0.08em",
                }}
              >
                Makeup by
              </span>
              <span
                className="block font-black relative"
                style={{
                  background:
                    "linear-gradient(130deg, oklch(0.38 0.09 28) 0%, oklch(0.55 0.11 35) 40%, oklch(0.70 0.10 42) 70%, oklch(0.45 0.08 30) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 2px 12px oklch(0.45 0.08 30 / 0.25))",
                }}
              >
                Pinkie Thakur
              </span>
            </motion.h1>

            {/* Subtitle with sparkle animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-2 mb-3 justify-center lg:justify-start"
            >
              {["star-a", "star-b", "star-c"].map((starKey, i) => (
                <motion.span
                  key={starKey}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.4,
                  }}
                  style={{ color: "oklch(0.62 0.10 40)", fontSize: "0.8rem" }}
                >
                  ✦
                </motion.span>
              ))}
              <span
                className="font-body text-base font-semibold tracking-wider uppercase"
                style={{
                  color: "oklch(0.48 0.09 33)",
                  letterSpacing: "0.12em",
                }}
              >
                Luxury · Premium · Artistry
              </span>
              {["✦", "✦", "✦"].map((star, i) => (
                <motion.span
                  key={`r${star + i}`}
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.4 + 0.2,
                  }}
                  style={{ color: "oklch(0.62 0.10 40)", fontSize: "0.8rem" }}
                >
                  {star}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-body text-base md:text-lg mb-3 max-w-xl"
              style={{ color: "oklch(0.48 0.04 40)" }}
            >
              Kalyan, Maharashtra · Trusted by Celebrities &amp; Brides
            </motion.p>

            {/* Star rating */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 mb-9"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <motion.span
                    key={s}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.6 + s * 0.08,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-xl"
                    style={{ color: "oklch(0.62 0.12 42)" }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <span
                className="font-body text-sm font-medium"
                style={{ color: "oklch(0.50 0.05 38)" }}
              >
                500+ Happy Clients
              </span>
            </motion.div>

            {/* CTA Buttons with shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <ShimmerButton
                href="https://wa.me/919594952492?text=Hi%20Pinkie%20di!%20I%20would%20like%20to%20book%20a%20makeup%20session."
                target="_blank"
                rel="noopener noreferrer"
                dataOcid="hero.book_button"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full font-body font-bold text-base text-primary-foreground shadow-elevated cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.42 0.09 30) 0%, oklch(0.35 0.08 26) 50%, oklch(0.48 0.10 33) 100%)",
                  boxShadow:
                    "0 8px 32px oklch(0.42 0.09 30 / 0.38), 0 2px 8px oklch(0.42 0.09 30 / 0.22), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <span>📱</span>&nbsp;Book Consultation
              </ShimmerButton>

              <ShimmerButton
                onClick={() => scrollTo("#gallery")}
                dataOcid="hero.portfolio_button"
                className="inline-flex items-center justify-center px-9 py-4 rounded-full font-body font-semibold text-base cursor-pointer"
                style={{
                  background: "oklch(0.99 0.01 55 / 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid oklch(0.70 0.07 40 / 0.6)",
                  boxShadow: "0 4px 20px oklch(0.50 0.07 35 / 0.18)",
                  color: "oklch(0.35 0.08 30)",
                }}
              >
                <span>✨</span>&nbsp;View Portfolio
              </ShimmerButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88 }}
              className="flex gap-10 mt-11 justify-center lg:justify-start"
            >
              {[
                { val: "10+", label: "Years Experience" },
                { val: "500+", label: "Brides Served" },
                { val: "50+", label: "Celebrities" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="text-center lg:text-left cursor-default select-none"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.9 + i * 0.12,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="font-display text-2xl font-black"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.38 0.09 28), oklch(0.60 0.10 38))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.val}
                  </motion.div>
                  <div
                    className="font-body text-xs mt-0.5"
                    style={{ color: "oklch(0.52 0.05 38)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Premium portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.45,
              type: "spring",
              stiffness: 70,
            }}
            className="flex-shrink-0 relative"
          >
            {/* Outer pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.85, 0.5] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-18px",
                background:
                  "radial-gradient(circle, oklch(0.62 0.10 38 / 0.35) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />

            {/* Animated rotating golden gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-5px",
                background:
                  "conic-gradient(from 0deg, oklch(0.62 0.11 38), oklch(0.45 0.09 30), oklch(0.80 0.08 52), oklch(0.55 0.10 35), oklch(0.70 0.09 45), oklch(0.62 0.11 38))",
                borderRadius: "50%",
                padding: "4px",
                filter: "blur(1.5px)",
              }}
            />

            {/* Counter-rotating inner accent ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "6px",
                border: "1.5px dashed oklch(0.65 0.09 42 / 0.6)",
                borderRadius: "50%",
              }}
            />

            {/* Portrait image — larger */}
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
              style={{
                border: "4px solid oklch(0.88 0.04 50 / 0.8)",
                boxShadow:
                  "0 0 50px oklch(0.45 0.09 30 / 0.35), 0 0 100px oklch(0.62 0.10 38 / 0.15), 0 24px 70px rgba(0,0,0,0.18)",
              }}
            >
              <img
                src="/assets/images/makeup-1.png"
                alt="Pinkie Thakur — Celebrity Makeup Artist"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.40 0.07 30 / 0.35), transparent)",
                }}
              />
            </div>

            {/* Floating badge: Celebrity — bottom right */}
            <FloatingBadge
              delay={1.2}
              className="absolute -bottom-5 -right-5 z-20"
            >
              <div
                className="font-body text-xs font-bold"
                style={{ color: "oklch(0.42 0.09 30)" }}
              >
                🎬 Celebrity Artist
              </div>
              <div
                className="font-body text-[10px]"
                style={{ color: "oklch(0.52 0.05 38)" }}
              >
                50+ Stars
              </div>
            </FloatingBadge>

            {/* Floating badge: Rating — top left */}
            <FloatingBadge delay={1.4} className="absolute -top-5 -left-5 z-20">
              <div
                className="font-body text-xs font-bold"
                style={{ color: "oklch(0.42 0.09 30)" }}
              >
                ⭐ 5.0 Rating
              </div>
              <div
                className="font-body text-[10px]"
                style={{ color: "oklch(0.52 0.05 38)" }}
              >
                500+ Reviews
              </div>
            </FloatingBadge>

            {/* Floating badge: Luxury — top right */}
            <FloatingBadge
              delay={1.65}
              className="absolute -top-2 -right-8 z-20"
            >
              <div
                className="font-body text-xs font-bold"
                style={{ color: "oklch(0.42 0.09 30)" }}
              >
                👑 Luxury
              </div>
            </FloatingBadge>

            {/* Floating badge: Premium — bottom left */}
            <FloatingBadge
              delay={1.85}
              className="absolute -bottom-2 -left-8 z-20"
            >
              <div
                className="font-body text-xs font-bold"
                style={{ color: "oklch(0.42 0.09 30)" }}
              >
                💎 Premium
              </div>
            </FloatingBadge>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.52 0.05 38)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{
            border: "2px solid oklch(0.55 0.06 38 / 0.45)",
          }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "oklch(0.52 0.06 35 / 0.7)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
