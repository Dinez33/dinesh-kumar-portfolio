import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

      </div>
    </section>
  );
}