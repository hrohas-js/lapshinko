<template>
  <div class="header" v-if="width > 769">
    <div class="wrapper header__container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/svg/logo.svg" alt="квх лапшино">
      </router-link>
      <div class="header__menu">
        <div class="__menu__item">
          <span>О&nbsp;нас</span>&nbsp;<img src="@/assets/svg/arrowDown.svg" alt="open">
        </div>
        <div class="__menu__item">
          <span>Доставка</span>
        </div>
        <router-link to="/news" class="__menu__item" :class="{active:$route.name == 'News'}">
          <span>Блог</span>
        </router-link>
      </div>
      <div class="header__search">
        <input type="text" placeholder="Поиск">
        <img src="@/assets/svg/search.svg" alt="search">
      </div>
      <div class="header__user-panel">
        <router-link to="/wishList" class="__user-panel__item">
          <img src="@/assets/svg/wishList.svg" alt="wish list">
        </router-link>
        <router-link to="/cart" class="__user-panel__item">
          <img src="@/assets/svg/basket.svg" alt="basket">
        </router-link>
        <div v-if="userCheck" @click="goToProfile" class="__user-panel__item">
          <img src="@/assets/svg/lk_in.svg" alt="корзина">
          <span>Профиль</span>
        </div>
        <div v-else @click="showRegistration" class="__user-panel__item">
          <img src="@/assets/svg/lk.svg" alt="корзина">
          <span>Войти</span>
        </div>
      </div>
      <div class="header__contacts">
        <a href="tel:+79876543210">
        <span>
        Обратная связь
      </span>
          <span>89876543210</span></a>
      </div>
    </div>
  </div>
  <header class="header__container" v-else>
    <router-link to="/" class="header__logo">
      <img src="@/assets/svg/logoMob.svg" alt="квх лапшино">
    </router-link>
    <div class="header_mini-title">
      <span>КФХ Лапшино</span>
    </div>
    <div class="header__user-panel">
      <img src="@/assets/svg/basket.svg" alt="basket">
      <img src="@/assets/svg/burgerMenu.svg" alt="menu">
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    width() {
      return this.$store.state.displayWidth;
    },
    userCheck() {
      return Object.keys(this.$store.state.profile.user).length > 0
    }
  },
  methods: {
    showRegistration() {
      this.$store.commit('profile/SET_SHOW_REGISTRATION', true);
    },
    goToProfile() {
      this.$router.push('/profile');
    }
  }
}
</script>

<style scoped lang="scss">
span {
  color: #585858;
  font-size: rem(12);
}


.header {
  border-bottom: 1px solid #C0C0C0;
  box-shadow: 0px 2px 6px rgba(21, 27, 19, 0.08);
}

.header__container {
  display: flex;
  align-items: center;
}

.header__logo {
  margin-left: rem(25);
  margin-right: rem(47);
  cursor: pointer;
}

.header__menu, .header__user-panel {
  display: flex;
  gap: rem(24);
  align-items: center;
  cursor: pointer;
}

.__menu__item {
  display: flex;
  align-items: center;

  span {
    border-bottom: 0.5px solid #f9f9f900;
    transition: border-bottom 0.2s;

    &:hover {
      border-bottom: 0.5px solid #629C42;
    }
  }
}

.active {
  border-bottom: 0.5px solid #629C42;

  span {
    color: #629C42;
  }
}

.header__search {
  margin-left: rem(71);
  margin-right: rem(74);
  cursor: pointer;
  position: relative;

  input {
    width: rem(330);
    height: rem(38);
    padding: 0px 16px;
    border: 1px solid #C0C0C0;
    background: #F9F9F9;
    color: #585858;
  }

  img {
    position: absolute;
    right: rem(6);
    top: rem(7);
  }
}

.__user-panel__item {
  display: flex;
  align-items: center;
  gap: rem(8);
}

.header__contacts {
  margin-left: rem(71);
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;

    span:last-child {
      font-weight: 700;
      font-size: rem(16);
    }
  }
}

@media (max-width: em(1250, 16)) and (min-width: em(768, 16)) {
  .header__logo {
    margin-left: calc(0.75rem + (25 - 12) * ((100vw - 48rem) / (1250 - 768)));
    margin-right: calc(0.75rem + (47 - 12) * ((100vw - 48rem) / (1250 - 768)));
    width: calc(6.25rem + (142 - 100) * ((100vw - 48rem) / (1250 - 768)));
  }
  .header__menu, .header__user-panel {
    gap: calc(0.75rem + (24 - 12) * ((100vw - 48rem) / (1250 - 768)));
  }
  .header__menu {
    .__menu__item:first-child {
      margin-right: rem(5);
    }
  }
  .header__search {
    margin-right: calc(0.75rem + (74 - 12) * ((100vw - 48rem) / (1250 - 768)));
    margin-left: calc(0.75rem + (71 - 12) * ((100vw - 48rem) / (1250 - 768)));

    input {
      width: calc(12.375rem + (330 - 198) * ((100vw - 48rem) / (1250 - 768)));
    }
  }
  .header__contacts {
    margin-left: calc(1.25rem + (71 - 20) * ((100vw - 48rem) / (1250 - 768)));
    margin-right: rem(15);
  }
}

@media (max-width: em(769, 16)) {
  .header__container {
    justify-content: space-between;
    padding: 0 rem(16);
  }
  .header__logo {
    margin-left: 0;
    margin-right: 0;
  }
  .header_mini-title {
    font-weight: 900;
    cursor: pointer;
    text-align: center;
    font-size: rem(15);

    span {
      color: #090A08;
      text-transform: uppercase;
    }
  }
  .header__user-panel {
    gap: rem(15);
  }
}
</style>
