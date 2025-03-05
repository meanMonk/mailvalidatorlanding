
import { motion } from "framer-motion";

export const ProblemsSection = () => {
  const problems = [
    { icon: "📩", text: "Hard bounces" },
    { icon: "🕵️", text: "Spam traps" },
    { icon: "🤖", text: "Fake signups" },
    { icon: "📧", text: "Disposable emails" }
  ];

  return (
    <section className="py-16 w-full mx-auto glassmorphism ">
      <div className="p-2 md:p-10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Bad emails are <span className="gradient-heading">killing your open rates</span> and deliverability
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {problems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-purple-100 rounded-xl p-5 flex flex-col items-center shadow-sm card-hover"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/15 rounded-full mr-3 text-primary text-2xl">
                {feature.icon}
              </div>
              <span className="font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
};
