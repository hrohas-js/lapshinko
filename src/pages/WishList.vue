<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="page-banner">
      <div class="wrapper section-title _section-banner">
        <h1 class="_title">
          избранное
        </h1>
      </div>
    </div>
    <div class="_box-gap_sm wrapper">
      <div v-if="list.length > 0" class="wish-list-container">
        <catalog-item v-for="item in list" :key="item.id" :item="item"></catalog-item>
      </div>
      <h2 v-else class="_title empty">вы еще не добавили ни одного товара</h2>
    </div>
  </main>
  <footer>
    <footer-elem></footer-elem>
  </footer>

</template>

<script>
import {mapState} from 'vuex';
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import FooterElem from "@/components/footer/FooterElem";
import CatalogItem from "@/components/catalog/CatalogItem";

export default {
  name: 'WishList',
  components: {
    CatalogItem,
    FooterElem,
    HeaderMenu, Header
  },
  computed: {
    ...mapState({
      width: 'displayWidth',
    }),
    ...mapState('wishlist', {
      list: 'wishlist'
    })
  },
}
</script>

<style scoped lang="scss">
.page-banner {
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/wishList/wishListBanner.webp") right;
  background-size: cover;
}

.wish-list-container {
  max-width: rem(864);
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem(24);
}

.empty {
  text-align: center;
}

@media (max-width: em(900, 16)) and (min-width: em(320, 16)) {
  .page-banner {
    height: calc(5.375rem + (200 - 86) * ((100vw - 20rem) / (900 - 320)));
  }
}

@media (max-width: em(769, 16)) {
  .wish-list-container {
    max-width: rem(472);
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: em(520, 16)) {
  .page-banner {
    background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/wishList/wishListBannerMob.webp") right no-repeat;
    background-size: cover;
  }
  .wish-list-container {
    grid-template-columns: 1fr;
  }

}

@media (max-width: em(320, 16)) {
  .page-banner {
    height: rem(86);
  }
}
</style>
