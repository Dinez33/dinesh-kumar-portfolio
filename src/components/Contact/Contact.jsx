import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            Get In Touch
          </p>

          <h2 className="mt-2 text-5xl font-bold">Let&apos;s Build Something Amazing 🚀</h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8" style={{ color: "var(--muted)" }}>
            I&apos;m currently open to full-time opportunities, freelance projects, and exciting collaborations. If you think I&apos;d be a good fit for your team, feel free to reach out.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border p-8"
            style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
          >
            <h3 className="mb-8 text-3xl font-bold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl" style={{ color: "var(--accent)" }} />
                <a href="mailto:dinezk333@gmail.com" className="transition" style={{ color: "var(--text)" }}>
                  dinezk333@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl" style={{ color: "var(--accent)" }} />
                <span style={{ color: "var(--muted)" }}>+91 XXXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl" style={{ color: "var(--accent)" }} />
                <span style={{ color: "var(--muted)" }}>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="mt-10 flex gap-6 text-3xl">
              <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)" }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)" }}>
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", color: "white" }}
          >
            <h3 className="mb-5 text-3xl font-bold">Ready to work together?</h3>

            <p className="text-lg leading-8 text-white/90">
              Whether you have a job opportunity, an exciting project, or just want to connect, I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:dinezk333@gmail.com?subject=Job Opportunity&body=Hi Dinesh," className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                Contact Me
              </a>

              <a href="/resume.pdf" download className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
                <FaDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}