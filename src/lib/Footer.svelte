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
  class=" grid gap-6 lg:flex justify-center lg:justify-between items-center flex-wrap p-16 sticky bg-dark-sky text-white-sky dark:bg-white-sky dark:text-dark-sky mt-20"
>
  <div class="">
    <p class="text-center">© 2023 Tim Knothe</p>
  </div>

  <div>
    <div class="grid lg:flex justify-center gap-6 items-center flex-wrap">
      <GradientButton
        href="https://www.linkedin.com/in/tim-knothe-06234a1b6/"
        color="redToYellow"
      >
        <LinkedinSolid class="w-3.5 h-3.5 mr-2" /> LinkedIn
      </GradientButton>
      <GradientButton href="https://github.com/timkn" color="redToYellow">
        <GithubSolid class="w-3.5 h-3.5 mr-2" /> GitHub
      </GradientButton>
      <a class="text-center" href="./imprint">Imprint</a>
      <a class="text-center" href="./imprint">Privacy</a>
    </div>
  </div>
</div>
