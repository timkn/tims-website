<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import lesch from "$lib/assets/lesch.png";
  import tim from "$lib/assets/tim.jpg";

  const images: Array<{ alt: string; src: string; title: string }> = [
    {
      alt: "Lesch",
      src: lesch,
      title: "Lesch",
    },
    {
      alt: "Tim",
      src: tim,
      title: "Tim",
    },
  ];
</script>

<div class="max-w-4xl">
  <Carousel {images} />
</div>
