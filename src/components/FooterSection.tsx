
import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="mt-16 px-4 py-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 gradient-heading">
          🔥 Start Sending Emails That Actually Get Opened!
        </h2>
        {/*
        <div className="mb-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="https://tally.so/r/mVDLBj"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary subtle-glow"
            >
              Join the Beta Now
            </a>
          </motion.div>
        </div> */}
        
        <div className="text-sm text-muted-foreground mt-12 border-t pt-6">
          <p>© {new Date().getFullYear()} vaayulabs.xyz. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};
