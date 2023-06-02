<template>
  <ul class="objectsList">
    <li v-for="obj in objectsData">
      <NuxtLink :to="obj.link">
        <img typeof="foaf:Image" :src="obj.imgsrc" :width=obj.width :height=obj.height alt="">
      </NuxtLink>
      <h4>{{ obj.title }}</h4>
      <div class="obj_descr">
        <p v-for="descr in obj.list_descr">
          {{ descr.obj_descr }}
          <br>
          <br>
        </p>
      </div>
    </li>
  </ul>

</template>

<script>

import objectsData from "~/mixins/objectsList";

export default {
  name: "ListObjects",
  mixins: [objectsData],
}
</script>

<style scoped>

</style>