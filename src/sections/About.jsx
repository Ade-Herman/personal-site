import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "Git",
    "Vite",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 px-6 bg-surface-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column: Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              My Story
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              I am a developer who sits at the intersection of design and
              engineering. My goal is to build web applications that are not
              only performant and scalable but also provide a delightful user
              experience.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              When I'm not coding, I'm usually exploring new design patterns or
              contributing to open-source projects. I believe in writing clean,
              maintainable code and staying curious about the ever-evolving web
              ecosystem.
            </p>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100">
            <h3 className="text-xl font-semibold text-text-main mb-6">
              Technical Proficiency
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-surface-200 text-brand-secondary rounded-lg text-sm font-medium border border-sky-100 hover:border-brand-primary transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
