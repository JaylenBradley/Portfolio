import { useState } from "react";
import data from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects({ limit }) {
  const [modalProject, setModalProject] = useState(null);
  let projects = data.projects;
  if (limit) projects = projects.slice(0, limit);

  return (
    <>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={project}
            onMoreInfo={() => setModalProject(project)}
          />
        ))}
      </section>
      <ProjectModal
        project={modalProject}
        open={!!modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}