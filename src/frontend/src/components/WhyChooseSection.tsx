import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { WHY_CHOOSE_ITEMS } from "../constants/data";

const STATS = [
  { label: "Years of Artistry", value: 10, suffix: "+", icon: "⭐" },
  { label: "Happy Brides", value: 500, suffix: "+", icon: "👰" },
  { label: "Celebrity Clients", value: 50, suffix: "+", icon: "🎬" },
  { label: "Satisfaction Rate", value: 100, suffix: "%", icon: "💎" },
];

function CounterNumber({
  value,
  suffix,
  inView,
}: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Sparkle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none text-xs"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        y: ["-0%", "-20px"],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 2.5 + delay,
        delay,
        ease: "easeOut",
      }}
    >
      ✦
    </motion.div>
  );
}

const SPARKLE_POSITIONS = [
  { delay: 0, x: "10%", y: "20%" },
  { delay: 0.8, x: "85%", y: "15%" },
  { delay: 1.5, x: "50%", y: "80%" },
  { delay: 0.4, x: "90%", y: "65%" },
  { delay: 1.1, x: "15%", y: "70%" },
  { delay: 0.6, x: "70%", y: "10%" },
];

export default function WhyChooseSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="about"
      data-ocid="why_choose.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.025 65), oklch(0.93 0.035 60))",
      }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.75 0.08 60 / 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.06 45 / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.62 0.1 55)" }}
          >
            ✦ &nbsp; Our Distinction &nbsp; ✦
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.45 0.08 45), oklch(0.62 0.1 55), oklch(0.5 0.09 42))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why Choose Pinkie?
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div
              className="h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.62 0.1 55))",
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "oklch(0.62 0.1 55)" }}
            />
            <div
              className="h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.62 0.1 55), transparent)",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            With over 10 years of expertise and a portfolio spanning
            celebrities, films, and thousands of happy brides — the choice is
            clear.
          </motion.p>
        </div>

        {/* Animated stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="relative rounded-2xl p-6 text-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.98 0.015 65), oklch(0.95 0.025 60))",
                boxShadow:
                  "0 4px 32px oklch(0.55 0.08 50 / 0.1), inset 0 0 0 1px oklch(0.7 0.06 55 / 0.2)",
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="font-display text-4xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.08 45), oklch(0.65 0.12 58))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CounterNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={statsInView}
                />
              </div>
              <p className="font-body text-xs font-medium text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {WHY_CHOOSE_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              data-ocid={`why_choose.item.${i + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-2xl p-8 overflow-hidden group transition-all duration-300"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.99 0.01 70), oklch(0.96 0.02 60))",
                boxShadow:
                  "0 4px 24px oklch(0.55 0.08 50 / 0.08), inset 0 0 0 1px oklch(0.75 0.06 55 / 0.25)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, oklch(0.75 0.1 60 / 0.15) 0%, transparent 60%)",
                  boxShadow: "0 20px 60px oklch(0.55 0.1 50 / 0.15)",
                }}
              />

              {/* Sparkles */}
              {SPARKLE_POSITIONS.slice(0, 3).map((sp) => (
                <Sparkle
                  key={`why-sparkle-${sp.x}-${sp.y}`}
                  delay={sp.delay + i * 0.2}
                  x={sp.x}
                  y={sp.y}
                />
              ))}

              {/* Depth layers */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.75 0.08 60 / 0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, -4, 4, 0], y: [0, -3, 3, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4 + i * 0.4,
                  ease: "easeInOut",
                }}
                className="text-4xl mb-5 inline-block relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* Large background number */}
              <div
                className="absolute -bottom-4 -right-2 font-display font-bold opacity-5 select-none"
                style={{
                  fontSize: "8rem",
                  lineHeight: 1,
                  color: "oklch(0.5 0.08 45)",
                }}
              >
                {i + 1}
              </div>

              <h3
                className="font-display text-xl font-bold mb-3 relative z-10"
                style={{ color: "oklch(0.42 0.08 45)" }}
              >
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* Subtle bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.62 0.1 55), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
