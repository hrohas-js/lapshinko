<template>
  <div :class="{'cart-order-total-container':width >= 1025,'cart-order-total-container-mobile':width < 1025}">
    <div v-if="total >= min" class="__header">
      <span class="__info">
        Минимальная сумма достигнута
      </span>
      <img src="@/assets/svg/ok.svg" alt="минимальная сумма достигнута">
    </div>
    <div v-else class="__header">
      <span class="__info">
        Минимальная сумма не достигнута
      </span>
    </div>
    <div class="__progress-bar-container">
      <div class="__progress-bar">
        <div v-if="total >= min" class="__progress-bar__well-done" />
        <div v-else class="__progress-bar__not-enough" :style="{width:progressBar + '%'}" />
      </div>
      <span class="text">
        Доставка бесплатная при заказе от {{ free }}&nbsp;₽
      </span>
    </div>
    <div class="__total-count">
      <div class="__container">
        <div class="__info">
          Общая стоимость
        </div>
        <div class="__count _sub-title">
          {{ total }} ₽
        </div>
      </div>
    </div>
    <div
        v-if="width < 1025 || width >=1025 && $route.name === 'Cart'"
        class="checkout _button"
        :class="{'_button_disable': total < min}"
        @click="goToCheckout"
    >
      Перейти к оформлению
    </div>
    <router-link
        to="/catalog"
        v-if="$route.name === 'Cart'"
        class="go-back"
    >
      Продолжить покупать
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: 'CartOrderTotal',
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapState('cart', {
      min: 'minCost',
      free: 'freeDeliveryCostCart'
    }),
    ...mapGetters('cart', {
      total: 'cartTotal'
    }),
    progressBar() {
      let onePercent = this.min / 100;
      return Math.round(this.total / onePercent);
    }
  },
  methods: {
    goToCheckout() {
      if (this.total >= this.min) {
        this.$router.push('/checkout')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cart-order-total-container {
  padding: rem(32) rem(42) rem(32) rem(24);
  background: #F9F9F9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}

.cart-order-total-container-mobile {
  padding: rem(32) 0 rem(36);
  background: #F9F9F9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}

.__header {
  display: flex;
  margin-bottom: rem(8);
  align-items: center;
  justify-content: space-between;
}

.__info {
  font-weight: 700;
}

.__progress-bar {
  position: relative;
  width: 100%;
  height: rem(11);
  background: #FFD3BC;
  border-radius: rem(11);
  margin-bottom: rem(16);
}

.__progress-bar__well-done {
  position: absolute;
  width: 100%;
  height: rem(11);
  border-radius: rem(11);
  background: #629C42;
  top: 0;
  left: 0;
}

.__progress-bar__not-enough {
  position: absolute;
  height: rem(11);
  border-radius: rem(11);
  background: #CC4700;
  top: 0;
  left: 0;
}

.text {
  font-size: rem(12);
  color: #585858;
}

.__total-count {
  margin-top: rem(31);
}

.__container {
  display: flex;
  gap: rem(64);
  margin-bottom: rem(12);

  .__info {
    max-width: rem(80);
  }
}

.checkout {
  margin: rem(28) auto;
  padding: rem(10) 0;
}
.go-back{
  cursor: pointer;
  width: fit-content;
  display: block;
  margin: rem(32) auto 0;
  border-bottom: 1px solid #D9AC94;
}
@media (max-width: em(1920, 16)) and (min-width: em(1025, 16)) {
  .cart-order-total-container {
    padding-right: calc(1rem + (42 - 16) * ((100vw - 64.025rem) / (1920 - 1025)));
  }
  .__container {
    gap: calc(2rem + (64 - 32) * ((100vw - 64.025rem) / (1920 - 1025)));
  }
}

@media (max-width: em(1024, 16)) {
  .__header {
    padding: 0 rem(6) 0 rem(16);
  }
  .__progress-bar-container {
    padding: 0 rem(4);

    .text {
      padding: 0 rem(8) 0 rem(16);
    }
  }
  .__total-count {
    padding: 0 rem(16);
  }

  ._sub-title {
    font-size: rem(18)
  }

}

@media (max-width: em(320, 16)) {

  ._title {
    font-size: rem(18);
  }
}
</style>
