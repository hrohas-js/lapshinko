<template>
  <router-link
      :to="product.link"
      class="__item"
      :class="{_big:width > 1027, first:first, last:last}"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
  >
    <div class="__img">
      <img v-if="width > 1027" :src="product.picture" alt="новые поступления">
      <img v-if="width <= 1027" :src="product.miniImg" alt="новые поступления">
    </div>
    <div class="_sub-title" :class="{color: hover && width > 1027, width: product.rating > 1}">
      {{ product.name }}
    </div>
    <div class="hover-style" />
  </router-link>
</template>

<script>
export default {
  props: ['product', 'position'],
  name: 'CategoryItem',
  data: () => ({
    hover: false
  }),
  computed: {
    width() {
      return this.$store.state.displayWidth
    },
    first() {
      if (this.product.id === '1' && this.position === 'first') {
        return true;
      }
    },
    last() {
      if (this.product.id === '1' && this.position === 'last') {
        return true;
      }
    }
  }
}
</script>

<style scoped lang="scss">

.__item {
  position: relative;
  overflow: hidden;
  display: block;
}

._big {
  &::before {
    content: '';
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    background: linear-gradient(0deg, rgba(217, 172, 148, 0.4), rgba(217, 172, 148, 0.4)) no-repeat;
    transition: opacity 0.3s;
  }

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &::before {
      opacity: 1;
    }
  }
}

.first {
  grid-column: 1 / 3;
}

.last {
  grid-column: 3 / 5;
}

.__img {
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


.color {
  color: #FFFFFF;
}

.width {
  max-width: rem(118);
}

._sub-title {
  position: absolute;
  left: rem(24);
  bottom: rem(24);
  z-index: 2;
  transition: color 0.2s;
}

@media (max-width: em(1024, 16)) {
  .first, .last {
    grid-column: auto;
  }

  .__img {
    filter: drop-shadow(2px 1px 2px rgba(0, 0, 0, 0.25));

    img {
      width: auto;
      height: auto;
    }
  }
  ._sub-title {
    left: rem(24);
  }
}

</style>
