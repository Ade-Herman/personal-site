import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "React", "TypeScript", "Tailwind CSS"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTab));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 2xl:py-32 px-6 md:px-12 2xl:px-16 bg-white relative">
      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1720px] 4xl:max-w-[2000px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-sky-100">
          <div>
            <span className="text-xs md:text-sm font-bold tracking-widest text-brand-primary uppercase bg-sky-50 px-3 py-1 rounded-full">
              Portfolio & Work
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mt-3 mb-2">
              Featured Projects
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-xl">
              A collection of web applications, analytics tools, and frontend design systems built with precision.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-200 p-1.5 rounded-xl border border-sky-100 self-start lg:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                  activeTab === category
                    ? "bg-text-main text-white shadow-sm"
                    : "text-text-muted hover:text-text-main hover:bg-white/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid: 1 col (mobile), 2 cols (tablet/desktop), 4 cols (2xl/3xl 27" screens) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8 2xl:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

