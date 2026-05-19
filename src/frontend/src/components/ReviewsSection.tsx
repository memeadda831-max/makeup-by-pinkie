import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { REVIEWS } from "../constants/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: static stars
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          <Star
            className={`w-5 h-5 ${
              i < rating ? "fill-accent text-accent" : "fill-border text-border"
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}

const ITEMS_PER_VIEW = 3;

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSlides = Math.ceil(REVIEWS.length / ITEMS_PER_VIEW);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const visibleReviews = REVIEWS.slice(
    current * ITEMS_PER_VIEW,
    current * ITEMS_PER_VIEW + ITEMS_PER_VIEW,
  );

  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="font-body text-sm font-medium tracking-widest uppercase text-accent mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-accent relative inline-block">
              Brides Say
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-accent to-primary rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ width: "100%" }}
              />
            </span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Real stories from brides and clients across Maharashtra who trusted
            Pinkie Thakur for their most precious moments.
          </p>
        </motion.div>

        {/* Clients counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-accent/30 shadow-elevated">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static stars
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-2xl font-bold text-accent">
              500+
            </span>
            <span className="font-body text-sm font-semibold text-muted-foreground">
              Happy Clients &amp; Brides
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleReviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  data-ocid={`reviews.item.${current * ITEMS_PER_VIEW + i + 1}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-card rounded-3xl p-7 border border-accent/15 shadow-elevated hover:shadow-[0_8px_40px_rgba(var(--accent-rgb),0.15)] transition-all duration-300 flex flex-col gap-4 group overflow-hidden"
                >
                  {/* Top golden border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                  {/* Large decorative quote mark */}
                  <div className="absolute top-4 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-accent" />
                  </div>

                  {/* Stars with shimmer animation */}
                  <StarRating rating={review.rating} />

                  {/* Occasion badge */}
                  <span className="self-start px-3 py-1 rounded-full text-xs font-body font-semibold bg-accent/10 text-accent border border-accent/20">
                    {review.occasion}
                  </span>

                  {/* Review text */}
                  <blockquote className="font-body italic text-sm text-foreground/80 leading-relaxed flex-1">
                    “{review.text}”
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border-2 border-accent/30 flex items-center justify-center text-sm font-bold font-display text-accent flex-shrink-0 shadow-[0_0_12px_rgba(var(--accent-rgb),0.2)]">
                      {review.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-sm font-bold text-foreground truncate">
                        {review.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground truncate">
                        {review.location}
                      </p>
                      <p className="font-body text-xs text-accent/70 font-medium truncate">
                        {review.occasion}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            type="button"
            data-ocid="reviews.prev_button"
            onClick={goPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-accent/30 shadow-elevated flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-200 z-10 hidden md:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            data-ocid="reviews.next_button"
            onClick={goNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-accent/30 shadow-elevated flex items-center justify-center text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-200 z-10 hidden md:flex"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: dot pagination
              key={i}
              type="button"
              data-ocid={`reviews.pagination.${i + 1}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]"
                  : "w-2.5 h-2.5 bg-accent/25 hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
