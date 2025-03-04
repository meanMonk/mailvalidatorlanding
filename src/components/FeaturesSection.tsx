
export const FeaturesSection = () => {
  const features = [
    { title: "Free to use", checked: true },
    { title: "Easy copy updates", checked: true },
    { title: "Custom domain support", checked: true },
    { title: "Zero maintenance headaches", checked: true }
  ];

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <span className="feature-chip">🚀 Easy Setup</span>
        <h2 className="section-title text-2xl md:text-3xl font-semibold mt-4">Simple, No-Code Setup</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-secondary rounded-xl p-5 flex items-center animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="w-6 h-6 flex items-center justify-center bg-primary/15 rounded-full mr-3 text-primary text-sm">
              {feature.checked ? "✓" : ""}
            </div>
            <span className="font-medium">{feature.title}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center animate-fade-in [animation-delay:600ms]">
        <p className="text-lg text-muted-foreground">
          Built for <span className="font-semibold">founders, marketers, and anyone who sends emails.</span>
        </p>
      </div>
    </section>
  );
};
