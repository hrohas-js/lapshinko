<template>
  <div class="user">
    <h1 class="_title">Профиль</h1>
    <div class="user__contact-info">
      <div class="__elem">
        <span>ФИО</span>
        <input type="text" placeholder="ФИО">
        <div class="choose-legal-status">
          <div class="__item">
            <input type="radio" name="legalStatus" id="person" class="custom-radio">
            <label for="person">Физическое лицо</label>
          </div>
          <div class="__item">
            <input type="radio" name="legalStatus" id="legal" class="custom-radio">
            <label for="legal">Юридическое лицо</label>
          </div>
        </div>
      </div>
      <div class="__elem">
        <span>Загрузить фото:</span>
        <input type="text" placeholder="Выберите фото..">
        <div class="show">Обзор</div>
      </div>
    </div>
    <div class="save-button _button _button_mobile">Cохранить</div>
  </div>
  <div class="order__mobile">

  </div>
</template>

<script>
export default {
  name: 'user',

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
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/profile/legal.svg") center no-repeat;
}

._button_mobile{
  margin: rem(86) 0 0;
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