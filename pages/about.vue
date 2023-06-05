<template>
  <div id="aboutPage" class="node node-page clearfix" typeof="foaf:Document">
    <div class="node node-page clearfix">
      <h2>Компания</h2>
      <ul class="breadCrumbs">
        <li>
          <a href="/">Главная</a>
        </li>
      </ul>
      <div class="textWithImage">
        <img typeof="foaf:Image" src="../assets/images/about/about.jpg" width="500" height="320" alt>
        <div class="content">
          <p>Компания Конкат образована в 2015 году, днем рождения принято считать 15 июля.</p>
          <p>Крупные строительные компании Петрозаводска выбирают нашу компанию.</p>
          <p> Предоставляем услуги по: алмазному сверлению (бурению), алмазной резке, демонтажу, штроблению и шлифовке.</p>
          <p>Кроме низкой цены на работы мы одни из немногих, кто предлагает высокий уровень сервиса:</p>
          <ul>
            <li>Оперативно обрабатываем заявку и выезжаем на объект;</li>
            <li>Широкий спектр услуг за счёт большого парка оборудования.</li>
          </ul>
          <p>С 2019 года развиваем филиальную сеть по России.</p>
        </div>
      </div>
      <h3>Объекты</h3>
      <ListObjects />
      <TheAccent />
      <h3>Вакансия</h3>
      <TheVacancy />
    </div>
  </div>

</template>

<script>
import ListObjects from "~/components/ListObjects.vue";

export default {
  components: {
    ListObjects
  },
  setup() {
    useHead({
      title: "Компания | CONCUT",
    });
  },
};
</script>


<style scoped>

</style>