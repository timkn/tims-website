<script>
    import {
        Footer,
        FooterLinkGroup,
        FooterLink,
        FooterCopyright,
        Button,
        GradientButton,
    } from "flowbite-svelte";
    import { GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";
</script>

<div
    class=" bg-dark-sky text-white-sky dark:bg-white-sky dark:text-dark-sky sticky mt-20 grid flex-wrap items-center justify-center gap-6 p-16 lg:flex lg:justify-between"
>
    <div class="">
        <p class="text-center">© 2024 Tim Knothe</p>
    </div>

    <div>
        <div class="grid flex-wrap items-center justify-center gap-6 lg:flex">
            <GradientButton
                href="https://www.linkedin.com/in/timkn/"
                color="redToYellow"
            >
                <LinkedinSolid class="mr-2 h-3.5 w-3.5" /> LinkedIn
            </GradientButton>
            <GradientButton href="https://github.com/timkn" color="redToYellow">
                <GithubSolid class="mr-2 h-3.5 w-3.5" /> GitHub
            </GradientButton>
            <a class="text-center" href="./imprint">Impressum</a>
            <a class="text-center" href="./privacy">Datenschutzerklärung</a>
        </div>
    </div>
</div>
