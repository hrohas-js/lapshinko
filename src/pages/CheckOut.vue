<template>
  <main>
    <div class="wrapper">
      <div class="container">
        <h1 class="_title">
          Оформление заказа
        </h1>
        <div class="_box-gap_bg">
          <div class="checkout">
            <div class="checkout-item" :class="{'checkout-item_closed':!optionDelivery.show}">
              <div class="left-decor">
                <div class="__image">
                  <img src="@/assets/svg/Vector.svg" alt="оформление заказа">
                </div>
                <div
                    class="_border"
                    :class="{'_border_disabled': !optionDelivery.show && !optionDelivery.action, '_border_filled': !optionDelivery.show && optionDelivery.action}"
                />
              </div>
              <div class="checkout-item__container">
                <div class="checkout-item__header">
                  <div class="delivery__title" @click="openDelivery">
                    <h2
                        class="_sub-title"
                        :class="{'active-header':width <= 768 && optionDelivery.action}"
                    >
                      Способ доставки
                    </h2>
                    <img src="@/assets/svg/arrow-down.svg" alt="открыть полностью">
                  </div>
                </div>
                <div v-if="optionDelivery.show">
                  <div class="delivery-container">
                    <div class="delivery__options">
                      <div class="__options-container__header">
                        <div class="__options-container__title">
                          <input
                              type="radio"
                              id="pickup"
                              name="delivery"
                              class="custom-radio"
                              value="self"
                              v-model="optionDelivery.options"
                          />
                          <label for="pickup">
                            Самовывоз
                          </label>
                        </div>
                        <img src="@/assets/svg/house.svg" alt="cамовывоз">
                      </div>
                      <div class="__options-container__text">
                        Забрать в пункте <span>бесплатно</span>
                      </div>
                    </div>
                    <div class="delivery__options">
                      <div class="__options-container__header">
                        <div class="__options-container__title">
                          <input
                              type="radio"
                              id="delivery-mean"
                              name="delivery"
                              class="custom-radio"
                              value="cura"
                              v-model="optionDelivery.options"
                          />
                          <label for="delivery-mean">
                            Курьерская доставка
                          </label>
                        </div>
                        <img src="@/assets/svg/compas.svg" alt="курьерская доставка">
                      </div>
                      <div class="__options-container__text">
                        Сбор и доставка вашего заказа осуществляется в течение 10-14 дней с момента оформления заказа.
                      </div>
                    </div>
                  </div>
                  <div
                      class="_button _button_mobile"
                      :class="{'_button_disable':optionDelivery.options == null}"
                      @click="actionDelivery"
                  >
                    Далее
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-item" :class="{'checkout-item_closed': !optionPickup.show}">
              <div class="left-decor">
                <div
                    class="_border"
                    :class="{'_border_disabled': !optionPickup.show && !optionPickup.action, '_border_filled': !optionPickup.show && optionPickup.action}"
                />
                <div class="__image">
                  <img src="@/assets/svg/Vector.svg" alt="оформление заказа">
                </div>
                <div class="_border"/>
              </div>
              <div class="checkout-item__container">
                <div class="checkout-item__header">
                  <div class="delivery__title" @click="openPickup">
                    <h2 class="_sub-title">
                      адрес доставки
                    </h2>
                    <img src="@/assets/svg/arrow-down.svg" alt="открыть полностью">
                  </div>
                </div>
                <div v-if="optionPickup.show">
                  <div v-if="optionDelivery.options === 'cura'" class="address address-data">
                    <input
                        type="text"
                        placeholder="Имя"
                        v-model="address.name"
                        @input="address.name = address.name.replace(/[^ a-zа-яё]/ui,'')"
                    />
                    <input
                        type="text"
                        placeholder="Фамилия"
                        v-model="address.surname"
                        @input="address.surname = address.surname.replace(/[^ a-zа-яё]/ui,'')"
                    />
                    <input
                        type="text"
                        placeholder="Улица, дом, квартира"
                        v-model="address.addressValue"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        v-model="address.email"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        v-model="address.phone"
                    />
                  </div>
                  <div v-else class="address">
                    <div class="__items-container">
                      <div class="__item" @click="setOptionPickup('address')">
                        Тверская область, Кашинский район, КФХ-Лапшино
                      </div>
                    </div>
                    <div class="address__map" v-if="width > 846">
                      <div class="__map__item">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fba0f563c6d83fb82743fcc85bd1f041a55fd0617289c721050cf9698fae047&amp;source=constructor"
                            width="100%" height="253" frameborder="0"></iframe>
                      </div>
                    </div>
                  </div>
                  <div
                      class="_button _button_mobile"
                      :class="{'_button_disable': optionPickup.options === null || isAddressEmpty}"
                      @click="actionPickup"
                  >
                    Далее
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-item" :class="{'checkout-item_closed':!optionPay.show}">
              <div class="left-decor">
                <div
                    class="_border"
                    :class="{'_border_disabled': !optionPay.show && !optionPay.action, '_border_filled': !optionPay.show && optionPay.action}"
                />
                <div class="__image">
                  <img src="@/assets/svg/Vector.svg" alt="оформление заказа">
                </div>
              </div>
              <div class="checkout-item__container">
                <div class="checkout-item__header">
                  <div class="delivery__title" @click="openPay">
                    <h2 class="_sub-title">способ оплаты</h2>
                    <img src="@/assets/svg/arrow-down.svg" alt="открыть полностью">
                  </div>
                </div>
                <div v-if="optionPay.show">
                  <div class="choose-pay">
                    <div class="choose-pay__container">
                      <div class="__container__item">
                        <div class="__container__input">
                          <input
                              type="radio"
                              name="pay"
                              id="cash"
                              class="custom-radio"
                              value="cod"
                              v-model="optionPay.options"
                          />
                          <label for="cash">
                            Наличными
                          </label>
                        </div>
                        <img src="@/assets/svg/cash.svg" alt="наличными">
                      </div>
                      <div class="__container__item">
                        <div class="__container__input">
                          <input
                              type="radio"
                              name="pay"
                              id="bankСard"
                              class="custom-radio"
                              value="cheque"
                              v-model="optionPay.options"
                          />
                          <label for="bankСard">
                            По карте
                          </label>
                        </div>
                        <img src="@/assets/svg/bancCard.svg" alt="по карте">
                      </div>
                    </div>
                  </div>
                  <div class="_button _button_mobile" :class="{'_button_disable':optionPay.options == null}"
                       @click="actionPay">
                    Далее
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-textarea">
              <h2>
                Комментарий
              </h2>
              <textarea maxlength="1000" v-model="comment" />
              <div class="attention">
                <span>не более 1 000 символов</span>
              </div>
            </div>
          </div>
          <div class="check-out-panel">
            <div class="check-out-panel__header" v-if="width >= 846">
              <span>К оплате</span>
              <span class="_sub-title">{{ summary }} ₽</span>
            </div>
            <div class="check-out-panel__content">
              <div class="__content__goods">
                <h2>Товары ({{ length }}) </h2>
                <div class="__goods__item">
                    <span>
                      Итог
                    </span>
                  <div class="count__border" v-if="width > 1201"/>
                  <span>{{ total }} ₽</span>
                </div>
              </div>
              <div class="__content__goods">
                <h2>Доставка</h2>
                <div class="__goods__item">
                  <span v-if="deliveryCost === 0">
                    Самовывоз
                  </span>
                  <span v-else>
                    Курьерская
                  </span>
                  <div class="delivery__border" v-if="width > 1201"/>
                  <span>{{ deliveryCost }} ₽</span>
                </div>
              </div>
              <div class="check-out-panel__buttons">
                <div class="__buttons__item __buttons" v-if="width >= 846" @click="$router.push('/cart')">
                  изменить товар
                </div>
                <div class="_button __buttons" :class="{'_button_disable':!confirmCheckout}" @click="goToPayment">
                  Оформить заказ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="modal" v-if="thanks">
    <div class="thanks">
      <div class="close" @click="close">
        <img src="@/assets/svg/closButton.svg" alt="Закрыть окно">
      </div>
      <div class="modal__header">
        <router-link to="/" class="header__logo">
          <img src="@/assets/svg/logo.svg" alt="квх лапшино">
        </router-link>
      </div>
      <div class="modal__thanks">
        <div class="_title">благодарим за заказ</div>
        <img src="@/assets/svg/Vector.svg" alt="circle">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  name: 'CheckOut',
  data: () => ({
    optionDelivery: {
      options: null,
      action: false,
      show: true
    },
    optionPickup: {
      options: null,
      action: false,
      show: false
    },
    optionPay: {
      options: null,
      action: false,
      show: false
    },
    address: {
      name: '',
      surname: '',
      addressValue: '',
      email: '',
      phone: ''
    },
    comment: ''
  }),
  computed: {
    ...mapState({
      width: 'displayWidth',
    }),
    ...mapState('cart', {
      freeDelivery: 'freeDeliveryCostCart',
      cart: 'cart'
    }),
    ...mapState('profile', {
      thanks: 'thanksShow'
    }),
    ...mapGetters('cart', {
      total: 'cartTotal',
      length: 'cartLength'
    }),
    confirmCheckout() {
      return this.optionDelivery.action && this.optionPickup.action && this.optionPay.action;
    },
    deliveryCost() {
      if (this.optionDelivery.options === 'cura' && this.total < this.freeDelivery) {
        return 300
      } else {
        return 0
      }
    },
    summary() {
      return this.total + this.deliveryCost
    },
    isAddressEmpty() {
      let flag = false
      Object.values(this.address).forEach(elem => {
        if (elem === '') {
          flag = true
        }
      })
      return flag
    }
  },
  methods: {
    openDelivery() {
      if (this.optionDelivery.action) {
        this.optionDelivery.show = !this.optionDelivery.show
      }
    },
    actionDelivery() {
      if (this.optionDelivery.options !== null) {
        this.optionDelivery.show = false;
        this.optionDelivery.action = true;
        this.optionPickup.show = true;
      }
    },
    openPickup() {
      if (this.optionDelivery.action) {
        this.optionPickup.show = !this.optionPickup.show;
      }
    },
    actionPickup() {
      if (this.optionPickup.options !== null || !this.isAddressEmpty) {
        this.optionPickup.show = false;
        this.optionPickup.action = true;
        this.optionPay.show = true;
      }
    },
    setOptionPickup(item) {
      this.optionPickup.options = item;
    },
    openPay() {
      if (this.optionPickup.action) {
        this.optionPay.show = !this.optionPay.show;
      }
    },
    actionPay() {
      this.optionPay.show = false;
      this.optionPay.action = true;
    },
    goToPayment() {
      if (this.confirmCheckout) {
        let order = {
          payment_method: this.optionPay.options,
          payment_method_title: '',
          billing: {
            city: 'Moscow',
            state: 'MOS',
            country: 'RU'
          },
          shipping: {
            city: 'Moscow',
            state: 'MOS',
            country: 'RU'
          },
          line_items: [],
          shipping_lines: []
        }
        if (this.address.name !== '') {
          order.billing.first_name = this.address.name
          order.shipping.first_name = this.address.name
        }
        if (this.address.surname !== '') {
          order.billing.last_name = this.address.surname
          order.shipping.last_name = this.address.surname
        }
        if (this.address.addressValue !== '') {
          order.billing.address_1 = this.address.addressValue
          order.shipping.address_1 = this.address.addressValue
        }
        if (this.address.email !== '') {
          order.billing.email = this.address.email
        }
        if (this.address.phone !== '') {
          order.billing.phone = this.address.phone
        }
        if (this.optionPay.options === 'cheque') {
          order.payment_method_title = 'Чековые платежи'
        }
        if (this.optionPay.options === 'cod') {
          order.payment_method_title = 'Оплата при доставке'
        }
        this.cart.forEach(elem => {
          order.line_items.push({
            product_id: elem.product_id,
            variation_id: elem.variation_id,
            quantity: elem.quantity,
            name: elem.name,
            price: elem.price
          })
        })
        if (this.optionDelivery.options === 'self') {
          order.shipping_lines.push({
            method_id: 'local_pickup',
            method_title: 'Самовывоз'
          })
        }
        if (this.optionDelivery.options === 'cura' && this.deliveryCost > 0) {
          order.shipping_lines.push({
            method_id: 'flat_rate',
            method_title: 'Единая ставка',
            total: this.deliveryCost.toString()
          })
        } else if (this.optionDelivery.options === 'cura' && this.deliveryCost === 0) {
          order.shipping_lines.push({
            method_id: 'free_shipping',
            method_title: 'Бесплатная доставка'
          })
        }
        this.$store.dispatch('profile/createOrder', {
          order: order,
          comment: this.comment
        })
      }
    },
    close() {
      this.$store.commit('profile/SET_SHOW_THANKS')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
._box-gap_bg {
  display: flex;
  gap: rem(111);
}

.checkout {
  flex: 1 1 75%;
}

.checkout-item {
  display: flex;
  border: 1px solid #C0C0C0;
  padding: rem(14) rem(30) rem(24) rem(48);
  margin-bottom: rem(24);
}

.checkout-item_closed {
  background: #F9F9F9;
  height: rem(132);
  border: none;

  .delivery__title {
    img {
      transform: none;
    }
  }
}

.checkout-item__container {
  width: 100%;
}

.left-decor {
  margin-right: rem(52);
  display: flex;
  flex-direction: column;
  gap: rem(11.5);
  overflow: hidden;
}

._border {
  height: 100%;
  border-right: 4px dotted #D9AC94;
  transform: translateX(-45%);
}

._border_disabled {
  border-right: 4px dotted #C0C0C0;
}

._border_filled {
  border-right: 4px dotted #629C42;
}

.delivery__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img {
    cursor: pointer;
    transform: rotateX(180deg);
  }
}

.delivery-container {
  display: flex;
  padding-right: rem(18);
  gap: rem(39);
  margin-top: rem(18);
}

.delivery__options {
  padding: rem(15) rem(27) rem(39) rem(8);
  border: 1px solid #EAEBEA;
  width: 100%;
}

.__options-container__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: rem(20);
}

.__options-container__text {
  font-size: rem(12);

  span {
    color: #629C42;
  }
}

._button_mobile {
  margin: rem(35) 0 0;
}

.address {
  margin-top: rem(36);
  padding-right: rem(18);
  display: flex;
  gap: rem(47)
}

.address-data {
  flex-direction: column;
  gap: rem(10);
  input {
    width: 100%;
    max-width: rem(280);
    border: 1px solid #C0C0C0;
    background: #F9F9F9;
    color: #585858;
    padding: rem(16);
  }
}

.__items-container {
  flex: 1 1 50%;
}

.__item {
  background: #F9F9F9;
  padding: rem(12) rem(95);
  text-align: center;
  margin-top: rem(16);
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
}

.address__map {
  width: rem(253);
  height: rem(253);
  background: #EAEBEA;
}

.choose-pay__container {
  display: flex;
  gap: rem(32);
  padding-right: rem(18);
  margin-top: rem(32);
}

.__container__item {
  padding: rem(12) rem(18) rem(15) rem(7.5);
  display: flex;
  gap: rem(98);
  border: 1px solid #EAEBEA;
}

.__container__input {
  cursor: pointer;
  display: flex;
  gap: rem(7.5);
}

.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-radio + label::before {
  content: '';
  display: inline-block;
  width: rem(14);
  height: rem(14);
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #C0C0C0;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  cursor: pointer;
}

.custom-radio:checked + label::before {
  cursor: pointer;
  border: 2px solid #629C42;
  background: url("http://lapshinka-api.store/lapshinkoServ/png/profile/legal.svg") center no-repeat;
}

.checkout-textarea {
  h2 {
    font-weight: 700;
    margin-bottom: rem(8);
  }

  span {
    color: #C0C0C0;
  }
}

textarea {
  height: rem(150);
  width: 100%;
  padding: rem(16) rem(8);
  outline: none;
  -moz-appearance: none;
  border: 1px solid #999;
  resize: none;
}

.check-out-panel {
  flex: 1 1 26.8%;
  background: #FFFFFF;
  box-shadow: 0 12px 33px -2px rgba(21, 27, 19, 0.1);
  max-height: rem(400);
}

.check-out-panel__header {
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
  padding: rem(32) rem(16) rem(28) rem(16);
}

.check-out-panel__content {
  padding: rem(32) rem(16);
}

.__goods__item {
  display: flex;
}

.__content__goods {
  margin-bottom: rem(24);

  h2 {
    font-weight: 700;
  }

  span {
    font-size: rem(12);
  }

  &:nth-child(2) {
    margin-bottom: rem(34);
  }
}

.count__border {
  width: rem(127);
  border-bottom: 1px dashed #090A08;
}

.delivery__border {
  width: rem(88);
  border-bottom: 1px dashed #090A08;
}

.__buttons__item {
  text-align: center;
  background: #F9F9F9;
}

.__buttons {
  padding: rem(12) 0;
  margin-bottom: rem(16);
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
}

.thanks {
  position: relative;
  padding: 0 rem(100);
  height: rem(390);
  background: #ffffff;
  margin: rem(228) auto 0;
}

.close {
  position: absolute;
  top: 0;
  width: fit-content;
  right: rem(-75);
  background: #c0c0c0;
  padding: rem(16) rem(20);
  border-radius: 50%;
  cursor: pointer;
}

.header__logo {
  display: flex;
  justify-content: center;
}

.modal__thanks {
  display: flex;
  gap: rem(8);
  margin-top: rem(92);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: rem(-20);
    display: block;
    height: rem(172);
    border-right: 4px dotted #D9AC94;
  }

  &:after {
    content: '';
    position: absolute;
    left: rem(-40);
    display: block;
    height: rem(172);
    border-right: 4px dotted #D9AC94;
    transform: translateY(-130px);
  }
}

.active-header {
  color: #629C42;
}

@media (max-width: em(1920, 16)) and (min-width: em(1200, 16)) {
  ._box-gap_bg {
    gap: calc(2rem + (111 - 32) * ((100vw - 64rem) / (1920 - 1200)));
  }
}

@media (max-width: em(1200, 16)) {
  ._box-gap_bg {
    flex-direction: column;
    gap: rem(32);
  }
  .__goods__item {
    justify-content: space-between;
  }
}

@media (max-width: em(845, 16)) {
  ._title {
    font-size: rem(18);
  }
  .delivery-container {
    flex-direction: column;
  }
  .__items-container {
    width: 100%;
  }
  .__item {
    padding-right: 0;
    padding-left: 0;
  }
  .choose-pay__container {
    flex-direction: column;
  }
  .__container__item {
    gap: 0;
    justify-content: space-between;
  }
  .check-out-panel {
    background: none;
    box-shadow: none;
  }
  .check-out-panel__content {
    padding: 0;
  }
}

@media (max-width: em(845, 16)) and (min-width: em(320, 16)) {
  .checkout-item {
    padding-left: calc(0.5rem + (48 - 8) * ((100vw - 20rem) / (845 - 320)));
    padding-right: calc(0.75rem + (30 - 12) * ((100vw - 20rem) / (845 - 320)));
  }
  .__options-container__title {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 20rem) / (845 - 320)));
  }
  .delivery-container {
    gap: calc(1rem + (39 - 16) * ((100vw - 20rem) / (845 - 320)));
  }
  .left-decor {
    margin-right: calc(0.5rem + (52 - 8) * ((100vw - 20rem) / (845 - 320)));
  }
  .__item {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 20rem) / (845 - 320)));
    margin-top: calc(1.8125rem + (16 - 29) * ((100vw - 20rem) / (845 - 320)));
  }
  .thanks {
    padding: 0 calc(2.5rem + (100 - 40) * ((100vw - 20rem) / (845 - 320)));
  }
  .modal__thanks {
    flex-direction: column;

    ._title {
      text-align: center;
    }

    img {
      height: rem(23);
    }
  }
}

@media (max-width: em(320, 16)) {
  .checkout-item {
    padding-left: rem(8);
    padding-right: rem(12);
  }
  .__options-container__title {
    font-size: rem(12)
  }
  .delivery-container {
    gap: rem(16);
  }
  .left-decor {
    margin-right: rem(8);
  }
  .__item {
    font-size: rem(12);
    margin-top: rem(29);
  }
  .thanks {
    padding: 0 rem(40);
  }
  .modal__thanks {
    flex-direction: column;

    ._title {
      text-align: center;
    }

    img {
      height: rem(23);
    }
  }
}

@media (max-width: em(820, 16)) and (min-width: em(715, 16)) {
  .close {
    right: calc(-1rem + (-75 + 16) * ((100vw - 44.6875rem) / (820 - 715)));
    top: calc(-1.25rem + (0 + 20) * ((100vw - 44.6875rem) / (820 - 715)));
  }
}

@media (max-width: em(714, 16)) {
  .close {
    right: rem(-16);
    top: rem(-20);
  }
}
</style>
