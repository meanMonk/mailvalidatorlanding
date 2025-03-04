
import { useEffect } from "react";
import { motion } from "framer-motion";
import { WaitlistHero } from "@/components/WaitlistHero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  // Smooth scroll effect for the entire page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Update the page title
    document.title = "Email Cleaner Genius - Clean Your Email List in Minutes";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen overflow-x-hidden bg-gradient-to-b from-background to-secondary/30"
    >
      <WaitlistHero />
      
      <AnimatedSection delay={1}>
        <ProblemsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={1}>
        <HowItWorks />
      </AnimatedSection>
      
      <AnimatedSection delay={3}>
        <BenefitsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={3}>
        <CTASection />
      </AnimatedSection>

      <AnimatedSection delay={3}>
        <FooterSection />
      </AnimatedSection>
    </motion.div>
  );
};

export default Index;
