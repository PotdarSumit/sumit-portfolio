export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C++"],
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring Security", "Hibernate", "JPA"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Security & API Gateway",
      skills: ["Keycloak", "Kong API Gateway", "JWT"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS EC2", "Docker", "Docker Compose", "Cloud Architecture"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Caching & Real-Time",
      skills: ["Redis", "WebSocket", "Atomic Operations", "Cache Patterns"],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "High-Performance Systems",
      skills: ["Concurrency Control", "Race Condition Prevention", "Load Testing", "Performance Tuning"],
      color: "from-amber-500 to-orange-500"
    },
    {
      category: "Architecture & Design",
      skills: ["Microservices", "REST APIs", "Idempotency", "Webhooks", "Reconciliation"],
      color: "from-rose-500 to-violet-500"
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Maven", "Postman", "Docker"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      category: "Core Competencies",
      skills: ["Problem-Solving", "SDLC", "OOP", "DSA", "DBMS", "Design Patterns", "Agile"],
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive technical expertise spanning backend development, cloud platforms, and software architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20"
            >
              <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 border border-slate-600`}>
                <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-slate-700/50 text-slate-200 text-sm font-medium hover:bg-slate-600 transition-all duration-300 hover:text-white cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Overview */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Overview</h3>
          <div className="space-y-6">
            {[
              { name: "Backend Development", percentage: 90 },
              { name: "Spring Ecosystem", percentage: 85 },
              { name: "Database Design & Optimization", percentage: 85 },
              { name: "Microservices Architecture", percentage: 80 },
              { name: "Cloud Deployment", percentage: 75 },
              { name: "API Security", percentage: 85 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
