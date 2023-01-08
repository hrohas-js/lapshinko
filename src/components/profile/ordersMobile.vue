<template>
  <div class="orders-mobile">
    <div class="order-mobile__main">
      <div class="__header" @click="showTable = !showTable">
        <span :class="{active:showTable}">
          {{ order.id }}
        </span>
        <img src="@/assets/svg/arrow-down.svg" alt="посмотреть заказ" :class="{rotate:showTable}">
      </div>
      <transition name="slide-fade">
        <div class="__table" v-if="showTable">
          <div class="__elem">
            <h2>
              Дата заказа
            </h2>
            <span>
              {{ order.date_created.split('T')[0] }}
            </span>
          </div>
          <div class="__elem">
            <h2>
              Сумма
            </h2>
            <span>
              {{ parseInt(order.total) }} ₽
            </span>
          </div>
          <div class="__elem">
            <h2>
              Статус
            </h2>
            <div class="comment">
              <span>
                {{ order.status === 'pending' ? 'Выполняется' : 'Выполнен' }}
              </span>
            </div>
          </div>
          <div class="__more" @click="openModalInfo(order)">
            подробнее
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import OrderModal from "@/components/profile/modal/OrderModal";
export default {
  props: ['order'],
  name: 'orderMobile',
  components: {
    OrderModal
  },
  data: () => ({
    showTable: false
  }),
  methods:{
    openModalInfo(item){
      this.$store.commit('profile/SET_CURRENT_ORDER', item);
      this.$store.commit('profile/SET_SHOW_INFO_ORDER',true);
    }
  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.orders-mobile{
  margin-bottom: rem(16);

  &:last-child{
    margin-bottom: 0;
  }
}
.__header {
  display: flex;
  justify-content: space-between;
  padding: rem(8) rem(28) rem(8) rem(24);
  background: #F9F9F9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}
.active{
  color: #629C42;
  transition: color 0.3s;
}
.rotate{
  transform: rotateX(180deg);
  transition: transform 0.3s;
}
.__table{
  padding: rem(16) 0;
  background: #FFFFFF;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}
.__elem{
  padding-left: rem(8);
  margin-top: rem(24);
  h2{
    font-weight: 700;
  }
  &:first-child{
    margin-top: 0;
  }
  span{
    font-size: rem(12);
  }
}
.__header{
  span{
    font-weight: 600;
    font-size: rem(14);
  }
}
.__more{
  margin-left: rem(8);
  width: fit-content;
  margin-top: rem(41);
  border-bottom: 1px solid #D9AC94;
}
</style>
