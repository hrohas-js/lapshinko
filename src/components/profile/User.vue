<template>
  <div class="user">
    <h1 class="_title">Профиль</h1>
    <div class="user__contact-info">
      <div class="__elem">
        <span>ФИО</span>
        <div class="button-box">
          <input
              :class="{'input-error':!isFullFIO}"
              type="text"
              :placeholder="name"
              v-model="newName"
              @input="newName = newName.replace(/[^ a-zа-яё]/ui,'')"
          >
          <span v-if="!isFullFIO" class="input-error-text profile-error">
              Введите ФИО полностью!
            </span>
        </div>
        <div class="choose-legal-status">
          <div class="__item">
            <input
                type="radio"
                name="legalStatus"
                id="person"
                class="custom-radio"
                value="person"
                v-model="userStatus"
            >
            <label for="person">Физическое лицо</label>
          </div>
          <div class="__item">
            <input
                type="radio"
                name="legalStatus"
                id="legal"
                class="custom-radio"
                value="legal"
                v-model="userStatus"
            >
            <label for="legal">Юридическое лицо</label>
          </div>
        </div>
      </div>
      <div class="__elem">
        <span>Загрузить фото:</span>
        <input type="text" readonly placeholder="Выберите фото.." v-model="imageName">
        <label class="show" for="photo">
          <div>Обзор</div>
          <input type="file" id="photo" class="file-hidden" @change="updateUserImage">
        </label>
      </div>
    </div>
    <div class="save-button _button _button_mobile" @click="saveUserSettings">
      Cохранить
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'user',
  data: () => ({
    userImage: null,
    imageName: '',
    userStatus: '',
    newName: '',
    isFullFIO: true
  }),
  computed: {
    ...mapGetters('profile',{
      name: 'fullUserName',
      currentStatus: 'userStatus'
    })
  },
  mounted() {
    this.userStatus = this.currentStatus;
  },
  methods: {
    updateUserImage(e) {
      this.userImage = e.target.files;
      this.imageName = this.userImage[0].name;
    },
    saveUserSettings() {
      if (this.userImage !== null) {
        this.$store.dispatch('profile/uploadPhoto', this.userImage);
      }
      if (this.newName !== '') {
        const temp = this.newName.split(' ');
        if(temp.length == 3) {
          this.isFullFIO = true;
          this.$store.dispatch('profile/updateUser', {
            meta: {
              name: temp[1],
              surname: temp[0],
              father_name: temp[2]
            }
          })
        }
        else {
          this.isFullFIO = false;
        }
      }
      if (this.userStatus !== '' && this.userStatus !== this.currentStatus) {
        this.$store.dispatch('profile/updateUser', {
          meta: {
            user_status: this.userStatus
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  width: 100%;
  max-width: rem(410);
}

.user__contact-info {
  margin-top: rem(24);

  .__elem:last-child {
    margin-top: rem(24);
  }
}

.__elem {
  display: flex;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: rem(14);
    color: #585858;
    margin-bottom: rem(8);
  }

  input[type='text'] {
    width: 100%;
    padding: rem(12) rem(14) rem(16);
    border: 1px solid #C0C0C0;
    font-weight: 400;
    font-size: rem(16);
  }
}

.choose-legal-status {
  display: flex;
  justify-content: space-between;

}

.__elem {
  position: relative;
}

.show {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: rem(13) rem(15);
  border: 1px solid #629C42;
  cursor: pointer;
}

.__item {
  display: flex;
  gap: rem(11.5);
  margin-top: rem(23.5);
  cursor: pointer;
}

.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-radio + label::before {
  content: '';
  display: inline-block;
  width: rem(14);
  height: rem(14);
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #C0C0C0;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  cursor: pointer;
}

.custom-radio:checked + label::before {
  cursor: pointer;
  border: 2px solid #629C42;
  background: url("http://lapshinka-api.store/lapshinkoServ/png/profile/legal.svg") center no-repeat;
}

.file-hidden {
  display: none;
}

._button_mobile{
  margin: rem(86) 0 0;
}

.profile-error {
  bottom: rem(-30);
  top: unset;
  text-align: left;
}

@media (max-width: em(1024,16)) {
  .user {
    max-width: 100%;
  }
}
@media (max-width: em(400,16)){
  .choose-legal-status{
    flex-direction: column;
  }
}
@media (max-width: em(1024,16)) and (min-width: em(320,16)){
  .save-button{
    margin-top: calc(2.125rem + (86 - 34) * ((100vw - 20rem) / (1024 - 320)));
  }
}
@media (max-width: em(320,16)){
  .save-button{
    margin-top: rem(34)
  }
}
</style>
