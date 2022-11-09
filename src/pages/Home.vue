<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <offer></offer>
    <div class="wrapper">
      <catalog :title="'new'"></catalog>
      <Categories :title="'popular'"></Categories>
    </div>
    <about-us-banner></about-us-banner>
    <div class="wrapper">
      <news-preview></news-preview>
    </div>

  </main>
  <footer>
    <footer-elem></footer-elem>
  </footer>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import Offer from "@/components/Offer";
import Categories from "@/components/categories/Categories";
import Catalog from "@/components/catalog/Catalog";
import AboutUsBanner from "@/components/AboutUsBanner";
import NewsPreview from "@/components/news/NewsPreview";
import FooterElem from "@/components/footer/FooterElem";


export default {
  name: 'Home',
  components: { FooterElem, NewsPreview, AboutUsBanner, Catalog, Categories, Offer, HeaderMenu, Header},
  computed: {
    width() {
      return this.$store.state.display_width;
    }
  }
}
</script>
<style scoped lang="scss">

</style>