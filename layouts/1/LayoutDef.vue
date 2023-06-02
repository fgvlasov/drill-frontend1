<template>
  <div class="page-style">
    <TheHeader />
      <!--    Заменяется содержимое на страницы-->
    <div class="withSidebar mobileWide page-group">
      <div class="sidebar">
        <TheSidebar />
      </div>

      <main class="page-style main">
<!--        <div class="page-group">-->
<!--          <NuxtPage />-->
        <slot></slot>
<!--        </div>-->
      </main>
    </div>
    <thequick-start />
    <TheFooter />
  </div>
</template>

<script>

export default {
  name:"default"
}

</script>

<style scoped>

@import 'assets/scss/my_scss/default.scss';

</style>