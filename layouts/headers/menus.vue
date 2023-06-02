<template>
  <ul id="main-menu-links" class="links clearfix">
    <li
        v-for="(menu, i) in menuData"
         class="item-menu"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
      </NuxtLink>
    </li>
  </ul>

</template>

<script>
import menuData from "~~/mixins/topmenu";

export default {
  name: "menus",
  mixins: [menuData],
}
</script>

<style scoped>

</style>