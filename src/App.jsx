import CallToAction from "./components/CTA";
import FeaturesSection from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import PricingSection from "./components/Pricing";
import TestimonialsSection from "./components/Testimonial";
import "./App.css";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <PricingSection></PricingSection>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
