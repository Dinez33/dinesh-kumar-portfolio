import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white px-6"
    >
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Dinesh Kumar
          </h1>

          <div className="text-2xl mt-6 text-cyan-400 font-semibold">
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

          <p className="mt-6 text-gray-300 leading-8">
            I build scalable SaaS, FinTech, CRM, Ecommerce,
            AI-powered web applications using PHP,
            Python, FastAPI and React.
          </p>

          <div className="mt-8 flex gap-5 flex-wrap">
            <a
              href={resume}
              download
              className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-3 rounded-full font-semibold"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-7 py-3 rounded-full hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 text-3xl mt-10">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:dinezk333@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 shadow-[0_0_50px_rgba(6,182,212,.4)] w-[380px]">

              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <pre className="text-sm leading-7 text-green-400 overflow-x-auto">
        {`const developer = {
          name: "Dinesh Kumar",
          role: "Senior Full Stack Engineer",
          experience: "5+ Years",
          backend: ["PHP", "Python", "FastAPI"],
          frontend: ["React", "JavaScript"],
          databases: ["MySQL", "PostgreSQL"],
          skills: [
            "Docker",
            "REST APIs",
            "AI/LLM",
            "CodeIgniter",
            "Laravel"
          ]
        };`}
              </pre>

            </div>

            <div className="absolute -top-6 -right-6 bg-cyan-500 px-4 py-2 rounded-full text-black font-bold">
              5+ Years
            </div>

            <div className="absolute -bottom-6 -left-6 bg-purple-600 px-4 py-2 rounded-full">
              React ⚛️
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}