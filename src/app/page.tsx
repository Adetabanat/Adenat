import Hero from "../components/sections/Hero";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import IndustrySolutions from "../components/sections/IndustrySolutions";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <IndustrySolutions />
      <WhyChooseUs />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTA />
    </>
  );
}