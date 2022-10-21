<template>
    <header>
      <Header></Header>
      <header-menu></header-menu>
    </header>
    <main>
      <offer></offer>
      <div class="wrapper">
        <Categories :title="'catalog'"></Categories>
        <catalog :title="'choose'"></catalog>
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
import FooterElem from "@/components/footer/FooterElem";
import Catalog from "@/components/catalog/Catalog";
import Categories from "@/components/categories/Categories";
export default {
  name:'CatalogPage',
  components: {FooterElem, Catalog, Categories, Offer, HeaderMenu, Header},
}
</script>

<style scoped lang="scss">

</style>