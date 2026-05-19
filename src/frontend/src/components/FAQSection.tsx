import { Minus, Plus, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FAQ_ITEMS } from "../constants/data";

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="faq"
      data-ocid="faq.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.01 60) 0%, oklch(0.95 0.018 45) 50%, oklch(0.97 0.01 55) 100%)",
      }}
    >
      {/* Decorative blurred glow circles */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-50"
        style={{ background: "oklch(0.85 0.06 60 / 0.3)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: "oklch(0.80 0.07 40 / 0.25)" }}
      />

      {/* Floating large ? decorations */}
      <div
        className="absolute top-12 right-8 md:right-24 text-[12rem] font-display font-bold opacity-[0.04] select-none pointer-events-none leading-none"
        style={{ color: "oklch(0.45 0.08 35)" }}
      >
        ?
      </div>
      <div
        className="absolute bottom-12 left-4 md:left-16 text-[7rem] font-display font-bold opacity-[0.04] select-none pointer-events-none leading-none rotate-12"
        style={{ color: "oklch(0.45 0.08 35)" }}
      >
        ?
      </div>

      {/* Floating sparkle decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-20 left-1/4 opacity-20 pointer-events-none"
      >
        <Sparkles
          className="w-6 h-6"
          style={{ color: "oklch(0.60 0.12 50)" }}
        />
      </motion.div>
      <motion.div
        animate={{ rotate: -360, y: [0, -12, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-1/3 opacity-20 pointer-events-none"
      >
        <Sparkles
          className="w-4 h-4"
          style={{ color: "oklch(0.60 0.12 50)" }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "oklch(0.85 0.06 50 / 0.5)",
              border: "1px solid oklch(0.70 0.10 45 / 0.5)",
            }}
          >
            <Sparkles
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.50 0.12 40)" }}
            />
            <span
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.45 0.10 40)" }}
            >
              Got Questions?
            </span>
          </motion.div>

          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ color: "oklch(0.30 0.08 35)" }}
          >
            Frequently Asked
            <br />
            <span
              className="relative inline-block"
              style={{ color: "oklch(0.45 0.12 40)" }}
            >
              Questions
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.55 0.14 45), oklch(0.65 0.10 55))",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
              />
            </span>
          </h2>

          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.50 0.06 40)" }}
          >
            Everything you need to know before booking your session with Pinkie
            Thakur.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, i) => (
            <motion.div
              key={faq.id}
              data-ocid={`faq.item.${i + 1}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background:
                  open === faq.id
                    ? "oklch(0.99 0.005 55)"
                    : "oklch(0.98 0.008 58 / 0.9)",
                border:
                  open === faq.id
                    ? "1.5px solid oklch(0.65 0.12 45 / 0.7)"
                    : "1.5px solid oklch(0.85 0.04 50 / 0.7)",
                boxShadow:
                  open === faq.id
                    ? "0 8px 32px oklch(0.70 0.10 45 / 0.15), 0 2px 8px oklch(0.50 0.08 40 / 0.10)"
                    : "0 2px 8px oklch(0.50 0.06 40 / 0.08)",
                transition: "all 0.3s ease",
              }}
            >
              <button
                type="button"
                data-ocid={`faq.toggle.${i + 1}`}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-body"
                    style={{
                      background:
                        open === faq.id
                          ? "oklch(0.55 0.12 40)"
                          : "oklch(0.85 0.06 50 / 0.6)",
                      color:
                        open === faq.id
                          ? "oklch(0.98 0.01 55)"
                          : "oklch(0.45 0.10 40)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="font-body font-semibold text-base md:text-lg"
                    style={{ color: "oklch(0.28 0.07 35)" }}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: open === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      open === faq.id
                        ? "oklch(0.55 0.12 40)"
                        : "oklch(0.88 0.05 50 / 0.8)",
                    boxShadow:
                      open === faq.id
                        ? "0 0 12px oklch(0.60 0.14 45 / 0.50)"
                        : "none",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {open === faq.id ? (
                    <Minus
                      className="w-4 h-4"
                      style={{ color: "oklch(0.98 0.01 55)" }}
                    />
                  ) : (
                    <Plus
                      className="w-4 h-4"
                      style={{ color: "oklch(0.45 0.10 40)" }}
                    />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 pt-1 ml-10"
                      style={{
                        borderTop: "1px solid oklch(0.80 0.06 50 / 0.5)",
                      }}
                    >
                      <p
                        className="font-body text-sm leading-relaxed pt-4"
                        style={{ color: "oklch(0.45 0.05 40)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p
            className="font-body text-sm mb-4"
            style={{ color: "oklch(0.50 0.06 40)" }}
          >
            Still have questions? We're just a call away.
          </p>
          <a
            href="tel:09594952492"
            data-ocid="faq.contact_button"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.50 0.12 40), oklch(0.42 0.10 35))",
              color: "oklch(0.97 0.01 55)",
              boxShadow: "0 4px 20px oklch(0.50 0.12 40 / 0.40)",
            }}
          >
            Call 09594952492
          </a>
        </motion.div>
      </div>
    </section>
  );
}
