<template>
<p>Алмазная резка</p>
<ul>
      <li v-for="work in works.data" :key="work.id">
        {{ work.attributes.Title }}
        {{ work.attributes.Description }}
        {{ work.attributes.Image }}
          <hr>
      </li>
    </ul>

</template>

// https://docs.strapi.io/dev-docs/integrations/nuxt-js

<script setup>
const { data: works } = await useAsyncData(
  'works', 
  () => $fetch(`${process.env.STRAPI_API_URL}/works`)

)
</script>

<style scoped>

</style>