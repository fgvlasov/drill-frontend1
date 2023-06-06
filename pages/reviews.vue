<template>
  <LayoutDef>
    <!--    <about />-->
  </LayoutDef>
</template>

<script>

import LayoutDef from "~/layouts/LayoutDef.vue";

export default {
  name: "Reviews",
  components: {LayoutDef},
  setup() {
    useHead({
      title: "Отзывы | CONCUT",
    });
  },
}
</script>

<style scoped>

</style>