<template>
  <main>
    <div class="wrapper _box-gap_bg">
      <div class="cart-item-container">
        <cart-body></cart-body>
      </div>
      <div class="cart-order" v-if="length > 0">
        <cart-order-total></cart-order-total>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import CartOrderTotal from "@/components/cart/CartOrderTotal";
import CartBody from "@/components/cart/CartBody";

export default {
  name: 'Cart',
  components: {
    CartBody,
    CartOrderTotal
  },
  computed: {
    ...mapGetters('cart', {
      length: 'cartLength'
    })
  }
}
</script>

<style scoped lang="scss">
._box-gap_bg {
  display: flex;
  justify-content: space-between;
  gap: rem(93)
}

.cart-item-container {
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  row-gap: rem(16);
}

.cart-order {
  flex: 1 1 30%;
}

@media(max-width: em(1920, 16)) and (min-width: em(1025, 16)) {
  ._box-gap_bg {
    gap: calc(1.8125rem + (93 - 29) * ((100vw - 64.0625rem) / (1920 - 1025)));
  }
}

@media(max-width: em(1025, 16)){
  ._box-gap_bg{
    flex-direction: column;
  }
}
@media(max-width: em(1024, 16)) and (min-width: em(320, 16)) {
  ._box-gap_bg {
    gap: calc(1.5rem + (93 - 24) * ((100vw - 20rem) / (1024 - 320)));
  }
}
@media(max-width: em(320, 16)){
  ._box-gap_bg {
    gap: rem(24);
  }
}
</style>
