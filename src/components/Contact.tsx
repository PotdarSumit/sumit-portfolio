import { Mail, Phone, MapPin, Send, Code2, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:Spotdar1001@gmail.com?subject=${encodeURIComponent(`Message from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "Spotdar1001@gmail.com",
      link: "mailto:Spotdar1001@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9637649460",
      link: "tel:+919637649460",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code2,
      label: "GitHub",
      value: "PotdarSumit",
      link: "https://github.com/PotdarSumit",
      color: "from-slate-600 to-slate-800"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Open to opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400">{method.label}</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">{method.value}</p>
                    </div>
                    <Send size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-700/50">
              <h4 className="text-sm font-semibold text-slate-300 mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/PotdarSumit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                >
                  <Code2 size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                >
                  <Share2 size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-300 text-sm text-center">
                  Message submitted! Opening your email client...
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-slate-700/50 backdrop-blur-sm text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            I'm actively looking for opportunities to contribute to innovative projects. Whether it's a full-time role, freelance work, or just a conversation about technology, let's connect!
          </p>
          <a
            href="mailto:Spotdar1001@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
