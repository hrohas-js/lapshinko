<template>
  <section class="container">
    <img src="@/assets/webp/aboutBaner/aboutBaner.webp" alt="О компании" v-if="width >= 770">
    <img src="@/assets/webp/aboutBaner/aboutBanerMob.webp" alt="О компании" v-if="width < 770">
    <div class="description">
      <h2 class="_title">
        о компании
      </h2>
      <article>
        <p>КФХ Лапшино базируется на производстве чистой экологической сельскохозяйственной продукции. Все сырье
          собственного производства - от зерна до мясокомбината.</p>
        <p>"Наша главная цель – жить и работать на селе для своей семьи и людей, поэтому мы и стараемся возродить
          крестьянские традиции Руси на нашем небольшом хуторе".</p>
        <p>Миссия: “Мы предлагаем Вам то, что едим сами!"</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsBanner',
  computed:{
    width(){
      return this.$store.state.displayWidth
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;

  img{
    width: 100%;
    object-fit: cover;
  }
}

.description {
  max-width: rem(483);
  position: absolute;
  top: 12%;
  left: 16.4%;


}
article{
  margin-top: rem(40);
  color: #FFFFFF;
  p{
    margin-top: rem(14);
  }
  p:first-child{
    margin-top: 0;
  }
}
._title{
  color: #FFFFFF;
}
@media (max-width: em(1300, 16)) and (min-width: em(1024, 16)) {

  article{
    margin-top: calc(0.625rem + (40 - 10) * ((100vw - 64rem) / (1300 - 1024)));

    p{
      margin-top: calc(0.4375rem + (14 - 7) * ((100vw - 64rem) / (1300 - 1024)));
    }
  }
}
@media (max-width: em(1023, 16)){
  article{
    margin-top: rem(10);

    p{
      margin-top: rem(7);
    }
  }
}
@media (max-width: em(900, 16)){
  article{
    margin-top: 0;
  }
  .description{
    top: 3%;
  }
}
@media (max-width: em(769, 16)){
  .container{
    img{
      max-height: 503px;
    }
  }
  article{
    margin-top: rem(16);

    p{
      margin-top: rem(13);
    }
  }
  .description{
    top: 10.9%;
    left: 5%;
    right: 5%;
  }
}
@media (max-width: em(300, 16)){
  .description{
    top: 5.9%;
    left: 5%;
    right: 5%;
  }
}
</style>
