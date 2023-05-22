<template>
<p>Алмазная резка</p>
{{ console.log(works) }}
</template>

<script>
export default {
        // use destructuring to get the $strapi instance from context object
        async asyncData({ $strapi }) {
          try {
            // fetch data from strapi
            const works = await (
              await fetch(`${store.state.apiUrl}/works?populate=*`)
            ).json()
            const services = await (
              await fetch(`${store.state.apiUrl}/services?populate=*`)
            ).json()
            
            // make the fetched data available in the page
            // also, return the .data property of the entities where
            // the data we need is stored
            return {
			  works: works.data,
              services: services.data,
			  
            }
			
          } catch (error) {
            console.log(error)
          }
        },
      }
</script>

<style scoped>

</style>