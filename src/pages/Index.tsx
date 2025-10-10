import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarketTicker } from "@/components/MarketTicker";
import { ResourceCards } from "@/components/ResourceCards";
import { MarketNews } from "@/components/MarketNews";
import { NewsTimeline } from "@/components/NewsTimeline";
import { DailyQuotes } from "@/components/DailyQuotes";
import { StootsIndex } from "@/components/StootsIndex";
import { MarketAgenda } from "@/components/MarketAgenda";
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
      <MarketTicker />
      <ResourceCards />
      <MarketNews />
      <NewsTimeline />
      <DailyQuotes />
      <StootsIndex />
      <MarketAgenda />
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
