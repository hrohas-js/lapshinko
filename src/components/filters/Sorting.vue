<template>
  <div class="sub-filter-container">
    <div class="sub-filter" @click="showSub = !showSub">
      <span>{{ sorteringVariant }}</span> <img src="@/assets/svg/arrow-down.svg" alt="сортировка каталога">
    </div>
    <transition name="slide-fade">
      <div class="sub-filter__choose" v-if="showSub">
        <span @click="fetch_sort('по цене: ниже' ,'priceDown')">по цене: ниже</span>
        <span @click="fetch_sort('по цене: выше','priceUp')">по цене: выше</span>
        <span @click="fetch_sort('по обновлению','update')">по обновлению</span>
        <span @click="fetch_sort('по популярности','popular')">по популярности</span>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'Sorting',
  data: () => ({
    showSub: false,
  }),
  computed: {
    sorteringVariant() {
      switch (this.$store.state.catalogSettings.sortParams) {
        case 'priceDown':
          return 'по цене: ниже'
          break;
        case 'priceUp':
          return 'по цене: выше'
          break;
        case 'update':
          return 'по обновлению'
          break;
        case 'popular':
          return 'по популярности'
          break;
      }
    }
  },
  methods: {
    fetch_sort(text, value) {
      this.showSub = false;
      this.$store.commit('catalogSettings/SЕT_PARAMS', value);
    }
  },
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
  transform: translateY(-20px);
  opacity: 0;
}

.sub-filter-container {
  position: relative;
  width: fit-content;
  font-size: rem(14);
}

.sub-filter {
  min-width: rem(183);
  padding: rem(15) rem(15) rem(15) rem(26);
  gap: rem(8);
  background: #F9F9F9;
  cursor: pointer;
  position: relative;

  img {
    position: absolute;
    right: rem(8);
  }
}

.sub-filter__choose {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 rem(15) rem(15) rem(26);
  background: #F9F9F9;
  top: 100%;
  left: 0;
  z-index: 1;

  span {
    cursor: pointer;
    margin-top: rem(10);
  }
}
</style>