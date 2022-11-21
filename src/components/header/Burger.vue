<template>
  <div class="burger">
    <div class="burger__group">
      <div class="__group__item">
        <img src="@/assets/svg/burgerCatalog.svg" alt="каталог">
      </div>
      <div class="__group__item"></div>
    </div>
    <div class="burger__group"></div>
    <div class="burger__group"></div>
  </div>
</template>

<script>
export default {
  name: 'Burger'
}
</script>

<style scoped lang="scss">

.burger {
  position: absolute;
  width: 100%;
  z-index: 99999;
  background: #FFFFFF;
}

img:hover {
  filter: url(#filter);
}

</style>
