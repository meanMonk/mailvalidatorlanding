
import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="mt-16 px-4 py-2 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          🔥
          <span className="gradient-heading">Start Sending Emails That Actually Get Opened!
          </span>
        </h2>
        <div className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
          <p>For any questions or feedback, reach out at </p>
          <a rel="noopener noreferrer" target="_blank" href="https://x.com/sahil_kashetwar">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-4 w-4 transition-all duration-200 ease-linear hover:text-yellow-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>
        </div>
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
