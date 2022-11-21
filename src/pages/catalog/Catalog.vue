<template>
  <main>
    <offer></offer>
    <div class="wrapper">
      <Categories :title="'catalog'"></Categories>
      <catalog :title="'choose'"></catalog>
    </div>
  </main>
</template>

<script>
import Offer from "@/components/Offer";
import Catalog from "@/components/catalog/Catalog";
import Categories from "@/components/categories/Categories";

export default {
  name: 'CatalogPage',
  components: {Catalog, Categories, Offer},
}
</script>

<style scoped lang="scss">

</style>
