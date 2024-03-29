<script lang="ts">
    import { Carousel } from "flowbite-svelte";

    const images: Array<{ alt: string; src: string; title: string }> = [
        {
            alt: "Lesch",
            src: "",
            title: "Lesch",
        },
        {
            alt: "Tim",
            src: "",
            title: "Tim",
        },
    ];
</script>

<div class="max-w-4xl">
    <Carousel {images} />
</div>
