import ProjectCard from "./project-card";
import type { Route } from "../routes/+types/home";
import {
  readProjectsFromJson,
  type Project,
  type ProjectsData,
} from "../lib/projects";

export async function loader({ params }: Route.LoaderArgs) {
  let projects = await readProjectsFromJson();
  return projects;
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white-sky-foreground dark:bg-dark-sky-foreground m-4 p-4 lg:p-8 lg:m-8 rounded-lg shadow-md max-w-md lg:max-w-6xl">
      <h1 className="mb-4 lg:mb-8 text-white-sky dark:text-dark-sky text-center lg:text-left text-3xl font-extrabold font-mono">
        Projects
      </h1>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </div>
  );
}
