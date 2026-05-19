import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      data-ocid="footer.section"
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.30 0.06 28) 0%, oklch(0.22 0.05 25) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/8 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-primary-foreground/10">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-display text-2xl font-bold text-primary-foreground mb-1 leading-tight">
              Makeup by
            </div>
            <div
              className="font-display text-3xl font-bold mb-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.06 50), oklch(0.70 0.08 42))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pinkie Thakur
            </div>
            <p className="font-body text-sm text-primary-foreground/60 mb-5 leading-relaxed">
              Celebrity &amp; Bridal Makeup Artist based in Kalyan, Maharashtra.
              Crafting flawless looks for over 10 years.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/919594952492"
                data-ocid="footer.whatsapp_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-smooth"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                data-ocid="footer.instagram_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                }}
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-base font-semibold text-primary-foreground mb-5 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                  Office No. 1, 1st Floor, Shelar Park,
                  <br />
                  Khadakpada Cir, Next to McDonald's,
                  <br />
                  Beturkar Pada, Kalyan,
                  <br />
                  Maharashtra 421301
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:09594952492"
                  data-ocid="footer.phone_link"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                >
                  09594952492
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/70">
                  Mon–Sat: 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-base font-semibold text-primary-foreground mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                ["#about", "About Studio"],
                ["#services", "Our Services"],
                ["#celebrity", "Celebrity Work"],
                ["#gallery", "Gallery"],
                ["#reviews", "Client Reviews"],
                ["#contact", "Book Appointment"],
              ].map(([href, label]) => (
                <li key={href}>
                  <button
                    type="button"
                    data-ocid={`footer.${label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    onClick={() =>
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-smooth flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-smooth" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {currentYear} Makeup by Pinkie Thakur. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/30 text-center">
            
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/60 transition-smooth underline underline-offset-2"
            >
              
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
