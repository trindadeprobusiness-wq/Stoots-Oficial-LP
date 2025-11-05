import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResourceCards } from "@/components/ResourceCards";
import { TrackEverything } from "@/components/TrackEverything";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ValueProposition } from "@/components/ValueProposition";
import { Features } from "@/components/Features";
import { ForecastFeature } from "@/components/ForecastFeature";
import { MobileApp } from "@/components/MobileApp";
import { FutureFeatures } from "@/components/FutureFeatures";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ResourceCards />
      <TrackEverything />
      <ComparisonSection />
      <ValueProposition />
      <Features />
      <ForecastFeature />
      <MobileApp />
      <FutureFeatures />
      <Pricing />
      <Testimonials />
      <FeaturedArticles />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
