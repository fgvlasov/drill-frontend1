<template>
<p>Страница услуг {{ name }}</p>

    <ul>
        <li v-for="work in works.data" :key="work.id">
            {{ work.attributes.Title }}
            {{ work.attributes.Description }}
            Изображение={{ work.attributes.Image }}
            <hr>
        </li>
    </ul>
</template>

<script setup>

const route = useRoute();

const name = computed(() => {
    return route.params.name;
})

const { data: works } = await useAsyncData(
 'works',
 () => $fetch(`${process.env.STRAPI_API_URL}/works`)

)
</script>

<style scoped>

</style>