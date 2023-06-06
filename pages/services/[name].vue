<template>
  <layout>
  <div>
    <head>
      <Title>{{ name }} | CONCUT</Title>
    </head>
    <h2 class="general">{{ name }}</h2>
    <the-wide :title=" name "/>
<!--    <p>Страница услуг {{ name }}</p>-->
<!--    <div v-if="pending">-->
<!--      Loading ...-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <ul>-->
<!--        <li v-for="work in works.data" :key="work.id">-->
<!--          {{ work.attributes.Title }}-->
<!--          {{ work.attributes.Description }}-->
<!--          Изображение={{ work.attributes.Image }}-->
<!--          <hr>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
  </div>
  </layout>
</template>

<script>

import layout from "~/layouts/LayoutNotSidebar.vue";
import TheWide from "~/components/TheWide.vue";

export default {
  name: "services-[name]",
  components: {TheWide, layout },
  async setup() {
    const route = useRoute();

    // const pending = ref(true);

    const name = route.params.name;

    // const url = `${process.env.STRAPI_API_URL}/works`;
    //
    // console.log("url=",url);

    // const { data: works } = await useAsyncData(
    //     'works',
    //     () => $fetch(`${process.env.STRAPI_API_URL}/works`)
    // );
    //
    // console.log("works=",works);
    //
    // pending.value = false;

    // const { data: works } = await useFetch(url, {
    // method: "post",
    // });
    // const { data: works } = await useFetch(`${process.env.STRAPI_API_URL}/works`, { key: route.fullPath })

    return {
      name
      // works,
      // pending
    }
  }
}
//
// definePageMeta({
//   layout: "LayoutNotSidebar",
// });

</script>

<style scoped>

</style>