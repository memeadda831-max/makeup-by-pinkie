import AppointmentSection from "@/components/AppointmentSection";
import CTASection from "@/components/CTASection";
import CelebritySection from "@/components/CelebritySection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="min-h-screen"
        style={{ background: "oklch(0.98 0.01 50)" }}
      >
        {/* Sticky navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          {/* Hero */}
          <HeroSection />

          {/* Why Choose Us */}
          <section id="about">
            <WhyChooseSection />
          </section>

          {/* Services */}
          <ServicesSection />

          {/* Celebrity Work */}
          <CelebritySection />

          {/* Gallery */}
          <GallerySection />

          {/* Reviews */}
          <ReviewsSection />

          {/* FAQ */}
          <FAQSection />

          {/* CTA */}
          <CTASection />

          {/* Appointment */}
          <AppointmentSection />

          {/* Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating action buttons (WhatsApp + Instagram) */}
        <FloatingButtons />
      </div>
    </QueryClientProvider>
  );
}
