import { Award, BookOpen, Trophy } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Savitribai Phule Pune University",
      college: "Sinhgad Institute of Business Administration & Research",
      year: "June 2025",
      cgpa: "7.63 CGPA",
      highlights: ["Advanced Software Engineering", "Data Structures & Algorithms", "Database Management Systems", "Web Development"]
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Swami Ramanand Teerth Marathwada University",
      college: "MGM's College of Computer Science & IT, Nanded",
      year: "2022",
      percentage: "71%",
      highlights: ["Core Programming", "Database Systems", "Web Technologies", "Software Development"]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Event Organizer",
      description: "Sinhgad Spring Festival - Managed event logistics, sponsorships, and promotions for college fest"
    },
    {
      icon: BookOpen,
      title: "Coding Competitions",
      description: "Participated in coding and debugging events at college level with consistent performance"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Strong academic performance with focus on practical implementation and real-world problem solving"
    }
  ];

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education & Achievements
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Academic foundation and accomplishments that shape my professional journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>

              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                    <p className="text-slate-400 text-sm">{edu.college}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">{edu.year}</p>
                    <p className="text-lg font-bold text-cyan-400">
                      {edu.cgpa || edu.percentage}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-300 mb-3">Key Subjects & Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Focus */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">Academic Strengths</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Problem Solving", level: "Expert" },
              { title: "System Design", level: "Advanced" },
              { title: "Data Structures", level: "Expert" },
              { title: "Software Architecture", level: "Advanced" }
            ].map((strength, index) => (
              <div key={index} className="text-center">
                <p className="text-cyan-400 font-semibold text-lg">{strength.title}</p>
                <p className="text-slate-400 text-sm mt-1">{strength.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
