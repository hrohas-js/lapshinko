<template>
  <section  class="container">
    <div class="section-header">
    <div class="section-title" v-if="title == 'popular'">
      <h2 class="_title">
        популярные категории
      </h2>
      <img src="@/assets/svg/hit.svg" alt="хиты">
    </div>
      <div class="section-title" v-if="title == 'catalog'">
        <h2 class="_title">
          каталог
        </h2>
      </div>
      <div class="link-container" v-if="width >=550">
        <link-to-all></link-to-all>
      </div>
    </div>
    <div class="categories-container">
      <CategoryItem v-for="elem in $store.state.category.PopularCategory" :product="elem" :key="elem.id" :position="'first'"></CategoryItem>
    </div>
    <div class="categories-container _last" v-if="$route.name == 'Catalog'">
      <CategoryItem v-for="item in reverse" :product="item" :key="item.id" :position="'last'"></CategoryItem>
    </div>
    <div class="link-container">
      <link-to-all v-if="width <550"></link-to-all>
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
      return this.$store.state.display_width
    },
    reverse(){
      return [...this.$store.state.category.PopularCategory].reverse()
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