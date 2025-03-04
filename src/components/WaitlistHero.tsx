
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const WaitlistHero = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our waitlist!",
      });
    }, 1500);
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  return (
    <section className="px-4 pt-16 pb-8 md:pt-24 md:pb-16 max-w-5xl mx-auto text-center">
      <motion.div 
        variants={staggerChildren}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        <motion.div variants={itemVariant}>
          <span className="feature-chip">🚀 Email List Cleaner — Beta Access</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariant}
          className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6 space-y-2"
        >
          <span className="block">Your Emails Deserve to Be Opened.</span>
          <span className="block gradient-heading">
            Stop Wasting $$$ on Bad Email Lists.
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariant} 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Clean Your Email List in Minutes. No setup, no headaches—just better deliverability.
        </motion.p>
        
        <motion.div 
          variants={itemVariant}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="https://tally.so/r/mVDLBj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Join the Beta Now
          </a>
        </motion.div>

        <motion.div 
          variants={itemVariant}
          className="mt-4 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            No Credit Card Required!
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
