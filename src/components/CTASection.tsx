
export const CTASection = () => {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="glassmorphism rounded-2xl p-8 md:p-12 text-center animate-scale-in">
        <span className="feature-chip animate-pulse-subtle">🎉 Limited Time Offer</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3 animate-fade-up [animation-delay:200ms]">
          Join the Free Beta – 100 Free Email Validations!
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:400ms]">
          No credit card required. We won't spam. Just better email performance for you.
        </p>
        
        <div className="animate-fade-up [animation-delay:600ms]">
          <a 
            href="https://tally.so/r/mVDLBj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Claim Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};
