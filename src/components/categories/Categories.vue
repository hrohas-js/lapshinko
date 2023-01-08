<template>
  <section  class="container">
    <div class="section-header">
    <div v-if="title === 'popular'" class="section-title">
      <h2 class="_title">
        популярные категории
      </h2>
      <img src="@/assets/svg/hit.svg" alt="хиты">
    </div>
      <div v-if="title === 'catalog'" class="section-title">
        <h2 class="_title">
          каталог
        </h2>
      </div>
      <div v-if="width >= 550" class="link-container">
        <link-to-all @click="goToCatalog" />
      </div>
    </div>
    <div class="categories-container">
      <CategoryItem
          v-for="elem in $store.state.category.PopularCategory"
          :product="elem"
          :key="elem.id"
          :position="'first'"
      />
    </div>
    <div class="link-container">
      <link-to-all v-if="width <550" @click="goToCatalog" />
    </div>
  </section>
</template>

<script>
import CategoryItem from "@/components/categories/CategoryItem";
import LinkToAll from "@/components/UI/LinkToAll";

export default {
  name: 'Categories',
  components: {LinkToAll, CategoryItem},
  props:['title'],
  computed:{
    width(){
      return this.$store.state.displayWidth
    },
    reverse(){
      return [...this.$store.state.category.PopularCategory].reverse()
    }
  },
  methods: {
    goToCatalog() {
      this.$router.push('/catalog-body/all/all')
    }
  }
}
</script>

<style scoped lang="scss">

.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: rem(32);
}

._last {
  margin-top: rem(32);
}

@media (max-width: em(1024, 16)) {
  .categories-container {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 8px;
  }
  ._last{
    margin-top: rem(8);
  }
}
@media (max-width: em(550, 16)) {
  .categories-container{
    margin-bottom: rem(16);
  }
}
/*@media (max-width: em(769, 16)) and (min-width: em(320, 16)) {
  .choose-container {
    gap: calc(0.5rem + (10 - 8) * ((100vw - 20rem) / (769 - 320)));
  }
}*/
</style>
