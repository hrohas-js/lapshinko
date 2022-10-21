<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="wrapper">
      <div class="section-header">
        <h1 class="_title">
          Новые позиции в каталоге
        </h1>
      </div>
    </div>
    <div class="banner">
      <div class="wrapper">
        <article class="section-banner">
          <p>КФХ Лапшино базируется на производстве чистой экологической сельскохозяйственной продукции. Все сырье
            собственного производства - от зерна до мясокомбината.</p>
          <p>"Наша главная цель – жить и работать на селе для своей семьи и людей, поэтому мы и стараемся возродить
            крестьянские традиции Руси на нашем небольшом хуторе".</p>
          <p>Миссия: “Мы предлагаем Вам то, что едим сами!"</p>
        </article>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <article class="text">
          <p>Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем
            коров, свиней, овец и кур.
            <br>
            Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым
            вниманием - кормим кормами, которые сами же и выращиваем, обеспечиваем должный уход и заботу.
            Наверное поэтому наши продукты необычайно вкусные и не сравнятся с тем, что продается в магазинах.</p>
          <p>
            Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем коров,
            свиней, овец и кур.
            <br>
            Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым
            вниманием - кормим кормами, которые сами же и выращиваем, обеспечиваем должный уход и заботу.
            <br>
            Наверное поэтому наши продукты необычайно вкусные и не сравнятся с тем, что продается в магазинах.
          </p>
          <p>Наша ферма находится в Тверской области в экологически чистом районе. В своем хозяйстве мы выращиваем
            коров, свиней, овец и кур.
            <br>
            Мы не являемся крупным сельхозпроизводителем, поэтому к каждому обитателю нашей фермы относимся с особым
            вниманием - кормим кормами, которые сами же и выращиваем, обеспечиваем должный уход и заботу.
            <br>
            Наверное поэтому наши продукты необычайно вкусные и не сравнятся с тем, что продается в магазинах.</p>
        </article>
      </div>
    </div>
    <div :class="{wrapper:width>=770}">
      <section class="container about-product">
        <div class="picture">
          <img src="@/assets/webp/news/someNews/somNews.webp" alt="новость">
        </div>
        <div class="description" :class="{wrapper:width<=769}">
          <h2 class="_sub-title">Помимо скотоводства и птицеводства мы также возделываем картофель и другие овощи.</h2>
          <p>На нашем подворье содержатся молочные и мясные породы коров, овцы, свиньи и куры. Мы полностью обеспечиваем
            себя сами - механизированной техникой возделываем картофель, сеем зерновые, заготавливаем сено. </p>
          <p>В отдельном помещении создана молочная комната, где по бабушкиным рецептам сама хозяйка готовит молочную
            вкусность. В 2017 году построили отдельное здание под переработку мясной продукции и сегодня организовали
            производство мясных продуктов из собственного сырья.</p>
          <p>В отдельном помещении создана молочная комната, где по бабушкиным рецептам сама хозяйка готовит молочную
            вкусность. В 2017 году построили отдельное здание под переработку мясной продукции и сегодня организовали
            производство мясных продуктов из собственного сырья.</p>
        </div>
      </section>
      <div class="go-up" v-if="width<=769" @click="scrolTo()">
        <img src="@/assets/svg/arrowUp.svg" alt="в начало новости">
      </div>
      <div class="button-navigation">
        <div class="button _button _button_disable" v-if="width>=770">Предыдущая новость</div>
        <div class="button _button">Следующая новость</div>
        <div class="_link" v-if="width<=769">Назад к списку</div>
      </div>
    </div>
  </main>
  <footer>
    <footer-elem></footer-elem>
  </footer>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import FooterElem from "@/components/footer/FooterElem";

export default {
  name: 'PageNewsItem',
  components: {FooterElem, HeaderMenu, Header},
  computed: {
    width() {
      return this.$store.state.display_width
    }
  },
  methods:{
    scrolTo(){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItem/pageNewsItemBanner.webp");
}

p {
  line-height: rem(20);
}

.section-banner {
  max-width: rem(473);
  padding: rem(90) 0 rem(120);
  color: #FFFFFF;

  p {
    margin-top: rem(13);
  }

  p:first-child {
    margin: 0;
  }
}

.text {
  p {
    margin-top: rem(31);
  }

  p:first-child {
    margin-top: 0;
  }
}

.about-product {
  display: flex;
  gap: rem(30);
}

._sub-title {
  margin-bottom: rem(31);
}

.picture {
  img {
    width: 100%;
  }
}

.picture, .description {
  flex: 1 1 50%;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    margin-top: rem(24);
  }

  p:nth-child(2) {
    margin-top: 0;
  }
}

.button-navigation {
  display: flex;
  justify-content: center;
  margin-top: rem(82);
  gap: rem(30);
}

.button {
  padding: rem(12) rem(29);
}
.go-up{
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
@media (max-width: em(1300, 16)) and (min-width: em(770, 16)) {
  .text {
    p {
      margin-top: calc(1rem + (31 - 16) * ((100vw - 48.125rem) / (1300 - 770)));
    }
  }
  ._sub-title {
    margin-bottom: calc(1rem + (31 - 16) * ((100vw - 48.125rem) / (1300 - 770)));
  }
  .description {
    p {
      margin-top: calc(0.625rem + (24 - 10) * ((100vw - 48.125rem) / (1300 - 770)));
    }
  }
  .button-navigation{
    margin-top: calc(1.9375rem + (82 - 31) * ((100vw - 48.125rem) / (1300 - 770)));
  }
}

@media (max-width: em(769, 16)) {
  .banner {
    background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsItem/pageNewsItemBannerMob.webp") no-repeat;
    background-size: cover;
  }
  .text {
    p {
      margin-top: rem(16)
    }
  }
  .about-product{
    flex-direction: column;
  }
  ._sub-title {
    margin-bottom: rem(16)
  }
  .description{
    p {
      margin-top: rem(10)
    }
  }
  .button-navigation{
    flex-direction: column;
    align-items: center;
    margin-top:rem(31);
  }
  .button{
    width: fit-content;
  }
}
</style>