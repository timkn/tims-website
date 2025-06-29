import projectsData from "../projects.json";

export type ProjectLink = {
  title: string;
  url: string;
  tryIt?: boolean;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  tags: string[];
  links: ProjectLink[];
  id?: string;
};

export type ProjectsData = {
  projects: Project[];
};

export async function readProjectsFromJson(): Promise<Project[]> {
  try {
    // Use the imported JSON data directly
    const data = projectsData as ProjectsData;

    // Add id field to each project based on title
    const projectsWithIds = data.projects.map((project, index) => ({
      ...project,
      id:
        project.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || `project-${index}`,
    }));

    return projectsWithIds;
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return [];
  }
}
