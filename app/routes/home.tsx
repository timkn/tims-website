import { readProjectsFromJson, type Project } from "~/lib/projects";
import type { Route } from "./+types/home";
import Projects from "../components/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "knothe.me" },
    { name: "description", content: "Welcome to knothe.me!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  let projects = await readProjectsFromJson();
  return projects;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const projects: Project[] = loaderData;

  return (
    <div>
      <p className="text-center text-2xl font-semibold font-mono m-4 lg:mt-10 lg:text-4xl">
        👋 Hey, I'm Tim.
      </p>

      <div className="flex justify-center">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
