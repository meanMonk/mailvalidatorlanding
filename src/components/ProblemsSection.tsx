
import { motion } from "framer-motion";

export const ProblemsSection = () => {
  const problems = [
    { icon: "❌", text: "Hard bounces" },
    { icon: "❌", text: "Spam traps" },
    { icon: "❌", text: "Fake signups" },
    { icon: "❌", text: "Disposable emails" }
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="glassmorphism rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Bad emails are <span className="gradient-heading">killing your open rates</span> and deliverability
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-4 rounded-xl bg-white/80 border border-purple-100 shadow-sm"
            >
              <span className="text-xl mr-3">{problem.icon}</span>
              <span className="font-medium">{problem.text}</span>
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
          <h3 className="text-xl font-semibold mb-4">
            <span className="gradient-heading">💡 We fix it.</span> Upload your list → We clean it → You send with confidence.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};
