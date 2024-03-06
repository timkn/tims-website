<script>
    import { Accordion, AccordionItem, Heading, Span } from "flowbite-svelte";
    import PorjectCard from "./assets/PorjectCard.svelte";
</script>

<Accordion flush>
    <AccordionItem>
        <span slot="header"
            ><Heading
                tag="h3"
                class="m-4"
                customSize="text-2xl font-extrabold  md:text-2xl lg:text-2xl"
            >
                <Span gradient>School Projects</Span>
            </Heading></span
        >
        <PorjectCard
            project={{
                title: "Student Engeering Academy - Schüler Ingenieur Akademie",
                subtitle: "IMG:Gear ",
                location: "Donaueschingen, Germany",
                description:
                    "Managment of Cocktails, using a Web Application to manage the Cocktails and the Ingredients. The Web Application is build with Vue.js, Node.js and MongoDB.",
                tags: ["Web Engineering", "Vue.js", "Node.js", "MongoDB"],
                links: [
                    {
                        title: "Schwäbische Zeitung",
                        url: "https://www.schwaebische.de/regional/tuttlingen/villingen-schwenningen/industrieroboter-zu-barkeeper-umfunktioniert-191429",
                    },
                ],
            }}
        />
    </AccordionItem>
</Accordion>
