import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="pt-32 pb-12 px-6 bg-white border-t border-sky-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text-main mb-6 tracking-tight">
            Get In <span className="text-brand-primary">Touch</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </p>

          {/* Call to Action Button */}
          <a
            href="mailto:ade@example.com"
            className="inline-block bg-text-main text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-secondary hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 mb-20"
          >
            Say Hello
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-10 mb-20">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-brand-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-brand-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={32} />
            </a>
          </div>
        </motion.div>

        {/* Absolute Bottom Footer */}
        <div className="pt-8 border-t border-sky-50">
          <p className="text-text-muted text-sm font-medium tracking-widest uppercase">
            &copy; {currentYear} ADE. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
