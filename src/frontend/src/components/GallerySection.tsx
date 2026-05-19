import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { GALLERY_IMAGES } from "../constants/data";

const FILTER_TABS = ["All", "Bridal", "Party", "Celebrity"] as const;
type FilterTab = (typeof FILTER_TABS)[number];

// Assign varying heights for masonry rhythm
const HEIGHT_MAP: Record<string, string> = {
  g1: "h-72",
  g2: "h-80",
  g3: "h-64",
  g4: "h-72",
  g5: "h-80",
  g6: "h-64",
  g7: "h-80",
  g8: "h-72",
  g9: "h-64",
};

const SPARKLE_POSITIONS = [
  { top: "10%", left: "15%" },
  { top: "25%", right: "10%" },
  { bottom: "20%", left: "8%" },
  { bottom: "10%", right: "20%" },
];

export default function GallerySection() {
  const [active, setActive] = useState<FilterTab>("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : prev === 0 ? filtered.length - 1 : prev - 1,
    );
  }, [filtered.length]);

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) =>
      prev === null ? null : prev === filtered.length - 1 ? 0 : prev + 1,
    );
  }, [filtered.length]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (selectedIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") setSelectedIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIdx, handlePrev, handleNext]);

  const selectedImage = selectedIdx !== null ? filtered[selectedIdx] : null;

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

      {/* Floating sparkles */}
      {SPARKLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={`sparkle-pos-${pos.top ?? pos.bottom}-${pos.left ?? pos.right}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 pointer-events-none"
          style={pos as React.CSSProperties}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 2.5 + i * 0.7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-3"
          >
            ✦ Portfolio ✦
          </motion.p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Portfolio</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="absolute bottom-1 left-0 right-0 h-[6px] bg-primary/30 rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
            A showcase of transformations that speak for themselves
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              data-ocid={`gallery.filter.${tab.toLowerCase()}`}
              onClick={() => setActive(tab)}
              className={`relative px-6 py-2 rounded-full text-sm font-body font-semibold transition-all duration-300 overflow-hidden ${
                active === tab
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb,160,120,80)/0.5)]"
                  : "bg-card text-muted-foreground border border-border/60 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {active === tab && (
                <motion.span
                  layoutId="gallery-active-tab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 sm:columns-3 gap-4 space-y-0">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                data-ocid={`gallery.item.${i + 1}`}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedIdx(i)}
                className={`relative break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer group border border-primary/10 hover:border-primary/40 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(160,120,80,0.18)] ${HEIGHT_MAP[img.id] ?? "h-72"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Golden overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Shimmer streak */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-none"
                  style={{
                    transitionDuration: "700ms",
                    transitionProperty: "transform",
                  }}
                />

                {/* Sparkle corner decoration */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <motion.span
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="text-primary/80 text-sm block"
                  >
                    ✦
                  </motion.span>
                </div>

                {/* Category badge + expand icon */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-md text-xs font-body font-semibold text-primary border border-primary/20">
                      {img.category}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-primary/20">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                        aria-hidden="true"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View count badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-primary/20 shadow-[0_2px_16px_rgba(160,120,80,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filtered.length}
              </span>{" "}
              of <span className="font-semibold text-foreground">9</span>{" "}
              transformations
            </span>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedIdx !== null && (
          <motion.div
            data-ocid="gallery.lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{
              background: "rgba(30, 18, 8, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Close */}
            <button
              type="button"
              data-ocid="gallery.close_button"
              onClick={() => setSelectedIdx(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center text-foreground border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200 z-10"
              aria-label="Close lightbox"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev Arrow */}
            <button
              type="button"
              data-ocid="gallery.lightbox_prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-primary/20 hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              data-ocid="gallery.lightbox_next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center border border-primary/20 hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-auto object-contain"
                />
                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-foreground/70 to-transparent">
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm text-card font-medium">
                      {selectedImage.alt}
                    </p>
                    <span className="px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-semibold">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
              {/* Counter */}
              <p className="mt-3 font-body text-sm text-card/60">
                {selectedIdx + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
