<template>
  <menu class="wrapper header-menu" v-if="width > 769">
    <router-link to="/catalog" class="_button"><img src="@/assets/svg/buttonMenu.svg" alt="каталог" v-if="width > 1024"><span
        v-if="width<1024">В</span><span>Каталог</span></router-link>
    <ul class="__menu-container">
      <li class="__item">Молочная&nbsp;продукция</li>
      <li class="__item">Мясная&nbsp;продукция</li>
      <li class="__item">овощи</li>
      <li class="__item">зерно</li>
      <li class="__item">корма</li>
    </ul>
  </menu>
</template>

<script>
export default {
  name: 'HeaderMenu',
  computed: {
    width() {
      return this.$store.state.display_width
    }
  }
}
</script>

<style scoped lang="scss">
.header-menu {
  display: flex;
  align-items: center;
  padding: rem(16) 0;
}

.__menu-container {
  display: flex;
  margin-left: rem(30);
  gap: rem(30);
}

.__item {
  font-family: 'Aqum2';
  font-size: rem(18);
  text-transform: uppercase;
  color: #585858;
  border-left: 4px dotted #D9AC94;
  padding: rem(13) 0 rem(13) rem(30);
  cursor: pointer;

  &:first-child {
    padding-left: 0;
    border-left: none;
  }
}
._button{
  width: rem(182);
  height: rem(52);
  padding: rem(10) rem(38);
}
@media (max-width: em(1250, 16)) and (min-width: em(768, 16)) {
  .__menu-container {
    margin-left: calc(1rem + (30 - 16) * ((100vw - 48rem) / (1250 - 768)));
    gap: calc(0.25rem + (30 - 4) * ((100vw - 48rem) / (1250 - 768)));
  }
  .__item {
    padding-left: calc(0.9375rem + (30 - 15) * ((100vw - 48rem) / (1250 - 768)));
    padding-right: rem(15);
    font-size: calc(0.75rem + (18 - 12) * ((100vw - 48rem) / (1250 - 768)));
  }
  .header-menu {
    justify-content: center;
    .__menu__item:first-child {
      margin-right: rem(5);
    }
  }
  .header__search {
    margin-right: calc(0.75rem + (74 - 12) * ((100vw - 48rem) / (1250 - 768)));
    margin-left: calc(0.75rem + (71 - 12) * ((100vw - 48rem) / (1250 - 768)));

    input {
      width: calc(12.375rem + (330 - 198) * ((100vw - 48rem) / (1250 - 768)));
    }
  }
  .header__contacts {
    margin-left: calc(1.25rem + (71 - 20) * ((100vw - 48rem) / (1250 - 768)));
  }
  ._button {
    width: calc(6.25rem + (182 - 100) * ((100vw - 48rem) / (1250 - 768)));
    height: calc(2.1875rem + (52 - 35) * ((100vw - 48rem) / (1250 - 768)));
  }
}
</style>