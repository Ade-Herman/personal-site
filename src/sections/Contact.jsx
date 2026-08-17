import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCheck, FiCopy, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "ade.herman@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="pt-24 2xl:pt-32 pb-12 px-6 md:px-12 2xl:px-16 bg-white border-t border-sky-100 relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1720px] 4xl:max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-center mb-20">
          
          {/* Left Column: Heading & Information (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-xs md:text-sm font-bold tracking-widest text-brand-primary uppercase bg-sky-50 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-extrabold text-text-main mt-4 mb-6 tracking-tight leading-[1.1]">
              Let's Build Something <span className="text-brand-primary bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Exceptional</span> Together.
            </h2>
            <p className="text-text-muted text-base md:text-lg 2xl:text-xl max-w-2xl leading-relaxed mb-8">
              Whether you have a question, a project proposal, or just want to connect, my inbox is always open. Let's create impactful web experiences together.
            </p>

            {/* Quick Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-sky-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-primary shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Direct Email</h4>
                  <p className="text-base font-semibold text-text-main mt-0.5">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Location</h4>
                  <p className="text-base font-semibold text-text-main mt-0.5">Indonesia (Available Worldwide Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA Box & Social Links (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-surface-200/80 p-8 md:p-10 rounded-3xl border border-sky-100/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-3">
                Send a Message
              </h3>
              <p className="text-sm text-text-muted mb-8 leading-relaxed">
                Click below to open your email client or copy my email address directly to your clipboard.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <a
                  href={`mailto:${email}`}
                  className="w-full inline-flex items-center justify-center gap-3 bg-text-main text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-secondary hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Say Hello Directly</span>
                  <FiArrowUpRight size={20} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-text-main border border-sky-200 px-8 py-3.5 rounded-xl font-semibold text-sm hover:border-brand-primary hover:bg-sky-50 transition-all active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <FiCheck size={16} className="text-emerald-500" />
                      <span className="text-emerald-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={16} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 block mb-4">
                Connect Elsewhere
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary hover:shadow-md transition-all"
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary hover:shadow-md transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-sky-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-text-muted text-xs md:text-sm font-medium">
            &copy; {currentYear} ADE. Built with React & Tailwind CSS. Designed for ultra-wide screen excellence.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <span>Fast Load Times</span>
            <span>•</span>
            <span>100% Accessible</span>
            <span>•</span>
            <span>Responsive Layout</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

