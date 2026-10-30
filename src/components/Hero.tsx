import { ArrowRight, Download, Zap } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleContactClick = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                  <Zap size={16} className="text-cyan-400" />
                  <span className="text-sm text-cyan-300 font-medium">Full-Stack Backend Engineer</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Sumit Potdar
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Entry-level software engineer passionate about building robust, scalable backend systems. 
                Specialized in microservices, payment processing, and cloud architectures.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-cyan-400">20+</p>
                <p className="text-sm text-slate-400">APIs Built</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-blue-400">8</p>
                <p className="text-sm text-slate-400">Tech Skills</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <p className="text-2xl font-bold text-purple-400">2+</p>
                <p className="text-sm text-slate-400">Key Projects</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleContactClick}
                className="flex items-center justify-center space-x-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </button>
              <a
                href="mailto:Spotdar1001@gmail.com"
                className="flex items-center justify-center space-x-2 px-8 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white font-semibold hover:bg-slate-700/50 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Content - Code Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-slate-400">
                    <span className="text-cyan-400">const</span> <span className="text-white">developer</span> = {'{'}
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">name</span>: <span className="text-green-400">"Sumit Potdar"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">role</span>: <span className="text-green-400">"Backend Engineer"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">skills</span>: [<span className="text-green-400">"Java", "Spring Boot", "Microservices"</span>],
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">passion</span>: <span className="text-green-400">"Building scalable systems"</span>
                  </div>
                  <div className="text-slate-400">
                    {'}'};
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-slate-400">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
