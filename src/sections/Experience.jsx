import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Junior Frontend Web Developer",
    company: "Vanguard Tech / Independent Projects",
    period: "2023 - Present",
    description:
      "Translating complex design requirements into high-performance, responsive user interfaces. Focused on building scalable web experiences using React, Tailwind CSS, and Vite, while maintaining high standards for accessibility and performance optimization.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "English Language Instructor",
    company: "Global Learning Institute",
    period: "2021 - Present",
    description:
      "Mentoring diverse student groups and developing customized language curricula. This role has sharpened my cross-cultural communication, leadership, and organization skills, allowing me to manage weekly class schedules and curriculum cycles effectively.",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Education: Business Processes",
    company: "Universitas Terbuka",
    period: "Ongoing",
    description:
      "Currently studying Business Processes to understand the systematic flow of organizational data and operations. This academic background helps me approach software engineering with a focus on logic, efficiency, and business-driven solutions.",
    icon: <GraduationCap size={20} />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-brand-primary rounded-full" />
        </div>

        <div className="relative border-l-2 border-sky-100 ml-4 md:ml-8 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[50px] top-0 bg-white border-2 border-brand-primary text-brand-primary p-2 rounded-full z-10 shadow-sm transition-transform group-hover:scale-110">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sky-100 hover:border-brand-primary hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-text-main leading-tight">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-sky-50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-brand-secondary font-semibold text-sm mb-4">
                  {exp.company}
                </p>
                <p className="text-text-muted leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
