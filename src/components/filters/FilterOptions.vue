<template>
  <div class="filter-options">
    <div v-if="option !== ''" class="filter-option option">
      {{ option }}
      <img src="@/assets/svg/close.svg" alt="закрыть выбранный вариант">
    </div>
    <div class="filter-option cancel" @click="clearAll">
      Сбросить все
    </div>
  </div>
</template>

<script>
export default {
  name: 'filterOptions',
  computed: {
    option() {
      switch (this.$store.state.catalogSettings.filterOptionsParams) {
        case 'sale':
          return 'Со скидкой';
        case 'new':
          return 'Новинка';
        case 'promo':
          return 'Aкции';
        case '':
          return '';
      }
    }
  },
  methods:{
    clearAll() {
      this.$router.push({name: 'CatalogBody', params: {categoryId: this.$route.params.categoryId, subcategoryId: 'all'}});
      this.$store.commit('catalogSettings/SЕT_PARAMS','popular');
    }
  },
}
</script>

<style scoped lang="scss">
.filter-options {
  display: flex;
  align-items: center;
  gap: rem(28);
}

.option {
  min-width: rem(144);
  position: relative;
  padding: rem(15) rem(18) rem(15) rem(18);
  background: #D9AC94;
  color: #F9F9F9;
  font-size: rem(14);

  img {
    position: absolute;
    right: rem(18);
    top: rem(18);
    cursor: pointer;
  }
}

.cancel {
  cursor: pointer;
  padding: rem(12) rem(24);
  border: 2px solid #C0C0C0;
  color: #D9AC94;
}
</style>
