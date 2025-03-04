
export const ProblemsSection = () => {
  const problems = [
    { icon: "❌", text: "Hard bounces" },
    { icon: "❌", text: "Spam traps" },
    { icon: "❌", text: "Fake signups" },
    { icon: "❌", text: "Disposable emails" }
  ];

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <div className="glassmorphism rounded-2xl p-8 animate-scale-in">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center animate-fade-in [animation-delay:200ms]">
          Bad emails are killing your open rates and deliverability
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 rounded-xl bg-background animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <span className="text-xl mr-3">{problem.icon}</span>
              <span className="font-medium">{problem.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-fade-up [animation-delay:800ms]">
          <h3 className="text-xl font-semibold mb-4">
            <span className="text-primary">💡 We fix it.</span> Upload your list → We clean it → You send with confidence.
          </h3>
        </div>
      </div>
    </section>
  );
};
