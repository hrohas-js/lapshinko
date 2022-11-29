<template>
  <div
      class="food-container"
      @click="goToProduct"
      @mouseenter="showMove = true"
      @mouseleave="showMove = false">
    <div
        class="food-item"
        :class="{'food-item_wish':$route.name === 'WishList' && width <= 520, 'w100':$route.name === 'WishList', 'modal__item':$route.name === 'Profile'}"
    >
      <div class="__choose-container">
        <div class="__img">
          <img src="@/assets/png/news/foods.png" alt="новые поступления">
        </div>
        <div
            v-if="width > 520 && $route.name !== 'WishList ' && $route.name !== 'Profile'"
            class="_mini-title __text"
        >
          {{ item.name }}
        </div>
      </div>
      <div
          v-if="width >= 1024 && $route.name !== 'WishList' && $route.name !== 'Profile'"
          class="__price __text"
          :class="{'__price_new':$route.name !== 'WishList'}"
      >
        {{ item.price }} ₽/ед
      </div>
      <div
          v-if="width < 1024 || $route.name === 'WishList' ||  $route.name === 'Profile'"
          class="__wish-price-container __text"
          :class="{'order-gap':$route.name === 'Profile'}"
      >
        <div
            v-if="width <= 520 && $route.name === 'WishList' || $route.name === 'Profile'"
            class="_mini-title __text"
        >
          {{ item.name }}
        </div>
        <div
            v-if="width <= 520 && $route.name !== 'WishList'"
            class="_mini-title __text"
        >
          {{ item.name }}
        </div>
        <div class="price-button">
          <div class="__price" v-if="$route.name !=='Profile'">
            {{ item.price }} ₽/ед
          </div>
          <div
              v-if=" $route.name !== 'Profile'"
              class="__wish-button"
              @click="fetchLike"
          >
            <img src="@/assets/svg/wishbutton.svg" alt="добавить в избранное" v-if="!heart">
            <img src="@/assets/svg/activeHeart.svg" alt="добавить в избранное" v-if="heart">
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="food-item _move" v-if="showMove && width > 1024 && $route.name !== 'Profile'">
        <div class="__choose-container __text">
          <div class="_mini-title">{{ item.name }}</div>
          <div class="__price">
            {{ item.price }} ₽/ед
          </div>
        </div>
        <div v-if="$route.name !== 'WishList'" class="__description">
          <span v-if="this.properties !== ''">Состав: {{ this.properties }}</span>
        </div>
        <div v-if="$route.name !== 'WishList'" class="__shelf-life">
          {{ this.lifetime }}
        </div>
        <div class="__buttons">
          <div class="__wish-button" @click="fetchLike">
            <img src="@/assets/svg/wishbutton.svg" alt="добавить в избранное" v-if="!heart">
            <img src="@/assets/svg/activeHeart.svg" alt="добавить в избранное" v-if="heart">
          </div>
          <div class="__function-buttons">
            <router-link :to="{name:'GoodsCard',params:{id:item.id}}" class="details __button">
              Детали
            </router-link>
            <div class="in-basket __button" @click="addToCart">
              В&nbsp;Корзину
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'CatalogItem',
  props: ['item'],
  data: () => ({
    showMove: false,
    heart: false
  }),
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapState('wishlist', {
      wish: 'wishlist'
    }),
    attribute() {
      return this.item.attributes.length > 1;
    },
    properties() {
      if (this.attribute) {
        return this.item.attributes[0].options[0];
      } else {
        return ''
      }
    },
    lifetime() {
      if (this.attribute) {
        return this.item.attributes[2].options[0];
      }
    }
  },
  mounted() {
    if (this.wish.length > 0) {
      this.wish.forEach(elem => {
        if (elem.id === this.item.id) {
          this.heart = true
        }
      })
    }
  },
  methods: {
    fetchLike() {
      this.heart = !this.heart
      if (this.heart) {
        this.$store.dispatch('wishlist/addToWishList', {
          id: this.item.id,
          name: this.item.name,
          price: parseInt(this.item.price)
        })
      } else {
        this.$store.dispatch('wishlist/deleteFromWishList', this.item.id)
      }
    },
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        product_id: this.item.id,
        variation_id: this.item.id + 1,
        quantity: 1,
        name: this.item.name,
        price: parseInt(this.item.price)
      })
    },
    goToProduct() {
      if (this.width <= 1024) {
        this.$router.push({name: 'GoodsCard', params: {id: this.item.id}})
      }
    }
  }
}
</script>

<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.__wish-price-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 rem(16) rem(16);
  flex-direction: column;

  .__price {
    padding: 0;
  }

  .__text {
    padding: 0;
  }
}

.food-container {
  position: relative;
  box-shadow: 0 2px 6px rgba(21, 27, 19, 0.08);

  .food-item_wish {
    flex-direction: row;
    height: fit-content;
  }

  .w100 {
    width: 100%;
  }
}

.food-item {
  max-width: rem(272);
  height: rem(352);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal__item {
  flex-direction: row;
  max-width: rem(480);
  height: rem(157);

  .__img {
    height: rem(157);

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .__wish-price-container {
    justify-content: normal;
    padding-top: rem(32);
    gap: rem(24);
  }
}

.__text {
  padding: 0 rem(16);
}


.price-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.__price {
  font-weight: 400;
  font-size: rem(14);
  line-height: rem(18);
  color: #585858;
}

.__price_new {
  padding-bottom: rem(16);
}

._move {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1111;
  background: #FFFFFF;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);

  .__choose-container {
    background: #F9F9F9;
    border-bottom: 1px solid #C0C0C0;
  }

  .__text {
    padding: rem(25) rem(16);
  }

  .__description, .__shelf-life {
    font-weight: 400;
    font-size: rem(14);
    line-height: rem(18);
    padding: 0 rem(16) rem(4);
    color: #090A08;
    border-bottom: 1px solid #C0C0C0;

    span {
      max-width: rem(240);
      display: block;
    }
  }

  .__wish-button {
    width: fit-content;
    user-select: none;
    cursor: pointer;
    padding: 0 rem(16) rem(4);
  }

  .__function-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .__button {
    line-height: rem(20);
    flex: 1 1 50%;
    cursor: pointer;
  }

  .details {
    font-weight: 400;
    background: #F9F9F9;
    padding: rem(12) rem(37);
  }

  .in-basket {
    font-weight: 700;
    padding: rem(12) rem(29);
    color: #FFFFFF;
    background: radial-gradient(146.15% 470.67% at 52.25% 118.27%, rgba(3, 102, 52, 0.2) 0%, rgba(3, 102, 52, 0.2) 100%), linear-gradient(81.93deg, #629C42 0.16%, #A0C90B 113.53%);
    box-shadow: 0 2px 6px rgba(21, 27, 19, 0.08);
    transition: filter 0.4s;

    &:hover {
      filter: brightness(1.12);
    }
  }
}

@media (max-width: em(1254, 16)) and (min-width: em(1024, 16)) {
  .food-item {
    height: calc(19rem + (352 - 304) * ((100vw - 64rem) / (1254 - 1024)));
  }
  .modal__item {
    height: auto;
  }
  ._move {
    .__price {
      margin-top: calc(1rem + (48 - 16) * ((100vw - 64rem) / (1254 - 1024)));
    }

    .details {
      padding: calc(0.25rem + (12 - 4) * ((100vw - 64rem) / (1254 - 1024))) calc(1.25rem + (37 - 20) * ((100vw - 64rem) / (1254 - 1024)));
    }

    .in-basket {
      padding: calc(0.25rem + (12 - 4) * ((100vw - 64rem) / (1254 - 1024))) calc(0.9375rem + (29 - 15) * ((100vw - 64rem) / (1254 - 1024)));;
    }

    .__button {
      font-size: calc(0.9375rem + (15 - 16) * ((100vw - 64rem) / (1254 - 1024)));
    }
  }
}

@media (max-width: em(1023, 16)) {
  .food-item {
    max-width: none;

    .__wish-price-container {
      gap: rem(8);
    }

  }
}

@media (max-width: em(1023, 16)) and (min-width: em(320, 16)) {
  .food-item {
    height: calc(13.9375rem + (304 - 223) * ((100vw - 20rem) / (1023 - 320)));
    width: calc(8.5rem + (272 - 136) * ((100vw - 20rem) / (1023 - 320)));
  }
  .modal__item {
    width: auto;
    height: auto;
  }
  .__price__price {
    font-size: calc(0.75rem + (14 - 12) * ((100vw - 20rem) / (1023 - 320)));
  }
  .__wish-price-container {
    padding-bottom: calc(0.65625rem + (16 - 10.5) * ((100vw - 20rem) / (1023 - 320)));
    padding-right: calc(0.5rem + (16 - 8) * ((100vw - 20rem) / (1023 - 320)));
  }
}

@media (max-width: em(649, 16)) {
  .modal__item {
    flex-direction: column;
    width: 100%;

    img {
      width: 100%;
    }
  }
  .food-item {
    .order-gap {
      gap: rem(40);
    }
  }
}

@media (max-width: em(320, 16)) {
  .food-item {
    height: rem(223);
  }
  .__price__price {
    font-size: rem(12)
  }
  .food-item {
    width: rem(136);
  }
  .__wish-price-container {
    padding-bottom: rem(10.5);
    padding-right: rem(8);
  }
}
</style>
