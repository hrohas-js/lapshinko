<template>
  <section class="footer">
    <div class="footer__container">
      <router-link to="/" class="logo" v-if="width > 1071">
        <img src="@/assets/svg/logoFooter.svg" alt="логотип">
      </router-link>
      <div class="footer__content">
        <div class="footer__navigation">
          <div class="footer__links">
            <h2 class="_sub-title">
              Покупателям
            </h2>
            <ul>
              <li class="_link">Доставка и оплата</li>
              <li class="_link">Как вернуть</li>
              <li class="_link">Как заказать</li>
              <li class="_link">Программа лояльности</li>
              <li class="_link">Вопросы и ответы</li>
              <li class="_link">Личный кабинет</li>
            </ul>
          </div>
          <div class="footer__links">
            <h2 class="_sub-title">
              О Компании
            </h2>
            <ul>
              <li class="_link">Новости</li>
              <li class="_link">Контакты</li>
              <li class="_link">Пользовательское соглашение</li>
              <li class="_link">Политика обработки персональных данных</li>
            </ul>
          </div>
          <div class="contacts">
            <span class="_link">Заказывайте товары и задавайте вопросы</span>
            <a href="tel:+79876543210" class="_title">8 (987) 654-32-10</a>
            <div class="social">
              <span class="_link">Наши социальные сети</span>
              <img src="@/assets/svg/vk.svg" alt="соц.сеть">
            </div>
          </div>
        </div>
        <div class="copyright">
          <a href="https://ed-webdev.pro/" target="_blank">Caйт создан командой: EVERYTHING DIGITAL</a>
          <p>2016–2022 © ООО «КФХ Лапшино»</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterElem',
  computed: {
    width() {
      return this.$store.state.displayWidth
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 100%;
  margin-top: rem(72);
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/footer/breather.webp") bottom no-repeat #F9F9F9;
  background-position-x: 92%;
  background-size: 27%;
  padding-right: rem(16);
}

.footer__container {
  display: flex;
  padding-top: rem(72);
}

.logo {
  max-width: rem(615);
  flex: 1 1 30%;
  display: flex;
  justify-content: flex-end;
  background: #FFFFFF;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
  margin-right: rem(33);
}

.footer__content {
  max-width: rem(855);
  flex: 1 1 70%;

}

.footer__navigation {
  display: flex;
  justify-content: space-between;
}

.footer__links {
  margin-top: rem(30);

  ul {
    margin-top: rem(24);
    border-left: 4px dotted #D9AC94;
    padding-left: rem(9);

    li {
      margin-top: rem(16);
    }

    li:first-child {
      margin-top: 0;
    }
  }
}

._link {
  border: none;

}

._title {
  display: block;
  margin: rem(8) 0 rem(24);
}

.contacts {
  display: flex;
  flex-direction: column;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: rem(40);
    margin-top: rem(8);
  }
}

.copyright {
  margin-top: rem(116);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: rem(14);
  line-height: rem(18);
  color: #000000;

  a {
    font-weight: 400;
    font-size: rem(14);
    line-height: rem(18);
    color: #000000;
  }
}

@media(max-width: em(1250, 16)) {
  .logo {
    flex: 1 1 20%;
  }
  .footer__content {
    padding-left: rem(16);
    flex: 1 1 80%
  }
}

@media(max-width: em(1071, 16)) {
  .footer__navigation{
    flex-wrap: wrap;
    row-gap: rem(16);
  }
  .footer__content {
    max-width: 100%;

  }

}
@media(max-width: em(810, 16)){
.contacts{
  width: 100%;
  align-items: center;
  margin-top: rem(24);
}
}
@media(max-width: em(509, 16)){
  .footer{
    background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/footer/FooterMobile.webp") center right no-repeat #F9F9F9;
    background-position-y: 22%;
  }
  .contacts{
    align-items: flex-start;
  }
}

</style>
