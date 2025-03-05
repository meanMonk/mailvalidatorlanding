
import { motion } from "framer-motion";
import TallyEmbed from "./TallyEmbed";

export const CTASection = () => {
  return (
    <section className="px-4 py-4 max-w-5xl mx-auto" id="ctasection">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glassmorphism rounded-2xl p-8 md:p-12 text-center"
      >
        <span className="feature-chip animate-pulse-subtle">🎉 Limited Time Offer</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-3 gradient-heading">
          Join the Free Beta – 100 Free Email Validations!
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We won't spam. Just better email performance for you.
        </p>
        
        <TallyEmbed />

        {/* <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="https://tally.so/r/mVDLBj"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Claim Your Spot
          </a>
        </motion.div>

        <div className="mt-6 flex justify-center">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                {i}
              </div>
            ))}
          </div>
          <div className="ml-3 text-sm flex items-center text-gray-600">
            <span>Join 173 others today!</span>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};
