<template>
  <div class="user-lk">
    <div class="user-lk__preview">
      <div class="photo"></div>
      <h2 class="_sub-title">Петр Михайлов</h2>
    </div>
    <ul class="_box-gap_bg">
      <li :class="{active:profileAction == 'profile'}" @click="chageCurentAction('profile')">
        <img src="@/assets/svg/inProfile.svg" alt="профиль" v-if="profileAction != 'profile'">
        <img src="@/assets/svg/inProfileActive.svg" alt="профиль" v-if="profileAction == 'profile'">
        <span>Профиль</span></li>
      <li :class="{active:profileAction == 'basket'}" @click="chageCurentAction('basket')">
        <img src="@/assets/svg/inBasket.svg" alt="корзина" v-if="profileAction != 'basket'">
        <img src="@/assets/svg/inBasketActive.svg" alt="корзина" v-if="profileAction == 'basket'">
        <span>Корзина</span>
      </li>
      <li :class="{active:profileAction == 'order'}" @click="chageCurentAction('order')">
        <img src="@/assets/svg/inOrder.svg" alt="заказы" v-if="profileAction != 'order'">
        <img src="@/assets/svg/inOrderActive.svg" alt="заказы" v-if="profileAction == 'order'">
        <span>Заказы</span>
      </li>
      <li  @click="chageCurentAction('logout')">
        <img src="@/assets/svg/inLogout.svg" alt="выйти">
        <span>Выйти</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userLk',
  computed: {
    profileAction() {
      return this.$store.state.profile.userCurrentAction
    }
  },
  methods:{
    chageCurentAction(page){
      this.$store.commit('profile/SET_USER_CURRENT_ACTION',page)
    }
  }
}
</script>

<style scoped lang="scss">
.user-lk {
  height: fit-content;
  padding: rem(24) rem(24) rem(40);
  max-width: rem(346);
  background: #F9F9F9;
  box-shadow: 0px 5px 12px rgba(16, 20, 15, 0.12);
}

.user-lk__preview {
  display: flex;
  gap: rem(14);
}

.photo {
  width: rem(64);
  height: rem(64);
  background: #C0C0C0;
}

._sub-title {
  margin-top: rem(13);
}

ul {
  li:first-child {
    margin-top: 0;
  }
}

li {
  display: flex;
  align-items: center;
  margin-top: rem(8);
  padding: rem(15) rem(32);
  gap: rem(22);
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(21, 27, 19, 0.08);
  cursor: pointer;
}

.active {
  background: #D9AC94;
  color: #ffffff;
  box-shadow: 0px 5px 12px rgba(16, 20, 15, 0.12);
}
@media (max-width: em(1024,16)) {
  .user-lk {
    max-width: 100%;
  }
}
</style>