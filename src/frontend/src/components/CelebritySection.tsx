import { Award, Crown, Sparkles, Star } from "lucide-react";
import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";
import { CELEBRITY_WORKS } from "../constants/data";

const TICKER_NAMES = [
  "✦ Pooja Hegde",
  "✦ Mrunal Thakur",
  "✦ Amruta Khanvilkar",
  "✦ Priya Bapat",
  "✦ Shriya Pilgaonkar",
  "✦ Sonalee Kulkarni",
  "✦ Akshara Haasan",
  "✦ Nushrratt Bharuccha",
  "✦ Neha Sharma",
  "✦ Tejasswi Prakash",
  "✦ Surbhi Chandna",
  "✦ Jennifer Winget",
  "✦ Divyanka Tripathi",
  "✦ Rubina Dilaik",
  "✦ Rashami Desai",
];

const DOUBLE_TICKER = [...TICKER_NAMES, ...TICKER_NAMES];

function SparkleParticle({
  x,
  y,
  delay,
}: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        y: [0, -30, -60],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2,
        ease: "easeOut",
      }}
    >
      <Sparkles className="w-4 h-4 text-accent" />
    </motion.div>
  );
}

function TickerBanner() {
  const x = useRef(0);
  const [pos, setPos] = useState(0);

  useAnimationFrame((_, delta) => {
    x.current -= delta * 0.04;
    if (x.current < -2400) x.current = 0;
    setPos(x.current);
  });

  return (
    <div className="relative overflow-hidden py-3 my-8 border-y border-accent/20 bg-gradient-to-r from-accent/5 via-primary/8 to-accent/5">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ transform: `translateX(${pos}px)` }}
      >
        {DOUBLE_TICKER.map((name) => (
          <span
            key={name}
            className="font-display text-sm font-semibold text-accent tracking-wide flex-shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CelebritySection() {
  const sparkles = [
    { x: "5%", y: "15%", delay: 0 },
    { x: "15%", y: "70%", delay: 0.8 },
    { x: "85%", y: "20%", delay: 0.3 },
    { x: "92%", y: "65%", delay: 1.2 },
    { x: "50%", y: "5%", delay: 0.5 },
    { x: "72%", y: "85%", delay: 1.7 },
    { x: "30%", y: "90%", delay: 0.2 },
    { x: "60%", y: "10%", delay: 1.0 },
  ];

  return (
    <section
      id="celebrity"
      data-ocid="celebrity.section"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[80px]" />
      </div>

      {/* Floating sparkle particles */}
      {sparkles.map((s, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static sparkles
        <SparkleParticle key={i} x={s.x} y={s.y} delay={s.delay} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Gold banner headline */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent/15 via-primary/20 to-accent/15 border border-accent/30 shadow-[0_0_40px_rgba(var(--accent-rgb),0.15)] mb-6">
            <Crown className="w-6 h-6 text-accent" />
            <span className="font-display text-xl md:text-2xl font-bold text-accent tracking-wide">
              As Trusted By Celebrities
            </span>
            <Crown className="w-6 h-6 text-accent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="font-body text-sm font-medium tracking-widest uppercase text-accent/70 mb-3">
              Star Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              Celebrity &amp;{" "}
              <span className="text-accent relative inline-block">
                Film Work
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-accent to-primary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{ width: "100%" }}
                />
              </span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Pinkie Thakur — the most sought-after makeup artist in
              Maharashtra, trusted by Bollywood productions, television stars,
              and high-profile celebrities across India for over a decade.
            </p>
          </motion.div>
        </motion.div>

        {/* Celebrity name ticker marquee */}
        <TickerBanner />

        {/* Celebrity stats badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-12"
        >
          <div className="relative inline-flex items-center gap-4 px-8 py-5 rounded-full bg-card border-2 border-accent/40 shadow-[0_0_60px_rgba(var(--accent-rgb),0.2)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
            />
            <Award className="w-8 h-8 text-accent" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">50+</p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Celebrities Served
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">
                500+
              </p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Happy Clients
              </p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">10+</p>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Celebrity work cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CELEBRITY_WORKS.map((work, i) => (
            <motion.div
              key={work.id}
              data-ocid={`celebrity.item.${i + 1}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative bg-card rounded-3xl p-8 border-2 border-accent/20 shadow-elevated overflow-hidden group cursor-pointer"
            >
              {/* Animated shine sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "200%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(var(--accent-rgb),0.08) 50%, transparent 60%)",
                }}
              />
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-gradient-to-br from-accent/15 to-primary/10 blur-2xl pointer-events-none group-hover:opacity-150 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/8 blur-2xl pointer-events-none" />

              {/* Golden top border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-body bg-accent/12 text-accent border border-accent/25">
                    <Sparkles className="w-3 h-3" />
                    {work.occasion}
                  </span>
                  <div className="flex gap-0.5">
                    {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                      <Star
                        key={sk}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {work.name}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Animated quote bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4, duration: 0.6 }}
                  className="relative bg-gradient-to-br from-accent/8 to-primary/5 rounded-2xl p-5 border border-accent/20"
                >
                  <div className="absolute -top-3 left-6 text-4xl text-accent/60 font-serif leading-none select-none">
                    “
                  </div>
                  <blockquote className="font-body italic text-sm text-foreground/85 leading-relaxed pt-2">
                    {work.compliment.replace(/^"/, "").replace(/"$/, "")}
                  </blockquote>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
