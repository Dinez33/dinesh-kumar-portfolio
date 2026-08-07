import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Common/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-background text-text"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Projects"
          subtitle="Portfolio"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}