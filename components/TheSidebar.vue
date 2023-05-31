<template>
    <div>
<!--      <p>боковая панель</p>-->
      <form class="callForm" action="/" method="post" accept-charset="UTF-8">
        <div>
          <input required="required" type="text" value="+7" size="60" maxlength="60" class="form-text required" />
          <h4><label for="sidebarPhoneInput">Разрезать<br>просверлить<br>сломать</label></h4>
          <button class="whiteButton  form-s submit" value="Заказать звонок" type="submit">Заказать звонок</button>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  name: "TheSidebar"
}

</script>

<style scoped>

</style>