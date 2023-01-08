<template>
  <main>
    <offer />
    <div class="wrapper">
      <catalog :title="'new'" />
      <Categories :title="'popular'" />
    </div>
    <about-us-banner />
    <div class="wrapper">
      <news-preview />
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
