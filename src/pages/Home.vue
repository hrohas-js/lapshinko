<template>
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
</template>

<script>
import Offer from "@/components/Offer";
import Categories from "@/components/categories/Categories";
import Catalog from "@/components/catalog/Catalog";
import AboutUsBanner from "@/components/AboutUsBanner";
import NewsPreview from "@/components/news/NewsPreview";


export default {
  name: 'Home',
  components: { NewsPreview, AboutUsBanner, Catalog, Categories, Offer },
  computed: {
    width() {
      return this.$store.state.displayWidth;
    }
  }
}
</script>
<style scoped lang="scss">

</style>
