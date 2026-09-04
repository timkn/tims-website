import ProjectCard from "./project-card";
import { type Project } from "../lib/projects";

// Karten mit deutlich längerer Beschreibung erhalten eine eigene Zeile über die
// volle Breite, damit sie die Nachbarkarten nicht auf ihre Höhe strecken.
const WIDE_CARD_DESCRIPTION_LENGTH = 300;

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white-sky-foreground dark:bg-dark-sky-foreground m-4 p-4 lg:p-8 lg:m-8 rounded-lg shadow-md max-w-md lg:max-w-6xl">
      <h1 className="mb-4 lg:mb-8 text-white-sky dark:text-dark-sky text-center lg:text-left text-3xl font-extrabold font-mono">
        Projects
      </h1>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.title}
            className={
              project.description.length > WIDE_CARD_DESCRIPTION_LENGTH
                ? "lg:col-span-3"
                : undefined
            }
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
