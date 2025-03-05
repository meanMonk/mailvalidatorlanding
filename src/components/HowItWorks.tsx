
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    { 
      icon: "📤", 
      title: "Upload your email list", 
      description: "CSV, TXT, XLS formats all supported" 
    },
    { 
      icon: "✨", 
      title: "AI-powered cleaning in minutes", 
      description: "Our advanced algorithms identify and filter problematic emails" 
    },
    { 
      icon: "📋", 
      title: "Get a verified, ready-to-send list", 
      description: "Download your clean list and start sending" 
    }
  ];

  return (
    <section className="p-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 ">
          🔍
          <span className="gradient-heading ml-2">
            How It Works
          </span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="feature-card flex flex-col items-center text-center card-hover"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-5">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-10 text-center"
      >
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <span className="font-semibold">🚫 No tech skills. No complicated setup.</span> Just better email results.
        </p>
      </motion.div>
    </section>
  );
};
