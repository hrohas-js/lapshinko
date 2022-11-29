<template>
  <div class="header__search">
    <input type="text" placeholder="Поиск" v-model="search">
    <img
        src="@/assets/svg/search.svg"
        alt="search"
        class="search-icon"
    />
    <img
        v-if="search.length > 0"
        src="@/assets/svg/closeBlack.svg"
        alt="close"
        class="close-search"
        @click="closeSearch"
    />
    <div v-if="search.length > 0" class="search-result">
      <router-link
          :to="{name:'GoodsCard', params:{id:item.id}}"
          v-for="item in searchResult"
          :key="item.id"
          @click="closeSearch"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Search',
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapState('catalog', {
      catalog: 'catalog'
    }),
    searchResult() {
      return this.catalog.filter(elem => {
        return elem.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    closeSearch() {
      this.search = ''

    }
  }
}
</script>

<style lang="scss" scoped>
.header__search {
  margin-left: rem(71);
  margin-right: rem(74);
  cursor: pointer;
  position: relative;

  input {
    width: rem(330);
    height: rem(38);
    padding: 0 rem(16);
    border: 1px solid #C0C0C0;
    background: #F9F9F9;
    color: #585858;
  }

  img {
    position: absolute;
    top: rem(7);
  }

  .search-icon {
    right: rem(6);
  }

  .close-search {
    right: rem(30);
    cursor: pointer;
  }

  .search-result {
    position: absolute;
    z-index: 99999;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;

    a {
      padding: rem(16);
      border-bottom: 1px solid #C0C0C0;
      font-size: rem(12);
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: #C0C0C0;
      }
    }
  }
}

@media (max-width: em(768, 16)) {
  .header__search {
    margin-left: 0;
    margin-right: 0;
    input {
      width: 100%;
    }
  }
}
</style>
