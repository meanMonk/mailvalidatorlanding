
export const FooterSection = () => {
  return (
    <footer className="mt-16 px-4 py-8 max-w-5xl mx-auto">
      <div className="text-center animate-fade-in">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          🔥 Start Sending Emails That Actually Get Opened!
        </h2>
        
        <div className="mb-10">
          <a 
            href="https://tally.so/r/mVDLBj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary subtle-glow"
          >
            Join the Beta Now
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground mt-12 border-t pt-6">
          <p>© {new Date().getFullYear()} Email Cleaner Genius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
