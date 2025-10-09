import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Features } from "@/components/Features";
import { FutureFeatures } from "@/components/FutureFeatures";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <FutureFeatures />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
