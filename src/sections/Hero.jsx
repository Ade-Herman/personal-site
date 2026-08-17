import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

const Hero = () => {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Built", value: "12+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const floatingBadges = [
    { name: "React 19", color: "bg-sky-50 text-sky-600 border-sky-200" },
    { name: "TypeScript", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Tailwind CSS", color: "bg-teal-50 text-teal-600 border-teal-200" },
    { name: "Framer Motion", color: "bg-purple-50 text-purple-600 border-purple-200" },
  ];

  return (
    <section className="relative min-h-[90vh] 2xl:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 2xl:px-16 overflow-hidden bg-dot-mesh">
      {/* Ambient Gradient Blobs for 27" and Large Viewports */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-sky-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-360 3xl:max-w-430 4xl:max-w-500 w-full mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 2xl:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-sky-100 shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide">
                Available for full-time roles & projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold tracking-tight text-text-main leading-[1.1] mb-6"
            >
              Building <span className="text-brand-primary bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Scalable</span> Web
              Experiences
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-text-muted mb-8 max-w-2xl leading-relaxed font-normal"
            >
              Frontend Developer specializing in React, TypeScript, and modern UI engineering.
              Crafting performant, accessible digital products with seamless user interactions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-text-main text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:bg-brand-secondary hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-text-main border border-slate-200 px-8 py-4 rounded-full font-semibold text-base transition-all hover:border-brand-primary hover:bg-sky-50/50 hover:shadow-md active:scale-95"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Quick Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-sky-100/80 w-full max-w-xl"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-text-main">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-text-muted font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Code Showcase / Interactive Card (Visible on Desktop & Ultra-wide) */}
          <div className="lg:col-span-5 2xl:col-span-5 hidden lg:block relative">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-blue-500/10 to-indigo-500/20 rounded-3xl blur-2xl -z-10" />

            <motion.div
              variants={itemVariants}
              className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 text-slate-100 relative overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal size={12} /> DeveloperProfile.tsx
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 size={13} /> Active
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs xl:text-sm leading-relaxed space-y-2 text-slate-300">
                <p className="text-slate-500">// Modern Frontend Stack & Architecture</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-emerald-300">'Ade Herman'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-emerald-300">'Frontend Developer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">coreTech</span>: [
                </p>
                <p className="pl-8 text-amber-300">
                  'React 19', 'TypeScript', 'Tailwind', 'Vite'
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-sky-300">focus</span>:{" "}
                  <span className="text-emerald-300">'Performance & Clean UX'</span>
                </p>
                <p>&#125;;</p>

                <div className="pt-3 border-t border-slate-800/80 text-sky-400 flex items-center gap-2">
                  <Sparkles size={14} className="animate-spin text-amber-400" />
                  <span>Ready to build exceptional software.</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {floatingBadges.map((badge, i) => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-3 py-1 rounded-md border ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

