import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { SERVICES } from "../constants/data";

function ServiceCard({
  service,
  index,
}: { service: (typeof SERVICES)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      data-ocid={`services.item.${index + 1}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
          transition: isHovered ? "transform 0.1s ease" : "transform 0.5s ease",
        }}
        className="relative bg-card rounded-2xl overflow-hidden cursor-pointer group h-full"
      >
        {/* Gradient border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, oklch(0.65 0.12 60 / 0.6), oklch(0.55 0.08 40 / 0.4))"
              : "transparent",
            padding: "1px",
          }}
        />
        <div className="absolute inset-[1px] rounded-2xl bg-card" />

        {/* Border gradient on hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
          style={{
            boxShadow: isHovered
              ? "0 0 40px oklch(0.65 0.12 60 / 0.25), 0 20px 60px oklch(0.55 0.08 40 / 0.15), inset 0 0 0 1px oklch(0.65 0.12 60 / 0.35)"
              : "0 4px 24px oklch(0.5 0.06 40 / 0.08), inset 0 0 0 1px oklch(0.7 0.06 50 / 0.15)",
          }}
        />

        <div className="relative z-10 p-7 flex flex-col h-full">
          {/* Popular badge */}
          {service.popular && (
            <span
              className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold font-body"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.6 0.1 55), oklch(0.5 0.08 40))",
                color: "oklch(0.98 0.01 80)",
              }}
            >
              ✦ Popular
            </span>
          )}

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + index * 0.3,
              ease: "easeInOut",
            }}
            className="text-5xl mb-5 inline-block"
          >
            {service.icon}
          </motion.div>

          {/* Service name */}
          <h3
            className="font-display text-xl font-bold mb-1"
            style={{ color: "oklch(0.45 0.08 45)" }}
          >
            {service.title}
          </h3>

          {/* Price range */}
          <p
            className="font-body text-xs font-semibold tracking-wider uppercase mb-3"
            style={{ color: "oklch(0.62 0.1 55)" }}
          >
            {service.duration}
          </p>

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
            {service.description}
          </p>

          <ul className="space-y-2 mb-6">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-body text-muted-foreground"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.62 0.1 55)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Book Now button — visible on hover */}
          <motion.button
            type="button"
            data-ocid={`services.book_button.${index + 1}`}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full py-3 rounded-xl font-body font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.6 0.1 55), oklch(0.5 0.08 40))",
              color: "oklch(0.98 0.01 80)",
              boxShadow: "0 4px 20px oklch(0.55 0.1 50 / 0.35)",
            }}
          >
            Book Now ✦
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.02 70 / 0.5), oklch(0.94 0.03 65 / 0.4))",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.08 60 / 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.06 45 / 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.85 0.05 65 / 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.62 0.1 55)" }}
          >
            ✦ &nbsp; What We Offer &nbsp; ✦
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
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
            Our Premium Services
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeadingInView ? { scaleX: 1 } : {}}
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
            animate={isHeadingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From intimate engagement ceremonies to grand Bollywood productions —
            every look is crafted with precision, passion, and premium products.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="font-body text-muted-foreground mb-6 text-base">
            Not sure which service is right for you?
          </p>
          <button
            type="button"
            data-ocid="services.consult_button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.6 0.1 55), oklch(0.5 0.08 40))",
              color: "oklch(0.98 0.01 80)",
              boxShadow: "0 8px 32px oklch(0.55 0.1 50 / 0.3)",
            }}
          >
            <span>✦</span> Book a Free Consultation <span>✦</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
