import {
  CheckCircle,
  Crown,
  Phone,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const INFO_POINTS = [
  {
    id: "i1",
    icon: Sparkles,
    title: "Certified Makeup Artist",
    desc: "10+ years of professional artistry and formal certification",
  },
  {
    id: "i2",
    icon: Star,
    title: "Premium Products Only",
    desc: "MAC, Kryolan, Charlotte Tilbury — no compromise on quality",
  },
  {
    id: "i3",
    icon: Crown,
    title: "Celebrity-Approved Techniques",
    desc: "Trusted by Bollywood stars and high-profile clients",
  },
  {
    id: "i4",
    icon: Shield,
    title: "Hygienic & Safe Environment",
    desc: "All tools sterilized — your safety is our first priority",
  },
];

const SERVICE_OPTIONS = [
  "Select a Service",
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Mehendi Makeup",
  "Photoshoot Makeup",
  "Hair Styling",
];

const TIME_SLOTS = [
  "Select a Time Slot",
  "Morning (9AM – 11AM)",
  "Afternoon (12PM – 2PM)",
  "Evening (4PM – 6PM)",
  "Custom Time",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

const inputBase = {
  background: "oklch(0.99 0.008 52)",
  border: "1.5px solid oklch(0.82 0.06 48 / 0.8)",
  borderRadius: 10,
  color: "oklch(0.22 0.07 35)",
  padding: "0.75rem 1rem",
  width: "100%",
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function AppointmentSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const focusStyle = (field: string) =>
    focused === field
      ? {
          ...inputBase,
          border: "1.5px solid oklch(0.55 0.12 42)",
          boxShadow: "0 0 0 3px oklch(0.72 0.10 48 / 0.25)",
        }
      : inputBase;

  return (
    <section
      id="appointment"
      data-ocid="appointment.section"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, oklch(0.98 0.012 50) 0%, oklch(0.96 0.018 48) 60%, oklch(0.97 0.010 52) 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-10 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.10 50 / 0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.09 42 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
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
              style={{ color: "oklch(0.45 0.12 40)" }}
            />
            <span
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.45 0.10 40)" }}
            >
              Reservations
            </span>
          </motion.div>

          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "oklch(0.20 0.08 35)" }}
          >
            Book Your{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.14 38) 0%, oklch(0.58 0.14 46) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Appointment
            </span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "oklch(0.38 0.06 38)" }}
          >
            Transform your look for your special day. Fill in your details and
            we'll confirm your booking via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8 relative"
              style={{
                background: "oklch(1.0 0.0 0 / 0.92)",
                border: "1.5px solid oklch(0.84 0.06 50 / 0.7)",
                boxShadow:
                  "0 8px 48px oklch(0.60 0.08 45 / 0.14), 0 2px 8px oklch(0.50 0.06 40 / 0.10)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    data-ocid="appointment.success_state"
                    className="flex flex-col items-center justify-center py-16 text-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                    >
                      <CheckCircle
                        className="w-20 h-20"
                        style={{ color: "oklch(0.52 0.14 145)" }}
                      />
                    </motion.div>
                    <h3
                      className="font-display text-2xl font-bold"
                      style={{ color: "oklch(0.20 0.08 35)" }}
                    >
                      Appointment Request Received!
                    </h3>
                    <p
                      className="font-body text-sm max-w-sm leading-relaxed"
                      style={{ color: "oklch(0.38 0.06 38)" }}
                    >
                      Thank you! We'll confirm your appointment via WhatsApp
                      shortly. For immediate booking, WhatsApp us at{" "}
                      <strong style={{ color: "oklch(0.28 0.08 35)" }}>
                        09594952492
                      </strong>
                    </p>
                    <motion.a
                      href="https://wa.me/919594952492?text=Hi%20Pinkie!%20I%20just%20submitted%20an%20appointment%20request."
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="appointment.whatsapp_confirm_button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm"
                      style={{
                        background: "#25D366",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(37,211,102,0.40)",
                      }}
                    >
                      Confirm on WhatsApp
                    </motion.a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                      }}
                      className="font-body text-sm underline"
                      style={{ color: "oklch(0.50 0.08 40)" }}
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    data-ocid="appointment.form"
                    className="space-y-5"
                  >
                    <h3
                      className="font-display text-xl font-bold mb-6"
                      style={{ color: "oklch(0.20 0.08 35)" }}
                    >
                      Your Appointment Details
                    </h3>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="appt-name"
                          className="font-body text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "oklch(0.42 0.08 40)" }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="appt-name"
                          type="text"
                          data-ocid="appointment.name_input"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          style={focusStyle("name")}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="appt-phone"
                          className="font-body text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "oklch(0.42 0.08 40)" }}
                        >
                          Phone Number *
                        </label>
                        <input
                          id="appt-phone"
                          type="tel"
                          data-ocid="appointment.phone_input"
                          required
                          placeholder="09XXXXXXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          style={focusStyle("phone")}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="appt-email"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "oklch(0.42 0.08 40)" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="appt-email"
                        type="email"
                        data-ocid="appointment.email_input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("email")}
                      />
                    </div>

                    {/* Service */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="appt-service"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "oklch(0.42 0.08 40)" }}
                      >
                        Service Required *
                      </label>
                      <select
                        id="appt-service"
                        data-ocid="appointment.service_select"
                        required
                        value={form.service}
                        onChange={(e) =>
                          handleChange("service", e.target.value)
                        }
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("service")}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option
                            key={opt}
                            value={opt === "Select a Service" ? "" : opt}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="appt-date"
                          className="font-body text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "oklch(0.42 0.08 40)" }}
                        >
                          Preferred Date *
                        </label>
                        <input
                          id="appt-date"
                          type="date"
                          data-ocid="appointment.date_input"
                          required
                          value={form.date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => handleChange("date", e.target.value)}
                          onFocus={() => setFocused("date")}
                          onBlur={() => setFocused(null)}
                          style={focusStyle("date")}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="appt-time"
                          className="font-body text-xs font-semibold uppercase tracking-wider"
                          style={{ color: "oklch(0.42 0.08 40)" }}
                        >
                          Preferred Time *
                        </label>
                        <select
                          id="appt-time"
                          data-ocid="appointment.time_select"
                          required
                          value={form.time}
                          onChange={(e) => handleChange("time", e.target.value)}
                          onFocus={() => setFocused("time")}
                          onBlur={() => setFocused(null)}
                          style={focusStyle("time")}
                        >
                          {TIME_SLOTS.map((slot) => (
                            <option
                              key={slot}
                              value={slot === "Select a Time Slot" ? "" : slot}
                            >
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="appt-notes"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "oklch(0.42 0.08 40)" }}
                      >
                        Special Requirements / Notes
                      </label>
                      <textarea
                        id="appt-notes"
                        data-ocid="appointment.notes_textarea"
                        placeholder="Any special requirements or occasion details..."
                        rows={3}
                        value={form.notes}
                        onChange={(e) => handleChange("notes", e.target.value)}
                        onFocus={() => setFocused("notes")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...focusStyle("notes"),
                          resize: "vertical",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      data-ocid="appointment.submit_button"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 32px oklch(0.48 0.14 40 / 0.50)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-body font-bold text-base tracking-wide mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.42 0.14 38), oklch(0.52 0.14 44))",
                        color: "oklch(0.97 0.01 55)",
                        boxShadow: "0 4px 20px oklch(0.48 0.12 40 / 0.40)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      ✨ Confirm Appointment
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — Info Panel (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Why Book */}
            <div
              className="rounded-3xl p-7"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.93 0.026 46) 0%, oklch(0.90 0.032 42) 100%)",
                border: "1.5px solid oklch(0.80 0.07 46 / 0.6)",
                boxShadow:
                  "0 8px 40px oklch(0.58 0.10 44 / 0.22), 0 0 0 1px oklch(0.82 0.06 48 / 0.20)",
              }}
            >
              <h3
                className="font-display text-xl font-bold mb-6"
                style={{ color: "oklch(0.18 0.08 35)" }}
              >
                Why Book With Us?
              </h3>
              <div className="space-y-4">
                {INFO_POINTS.map((pt, i) => (
                  <motion.div
                    key={pt.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.82 0.08 50), oklch(0.76 0.10 44))",
                        boxShadow: "0 3px 10px oklch(0.62 0.10 46 / 0.28)",
                      }}
                    >
                      <pt.icon
                        className="w-4 h-4"
                        style={{ color: "oklch(0.28 0.08 35)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-body text-sm font-bold leading-tight"
                        style={{ color: "oklch(0.18 0.08 35)" }}
                      >
                        {pt.title}
                      </p>
                      <p
                        className="font-body text-xs mt-0.5 leading-relaxed"
                        style={{ color: "oklch(0.35 0.06 38)" }}
                      >
                        {pt.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact + Hours */}
            <div
              className="rounded-3xl p-6"
              style={{
                background: "oklch(1.0 0.0 0 / 0.90)",
                border: "1.5px solid oklch(0.84 0.06 50 / 0.7)",
                boxShadow: "0 4px 20px oklch(0.60 0.08 45 / 0.12)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.82 0.08 50), oklch(0.76 0.10 44))",
                  }}
                >
                  <Phone
                    className="w-4 h-4"
                    style={{ color: "oklch(0.28 0.08 35)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-body text-xs uppercase tracking-wider font-semibold"
                    style={{ color: "oklch(0.48 0.08 42)" }}
                  >
                    Call / WhatsApp
                  </p>
                  <a
                    href="tel:09594952492"
                    data-ocid="appointment.phone_link"
                    className="font-display text-xl font-bold"
                    style={{ color: "oklch(0.22 0.08 35)" }}
                  >
                    09594952492
                  </a>
                </div>
              </div>
              <div
                className="py-3 px-4 rounded-xl mb-3"
                style={{
                  background: "oklch(0.97 0.010 50 / 0.8)",
                  border: "1px solid oklch(0.86 0.05 50 / 0.6)",
                }}
              >
                <p
                  className="font-body text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "oklch(0.48 0.08 42)" }}
                >
                  Business Hours
                </p>
                <p
                  className="font-body text-sm font-medium"
                  style={{ color: "oklch(0.22 0.07 35)" }}
                >
                  Monday – Sunday: 9AM to 7PM
                </p>
              </div>
              <div
                className="py-3 px-4 rounded-xl flex items-center gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.92 0.030 46 / 0.8), oklch(0.89 0.036 42 / 0.8))",
                  border: "1px solid oklch(0.78 0.08 44 / 0.5)",
                }}
              >
                <span style={{ fontSize: 18 }}>⏰</span>
                <p
                  className="font-body text-sm font-semibold"
                  style={{ color: "oklch(0.25 0.08 35)" }}
                >
                  Limited slots available — Book Early!
                </p>
              </div>
            </div>

            {/* Floating sparkle decorative */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex justify-center pt-2"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.08 50), oklch(0.78 0.12 44))",
                  boxShadow:
                    "0 6px 24px oklch(0.62 0.10 46 / 0.40), 0 0 20px oklch(0.72 0.10 50 / 0.25)",
                }}
              >
                <span style={{ fontSize: 28 }}>✨</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
