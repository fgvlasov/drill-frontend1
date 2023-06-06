<template>
<!--  <p>{{title}}</p>-->
  <div class="container wide">
    <div id="serviceHeader" class="almSwerl">
      <div class="promo">
        <div class="text">
          <p v-for="pp in filteredData">{{pp.p}}</p>
        </div>

        <div class="accent">
          <a href="#price" class="calcButton">Прайс-лист</a>
          <form class=" " action="/drill" method="post" id="webform-client-form-5" accept-charset="UTF-8">
            <div>
              <input required="required" placeholder="+7" type="text" id="edit-submitted-phone" name="submitted[phone]" value="" size="60" maxlength="128" class="form-text required">
              <input type="hidden" name="details[sid]">
              <input type="hidden" name="details[page_num]" value="1">
              <input type="hidden" name="details[page_count]" value="1">
              <input type="hidden" name="details[finished]" value="0">
              <input type="hidden" name="form_build_id" value="form-q17qfJUv0czKcp8W4ls2Un45B7L_BqRrxCTn11SAXMs">
              <input type="hidden" name="form_id" value="webform_client_form_5">
            <div class="captcha">
              <input type="hidden" name="captcha_sid" value="1310417">
              <input type="hidden" name="captcha_token" value="0d789b8bbddb62c3093e7d11056c6a97">
              <input data-recaptcha-v3-action="form" data-recaptcha-v3-sitekey="6LfM_MMUAAAAAFia7ey-aWyGYKMdwr9WCz1clJrV" type="hidden" name="recaptcha_v3_token" value="03AL8dmw-Vs1pHnqXwv9eGUICfjh45RDo7VyLQISRmB4hxujWqOeq-TyU1n_WisKVmqRiVuNnYAyUzFwg549jKIy-8ctel2RWAGRRFgRzkIr9z1h377a9ez3bJTJcZACfKn_g_gMblqEhs1_3q4H98413l9fFXCW-_ANULdvuDXFvcMqPfQszlQZeQ8bKec6Pxxcur7cZ9KLdhm1Y7OD9vvNOKRDjGmHwpnHEAhk2Gd9zh-iJQ5WbXQi9h8j-NEYg4SNNOOdnOotKhH7xWNQuDAGQ6k2FR93qY7uM8E0bZRA8iFEZMZ2h8f2k6FQEdtJET7mBubSGakjMnPlw3pAhs673mu43QMplz8OF0aBHaxA3m7gkus0gGZWM7PvQt12i35Kqu8XduP_ns_RZkRPXjbyEiD43H0NLU_6YUWWouJ-aQ-tiS8DEexzk3jkzUH-Ltn4jusV7Oi9fOy-PlB_gwrOREl5jIo7niEFEi6OR43hyjf7Qh6x7HThXXCe5B8v2QqCjOBHnhzTkVpqxDdQb3Q6Sss0KFpOI0Kg" class="recaptcha-v3-processed">
              <input type="hidden" name="captcha_response" value="Google recaptcha v3">
            </div>
              <div class="form-actions">
                <button class="rightArrow  form-submit" name="op" value="Отправить заявку" type="submit">Отправить заявку</button>
              </div>
              <p><a href="mailto:concut.alaton@gmail.com">concut.alaton@gmail.com</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DataWide from "~/mixins/DataWide";

export default {
  name: 'TheWide',
  props: {
    title: {
      type: String,
      default: "",
    }
  },
  mixins: [DataWide],
  computed: {
    filteredData: function () {
      let comp = this.title.toUpperCase();
      // console.log(comp);

      return this.DataWide.filter(function (elem) {

        if (comp === '') return true;
        else return elem.title.indexOf(comp) > -1;
      })
    }
  }
}

</script>

<style scoped>

</style>