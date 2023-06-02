<template>
  <main class="user-layout">
    <div class="page-style">
      <TheHeader />
      <!--    Заменяется содержимое на страницы-->
        <main>
          <section>
  <!--        <NuxtPage />-->
            <slot></slot>
          </section>

        </main>

      <TheFooter />
    </div>
  </main>
</template>

<script>

export default {
  name: "page-not-sidebar"
}

</script>

<style scoped>

</style>