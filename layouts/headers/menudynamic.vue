<template>
  <nav>
    <ul class="menu">
      <li
          v-for="(menu, i) in menuData"
          class="leaf"
      >
        <NuxtLink :to="menu.link">
          {{ menu.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>

import menuData from "~/mixins/menuLeaf";

export default {
  name: "menudynamic",
  mixins: [menuData],
}

</script>

<style scoped>

</style>