<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="page-banner">
      <div class="wrapper section-title _section-banner">
        <h1 class="_title">
          Новости
        </h1>
        <img src="@/assets/svg/new.svg" alt="новости">
      </div>
    </div>
    <div class="wrapper  news-container _box-gap_sm">
      <news-item v-for="(item, index) in $store.state.news.news" :news="item" :key="item.id" :index="index"></news-item>
    </div>
    <div class="download-button _button _button_mobile" v-if="width <= 768">
        загрузить еще 4
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
import NewsItem from "@/components/news/NewsItem";

export default {
  name: 'News',
  components: {NewsItem, FooterElem, HeaderMenu, Header},
  computed:{
    width(){
      return this.$store.state.displayWidth
    }
  }
}
</script>

<style scoped lang="scss">
main {
  position: relative;

  &::after {
    content: '';
    height: rem(68);
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, #F9F9F9 0%, rgba(249, 249, 249, 0) 75.78%);
  }
}

.page-banner {
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsBanner.webp") right;
  background-size: cover;
}

.news-container {
  height: rem(1870);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: rem(30);
  row-gap: rem(64);
  overflow-y: auto;


  &::-webkit-scrollbar {
    display: none;
  }
}
._button_mobile{
  margin-top: rem(32);
}

@media (max-width: em(768, 16)) {
  main {
    &::after {
      display: none;
    }
  }
  .news-container {
    height:auto;
    grid-template-columns: 1fr;
    overflow-y: visible;
  }
}

@media (max-width: em(900, 16)) and (min-width: em(320, 16)) {
  .news-container {
    row-gap: calc(1rem + (30 - 16) * ((100vw - 20rem) / (900 - 320)));
  }
  .page-banner{
    height:calc(5.375rem + (200 - 86) * ((100vw - 20rem) / (900 - 320)));
  }
}
@media (max-width: em(768, 16)) and (min-width: em(320, 16)) {
  .news-container {
    row-gap: calc(1rem + (30 - 16) * ((100vw - 20rem) / (768 - 320)));
  }
}
@media (max-width: em(520, 16)){
  .page-banner{
    background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/news/newsBannerMob.webp") right no-repeat;
    background-size: cover;
  }
}
@media (max-width: em(320, 16)) {
  .news-container {
    row-gap: rem(16);
  }
  .page-banner{
    height: rem(86);
  }
}
</style>
