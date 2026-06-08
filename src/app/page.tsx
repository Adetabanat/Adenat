import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import IndustrySolutions from "../components/sections/IndustrySolutions";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTA from "../components/sections/CTA";



export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
          <IndustrySolutions />
          <WhyChooseUs />
          <CTA />
         
    </>
  );
}