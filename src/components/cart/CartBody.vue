<template>
  <div class="cart-body">
    <div class="cart-header">
      <h1 class="_title">корзина</h1>
      <span v-if="$route.name === 'Cart'">Минимальная сумма заказа 1 000 ₽</span>
    </div>
    <CartItem v-for="item in cart" :key="item.id" :item="item"></CartItem>
    <router-link to="/checkout" class="checkout _button" v-if="width >=1025 && $route.name !== 'Cart'">Перейти к оформлению</router-link>
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
    ...mapGetters('cart', {
      cart: 'cartList'
    })
  },
  mounted() {
    console.log(this.cart)
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
