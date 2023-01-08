<template>
  <main>
    <div class="wrapper _box-gap_bg">
      <div class="panel-container">
        <UserLk />
        <cart-order-total v-if="profileAction === 'basket' && width >= 1025" />
      </div>
      <user v-if="profileAction === 'profile'" />
      <CartBody v-if="profileAction === 'basket'" />
      <orders v-if="profileAction === 'order' && width >= 770" />
      <cart-order-total v-if="width < 1025" />
      <router-link to="/catalog" class="go-back" v-if="width < 1025">
        Продолжить покупать
      </router-link>
      <div v-if="profileAction === 'order' && width < 770" class="orders-mobile-container">
        <h1 class="_title">
          заказы
        </h1>
        <div class="__elem">
          <orders-mobile v-for="order in orders" :order="order" :key="order.id" />
        </div>
      </div>

    </div>
  </main>
  <transition name="fade">
    <OrderModal v-if="showModal" />
  </transition>
</template>

<script>
import { mapState } from "vuex";
import UserLk from "@/components/profile/UserLk";
import User from "@/components/profile/User";
import Orders from "@/components/profile/Orders";
import OrdersMobile from "@/components/profile/ordersMobile";
import OrderModal from "@/components/profile/modal/OrderModal";
import CartBody from "@/components/cart/CartBody";
import CartOrderTotal from "@/components/cart/CartOrderTotal";

export default {
  name: 'Lkv',
  components: {
    CartOrderTotal,
    CartBody,
    OrderModal,
    OrdersMobile,
    Orders,
    User,
    UserLk
  },
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapState('profile', {
      profileAction: 'userCurrentAction',
      showModal: 'showInfoOrder',
      orders: 'orders'
    })
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
._box-gap_bg {
  display: flex;
  gap: rem(172);
}
.panel-container{
  display: flex;
  flex-direction: column;
  gap: rem(64);
}

._title{
  margin-bottom: rem(21);
}
.go-back{
  margin: rem(32) auto 0;
  border-bottom: 1px solid #D9AC94;
}
@media (max-width: em(1920, 16)) and (min-width: em(1025, 16)) {
  ._box-gap_bg {
    gap: calc(1.75rem + (172 - 28) * ((100vw - 64.0625rem) / (1920 - 1025)));
  }
}

@media (max-width: em(1024, 16)) {
  ._box-gap_bg {
    flex-direction: column;
    gap: rem(100);
  }
}

@media (max-width: em(1024, 16)) and (min-width: em(320, 16)) {
  ._box-gap_bg {
    gap: calc(2rem + (100 - 32) * ((100vw - 20rem) / (1024 - 320)));
  }
}

@media (max-width: em(320, 16)) {
  ._box-gap_bg {
    gap: rem(32)
  }
}
</style>
