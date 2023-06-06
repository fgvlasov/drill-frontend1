<template>
  <LayoutDef>
<!--    <about />-->
  </LayoutDef>
</template>

<script>

import LayoutDef from "~/layouts/LayoutDef.vue";

export default {
  name: "CompletedObjects",
  components: {LayoutDef},
  setup() {
    useHead({
      title: "Выполненные объекты | CONCUT",
    });
  },
}
</script>

<style scoped>

</style>