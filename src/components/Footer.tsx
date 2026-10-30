import { Mail, Phone, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <span className="text-white font-bold text-lg">Sumit Potdar</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Full-stack backend engineer passionate about building scalable, secure, and robust systems. Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:Spotdar1001@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                <span>Spotdar1001@gmail.com</span>
              </a>
              <a
                href="tel:+919637649460"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                <span>+91 9637649460</span>
              </a>
              <a
                href="https://github.com/PotdarSumit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                <Code2 size={16} />
                <span>github.com/PotdarSumit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 py-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Sumit Potdar. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-cyan-400" />
              <span>using React, Tailwind CSS & Vite</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 opacity-0 hover:opacity-100 invisible hover:visible"
          title="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
