<script>
  import { A, DarkMode } from "flowbite-svelte";
</script>

<nav>
  <div>
    <a class="dark:text-white-sky text-dark-sky" href="/">knothe.me</a>
  </div>
  <div>
    <ul class="flex-right">
      <li>
        <DarkMode />
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 2rem;
  }

  .flex-right {
    display: flex;
    justify-content: end;
    gap: 1rem;
  }

  li {
    list-style: none;
  }
</style>
