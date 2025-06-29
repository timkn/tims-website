import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import type { Project } from "~/lib/projects";
import { IconArrowRight, IconLink, IconBook } from "@tabler/icons-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-0 shadow-md bg-white/85 dark:bg-gray-900/85 backdrop-blur-sm flex flex-col h-full overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="font-mono text-xl font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground font-medium leading-relaxed">
          {project.subtitle}
        </CardDescription>
        <div className="text-xs text-muted-foreground/60 mt-2.5 font-medium tracking-wide">
          {project.tags.slice(0, 4).join(" • ")}
          {project.tags.length > 4 && ` • +${project.tags.length - 4} more`}
        </div>
      </CardHeader>

      <CardContent className="pb-5 flex-grow">
        <p className="text-sm leading-relaxed text-foreground/85 font-normal">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="pt-4 border-t border-border/30 mt-auto bg-muted/20">
        <div className="flex flex-col gap-3 w-full">
          {project.links.length > 1 && (
            <div className="flex flex-wrap gap-1">
              {project.links.slice(1).map((link) => (
                <Button
                  key={link.title}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-xs hover:bg-primary/8 transition-colors duration-200 rounded-md"
                >
                  <a href={link.url} className="flex items-center gap-1.5">
                    <IconLink className="h-3 w-3 opacity-70" />
                    <span className="font-medium">{link.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          )}
          <Button
            variant="default"
            asChild
            className="w-full justify-between group/btn shadow-sm hover:shadow-md transition-all duration-200"
          >
            <a href={project.links[0].url}>
              <IconBook className="h-4 w-4" />
              <span className="font-medium">{project.links[0].title}</span>
              <IconArrowRight className="h-4 w-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
