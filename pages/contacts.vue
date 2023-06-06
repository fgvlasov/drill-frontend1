<template>
  <LayoutDef>
    <!--    <about />-->
  </LayoutDef>
</template>

<script>

import LayoutDef from "~/layouts/LayoutDef.vue";

export default {
  name: "Contacts",
  components: {LayoutDef},
  setup() {
    useHead({
      title: "Контакты | CONCUT",
    });
  },
}
</script>

<style scoped>

</style>