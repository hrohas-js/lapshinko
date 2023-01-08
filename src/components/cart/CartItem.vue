<template>
  <div class="cart-item" :class="{'cart-item__body': width < 770}">
    <div class="cart-item__image">
      <img src="@/assets/png/GoodsCart/GoodsBig.webp" alt="good">
    </div>
    <div class="cart-item__content" :class="{row:$route.name === 'Cart' && width >= 770}">
      <div>
        <div class="_mini-title">
          {{ item.name }}
        </div>
      </div>
      <div class="controls-summary">
        <div class="controls">
          <div class="controls__button" @click="minusCart">
            <img src="@/assets/svg/minus.svg" alt="minus">
          </div>
          <div class="controls__input">
            <input type="number" :value="item.quantity" readonly>
          </div>
          <div class="controls__button" @click="plusCart">
            <img src="@/assets/svg/plus.svg" alt="plus">
          </div>
        </div>
        <div v-if="width > 768" class="summary _sub-title">
          {{ totalPrice }} ₽
        </div>
        <div class="delete" @click="deleteFromCart">
          <img src="@/assets/svg/delete.svg" alt="delete">
        </div>
      </div>
      <div v-if="width <= 768" class="summary _sub-title">
        {{ totalPrice }} ₽
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    totalPrice() {
      return this.item.price * this.item.quantity
    }
  },
  methods: {
    deleteFromCart() {
      this.$store.dispatch('cart/deleteFromCart', this.item.product_id)
    },
    plusCart() {
      this.$store.dispatch('cart/setPlusQuantity', this.item.product_id)
    },
    minusCart() {
      if (this.item.quantity > 1) {
        this.$store.dispatch('cart/setMinusQuantity', this.item.product_id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  max-height: rem(147);
  margin-bottom: rem(10);
}

.cart-item__image {
  max-width: rem(190);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cart-item__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: rem(18) rem(30);
  border-bottom: 1px solid #C0C0C0;
}
.row{
  flex-direction: row;
}
.weight {
  margin-top: rem(8);
}

.controls-summary {
  display: flex;
  gap: rem(60);
  align-items: center;
}

.controls {
  display: flex;
  gap: rem(12);
  user-select: none;
}

.controls__button {
  width: rem(48);
  height: rem(32);
  border: 1px solid #EAEBEA;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.controls__input {
  width: rem(40);
  input {
    font-family: 'Mulish', sans-serif;
    color: #629C42;
    text-align: center;
    height: 100%;
    width: 100%;
    border: 1px solid #EAEBEA;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

.summary {
  font-size: rem(24);
  width: rem(132);
  text-align: center;
}

.delete {
  cursor: pointer;
}
.cart-item__body{
  padding: 0 rem(8) rem(11);
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(21, 27, 19, 0.08);
}
@media (max-width: em(1920,16)) and (min-width: em(1025,16)){
  .row{
    .controls-summary{
      gap: calc(0.75rem - (60 - 12) * ((100vw - 64.0625rem) / (1920 - 1025)));
    }
  }
}
@media (max-width: em(768, 16)) {
  .cart-item {
    flex-direction: column;
    max-height: unset;
  }
  .cart-item__image {
    max-width: unset;
    height: rem(150);
  }
  .cart-item__content {
    border: none;
    padding: rem(18) 0;
  }
  .weight {
    border-bottom: 1px solid #C0C0C0;
  }
  .controls-summary {
    justify-content: space-between;
    margin-top: rem(14);
    margin-bottom: rem(25);
  }
}
</style>
