<template>
  <div class="modal">
    <div class="registration">
      <div class="close" @click="close">
        <img src="@/assets/svg/closButton.svg" alt="Закрыть окно">
      </div>
      <router-link to="/" class="header__logo">
        <img src="@/assets/svg/logo.svg" alt="квх лапшино">
      </router-link>
      <div v-if="formOption == 'login'">
        <div class="__login-form">
          <div class="__header">
            <h2>Войдите или зарегистрируйтесь</h2>
          </div>
          <div class="login">
            <div class="inputs">
              <div class="input-container">
                <label for="mail">Email</label>
                <input
                    :class="{'input-error':!emailValidation || (emptyLogin && login.email == '')}"
                    type="email"
                    id="mail"
                    placeholder="Email"
                    v-model="login.email"
                    @blur="emailValidate(login.email)"
                >
              </div>
              <div class="input-container">
                <label for="pas">Пароль</label>
                <input
                    :class="{'input-error':emptyLogin && login.password == ''}"
                    type="password"
                    id="pas"
                    placeholder="Пароль"
                    v-model="login.password">
              </div>
            </div>
            <div class="button-box">
              <span v-if="!emailValidation" class="input-error-text">
                Вы ввели некорректное значение
              </span>
              <span v-if="emptyLogin" class="input-error-text">
                Заполните все поля
              </span>
              <div
                  class="_button _button_mobile full-width"
                  :class="{'_button_disable':isEmptyLoginInputs}"
                  @click="fetchAuth"
              >
                Войти
              </div>
            </div>
            <div class="change-form" @click="goToRegistration">
              Еще не зарегистрировались? Зарегистрируйтесь!
            </div>
          </div>
        </div>
        <div class="__rules">
          Регистрируясь или авторизуясь на КФХ «Лапшино», вы соглашаетесь с
          <span>Пользовательское соглашение</span> и
          <span>Политика обработки персональных данных</span>
        </div>
      </div>
      <div v-if="formOption == 'registration'">
        <div class="__header">
          <h2>Укажите сови данные</h2>
        </div>
        <div class="login">
          <div class="inputs">
            <div class="input-container">
              <label for="name">Имя</label>
              <input
                  :class="{'input-error':emptyRegistration && registration.name == ''}"
                  type="text"
                  id="name"
                  placeholder="Имя"
                  v-model="registration.name"
                  @input="registration.name = registration.name.replace(/[^ a-zа-яё]/ui,'')"
              >
            </div>
            <div class="input-container">
              <label for="surname">Фамилия</label>
              <input
                  :class="{'input-error':emptyRegistration && registration.surname == ''}"
                  type="text"
                  id="surname"
                  placeholder="Фамилия"
                  v-model="registration.surname"
                  @input="registration.surname = registration.surname.replace(/[^ a-zа-яё]/ui,'')"
              >
            </div>
            <div class="input-container">
              <label for="mail">Email</label>
              <input
                  :class="{'input-error':!emailValidation || (emptyRegistration && registration.email == '')}"
                  type="email"
                  id="mail"
                  placeholder="Email"
                  v-model="registration.email"
                  @blur="emailValidate(registration.email)"
              >
            </div>
            <div class="input-container">
              <label for="pas">Пароль</label>
              <input
                  :class="{'input-error':emptyRegistration && registration.password == ''}"
                  type="password"
                  id="pas"
                  placeholder="Пароль"
                  v-model="registration.password">
            </div>
          </div>
          <div class="button-box">
            <span v-if="!emailValidation" class="input-error-text">
              Вы ввели некорректное значение
            </span>
            <span v-if="emptyRegistration" class="input-error-text">
              Заполните все поля
            </span>
            <div
                class="_button _button_mobile full-width"
                :class="{'_button_disable':isEmptyRegistrationInputs}"
                @click="fetchRegistration"
            >
              Зарегистрироваться
            </div>
          </div>
          <div class="change-form" @click="goToLogin">
            У вас уже есть учетная запись? Авторизуйтесь!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data: () => ({
    formOption: 'login',
    login: {
      email: '',
      password: ''
    },
    registration: {
      name: '',
      surname: '',
      email: '',
      password: ''
    },
    emailValidation: true,
    emptyLogin: false,
    emptyRegistration: false
  }),
  computed: {
    isEmptyLoginInputs() {
      return (this.login.email === '' || this.login.password === '');
    },
    isEmptyRegistrationInputs() {
      return (this.registration.name === '' || this.registration.surname === '' || this.registration.email === '' || this.registration.password === '');
    }
  },
  methods:{
    close(){
      this.$store.commit('profile/SET_SHOW_REGISTRATION',false);
    },
    goToRegistration() {
      this.formOption = 'registration';
      this.emailValidation = true;
    },
    goToLogin() {
      this.formOption = 'login';
      this.emailValidation = true;
    },
    emailValidate(value) {
      if (value != '') {
        if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
          this.emailValidation = true;
        }
        else {
          this.emailValidation = false;
        }
      }
    },
    fetchAuth() {
      let flag = false;
      Object.values(this.login).forEach(elem => {
        if (elem == '') {
          flag = true;
        }
      });
      this.emptyLogin = flag;
      if (!this.emptyLogin) {
        this.$store.dispatch('profile/Login', this.login);
      }
    },
    fetchRegistration() {
      let flag = false;
      Object.values(this.registration).forEach(elem => {
        if (elem == '') {
          flag = true;
        }
      });
      this.emptyRegistration = flag;
      if (!this.emptyRegistration) {
        this.$store.dispatch('profile/Registration', this.registration);
        this.formOption = 'login';
      }
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

._button {
  margin-top: rem(42);
}

.change-form {
  text-align: center;
  width: fit-content;
  margin: rem(20) auto;
  font-size: rem(14);
  text-decoration: underline;
  cursor: pointer;
}

.__rules {
  text-align: center;
  max-width: rem(374);
  margin: 0 auto;

  span {
    color: #629C42;
    cursor: pointer;
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
  position: relative;
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
