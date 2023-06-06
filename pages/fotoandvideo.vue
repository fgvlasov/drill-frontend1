<template>
  <LayoutDef>
    <!--    <about />-->
  </LayoutDef>
</template>

<script>
import LayoutDef from "~/layouts/LayoutDef.vue";

export default {
  name: "FotoAndVideo",
  components: {LayoutDef},
  setup() {
    useHead({
      title: "Фото и видео | CONCUT",
    });
  },
}
</script>

<style scoped>

</style>