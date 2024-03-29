<script lang="ts">
    import Footer from "../lib/Footer.svelte";
    import Header from "../lib/Header.svelte";

    import "../app.css";

    import "@fontsource/roboto-mono";

    let numStars = 70;
    let stars = [];

    function createStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            const size = Math.random() * 3;
            const star = {
                top: Math.random() * 100 + "vh",
                left: Math.random() * 100 + "vw",
                width: size + "px",
                height: size + "px",
            };
            stars.push(star);
        }
    }

    createStars();
</script>

<div class="main flex h-screen flex-col">
    <Header />
    <main class="main flex-grow">
        <slot />
    </main>
    <Footer />
</div>

<div class="night-sky dark:night-sky-dark">
    {#each stars as star}
        <div
            class="star dark:star-dark"
            style="top: {star.top}; left: {star.left} ; width: {star.width}; height: {star.height}"
        />
    {/each}
</div>
