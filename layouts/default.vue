<template>
  <div>
    <div>
      <nav class="">
        <NuxtLink to="/">Компания</NuxtLink>
        <NuxtLink to="completedobjects">Выполненные объекты</NuxtLink>
        <NuxtLink to="fotoandvideo">Фото и видео</NuxtLink>
        <NuxtLink to="workingconditions">Условия работы</NuxtLink>
        <NuxtLink to="articles">Статьи</NuxtLink>
        <NuxtLink to="reviews">Отзывы</NuxtLink>
        <NuxtLink to="contacts">Контакты</NuxtLink>
      </nav>
    </div>
    <div>
      <nav>
        <NuxtLink to="https://www.instagram.com/concut_ru/">Instagram</NuxtLink>
        <NuxtLink to="http://www.youtube.com/channel/UCftRGdsIOSOzVS-5LsuMy9A/feed?activity_view=3">Youtube</NuxtLink>
        <NuxtLink to="http://vk.com/concut">Vk</NuxtLink>
      </nav>
    </div>
    <div>
      <div>
        <NuxtLink to="https://concut.ru">
          <img src="~assets/images/logo.png" alt="Concut" />
        </NuxtLink>
      </div>
      <div>
        <div>
          <NuxtLink :to="'tel: ' + activeIdx.phone">{{ activeIdx.extended_phone }}</NuxtLink>
          <NuxtLink to="contacts">Как нас найти</NuxtLink>
        </div>
        <div>
            <select v-model="activeIndex">
              <option  v-for="(reg, idx) in regional_phones" v-bind:value="idx">
                {{ reg.name_region }}
              </option>
            </select>
        </div>
      </div>
    </div>
    <div>
      <nav class="">
        <NuxtLink to="drill">АЛМАЗНОЕ СВЕРЛЕНИЕ</NuxtLink>
        <NuxtLink to="cut">АЛМАЗНАЯ РЕЗКА</NuxtLink>
        <NuxtLink to="dismantling">ДЕМОНТАЖ</NuxtLink>
        <NuxtLink to="groove">ШТРОБЛЕНИЕ</NuxtLink>
        <NuxtLink to="grind">ШЛИФОВКА</NuxtLink>
      </nav>
    </div>
    <!--    Заменяется содержимое на страницы-->
    <slot></slot>
  </div>
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

</style>