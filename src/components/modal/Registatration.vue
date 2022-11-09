<template>
  <div class="modal">
    <div class="registration">
      <div class="close" @click="close">
        <img src="@/assets/svg/closButton.svg" alt="Закрыть окно">
      </div>
      <router-link to="/" class="header__logo">
        <img src="@/assets/svg/logo.svg" alt="квх лапшино">
      </router-link>
      <div style="display: none">
        <div class="__login-form">
          <div class="__header">
            <h2>Войдите или зарегистрируйтесь</h2>
          </div>
          <div class="container __give-me-phone">
            <input type="text" placeholder="(xxx) xxxxxxx">
            <div class="country-code">
              +7
            </div>
            <div class="_button _button_disable _button_mobile">
              Получить код
            </div>
            <div class="__send-code-again">
              отправить код повтороно
            </div>
          </div>
        </div>
        <div class="__rules">
          Регистрируясь или авторизуясь на КФХ «Лапшино», вы соглашаетесь с <span>Пользовательское соглашение</span> и
          <span>Политика
        обработки персональных данных</span>
        </div>
      </div>
      <div>
        <div class="__header">
          <h2>Укажите сови данные</h2>
        </div>
        <div class="login">
          <div class="inputs">
            <div class="input-container">
              <label for="name">Имя</label>
              <input type="text" id="name" placeholder="Имя">
            </div>
            <div class="input-container">
              <label for="surname">Фамилия</label>
              <input type="text" id="surname" placeholder="Фамилия">
            </div>
            <div class="input-container">
              <label for="mail">Email</label>
              <input type="email" id="mail" placeholder="Email">
            </div>
          </div>
          <div class="_button _button_disable _button_mobile full-width">
            Зарегистрироваться
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  methods:{
    close(){
      this.$store.commit('profile/SET_SHOW_REGISTRATION',false);
    }
  }
}
</script>

<style scoped lang="scss">
input {
  text-align: center;
  width: 100%;
  height: rem(48);
  border: 1px solid #EAEBEA;
}

.registration {
  position: relative;
  width: rem(660);
  margin: rem(247) auto rem(422);
  padding: 0 rem(21) rem(56) rem(21);
  background: #FFFFFF;
  height: fit-content;
}

.__login-form {
  margin: rem(30) auto 0;
}

.__header {
  text-align: center;

  h2 {
    font-weight: 700;
  }
}

.__give-me-phone {
  max-width: rem(190);
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.country-code {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #EAEBEA;
  padding: rem(14) rem(8);
}

._button {
  margin-top: rem(42);
}

.__send-code-again {
  text-align: center;
  width: fit-content;
  margin: rem(72) auto rem(87);
  font-size: rem(14);
  border-bottom: 1px solid #639b42;
}

.__rules {
  text-align: center;
  max-width: rem(374);
  margin: 0 auto;

  span {
    color: #629C42;
  }
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

.login {
  max-width: rem(315);
  margin: 0 auto;
}

.input-container {
  margin-top: rem(15);
  label {
    display: block;
    margin-bottom: rem(6);
  }
  input {
    text-align: left;
    padding: 0 rem(14);
  }
}

.full-width {
  width: 100%;
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