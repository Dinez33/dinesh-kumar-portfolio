import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-background text-text"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-6 text-muted max-w-2xl mx-auto leading-8">
            I'm currently open to full-time opportunities, freelance projects,
            and exciting collaborations. If you think I'd be a good fit for
            your team, feel free to reach out.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900 rounded-2xl p-8 border border-border"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <a
                  href="mailto:dinezk333@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  dinezk333@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span>+91 XXXXXXXXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* CTA Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 flex flex-col justify-center"
          >

            <h3 className="text-3xl font-bold mb-5">
              Ready to work together?
            </h3>

            <p className="text-lg leading-8 text-gray-100">
              Whether you have a job opportunity, an exciting project, or just
              want to connect, I'd love to hear from you.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="mailto:dinezk333@gmail.com?subject=Job Opportunity&body=Hi Dinesh,"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition"
              >
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