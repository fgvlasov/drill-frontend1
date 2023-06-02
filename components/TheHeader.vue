<template>
  <div class="submenu">
    <div class="container">
      <menus />

      <social-icons />
    </div>
  </div>
  <div class="general container">
          <concut />

          <menudynamic />

          <div  class="contacts">
            <ul>
              <li>
                <span class="phone-wrapper">
                  <NuxtLink :to="'tel: +78142632100'" class="phone" id="phone">+7 (8142) 63-21-00</NuxtLink>
                </span>
                <NuxtLink to="/contacts" class="link">Как нас найти</NuxtLink>
              </li>
            </ul>
          </div>
  </div>
<!--    </header>-->

</template>

<script>



import Menus from "~/layouts/headers/menus.vue";
import SocialIcons from "~/components/SocialIcons.vue";
import Concut from "~/layouts/headers/concut.vue";
import Menudynamic from "~/layouts/headers/menudynamic.vue";

export default {
  name: "TheHeader",
  components: {Menudynamic, Concut, Menus, SocialIcons}
}
</script>

<style scoped>


</style>