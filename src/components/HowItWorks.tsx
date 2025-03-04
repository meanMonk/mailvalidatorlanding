
export const HowItWorks = () => {
  const steps = [
    { 
      icon: "✅", 
      title: "Upload your email list", 
      description: "CSV, TXT, XLS formats all supported" 
    },
    { 
      icon: "✅", 
      title: "AI-powered cleaning in minutes", 
      description: "Our advanced algorithms identify and filter problematic emails" 
    },
    { 
      icon: "✅", 
      title: "Get a verified, ready-to-send list", 
      description: "Download your clean list and start sending" 
    }
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <span className="feature-chip">🔍 Simple Process</span>
        <h2 className="section-title text-2xl md:text-3xl font-semibold mt-4">How It Works</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="glassmorphism rounded-xl p-6 flex flex-col items-center text-center animate-fade-up subtle-glow"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <span className="text-xl">{step.icon}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center animate-fade-in [animation-delay:800ms]">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <span className="font-semibold">🚫 No tech skills. No complicated setup.</span> Just better email results.
        </p>
      </div>
    </section>
  );
};
