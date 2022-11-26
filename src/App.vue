<template>
  <div ref="main" class="app">
    <status-box />
    <Registration v-if="showRegistration" />
    <header>
      <Header />
      <header-menu />
      <transition name="slide-fade">
        <Burger v-if="burger" />
      </transition>
    </header>
    <router-view />
    <footer>
      <footer-elem />
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import Registration from "@/components/modal/Registatration";
import StatusBox from "@/components/UI/StatusBox";
import FooterElem from "@/components/footer/FooterElem";
import Burger from "@/components/header/Burger";

export default {
  name: 'App',
  components: {Burger, Header, HeaderMenu, Registration, StatusBox, FooterElem},
  computed:{
    ...mapState('profile', {
      showRegistration: 'showRegistration'
    }),
    ...mapState({
      burger: 'showBurger'
    })
  },
  created() {
    this.$store.commit('SET_AXIOS_INSTANCE');
    if (sessionStorage.getItem('jwt') != null) {
      this.$store.commit('SET_JWT', sessionStorage.getItem('jwt'));
      this.$store.dispatch('catalog/FetchCatalog');
      this.$store.dispatch('category/FetchCategories');
    } else {
      this.$store.dispatch('FetchAuthToken', {
        username: 'admin',
        password: 'rus256303'
      });
    }
  },
  mounted() {
    this.$store.commit('SET_DISPLAY_WIDTH', this.$refs.main.getBoundingClientRect().width);
    window.addEventListener("resize", () => {
      this.$store.commit('SET_DISPLAY_WIDTH', this.$refs.main.getBoundingClientRect().width);
    });
    this.$store.dispatch('cart/setCart')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');

@font-face {
  font-family: 'Aqum2';
  src: url('~@/assets/fonts/Aqum2/Aqum2Smallcaps.otf');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  height: 100%;
  line-height: 20px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

header {
  position: relative;
}

input {
  border: 1px solid black;
  border-radius: 0;
  outline: none;
}

img {
  max-width: 100%;
}

ul, li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
}

h1, h2, h3, h4, h5 {
  font-size: unset;
  font-weight: normal;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.app {
  position: relative;
}

.wrapper {
  max-width: rem(1280);
  margin: 0 auto;
}

.container {
  margin: rem(56) 0 0;
}

._box-gap_sm {
  margin-top: rem(35);
}

._box-gap_bg {
  margin-top: rem(40);
}

.input-error {
  border: 1px solid #CC4700 !important;
}

.button-box {
  position: relative;
}

.input-error-text {
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  left: 0;
  top: rem(-20);
  color: #CC4700 !important;
  font-size: 0.75rem !important;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem(40);
}

.section-title {
  display: flex;
  gap: rem(8);
}

._section-banner {
  width: 100%;
  align-items: flex-end;
  padding-bottom: rem(54);

  img {
    height: rem(40);
  }
}
.slider-horizontal{
  height: rem(3) !important;
  margin-top: rem(22);
  border-radius: 5%;
}
.slider-connect{
  background:rgba(217, 172, 148, 1) !important;
}
.slider-touch-area{
  background-color: #629C42 !important;
  border-radius: 100%;
}
.slider-handle, .slider-handle:focus{
  box-shadow: none !important;
}
.slider-tooltip{
  background: none !important;
  border-radius: unset !important;
  border: none !important;
  color: #C0C0C0 !important;
  font-weight: 400 !important;
}
.slider-tooltip-bottom:before{
  display: none;
}

.page-banner {
  height: rem(200);
  display: flex;
}

._title {
  font-family: 'Aqum2', sans-serif;
  font-weight: 900;
  font-size: rem(32);
  line-height: rem(40);
  color: #090A08;
  text-transform: uppercase;
}

._mini-title {
  font-weight: 700;
  font-size: rem(16);
  line-height: rem(20);
  color: #090A08;
}


._sub-title {
  font-family: 'Aqum2', sans-serif;
  font-weight: 900;
  font-size: rem(18);
  line-height: rem(23);
  color: #090A08;
  text-transform: uppercase;
}

.link-container {
  display: flex;
  justify-content: flex-end;
}

._link {
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: rem(14);
  line-height: rem(18);
  color: #585858;
  border-bottom: 1px solid #D9AC94;
  cursor: pointer;
  width: fit-content;
}

._button {
  background: radial-gradient(146.15% 470.67% at 52.25% 118.27%, rgba(3, 102, 52, 0.2) 0%, rgba(3, 102, 52, 0.2) 100%), linear-gradient(81.93deg, #629C42 0.16%, #BFE82A 113.53%);
  box-shadow: 0 2px 2px 0 rgb(147 187 0 / 60%), 0 19px 22px -5px rgb(3 102 52 / 53%), inset 0px 0px 8px rgb(255 255 255 / 37%);
  color: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: rem(8);
  font-weight: 700;
  transition: filter 0.4s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.12);
  }
}

._button_disable {
  filter: grayscale(100%);
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
  mix-blend-mode: luminosity;
  color: #FFFFFF;
}

._button_mobile {
  width: fit-content;
  padding: rem(12) rem(29);
  margin: 0 auto;
}
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  gap: rem(16);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  background: rgba(9, 10, 8, 0.5);
  padding: 0 rem(16);
}
@media (max-width: em(1300, 16)) {
  .wrapper {
    padding-right: rem(16);
    padding-left: rem(16);
  }
}

@media (max-width: em(1300, 16)) and (min-width: em(320, 16)) {
  .section-header {
    margin-bottom: calc(1.53125rem + (40 - 24.5) * ((100vw - 20rem) / (1300 - 320)));
  }
}


@media (max-width: em(1250, 16)) and (min-width: em(320, 16)) {
  ._title {
    font-size: calc(0.9375rem + (32 - 15) * ((100vw - 20rem) / (1250 - 320)));
  }
}

@media(max-width: rem(1024)) {
  .container {
    margin-top: rem(40);
  }
  ._mini-title {
    font-weight: 600;
  }
}

@media (max-width: em(1024, 16)) and (min-width: em(320, 16)) {
  .section-title {
    gap: calc(1rem + (8 - 16) * ((100vw - 20rem) / (1023 - 320)));
  }
  ._sub-title {
    font-size: calc(0.9375rem + (18 - 15) * ((100vw - 20rem) / (1023 - 320)));
  }
  ._mini-title {
    font-size: calc(0.875rem + (16 - 14) * ((100vw - 20rem) / (1023 - 320)));
    line-height: calc(1.125rem + (20 - 18) * ((100vw - 20rem) / (1023 - 320)));
  }
}

@media (max-width: em(900, 16)) and (min-width: em(320, 16)) {
  ._section-banner {
    padding-bottom: calc(0.875rem + (54 - 14) * ((100vw - 20rem) / (900 - 320)));
  }
}

@media (max-width: em(320, 16)) {
  .section-title {
    gap: rem(14);
  }
  ._title {
    font-size: rem(15);
  }
  ._sub-title {
    font-size: rem(15);
  }
  ._mini-title {
    font-size: rem(14);
    line-height: rem(18)
  }
  .section-header {
    margin-bottom: rem(24.5);
  }
  ._section-banner {
    padding-bottom: rem(14);
  }
}
</style>
