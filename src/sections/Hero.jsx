import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-surface-200)_0%,transparent_70%)] -z-10" />

      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight text-text-main mb-6"
        >
          Building <span className="text-brand-primary">Scalable</span> Web
          Experiences
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a Frontend Developer specializing in React and modern UI/UX
          design. Currently focused on building performant, accessible digital
          products.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-text-main text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-brand-secondary hover:shadow-lg active:scale-95"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
