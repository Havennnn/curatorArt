import ProjectsCard from "./ProjectsCard.jsx";
import { projects } from "../data.jsx";
import SectionTitle from "./SectionTitle.jsx";

const Projects = () => {
  return (
    <section className="py-20 w-full align-element" id="projects">
      <SectionTitle text="Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
