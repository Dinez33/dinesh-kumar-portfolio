import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Senior Full Stack Engineer
            </h3>

            <p className="text-gray-300 leading-8">
              I have over 5 years of experience developing SaaS, fintech,
              CRM, CMS, and ecommerce applications using PHP, Python,
              FastAPI, and React. I enjoy designing scalable backend systems,
              building REST APIs, integrating AI solutions, and delivering
              high-performance web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                5+
              </h4>
              <p>Years Experience</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                30+
              </h4>
              <p>Projects</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                10+
              </h4>
              <p>Technologies</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h4 className="text-4xl font-bold text-cyan-400">
                100+
              </h4>
              <p>APIs Built</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}