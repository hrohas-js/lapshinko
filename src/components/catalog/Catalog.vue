<template>
  <section class="container">
    <div class="section-header">
      <div class="section-title" v-if="title == 'new' || title == 'card'">
        <h2 class="_title">
          Новые поступления
        </h2>
        <img src="@/assets/svg/new.svg" alt="новинки">
      </div>
      <div class="section-title" v-if="title == 'choose'">
        <h2 class="_title">
          выбор покупателей
        </h2>
      </div>
    </div>
    <div class="choose-container" v-if="title == 'new'">
      <CatalogItem v-for="item in newList" :key="item.id" :item="item"></CatalogItem>
    </div>
    <div class="choose-container" v-if="title == 'choose'">
      <CatalogItem v-for="item in newList" :key="item.id" :item="item"></CatalogItem>
    </div>
  </section>
</template>

<script>
import CatalogItem from "@/components/catalog/CatalogItem";

export default {
  name: 'Catalog',
  components: {CatalogItem},
  props: ['title'],
  computed: {
    newList() {
      return [...this.$store.state.catalog.catalog].slice(0, 4);
    }
  }

}
</script>

<style scoped lang="scss">
.choose-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    cursor: pointer;
    content: url("https://dreamteam-webdev.ru/lapshinkoServ/png/catalog/arrow.svg");
  }

  &::after {
    cursor: pointer;
    content: url("https://dreamteam-webdev.ru/lapshinkoServ/png/catalog/arrow.svg");
    transform: rotateY(180deg);
  }
}

@media (max-width: em(1250, 16)) {
  .choose-container {
    gap: rem(10);
  }
}

@media (max-width: em(1023, 16)) {
  .choose-container {
    overflow: auto;
    margin: 0 auto;

    &::-webkit-scrollbar, &::before, &::after {
      display: none;
    }
  }
}

@media (max-width: em(1023, 16)) and (min-width: em(320, 16)) {
  .choose-container {
    width: calc(18rem + (932 - 288) * ((100vw - 20rem) / (1023 - 320)));
  }
}

@media (max-width: em(769, 16)) and (min-width: em(320, 16)) {
  .choose-container {
    gap: calc(1.5rem + (48 - 24) * ((100vw - 20rem) / (769 - 320)));
  }
}

@media (max-width: em(769, 16)) {
  .choose-container {
    width: 100%;
    gap: rem(48)
  }
}

@media (max-width: em(320, 16)) {
  .choose-container {
    gap: rem(32);
  }
}
</style>