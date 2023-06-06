<template>
  <div>
    <HeaderOne />

      <slot></slot>

    <bottomContacts />
    <Footer />
  </div>
</template>

<script>

import HeaderOne from "~/layouts/headers/HeaderOne.vue";
import Footer from "~/layouts/footers/Footer.vue";
import bottomContacts from "~/components/bottomContacts.vue";

export default {
  name: "LayoutNotSidebar",
  components: {
    HeaderOne,
    Footer,
    bottomContacts
  }
}

</script>

<style scoped>

</style>