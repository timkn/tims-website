<script>
    import { json } from "@sveltejs/kit";
    import {
        A,
        Accordion,
        AccordionItem,
        Badge,
        Button,
        Card,
        Heading,
        P,
        Span,
    } from "flowbite-svelte";
    import { ArrowRightOutline, LinkSolid } from "flowbite-svelte-icons";
    import { GradientButton } from "flowbite-svelte";

    import data from "../projects.json";
    import { each } from "svelte/internal";
    import TitleCard from "./TitleCard.svelte";
    import Header from "./Header.svelte";
    import PorjectCard from "./assets/PorjectCard.svelte";
    import SchoolPrjects from "./SchoolPrjects.svelte";
    let projects = data.projects;
</script>

<TitleCard title="Projects">
    <ul class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {#each projects as project}
            <PorjectCard {project} />
        {/each}
    </ul>
</TitleCard>
