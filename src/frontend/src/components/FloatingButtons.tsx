import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function FloatingButtons() {
  return (
    <div className="fixed z-50 bottom-6 left-0 right-0 pointer-events-none">
      {/* WhatsApp — bottom right */}
      <motion.a
        data-ocid="floating.whatsapp_button"
        href="https://wa.me/919594952492?text=Hi%20Pinkie%20di!%20I%20would%20like%20to%20book%20a%20makeup%20session."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto absolute right-6 bottom-0 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-smooth"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full"
          style={{ background: "#25D366", opacity: 0.4 }}
        />
        <SiWhatsapp className="w-7 h-7 text-white relative z-10" />
      </motion.a>

      {/* Instagram — bottom left */}
      <motion.a
        data-ocid="floating.instagram_button"
        href="https://www.instagram.com/makeupbypinkiethakur"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto absolute left-6 bottom-0 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated"
        style={{
          background:
            "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
        aria-label="Follow on Instagram"
      >
        <SiInstagram className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
}
