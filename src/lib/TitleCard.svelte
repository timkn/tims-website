<script lang="ts">
  import { Heading, Card, P, Badge, GradientButton } from "flowbite-svelte";
  export let title: string;
</script>

<div class="flex justify-center">
  <div
    class="bg-white-sky-tint dark:bg-dark-sky-tint m-4 p-4 lg:p-8 lg:m-8 rounded-lg shadow-md max-w-md lg:max-w-6xl"
  >
    <Heading
      tag="h1"
      class="mb-4 lg:mb-8 text-white-sky dark:text-dark-sky text-center lg:text-left"
      customSize="text-3xl font-extrabold ">{title}</Heading
    >

    <slot />
  </div>
</div>
