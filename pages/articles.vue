<template>
  <LayoutDef>
    <!--    <about />-->
  </LayoutDef>
</template>

<script>

import LayoutDef from "~/layouts/LayoutDef.vue";

export default {
  name: "Articles",
  components: {LayoutDef},
  setup() {
    useHead({
      title: "Статьи | CONCUT",
  });
},
}
</script>

<style scoped>

</style>