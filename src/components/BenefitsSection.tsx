
export const BenefitsSection = () => {
  const benefits = [
    { 
      icon: "🔹", 
      title: "Boost Open Rates", 
      description: "Land in real inboxes, not spam folders" 
    },
    { 
      icon: "🔹", 
      title: "Save $$$", 
      description: "Stop paying for bad emails" 
    },
    { 
      icon: "🔹", 
      title: "Instant Fix", 
      description: "No waiting, no manual work" 
    }
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto bg-secondary rounded-3xl my-8">
      <div className="text-center mb-12 animate-fade-in">
        <span className="feature-chip">💡 Benefits</span>
        <h2 className="section-title text-2xl md:text-3xl font-semibold mt-4">Why This?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-background rounded-xl p-6 flex flex-col animate-fade-up shadow-sm"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <span className="text-xl mb-3">{benefit.icon}</span>
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
