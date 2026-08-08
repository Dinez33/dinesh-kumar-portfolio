import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "/Dineshkumar_Developer.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      style={{ background: "linear-gradient(135deg, var(--background), var(--surface))", color: "var(--text)" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: "rgba(37, 99, 235, 0.14)" }}></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(14, 165, 233, 0.12)" }}></div>
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: "rgba(6, 182, 212, 0.1)" }}></div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 text-lg" style={{ color: "var(--accent)" }}>
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold md:text-7xl">Dinesh Kumar</h1>

          <div className="mt-6 text-2xl font-semibold" style={{ color: "var(--accent)" }}>
            <TypeAnimation
              sequence={[
                "Senior Full Stack Engineer",
                2000,
                "PHP Developer",
                2000,
                "Python Developer",
                2000,
                "React Developer",
                2000,
                "FastAPI Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 leading-8" style={{ color: "var(--muted)" }}>
            I build scalable SaaS, FinTech, CRM, Ecommerce, AI-powered web applications using PHP,
            Python, FastAPI and React.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href={resume}
              download
              className="rounded-full px-7 py-3 font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border px-7 py-3 font-semibold transition"
              style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-3xl">
            <a href="https://github.com/Dinez33" target="_blank" rel="noreferrer" style={{ color: "var(--text)" }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dineshkumarnp/" target="_blank" rel="noreferrer" style={{ color: "var(--text)" }}>
              <FaLinkedin />
            </a>
            <a href="mailto:dinezk333@gmail.com" style={{ color: "var(--text)" }}>
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="w-[420px] rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              <pre className="overflow-x-auto text-sm leading-7" style={{ color: "var(--accent)" }}>
        {`const developer = {
          name: "Dinesh Kumar",
          role: "Senior Full Stack Engineer",
          experience: "5+ Years",
          backend: ["PHP", "Python"],
          frontend: ["React", "JavaScript"],
          databases: ["MySQL", "PostgreSQL"],
          skills: [
            "CodeIgniter",
            "Laravel",
            "REST APIs",
            "FastAPI",
            "AI/LLM",
            "Docker"
          ]
        };`}
              </pre>
            </div>

            <div className="absolute -right-6 -top-6 rounded-full px-4 py-2 font-bold text-white" style={{ backgroundColor: "var(--primary)" }}>
              5+ Years
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}