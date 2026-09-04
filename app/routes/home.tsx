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
      <div className="flex items-center justify-center gap-6 m-4 lg:mt-10 lg:gap-10">
        <img
          src="/tim.jpg"
          alt="Tim Knothe"
          className="w-28 h-28 rounded shadow-xl object-cover object-top shrink-0 lg:w-40 lg:h-40"
        />
        <p className="text-2xl font-semibold font-mono lg:text-4xl">
          Hey, I'm Tim<span className="hidden lg:inline"> -</span>
          <br />
          nice to have you here.
        </p>
      </div>

      <div className="flex justify-center">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
