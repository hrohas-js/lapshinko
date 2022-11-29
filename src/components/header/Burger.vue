<template>
  <div class="burger">
    <div class="burger-content">
      <Search />
      <div class="burger__group">
        <router-link
            :to="{name: 'CatalogBody', params: {categoryId: 'all', subcategoryId: 'all'}}"
            class="__group__item"
            @click="hideBurger"
        >
          <div>
            <img src="@/assets/svg/burgerCatalog.svg" alt="каталог">
          </div>
          <span>Каталог</span>
        </router-link>
      </div>
      <div class="burger__group">
        <div class="__group__item" @click="hideBurger">
          <div>
            <img src="@/assets/svg/burgerDelivery.svg" alt="доставка">
          </div>
          <span>Доставка</span>
        </div>
        <div class="__group__item" @click="hideBurger">
          <div>
            <img src="@/assets/svg/burgerPay.svg" alt="оплата">
          </div>
          <span>Оплата</span>
        </div>
        <router-link to="/news" class="__group__item" @click="hideBurger">
          <div>
            <img src="@/assets/svg/burgerNews.svg" alt="новости">
          </div>
          <span>Новости</span>
        </router-link>
      </div>
      <div class="burger__group">
        <div class="__group__item" @click="goToProfile">
          <div>
            <img src="@/assets/svg/burgerProfile.svg" alt="личный кабинет">
          </div>
          <span>Личный кабинет</span>
        </div>
        <router-link to="/wishlist" class="__group__item" @click="hideBurger">
          <div>
            <img src="@/assets/svg/burgerWish.svg" alt="избранное">
          </div>
          <span>Избранное</span>
        </router-link>
        <router-link to="/cart" class="__group__item" @click="hideBurger">
          <div>
            <img src="@/assets/svg/burgerCart.svg" alt="корзина">
          </div>
          <span>Корзина</span>
        </router-link>
      </div>
    </div>
    <div class="burger-contacts">
      <span>Обратная связь</span>
      <a href="tel:+79876543210">8 (987) 654-21-10</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "@/components/UI/Search";

export default {
  name: 'Burger',
  components: {Search},
  data: () => ({
    showSearch: false
  }),
  computed: {
    ...mapGetters('profile', {
      isAuth: 'isUserExist'
    })
  },
  methods: {
    hideBurger() {
      this.$store.commit('SET_SHOW_BURGER')
    },
    goToProfile() {
      if (this.isAuth) {
        this.$router.push('/profile')
      } else {
        this.$store.commit('profile/SET_SHOW_REGISTRATION', true);
      }
      this.$store.commit('SET_SHOW_BURGER')
    }
  }
}
</script>

<style scoped lang="scss">

.burger {
  position: absolute;
  width: 100%;
  height: calc(100vh - 58px);
  z-index: 99999;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: rem(15);
}

.search-box {
  position: absolute;
}

.burger-content {
  display: flex;
  flex-direction: column;
  gap: rem(15);
}

.burger__group {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  padding-left: rem(15);
  border-left: 4px dotted #D9AC94;
}

.__group__item {
  display: flex;
  gap: rem(8);
  position: relative;
  & > div {
    flex: 1 1 10%;
  }
  & > span {
    flex: 1 1 90%;
  }
}

.burger-contacts {
  display: flex;
  flex-direction: column;
  gap: rem(5);
  span {
    font-size: rem(12);
    color: #585858;
  }
  a {
    font-weight: 700;
    color: #585858;
  }
}

</style>
