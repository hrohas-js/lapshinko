<template>
  <div class="user-lk">
    <div class="user-lk__preview">
      <div class="photo" :class="{'no-image': imageURL.length === 0}">
        <img v-if="imageURL.length > 0" :src="imageURL" alt="photo">
      </div>
      <h2 class="_sub-title">
        {{ name }}
      </h2>
    </div>
    <ul class="_box-gap_bg">
      <li :class="{active:profileAction === 'profile'}" @click="changeCurrentAction('profile')">
        <img src="@/assets/svg/inProfile.svg" alt="профиль" v-if="profileAction !== 'profile'">
        <img src="@/assets/svg/inProfileActive.svg" alt="профиль" v-if="profileAction ==='profile'">
        <span>Профиль</span></li>
      <li :class="{active:profileAction === 'basket'}" @click="changeCurrentAction('basket')">
        <img src="@/assets/svg/inBasket.svg" alt="корзина" v-if="profileAction !== 'basket'">
        <img src="@/assets/svg/inBasketActive.svg" alt="корзина" v-if="profileAction === 'basket'">
        <span>Корзина</span>
      </li>
      <li :class="{active:profileAction === 'order'}" @click="changeCurrentAction('order')">
        <img src="@/assets/svg/inOrder.svg" alt="заказы" v-if="profileAction !== 'order'">
        <img src="@/assets/svg/inOrderActive.svg" alt="заказы" v-if="profileAction === 'order'">
        <span>Заказы</span>
      </li>
      <li @click="logout">
        <img src="@/assets/svg/inLogout.svg" alt="выйти">
        <span>Выйти</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'userLk',
  computed: {
    ...mapGetters('profile',{
        userExist: 'isUserExist',
        name: 'userName'
    }),
    profileAction() {
      return this.$store.state.profile.userCurrentAction
    },
    imageURL() {
      if (this.userExist && this.$store.state.profile.user.meta.avatar_url.length > 0) {
        return this.$store.state.profile.user.meta.avatar_url[0];
      }
      else {
        return '';
      }
    }
  },
  methods:{
    changeCurrentAction(page) {
      this.$store.commit('profile/SET_USER_CURRENT_ACTION', page)
    },
    logout() {
      this.$router.push('/');
      this.$store.commit('profile/SET_USER_CURRENT_ACTION', 'profile');
      this.$store.commit('profile/SET_USER', {});
      sessionStorage.removeItem('user');
      this.$store.dispatch('FetchAuthToken', {
        username: 'admin',
        password: 'rus256303'
      });
    }
  }
}
</script>

<style scoped lang="scss">
.user-lk {
  height: fit-content;
  padding: rem(24) rem(24) rem(40);
  min-width: rem(346);
  background: #F9F9F9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}

.user-lk__preview {
  display: flex;
  gap: rem(14);
}

.photo {
  width: rem(64);
  height: rem(64);
  background: #C0C0C0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  box-shadow: 0 2px 6px rgba(21, 27, 19, 0.08);
  cursor: pointer;
}

.active {
  background: #D9AC94;
  color: #ffffff;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
}
@media (max-width: em(1024,16)) {
  .user-lk {
    min-width: 100%;
  }
}
</style>
