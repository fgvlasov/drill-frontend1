<template>
  <div>
    <HeaderOne />

    <div class="container withSidebar mobileWide">
      <div class="sidebar">

        <the-sidebar />

      </div>
      <div class="tabs"></div>
      <div class="main">

        <slot></slot>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>

import HeaderOne from "~/layouts/headers/HeaderOne.vue";
import Footer from "~/layouts/footers/Footer.vue";

export default {
  components: {
    HeaderOne,
    Footer
  }
}

</script>

<style scoped>

</style>