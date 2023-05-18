<template>
  <header>
    <div>
      <div class="submenu">
        <NuxtLink to="/" class="item-menu">Компания</NuxtLink>
        <NuxtLink to="completedobjects" class="item-menu">Выполненные объекты</NuxtLink>
        <NuxtLink to="fotoandvideo" class="item-menu">Фото и видео</NuxtLink>
        <NuxtLink to="workingconditions" class="item-menu">Условия работы</NuxtLink>
        <NuxtLink to="articles" class="item-menu">Статьи</NuxtLink>
        <NuxtLink to="reviews" class="item-menu">Отзывы</NuxtLink>
        <NuxtLink to="contacts" class="item-menu">Контакты</NuxtLink>
      </div>

      <div class="social-icons">
        <NuxtLink to="https://www.instagram.com/concut_ru/" class="instagram"></NuxtLink>
        <NuxtLink to="http://www.youtube.com/channel/UCftRGdsIOSOzVS-5LsuMy9A/feed?activity_view=3" class="youtube"></NuxtLink>
        <NuxtLink to="http://vk.com/concut" class="vk"></NuxtLink>
      </div>
    </div>
	  <div class="branding">
      <div>
        <NuxtLink to="https://concut.ru" class="item-menu">
          <img src="~assets/images/logo.png" alt="Concut" />
        </NuxtLink>
      </div>
      <div  class="item-select">
        <div class="phone-wrapper">
          <NuxtLink :to="'tel: ' + activeIdx.phone">{{ activeIdx.extended_phone }}</NuxtLink>
          <NuxtLink to="contacts">Как нас найти</NuxtLink>
        </div>
        <select v-model="activeIndex">
          <option  v-for="(reg, idx) in regional_phones" v-bind:value="idx">
            {{ reg.name_region }}
          </option>
        </select>
      </div>
    </div>
    <div class="menu-leaf">
      <nav>
        <NuxtLink to="drill" class="item-menu">АЛМАЗНОЕ СВЕРЛЕНИЕ</NuxtLink>
        <NuxtLink to="cut" class="item-menu">АЛМАЗНАЯ РЕЗКА</NuxtLink>
        <NuxtLink to="dismantling" class="item-menu">ДЕМОНТАЖ</NuxtLink>
        <NuxtLink to="groove" class="item-menu">ШТРОБЛЕНИЕ</NuxtLink>
        <NuxtLink to="grind" class="item-menu">ШЛИФОВКА</NuxtLink>
      </nav>
    </div>
  </header>
    <!--    Заменяется содержимое на страницы-->
    <slot></slot>
	<footer></footer>

</template>

<script>
export default {

  data() {
    return {
      activeIndex: 0,
      regional_phones: [
        {phone: '+78142632100',extended_phone:'+7 (8142) 63-21-00', region: 'all', name_region:'Выберите регион'},
        {phone: '+78142632100',extended_phone:'+7 (8142) 63-21-00', region: 'karelia', name_region:'Карелия'},
        {phone: '+79114002100',extended_phone:'+7 (911) 400-21-00', region: 'spb', name_region:'Санкт-Петербург'},
        {phone: '+78142632100',extended_phone:'+7 (8142) 63-21-00', region: 'ptz', name_region:'Петрозаводск'},
        ]
    }
  },
  computed: {
    activeIdx() {
      return this.regional_phones[this.activeIndex]
    }
  }
}

</script>

<style scoped>

.submenu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.item-menu {
    padding: 5px;
}
.social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
}
.branding {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.item-select {
    margin-left: auto;
    display: flex;
    /*justify-content: flex-start;*/
    justify-content: space-evenly;
    align-items: center;
    /*flex-flow: column wrap;*/
}
.select-index {
    margin-left: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}
.phone-wrapper {
    display: flex;
    flex-direction: column;
    align-items: unsafe center;
    padding: 5px;
}
.menu-leaf {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>