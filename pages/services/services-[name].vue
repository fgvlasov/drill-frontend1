<template>
<p>Страница услуг {{ $route.params.name }}</p>

<!--    <ul>-->
<!--        <li v-for="work in works.data" :key="work.id">-->
<!--            {{ work.attributes.Title }}-->
<!--            {{ work.attributes.Description }}-->
<!--            {{ work.attributes.Image }}-->
<!--            <hr>-->
<!--        </li>-->
<!--    </ul>-->
</template>

<script setup>

//const { data: works } = await useAsyncData(
//  'works',
//  () => $fetch(`${process.env.STRAPI_API_URL}/works`)
//
//)
</script>

<style scoped>

</style>