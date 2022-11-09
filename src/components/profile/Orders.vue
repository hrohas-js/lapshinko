<template>
  <div class="orders">
    <h1 class="_title">
      заказы
    </h1>
    <div class="orders__table">
      <div class="__table-title">
        <div class="__table-title__elem">Номер заказа</div>
        <div class="__table-title__elem">Дата заказа</div>
        <div class="__table-title__elem">Сумма</div>
        <div class="__table-title__elem">Статус</div>
        <div></div>
      </div>
      <div class="__table-elem">
        <div class="__item">ZK-271221</div>
        <div class="__item">15/12/22</div>
        <div class="__item">24 590 ₽</div>
        <div class="__item comment">
          <span>Одобрен</span>
          <span class="comment__item">(комментарий)</span>
        </div>
        <div class="__item" @click="openModalInfo">
          <span class="more">Подробнее</span>
        </div>
      </div>
      <div class="__table-elem">
        <div class="__item">ZK-271221</div>
        <div class="__item">15/12/22</div>
        <div class="__item">24 590 ₽</div>
        <div class="__item comment">
          <span>Одобрен</span>
          <span class="comment__item">(комментарий)</span>
        </div>
        <div class="__item" @click="openModalInfo">
          <span class="more">Подробнее</span>
        </div>
      </div>
      <div class="__table-elem">
        <div class="__item">ZK-271221</div>
        <div class="__item">15/12/22</div>
        <div class="__item">24 590 ₽</div>
        <div class="__item comment">
          <span>Одобрен</span>
          <span class="comment__item">(комментарий)</span>
        </div>
        <div class="__item" @click="openModalInfo">
          <span class="more">Подробнее</span>
        </div>
      </div>
      <div class="__table-elem">
        <div class="__item">ZK-271221</div>
        <div class="__item">15/12/22</div>
        <div class="__item">24 590 ₽</div>
        <div class="__item comment">
          <span>Одобрен</span>
          <span class="comment__item">(комментарий)</span>
        </div>
        <div class="__item" @click="openModalInfo">
          <span class="more">Подробнее</span>
        </div>
      </div>
      <div class="__table-elem">
        <div class="__item">ZK-271221</div>
        <div class="__item">15/12/22</div>
        <div class="__item">24 590 ₽</div>
        <div class="__item comment">
          <span>Одобрен</span>
          <span class="comment__item">(комментарий)</span>
        </div>
        <div class="__item" @click="openModalInfo">
          <span class="more">Подробнее</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderModal from "@/components/profile/modal/OrderModal";
export default {
  name: 'Orders',
  components: {OrderModal},
  methods:{
    openModalInfo(){
      this.$store.commit('profile/SET_SHOW_INFO_ORDER',true);
    }
  }
}
</script>

<style scoped lang="scss">

.orders {
  width: 100%;
}

._title {
  margin-left: rem(15);
}

.__table-elem {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: rem(28) 0 rem(34);
  grid-template-columns: repeat(5, 1fr);

  &:nth-child(2n-1) {
    background-color: #F9F9F9;
  }
}

.__table-title {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  padding: rem(28) 0 rem(34);
}

.__table-title__elem {
  width: 100%;
  text-align: center;
  font-weight: 700;
  border-right: 4px dotted #D9AC94;

  &:nth-child(4) {
    border-right: none;
  }
}

.comment {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more {
  border-bottom: 1px solid #D9AC94;
  cursor: pointer;
}
</style>