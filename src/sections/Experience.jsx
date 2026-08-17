import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen, Clock } from "lucide-react";

const experiences = [
  {
    title: "Junior Frontend Web Developer",
    company: "Vanguard Tech / Independent Projects",
    period: "2023 - Present",
    type: "Software Engineering",
    description:
      "Translating complex design requirements into high-performance, responsive user interfaces. Focused on building scalable web experiences using React, Tailwind CSS, and Vite, while maintaining high standards for accessibility and performance optimization.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "REST APIs"],
    icon: <Briefcase size={20} />,
  },
  {
    title: "English Language Instructor",
    company: "Global Learning Institute",
    period: "2021 - Present",
    type: "Leadership & Mentorship",
    description:
      "Mentoring diverse student groups and developing customized language curricula. This role has sharpened my cross-cultural communication, leadership, and organization skills, allowing me to manage weekly class schedules and curriculum cycles effectively.",
    skills: ["Public Speaking", "Curriculum Design", "Mentorship", "Team Management"],
    icon: <Briefcase size={20} />,
  },
  {
    title: "Education: Business Processes",
    company: "Universitas Terbuka",
    period: "Ongoing",
    type: "Academic Foundation",
    description:
      "Currently studying Business Processes to understand the systematic flow of organizational data and operations. This academic background helps me approach software engineering with a focus on logic, efficiency, and business-driven solutions.",
    skills: ["Business Logic", "Process Architecture", "Data Flow", "Analytical Problem Solving"],
    icon: <GraduationCap size={20} />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 2xl:py-32 px-6 md:px-12 2xl:px-16 bg-surface-200/70 relative">
      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1720px] 4xl:max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-20 items-start">
          
          {/* Left Column: Summary & Career Overview (lg:col-span-5 2xl:col-span-5) */}
          <div className="lg:col-span-5 2xl:col-span-5 sticky top-28">
            <span className="text-xs md:text-sm font-bold tracking-widest text-brand-primary uppercase bg-sky-100/80 px-3 py-1 rounded-full">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mt-3 mb-6">
              Experience & Education
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
              A blend of frontend engineering expertise, instructional leadership, and ongoing business process education.
            </p>

            {/* Quick Experience Highlights Box */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-sky-100 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-brand-primary font-bold">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-main">Clean Code & UI Focus</h4>
                  <p className="text-xs text-text-muted">Dedicated to accessible and performant web interfaces.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-sky-50 pt-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-main">Continuous Growth</h4>
                  <p className="text-xs text-text-muted">Blending academic business logic with web development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards (lg:col-span-7 2xl:col-span-7) */}
          <div className="lg:col-span-7 2xl:col-span-7">
            <div className="relative border-l-2 border-sky-200 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, x: -15 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-0 bg-white border-2 border-brand-primary text-brand-primary p-2 rounded-full z-10 shadow-sm transition-transform hover:scale-110">
                    {exp.icon}
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sky-100/90 hover:border-brand-primary hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Clock size={12} /> {exp.period}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-extrabold text-text-main leading-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-brand-secondary font-semibold text-sm mb-4">
                      {exp.company}
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm md:text-base mb-6">
                      {exp.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-sky-50">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-semibold px-2.5 py-1 bg-surface-200 text-slate-700 rounded-md border border-sky-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

