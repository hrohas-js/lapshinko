<template>
  <div class="modal">
    <div class="modal__table">
      <h1 class="_title">Заказ {{ order.id }}</h1>
      <div class="main__table">
        <div class="order">
          <div v-for="item in order.line_items" :key="item.id" class="catalog-info-container">
            <CatalogItem :item="item" />
            <div class="count-price">
              <div class="weight">
                {{ item.quantity }}шт
              </div>
              <div class="price _sub-title">
                {{ parseInt(item.total) }} ₽
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-info__container">
          <div class="__order-info">
            <span class="_span_color ">
              Сумма заказа:
            </span>
            <span class="_start _span_color _count">
              {{ parseInt(order.total) - parseInt(order.shipping_total) }} ₽
            </span>
            <span class="_span_color">
              Стоимость доставки:
            </span>
            <span class="_start _span_color _count">
              {{ parseInt(order.shipping_total) }} ₽
            </span>
            <span class="_span_color ">
              Итого:
            </span>
            <span class="_title">
              {{ parseInt(order.total) }} ₽
            </span>
          </div>
        </div>
        <div class="modal-info__table">
          <div class="modal-info__item">
            <span class="modal-info__title _border">
              Дата заказа
            </span>
            <span class="modal-info__text">
              {{ order.date_created.split('T')[0] }}
            </span>
          </div>
          <div class="modal-info__item">
            <span class="modal-info__title _border">
              Способ доставки
            </span>
            <span class="modal-info__text">{{ order.shipping_lines[0].method_title }}</span>
          </div>
          <div class="modal-info__item">
            <span class="modal-info__title _border">
              Адрес доставки
            </span>
            <span class="modal-info__text">
              {{ order.shipping.address_1.length > 0 ? order.shipping.address_1 : '-' }}
            </span>
          </div>
          <div class="modal-info__item">
            <span class="modal-info__title _border">
              Статус
            </span>
            <div class="modal-info__text status">
              <span>
                {{ order.status === 'pending' ? 'Выполняется' : 'Выполнен' }}
              </span>
            </div>
          </div>
          <div class="modal-info__item">
            <span class="modal-info__title _border_none">
              Способ оплаты
            </span>
            <span class="modal-info__text">
              {{ order.payment_method_title }}
            </span>
          </div>
        </div>
        <div class="modal-info__comment">
          <h2 class="modal-info__title">
            Комментарий
          </h2>
          <textarea cols="30" rows="10" readonly :value="order.comment" />
        </div>
      </div>
      <div class="close" @click="close">
        <img src="@/assets/svg/closButton.svg" alt="Закрыть окно">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CatalogItem from "@/components/catalog/CatalogItem";

export default {
  name: 'orderModal',
  components: {CatalogItem},
  computed: {
    ...mapState('profile', {
      order: 'currentOrder'
    })
  },
  methods: {
    close() {
      this.$store.commit('profile/SET_SHOW_INFO_ORDER', false)
    }
  }
}
</script>

<style scoped lang="scss">


.modal__table {
  height: fit-content;
  position: relative;
  margin: rem(125) auto rem(112);
  padding: rem(24) rem(24) rem(34) rem(24);
  width: rem(1110);
  background: #FFFFFF;

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

.main__table {
  margin-top: rem(98);
  border-bottom: 1.5px solid #A8A8A8;;
}

.catalog-info-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
}

.order {
  max-width: rem(825);
  margin-bottom: rem(64);

  &:last-child {
    margin-bottom: rem(38);
  }
}

.modal-info {
  margin-top: rem(38);
}

.modal-info__container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: rem(56);
}

.__order-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: rem(49);
  row-gap: rem(23);
}

.count-price {
  display: flex;
  gap: rem(70);
}

._count {
  font-family: 'Aqum2';
  font-weight: 900;
  font-size: rem(12);
}

._span_color {
  color: #A8A8A8;
}

._start {
  justify-self: start;
}

.modal-info__table {
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    text-align: center;
  }
}

.modal-info__item {
  flex: 1 1 16.666%;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: rem(45);
}

.modal-info__title {
  font-weight: 700;
  width: 100%;
}

._border {
  border-right: 3px dotted #D9AC94;
}

._border_none {
  border: none;
}

.status {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.modal-info__comment {
  margin-top: rem(42.5);

  .modal-info__title {
    text-align: start;
    margin-bottom: rem(10);
  }
}

textarea {
  border: 1px solid #EAEBEA;
  width: 100%;
  resize: none;
  outline: none;
  -moz-appearance: none;
}

@media (max-width: em(1300, 16)) and (min-width: em(1160, 16)) {
  .close {
    right: calc(-1rem + (-75 + 16) * ((100vw - 72.5rem) / (1300 - 1160)));
    top: calc(-1.25rem + (0 + 20) * ((100vw - 64rem) / (1300 - 1160)));
  }
}

@media (max-width: em(1159, 16)) {
  .close {
    right: rem(-16);
    top: rem(-20);
  }
}

@media (max-width: em(1024, 16)) and (min-width: em(850, 16)) {
  .catalog-info-container {
    margin-left: calc(0rem + (116 - 0) * ((100vw - 53.125rem) / (1024 - 850)));
  }
}

@media (max-width: em(849, 16)) {
  .catalog-info-container {
    margin-left: 0;
  }
}

@media (max-width: em(768, 16)) and (min-width: em(650, 16)) {
  .count-price {
    gap: calc(0.625rem + (70 - 10) * ((100vw - 40.625rem) / (768 - 650)));
  }
}

@media (max-width: em(649, 16)) {
  .catalog-info-container {
    flex-direction: column;
    .food-container {
      width: 100%;
    }
  }
  .count-price {
    position: absolute;
    bottom: rem(8);
    padding: 0 rem(8);
    width: 100%;
    gap: unset;
    justify-content: space-between;
  }
  .modal-info__table {
    flex-direction: column;
    justify-content: unset;
    gap: rem(18);
    span {
      text-align: left;
    }
  }
  ._border {
    border: none;
  }
  .modal-info__item {
    gap: rem(8);
  }
  .status {
    flex-direction: row;
  }
  .modal-info__text {
    border-left: 3px dotted #D9AC94;
    padding-left: rem(8);
  }
}
</style>
