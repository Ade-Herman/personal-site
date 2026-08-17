import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-2xl overflow-hidden border border-sky-100/90 shadow-sm hover:shadow-xl hover:border-brand-primary transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-3 gap-2">
            <h3 className="text-xl font-extrabold text-text-main group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 shrink-0 pt-0.5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-text-main transition-colors p-1"
                aria-label="GitHub Repository"
              >
                <FiGithub size={19} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-primary transition-colors p-1"
                aria-label="Live Demo"
              >
                <ExternalLink size={19} />
              </a>
            </div>
          </div>

          <p className="text-text-muted text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-sky-50">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-sky-50 text-sky-700 rounded-md border border-sky-100/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

