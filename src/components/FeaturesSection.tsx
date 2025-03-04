
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    { title: "Free to use", checked: true },
    { title: "Easy copy updates", checked: true },
    { title: "Custom domain support", checked: true },
    { title: "Zero maintenance headaches", checked: true }
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="feature-chip">🚀 Easy Setup</span>
        <h2 className="section-title text-2xl md:text-3xl font-semibold mt-4 gradient-heading">Simple, No-Code Setup</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-purple-100 rounded-xl p-5 flex items-center shadow-sm card-hover"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-primary/15 rounded-full mr-3 text-primary text-sm">
              {feature.checked ? "✓" : ""}
            </div>
            <span className="font-medium">{feature.title}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 text-center"
      >
        <p className="text-lg text-muted-foreground">
          Built for <span className="font-semibold">founders, marketers, and anyone who sends emails.</span>
        </p>
      </motion.div>
    </section>
  );
};
