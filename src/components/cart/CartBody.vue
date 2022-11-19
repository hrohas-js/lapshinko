<template>
  <div class="cart-body">
    <div class="cart-header">
      <h1 class="_title">
        корзина
      </h1>
      <span v-if="$route.name === 'Cart'">
        Минимальная сумма заказа {{ min }} ₽
      </span>
    </div>
    <div v-if="length > 0" class="cart-list">
      <CartItem
          v-for="item in cartList"
          :key="item.product_id"
          :item="item"
      />
    </div>
    <h2 v-else class="_sub-title">
      корзина пуста
    </h2>
    <router-link
        to="/checkout"
        class="checkout _button"
        v-if="width >= 1025 && $route.name !== 'Cart' && length > 0"
    >
      Перейти к оформлению
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CartItem from "@/components/cart/CartItem";

export default {
  name: 'CartBody',
  components: {CartItem},
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapState('cart', {
      min: 'minCost',
      cartList: 'cart'
    }),
    ...mapGetters('cart', {
      length: 'cartLength'
    })
  }
}
</script>

<style lang="scss" scoped>
.cart-header {
  margin-bottom: rem(46);
}

.checkout {
  max-width: rem(290);
  margin: rem(56) auto;
  padding: rem(10) 0;
}
</style>
