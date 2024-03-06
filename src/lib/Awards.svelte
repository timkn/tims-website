<script>
  import { Badge, P } from "flowbite-svelte";
  import TitleCard from "./TitleCard.svelte";

  let awards = [
    {
      title:
        "Winner of HackaTUM 2023 - one of EU largest Hackathons - Wildtrack",
      date: "2023",
    },
    { title: "TUM: Junge Akademie Scholarship", date: "2023" },
    { title: "Deutschlandstipendium", date: "2023" },
    { title: "CHECK24 GenDev Scholarship", date: "2023" },

    {
      title:
        "Winner of HackaTUM 2022 - one of EU largest Hackathons - Wildtrack and Popular Vote",
      date: "2022",
    },
  ];
</script>

<TitleCard title="Honors and Awards">
  <ul>
    {#each awards as award}
      <li class="border rounded mb-2 list-none p-2">
        <P><strong>{award.date}:</strong> {award.title}</P>
      </li>
    {/each}
  </ul>
</TitleCard>
