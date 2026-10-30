import { Briefcase, Target, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Professional Journey",
      description: "Entry-level software engineer with strong problem-solving skills and hands-on experience in building production-grade backend systems. Currently working as a Freelance Java Backend Developer."
    },
    {
      icon: Target,
      title: "Focus Areas",
      description: "Specialized in high-concurrency systems, microservices architecture, payment processing, and real-time applications. Expert in Spring Boot, Redis atomic operations, database optimization, WebSocket, and secure authentication."
    },
    {
      icon: Heart,
      title: "What I Love",
      description: "Building clean, maintainable code that scales. Problem-solving through design patterns and best practices. Continuous learning and staying updated with industry trends."
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Quick learner with solid CS fundamentals, driven to deliver high-quality software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Stats */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8">Key Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-cyan-400">Education</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Master of Computer Application (MCA) - 7.63 CGPA</li>
                <li>• B.Sc. Computer Science - 71%</li>
                <li>• Strong foundation in DSA, DBMS, and OOP</li>
              </ul>
            </div>
             <div className="space-y-4">
               <h4 className="font-semibold text-blue-400">Experience</h4>
               <ul className="space-y-2 text-slate-300">
                 <li>• Freelance Java Backend Developer (2025-2026)</li>
                 <li>• 20+ RESTful APIs & high-concurrency systems</li>
                 <li>• Flash sale system handling 1000+ orders/second</li>
                 <li>• Production systems deployed on AWS & Docker</li>
                 <li>• Expert in Redis atomic operations & WebSocket</li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
