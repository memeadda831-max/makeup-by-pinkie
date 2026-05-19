import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 7:00 PM" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.97 0.012 58) 0%, oklch(0.96 0.018 50) 50%, oklch(0.97 0.010 55) 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.10 50 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.70 0.08 40 / 0.14) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <MapPin
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.45 0.12 40)" }}
            />
            <span
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.45 0.10 40)" }}
            >
              Visit Us
            </span>
          </motion.div>

          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "oklch(0.18 0.08 35)" }}
          >
            Find{" "}
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.30 0.10 38), oklch(0.48 0.14 44))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Us
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.42 0.14 40), oklch(0.58 0.12 48))",
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
            style={{ color: "oklch(0.35 0.06 38)" }}
          >
            Visit our studio in the heart of Kalyan or reach out to book your
            session. We're always happy to welcome you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info cards (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Phone card */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "oklch(0.99 0.005 58 / 0.95)",
                border: "1.5px solid oklch(0.82 0.07 50 / 0.7)",
                boxShadow: "0 4px 20px oklch(0.60 0.08 45 / 0.12)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.08 52), oklch(0.78 0.10 46))",
                  boxShadow: "0 4px 12px oklch(0.65 0.10 48 / 0.30)",
                }}
              >
                <Phone
                  className="w-5 h-5"
                  style={{ color: "oklch(0.30 0.06 35)" }}
                />
              </div>
              <div className="min-w-0">
                <p
                  className="font-body text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.55 0.08 45)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:09594952492"
                  data-ocid="contact.phone_link"
                  className="font-display text-2xl font-bold block hover:scale-105 transition-transform duration-200"
                  style={{ color: "oklch(0.28 0.07 35)" }}
                >
                  09594952492
                </a>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: "oklch(0.55 0.05 42)" }}
                >
                  Call or WhatsApp for appointments
                </p>
              </div>
            </div>

            {/* Address card */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "oklch(0.99 0.005 58 / 0.95)",
                border: "1.5px solid oklch(0.82 0.07 50 / 0.7)",
                boxShadow: "0 4px 20px oklch(0.60 0.08 45 / 0.12)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.08 52), oklch(0.78 0.10 46))",
                  boxShadow: "0 4px 12px oklch(0.65 0.10 48 / 0.30)",
                }}
              >
                <MapPin
                  className="w-5 h-5"
                  style={{ color: "oklch(0.30 0.06 35)" }}
                />
              </div>
              <div className="min-w-0">
                <p
                  className="font-body text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "oklch(0.55 0.08 45)" }}
                >
                  Studio Address
                </p>
                <p
                  className="font-body text-sm font-medium leading-relaxed"
                  style={{ color: "oklch(0.30 0.06 35)" }}
                >
                  Office No. 1, 1st Floor, Shelar Park,
                  <br />
                  Khadakpada Circle,
                  <br />
                  Next to McDonald's, Beturkar Pada,
                  <br />
                  Kalyan, Maharashtra — 421301
                </p>
                <a
                  href="https://maps.app.goo.gl/Yk8BUkEf7EbDqbpj9"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.directions_link"
                  className="inline-flex items-center gap-1.5 mt-2 font-body text-xs font-semibold hover:underline transition-all"
                  style={{ color: "oklch(0.48 0.12 42)" }}
                >
                  <Navigation className="w-3.5 h-3.5" /> Get Directions
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "oklch(0.99 0.005 58 / 0.95)",
                border: "1.5px solid oklch(0.82 0.07 50 / 0.7)",
                boxShadow: "0 4px 20px oklch(0.60 0.08 45 / 0.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.08 52), oklch(0.78 0.10 46))",
                    boxShadow: "0 4px 12px oklch(0.65 0.10 48 / 0.30)",
                  }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "oklch(0.30 0.06 35)" }}
                  />
                </div>
                <p
                  className="font-body text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "oklch(0.55 0.08 45)" }}
                >
                  Business Hours
                </p>
              </div>
              <div className="space-y-2">
                {BUSINESS_HOURS.map((bh) => (
                  <div
                    key={bh.day}
                    className="flex justify-between items-center py-1.5"
                    style={{
                      borderBottom: "1px solid oklch(0.88 0.04 52 / 0.7)",
                    }}
                  >
                    <span
                      className="font-body text-sm"
                      style={{ color: "oklch(0.40 0.06 38)" }}
                    >
                      {bh.day}
                    </span>
                    <span
                      className="font-body text-sm font-semibold"
                      style={{ color: "oklch(0.30 0.07 35)" }}
                    >
                      {bh.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="font-body text-xs mt-3 italic"
                style={{ color: "oklch(0.58 0.06 42)" }}
              >
                By appointment preferred
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href="https://wa.me/919594952492?text=Hi%20Pinkie!%20I'd%20like%20to%20book%20a%20session."
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 6px 24px rgba(37,211,102,0.40)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-body font-semibold text-sm transition-all"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <SiWhatsapp className="w-4 h-4" /> WhatsApp
              </motion.a>
              <motion.a
                href="https://www.instagram.com/makeupbypinkiethakur"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.instagram_button"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 6px 24px rgba(220,39,67,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-body font-semibold text-sm transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "#fff",
                }}
              >
                <SiInstagram className="w-4 h-4" /> Instagram
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Map (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            {/* Map embed */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                height: 400,
                border: "1.5px solid oklch(0.78 0.08 50 / 0.7)",
                boxShadow:
                  "0 8px 40px oklch(0.55 0.08 45 / 0.20), 0 2px 8px oklch(0.50 0.06 40 / 0.15)",
              }}
            >
              <iframe
                title="Makeup by Pinkie Thakur Studio Location - Kalyan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5376!2d73.1314!3d19.2403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0da51a31a9%3A0x7c2e3f5c1e7d2a44!2sKhadakpada%20Circle%2C%20Kalyan%20West%2C%20Maharashtra%20421301%2C%20India!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "sepia(15%) saturate(1.1) hue-rotate(5deg)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Directions + quick address below map */}
            <div
              className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              style={{
                background: "oklch(0.99 0.005 58 / 0.95)",
                border: "1.5px solid oklch(0.82 0.07 50 / 0.7)",
                boxShadow: "0 4px 20px oklch(0.60 0.08 45 / 0.10)",
              }}
            >
              <div>
                <p
                  className="font-body text-sm font-semibold"
                  style={{ color: "oklch(0.28 0.07 35)" }}
                >
                  Shelar Park, Khadakpada Circle, Kalyan
                </p>
                <p
                  className="font-body text-xs mt-0.5"
                  style={{ color: "oklch(0.55 0.05 42)" }}
                >
                  Next to McDonald's · Ground floor · Easy parking available
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <motion.a
                  href="https://maps.app.goo.gl/Yk8BUkEf7EbDqbpj9"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.get_directions_button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.12 42), oklch(0.45 0.10 36))",
                    color: "oklch(0.97 0.01 55)",
                    boxShadow: "0 4px 16px oklch(0.50 0.12 40 / 0.40)",
                  }}
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </motion.a>
                <motion.a
                  href="https://maps.google.com/maps?q=Khadakpada+Circle+Kalyan+Maharashtra+421301"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.open_maps_button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all"
                  style={{
                    background: "oklch(0.92 0.04 52 / 0.7)",
                    border: "1.5px solid oklch(0.78 0.07 48 / 0.7)",
                    color: "oklch(0.38 0.08 38)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" /> Open in Maps
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
