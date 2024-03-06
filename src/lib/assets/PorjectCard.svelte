<!-- ProjectCard.svelte -->
<script lang="ts">
  import { Card, Badge, P, GradientButton, A } from "flowbite-svelte";
  import { ArrowRightOutline, LinkSolid } from "flowbite-svelte-icons";

  export let project: {
    title: string;
    subtitle: string;
    location: string;
    description: string;
    tags: string[];
    links: { title: string; url: string }[];
  };
</script>

<Card>
  <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {project.title}
  </h5>

  <P class=" text-gray-500 mb-2">{project.subtitle}</P>

  {#if project.location}
    <Badge class="bg-blue-500 text-white">
      {project.location}
    </Badge>
  {/if}

  <p
    class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight h-full"
  >
    {project.description}
  </p>

  <ul class="flex flex-wrap justify-start gap-1 mb-2">
    {#each project.tags as tag}
      <Badge>
        {tag}
      </Badge>
    {/each}
  </ul>
  <GradientButton href={project.links[0].url} color="redToYellow">
    Read more: {project.links[0].title}
    <ArrowRightOutline class="w-3.5 h-3.5 ml-2" />
  </GradientButton>
  <ul class="flex justify-start gap-2 mt-2 flex-wrap">
    {#each project.links.slice(1) as link}
      <A href={link.url} color="redToYellow">
        {link.title}
        <LinkSolid class="w-3.5 h-3.5 ml-2" />
      </A>
    {/each}
  </ul>
</Card>
