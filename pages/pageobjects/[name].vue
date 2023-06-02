<template>
  <layout>
    <h2>{{ name }}</h2>
    <ul class="breadCrumbs">
      <li>
        <nuxt-link :to="getMenu(0).link">Главная</nuxt-link>
      </li>
      <li>
        <NuxtLink :to="getMenu(1).link">
          {{ getMenu(1).title }}
        </NuxtLink>
      </li>
    </ul>
    <div id="objectInfo">
      <div class="photo">
        <img typeof="foaf:Image" :src="getObject(name).imgsrc" width="1200" height="800" alt="">
        <ul class="definition">
          <li class="date" style="display: none;"></li>
          <li class="address">{{ getObject(name).address }}</li>
        </ul>
      </div>
      <p v-for="descr in getObject(name).list_descr">
        {{ descr.obj_descr }}
        <br>
        <br>
      </p>
    </div>
  </layout>

</template>

<script>

import menuData from "~/mixins/topmenu";
import objectsData from "~/mixins/objectsList";
import layout from "~/layouts/LayoutDef.vue";
export default {
  mixins: [menuData, objectsData],
  components: { layout },
  methods:
      {
        getMenu(index) {
          return this.menuData[index];

        },
        getObject(name) {
          for (let key in this.objectsData) {
            if (name == this.objectsData[key].title) return this.objectsData[key];
          }
        }
      },

  setup() {
    const route = useRoute();

    const name = route.params.name;
    useHead({
      title: name,
    });

    return {
      name
    }
  }

}

</script>


<style scoped>

</style>