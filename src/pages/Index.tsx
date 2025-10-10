import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResourceCards } from "@/components/ResourceCards";
import { ValueProposition } from "@/components/ValueProposition";
import { Features } from "@/components/Features";
import { MobileApp } from "@/components/MobileApp";
import { FutureFeatures } from "@/components/FutureFeatures";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ResourceCards />
      <ValueProposition />
      <Features />
      <MobileApp />
      <FutureFeatures />
      <Pricing />
      <Testimonials />
      <FeaturedArticles />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
