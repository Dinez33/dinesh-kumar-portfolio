import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-bold" style={{ color: "var(--accent)" }}>
              Senior Full Stack Engineer
            </h3>

            <p className="leading-8" style={{ color: "var(--muted)" }}>
              I have over 5 years of experience developing SaaS, fintech, CRM, CMS, and ecommerce
              applications using PHP, Python, FastAPI, and React. I enjoy designing scalable backend
              systems, building REST APIs, integrating AI solutions, and delivering high-performance
              web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "30+", label: "Projects" },
              { value: "10+", label: "Technologies" },
              { value: "100+", label: "APIs Built" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border p-6 text-center"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <h4 className="text-4xl font-bold" style={{ color: "var(--accent)" }}>
                  {item.value}
                </h4>
                <p className="mt-2" style={{ color: "var(--muted)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}