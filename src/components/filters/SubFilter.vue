<template>
  <router-link
      :to="{name:'CatalogBody', params:{categoryId:$route.params.categoryId, subcategoryId:eat.id}}"
      class="sub-filter"
      :class="{active:eat.id === parseInt($route.params.subcategoryId)}"
      @click="clearPrice"
  >
    {{ eat.name }}
  </router-link>
</template>

<script>
export default {
  props: ['eat'],
  name: 'SubFilter',
  methods: {
    clearPrice() {
      this.$store.commit('catalogSettings/SET_MAX_PRICE', null);
      this.$store.commit('catalogSettings/SET_MIN_PRICE', null);
    }
  },
}
</script>

<style scoped lang="scss">

.sub-filter {
  cursor: pointer;
  padding: rem(8) rem(18);
  gap: rem(10);
  background: #F9F9F9;
  border-radius: rem(35);

  &:hover {
    background: #D9AC94;
    color: #FFFFFF;
  }
}

.active {
  background: #D9AC94;
  color: #FFFFFF;
}
</style>
