
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
    <section className="px-4 pt-16 pb-8 md:pt-24 md:pb-16 max-w-5xl mx-auto text-center
    ">
      <motion.div 
        variants={staggerChildren}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        <motion.div variants={itemVariant}>
          <span className="feature-chip text-xl">🚀 Exciting News!</span>
        </motion.div>
        
        <motion.h3
          variants={itemVariant}
          className="text-2xl md:text-3xl font-semibold mb-8 text-center"
        >
          <span className="block">Your Emails Deserve to Be Opened.</span>
        </motion.h3>
        <motion.h1
          variants={itemVariant}
          className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6 space-y-2 italic space-x-2"
        >
          Stop Wasting 💰💰💰 on Bad Email Lists.
          {/* <span className="gradient-heading mx-1">
          </span> */}
        </motion.h1>
        
        <motion.p 
          variants={itemVariant} 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Clean Your Email List in Minutes. No setup, no headaches—just better deliverability.
        </motion.p>
        


        <h3 className="text-xl font-semibold mb-4">
          <span className="">💡 We fix it.</span>
        </h3>
        <div className="flex justify-center gap-2 text-md mb-4 items-center">
          <span className="p-4 flex items-center justify-center flex-nowrap w-4 h-4 bg-primary/15 rounded-full text-primary text-lg ">1</span> Upload your list
          <span className="p-4 flex items-center justify-center flex-nowrap w-4 h-4 bg-primary/15 rounded-full text-primary text-lg ">2</span> We clean it
          <span className="p-4 flex items-center justify-center flex-nowrap w-4 h-4 bg-primary/15 rounded-full text-primary text-lg ">3</span>You send with confidence.
        </div>


        <motion.div
          variants={itemVariant}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#ctasection"
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Join the Beta Now
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
