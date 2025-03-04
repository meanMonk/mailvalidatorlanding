
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
  
  return (
    <section className="px-4 pt-12 pb-8 md:pt-20 md:pb-12 max-w-5xl mx-auto text-center">
      <div className="space-y-4 animate-fade-in">
        <span className="feature-chip animate-pulse-subtle">🚀 Email List Cleaner — Beta Access</span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
          <span className="block animate-fade-up [animation-delay:200ms]">Your Emails Deserve to Be Opened.</span>
          <span className="block text-primary animate-fade-up [animation-delay:400ms]">
            Stop Wasting $$$ on Bad Email Lists.
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up [animation-delay:600ms]">
          Clean Your Email List in Minutes. No setup, no headaches—just better deliverability.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [animation-delay:800ms]">
          <a 
            href="https://tally.so/r/mVDLBj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Join the Beta Now
          </a>
        </div>
      </div>
    </section>
  );
};
