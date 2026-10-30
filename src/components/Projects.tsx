import { ExternalLink, Code2, Server, Database, Lock, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Flash Sale Storefront",
      description: "Production-grade high-concurrency e-commerce platform handling extreme flash sale scenarios with 10,000+ simultaneous users. Engineered to prevent overbooking, maintain real-time inventory synchronization, and guarantee data consistency under extreme load.",
      period: "2024",
      techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "WebSocket", "Docker", "Docker Compose"],
      highlights: [
        "Handles 1000+ orders per second with <100ms latency",
        "Prevents race conditions using Redis atomic operations (zero overselling)",
        "Real-time inventory updates via WebSocket broadcasting to 10,000+ concurrent users",
        "ACID transactions with PostgreSQL for data consistency",
        "Spring async processing for non-blocking high-throughput order handling",
        "Load testing with Python scripts validating performance under extreme conditions",
        "Docker containerized multi-service architecture (Backend + PostgreSQL + Redis)",
        "Warehouse simulator for inventory consistency validation"
      ],
      color: "from-orange-500 to-red-500",
      github: "https://github.com/PotdarSumit/flash-sale-storefront"
    },
    {
      id: 2,
      title: "Freelance Payment Services Platform",
      description: "Built comprehensive backend for payment services managing transaction lifecycle with advanced features including idempotent state management, reconciliation mechanisms, and secure webhook handlers.",
      period: "2025 - 2026",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Keycloak", "AWS EC2", "Kong API Gateway"],
      highlights: [
        "Owned complete backend components for payment services",
        "Implemented idempotent state management to prevent duplicate updates",
        "Developed polling-based reconciliation for missed transactions",
        "Built secure webhook handlers with signature verification",
        "Integrated Keycloak for token-based access control",
        "Deployed services on AWS EC2 behind Kong API gateway"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Krishi Mitra - Online Crop Marketplace",
      description: "Comprehensive agricultural marketplace platform enabling farmers and buyers to connect seamlessly with real-time weather integration and secure payment processing.",
      period: "2024 - 2025",
      techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL", "JWT", "OpenWeatherMap API"],
      highlights: [
        "Developed 20+ RESTful APIs for products, orders, and authentication",
        "Implemented JWT-based authentication with role-based access control",
        "Applied layered architecture with clean code principles",
        "Optimized database queries using Spring Data JPA with pagination",
        "Integrated OpenWeatherMap API with scheduled tasks",
        "Structured as modular monolith for future microservices migration"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Production-grade projects showcasing full-stack backend development capabilities
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/20"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Featured Badge for Flash Sale */}
              {project.id === 1 && (
                <div className="absolute top-0 right-0 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
                    <Zap size={16} />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="relative p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">{project.period}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                        title="View on GitHub"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href="https://github.com/PotdarSumit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-cyan-400 transition-all duration-300"
                      title="GitHub Profile"
                    >
                      <Code2 size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 border border-slate-600 text-slate-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                    <Server size={16} className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                    Key Features & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                        <span className="text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <Database className="text-cyan-400" size={24} />
              <h4 className="font-semibold text-white">Database Architecture</h4>
            </div>
            <p className="text-slate-400 text-sm">Expertise in designing normalized schemas, query optimization, indexing strategies, and transaction handling for high-performance systems.</p>
          </div>

          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-blue-400" size={24} />
              <h4 className="font-semibold text-white">Security Implementation</h4>
            </div>
            <p className="text-slate-400 text-sm">Skilled in implementing JWT authentication, role-based access control, OAuth2 flows, API security, and secure webhook handling mechanisms.</p>
          </div>

          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <Server className="text-green-400" size={24} />
              <h4 className="font-semibold text-white">Microservices Design</h4>
            </div>
            <p className="text-slate-400 text-sm">Experience building scalable microservices with event-driven architecture, idempotency patterns, and distributed system design principles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
