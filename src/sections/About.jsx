import { motion } from "framer-motion";
import { Cpu, Layout, Zap, ShieldCheck } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Frontend Core",
      skills: ["React 19", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"],
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Framer Motion", "CSS Modules", "Responsive Design"],
    },
    {
      title: "Tools & Ecosystem",
      skills: ["Vite", "Git / GitHub", "Node.js", "REST APIs"],
    },
  ];

  const highlights = [
    {
      icon: <Zap className="text-sky-500" size={24} />,
      title: "Optimized Performance",
      desc: "Delivering fast load times and clean Core Web Vitals.",
    },
    {
      icon: <Layout className="text-blue-500" size={24} />,
      title: "Responsive Craftsmanship",
      desc: "Pixel-perfect, fluid layouts built for all screen sizes.",
    },
    {
      icon: <ShieldCheck className="text-teal-500" size={24} />,
      title: "Accessible & Scalable",
      desc: "Following semantic web standards and reusable patterns.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 2xl:py-32 px-6 md:px-12 2xl:px-16 bg-surface-200/70 relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-lines opacity-60 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-360 3xl:max-w-430 4xl:max-w-500 mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-xs md:text-sm font-bold tracking-widest text-brand-primary uppercase bg-sky-100/60 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mt-3 mb-4">
            Passionate About Building Productive Web Experiences
          </h2>
          <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-stretch"
        >
          {/* Column 1: Bio & Story (lg:col-span-5 2xl:col-span-5) */}
          <div className="lg:col-span-5 2xl:col-span-5 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-sky-100/80 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-6">
                My Story & Approach
              </h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
                I am a frontend developer positioned at the intersection of aesthetic design and robust engineering. My mission is to build web applications that are not only visually impressive and scalable, but also intuitive and lightning fast.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                When I'm not writing code, I explore modern web UI trends, optimize existing application workflows, and continuously refine component design systems. I value clean code architecture, maintainability, and user-centered design.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-3">
              <Cpu className="text-sky-500 shrink-0" size={24} />
              <span className="text-sm font-semibold text-slate-700">
                Constantly learning and adapting to modern web technologies.
              </span>
            </div>
          </div>

          {/* Column 2: Core Highlights (lg:col-span-3 2xl:col-span-3) */}
          <div className="lg:col-span-3 2xl:col-span-3 flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm hover:border-brand-primary hover:shadow-md transition-all flex-1 flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                  {h.icon}
                </div>
                <h4 className="text-lg font-bold text-text-main mb-2">
                  {h.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3: Tech Stack Categories (lg:col-span-4 2xl:col-span-4) */}
          <div className="lg:col-span-4 2xl:col-span-4 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-sky-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-6">
                Technical Proficiency
              </h3>

              <div className="space-y-6">
                {skillCategories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 bg-surface-200 text-brand-secondary rounded-lg text-xs md:text-sm font-semibold border border-sky-100 hover:border-brand-primary hover:bg-sky-100/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-100">
              <span className="text-xs text-text-muted font-medium">
                Primary Stack: React • TypeScript • Tailwind CSS • Vite
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

