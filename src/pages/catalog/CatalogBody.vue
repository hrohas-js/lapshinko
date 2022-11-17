<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="wrapper">
      <div class="_box-gap_bg">
        <Filter v-if="width > 1024 && flagRender" :min="minPrice" :max="maxPrice"></Filter>
        <div class="filter-menu-container" v-if="width <= 1024">
          <transition name="slide-fade">
            <Filter v-if="showFilterMobile && flagRender" :min="minPrice" :max="maxPrice"></Filter>
          </transition>
        </div>
        <div class="main-info">
          <div class="sub-filter-container">
            <sub-filter
                v-for="elem in subCategories"
                :eat="elem" :key="elem.id"
                v-if="width > 1024">
            </sub-filter>
          </div>
          <div class="sort-container"
               :class="{'sort-container_mt':subCategories.length >0}"
          >
            <div class="show-filter"
                 v-if="width <= 1024"
                 @click="showFilterMobile = !showFilterMobile">
              <img src="@/assets/svg/filter.svg" alt="фильтр">
              <span>Фильтр</span>
            </div>
            <sorting></sorting>
            <FilterOptions v-if="width > 1024"></FilterOptions>
          </div>
          <div class="container">
            <div class="catalog-container">
              <catalog-item
                  v-for="item in pagination"
                  :key="item.id"
                  :item="item">
              </catalog-item>
            </div>
            <div class="_button _button_mobile"
                 @click="showMore"
                 v-if="priceFilterCatalog.length > paginationCount">
              Загрузить еще
            </div>
          </div>
        </div>
      </div>
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
import Filter from "@/components/filters/Filter";
import SubFilter from "@/components/filters/SubFilter";
import Sorting from "@/components/filters/Sorting";
import FilterOptions from "@/components/filters/FilterOptions";
import CatalogItem from "@/components/catalog/CatalogItem";


export default {
  name: 'CatalogBody',
  data: () => ({
    showFilterMobile: false,
    min: '',
    max: '',
    paginationCount: 9
  }),
  components: {CatalogItem, FilterOptions, Sorting, SubFilter, Filter, FooterElem, HeaderMenu, Header},
  computed: {
    width() {
      return this.$store.state.displayWidth
    },
    catalog() {
      if (this.$route.params.categoryId == 'all') {
        return this.$store.state.catalog.catalog;
      } else {
        let catalog = [];
        [...this.$store.state.catalog.catalog].forEach(elem => {
          elem.categories.forEach(item => {
            if (item.id == this.$route.params.categoryId && this.$route.params.subcategoryId == 'all') {
              catalog.push(elem)
            } else if (item.id == this.$route.params.subcategoryId) {
              catalog.push(elem)
            }
          });
        });
        return catalog;
      }
    },
    subCategories() {
      if (this.$route.params.categoryId == 'all') {
        return []
      } else {
        return [...this.$store.state.category.categories].filter(elem => {
          return elem.parent == this.$route.params.categoryId;
        })
      }
    },
    sortCatalog() {
      if (this.$store.state.catalogSettings.sortParams == '') {
        return this.catalog;
      } else {
        switch (this.$store.state.catalogSettings.sortParams) {
          case 'priceDown':
            return this.catalog.sort((a, b) => parseInt(a.price) < parseInt(b.price) ? 1 : -1);
            break;
          case 'priceUp':
            return this.catalog.sort((a, b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1);
            break;
          case 'update':
            return this.catalog.sort((a, b) => a.date_created > b.date_created ? 1 : -1);
            break;
          case 'popular':
            return this.catalog;
            break;
        }
      }
    },
    maxPrice() {
      if (this.sortCatalog.length > 0) {
        const max = this.sortCatalog.reduce((prev, cur) => {
          if (parseInt(prev.price) > parseInt(cur.price)) {
            return prev
          }
          return cur
        })
        return parseInt(max.price)
      }
    },
    minPrice() {
      if (this.sortCatalog.length > 0) {
        const min = this.sortCatalog.reduce((prev, cur) => {
          if (parseInt(prev.price) < parseInt(cur.price)) {
            return prev
          }
          return cur
        })
        return parseInt(min.price)
      }
    },
    priceFilterCatalog() {
      if (this.$store.state.catalogSettings.minPrice != null && this.$store.state.catalogSettings.maxPrice != null) {
        return this.sortCatalog.filter(elem => {
          return parseInt(elem.price) >= this.$store.state.catalogSettings.minPrice && parseInt(elem.price) <= this.$store.state.catalogSettings.maxPrice
        });
      } else {
        return this.sortCatalog;
      }
    },
    pagination() {
      return this.priceFilterCatalog.slice(0, this.paginationCount);
    },
    flagRender() {
      if (this.priceFilterCatalog.length > 0) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    showMore() {
      this.paginationCount += 9;
    }
  }
}

</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

._box-gap_bg {
  display: flex;
  gap: rem(80);
  position: relative;
}

.main-info {
  max-width: rem(850);
}

.sub-filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: rem(16);
}


.sort-container {
  display: flex;
  align-items: center;
  gap: rem(28);
}

.sort-container_mt {
  margin-top: rem(24);
}

.catalog-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem(24);
}

._button {
  margin-top: rem(128);
}

@media (max-width: em(1920, 16)) and (min-width: em(320, 16)) {
  ._button {
    margin-top: calc(3.375rem + (128 - 54) * ((100vw - 20rem) / (1920 - 320)));
  }
}

@media (max-width: em(1024, 16)) {
  .sort-container {
    justify-content: space-between;
  }
  ._box-gap_bg {
    justify-content: center;
  }
  .show-filter {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: rem(8);
  }
  .filter-menu-container {
    position: absolute;
    z-index: 1;
    left: 0;
    top: rem(80);
  }
}

@media (max-width: em(768, 16)) {
  .catalog-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .filter-menu-container {
    left: rem(-5);
  }
}

@media (max-width: em(320, 16)) {
  ._button {
    margin-top: rem(54);
  }
}
</style>
