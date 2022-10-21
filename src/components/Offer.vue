<template>
  <section class="offer">
    <div class="offer__banner">
      <img src="@/assets/webp/imageHolder.webp" alt="banner" class="banner" v-if="width > 770">
      <img src="@/assets/webp/imageHolderMobile.webp" alt="banner" class="banner" v-if="width <= 770">
      <div class="__text _title">
        <span class="__ofer-text">Сделай первый заказ со скидкой 10%</span>
        <div class="button-catalog">
          <span>В каталог</span><img src="@/assets/svg/arrowRight.svg" alt="каталог">
        </div>
      </div>
    </div>
    <div class="why-we" v-if="$route.name == 'Home'">
      <div class="why-we__container">
        <div class="advantages">
          <section class="__item">
            <div class="offer_title">
              <img src="@/assets/svg/trophy.svg" alt="контроль">
              <h2 class="_mini-title">
                Контроль
              </h2>
            </div>
            <div class="description">
              Проходим регулярный лаборный контроль качества всей нашей продукции
            </div>
          </section>
          <section class="__item grid-end mt">
            <div class="offer_title grid-mob">
              <img src="@/assets/svg/globe.svg" alt="качество">
              <h2 class="_mini-title">Качество</h2>
            </div>
            <div class="description">
              Наше фермерское подворье организовано в экологически чистом районе
            </div>
          </section>
        </div>
        <div class="advantages">
          <section class="__item grid-end border mt" v-if="width > 769">
            <div class="offer_title">
              <img src="@/assets/svg/like.svg" alt="упаковка">
              <h2 class="_mini-title">Упаковка</h2>
            </div>
            <div class="description">
              Фасуем продукты в тару необходимого объема, вам не нужно переживать об их хранении
            </div>
          </section>
          <section class="__item border mt" v-if="width <= 769">
            <div class="offer_title grid-mob">
              <img src="@/assets/svg/heart.svg" alt="Доставка">
              <h2 class="_mini-title">Доставка</h2>
            </div>
            <div class="description">
              Условия доставки обсуждаем с вами индивидуально в удобном для вас формате
            </div>
          </section>
          <section class="__item border mt" v-if="width > 769">
            <div class="offer_title grid-mob">
              <img src="@/assets/svg/heart.svg" alt="Доставка">
              <h2 class="_mini-title">Доставка</h2>
            </div>
            <div class="description">
              Условия доставки обсуждаем с вами индивидуально в удобном для вас формате
            </div>
          </section>
          <section class="__item grid-end border _mt" v-if="width <= 769">
            <div class="offer_title">
              <img src="@/assets/svg/like.svg" alt="упаковка">
              <h2 class="_mini-title">Упаковка</h2>
            </div>
            <div class="description">
              Фасуем продукты в тару необходимого объема, вам не нужно переживать об их хранении
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Offer',
  computed: {
    width() {
      return this.$store.state.display_width;
    }
  }
}
</script>

<style scoped lang="scss">
.offer__banner {
  width: 100%;
  position: relative;
  ._title{
    color: #F9F9F9 ;
  }
}

.banner {
  display: block;
  object-fit: cover;
  width: 100%;
}

.__text {
  max-width: rem(344);
  position: absolute;
  right: 19.5%;
  top: 39%;
  font-family: 'Aqum2';

}

.button-catalog {
  display: flex;
  width: fit-content;
  gap: rem(8);
  margin-top: rem(24);
  padding: rem(2) rem(26);
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  font-size: rem(16);
  border: 2px solid #FFFFFF;

  span {
    cursor: pointer;
  }
}

.why-we {
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/offer/offer.webp") center top no-repeat #F9F9F9;
  box-shadow: 0px 5px 12px rgba(16, 20, 15, 0.12);
  padding: rem(29) 0 rem(45) 0;
}

.why-we__container {
  display: flex;
  max-width: rem(996);
  margin: 0 auto;
  justify-content: space-between;
}

.advantages {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: rem(300);


  &:last-child {
    width: rem(466);
  }
}

.__item {
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-width: rem(220);
  padding: rem(7.5) 0 0 rem(12);
  border-left: 4px dotted #D9AC94;

  &:last-child {
    margin-top: rem(70.5);
  }
}

.grid-end {
  justify-self: end;
}

.offer_title {
  display: flex;
  align-items: center;
  gap: rem(16);
  margin-bottom: rem(13);

}

.description {
  font-weight: 400;
  font-size: rem(12);
  line-height: rem(15);
  color: #585858;
}

@media (max-width: em(1920, 16)) and (min-width: em(1250, 16)) {
  .__text {
    top: calc(6.25rem + (164 - 100) * ((100vw - 78.125rem) / (1920 - 1250)));
    font-size: calc(1.5rem + (32 - 24) * ((100vw - 78.125rem) / (1920 - 1250)));
  }
}

@media (max-width: em(1249, 16)) and (min-width: em(770, 16)) {
  .__text {
    top: calc(3.125rem + (100 - 50) * ((100vw - 48.125rem) / (1249 - 770)));
    font-size: calc(1rem + (24 - 16) * ((100vw - 48.125rem) / (1249 - 770)));
    line-height: calc(1.125rem + (40 - 18) * ((100vw - 48.125rem) / (1249 - 770)));
  }
  .button-catalog {
    padding: calc(0.625rem - (10 + 2) * ((100vw - 48.125rem) / (1249 - 770))) calc(0.9375rem + (24 - 15) * ((100vw - 48.125rem) / (1249 - 770)));
    margin-top: calc(0.9375rem + (24 - 15) * ((100vw - 48.125rem) / (1249 - 770)));
  }
  .__item {
    max-width: rem(220);

    &:last-child {
      margin-top: calc(1.375rem + (70 - 20) * ((100vw - 48.125rem) / (1249 - 770)));
    }
  }
}

@media (max-width: em(1024, 16)) and (min-width: em(770, 16)) {
  .advantages {
    flex: 1 1 50%;
    justify-content: center;
  }
  .border {
    border-left: none;
    border-right: rem(4) dotted #D9AC94;
  }
}
@media (max-width: em(769, 16)){
  .offer__banner{
    img{
      max-height: rem(326);
    }
  }
  .why-we{
    background-size: contain;
  }
  .__text{
    font-weight: 700;
    font-size: rem(27);
    line-height: rem(40);
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top:39%;
    right:0;
    span{
      text-align: center;
    }
  }
  .why-we__container{
    display: block;
  }
  .advantages{
    width: 100%;
    &:last-child{
      width: 100%;
    }
  }
  .grid-end{
    padding-right: rem(8);
    padding-left: 0;
    border-left: none;
    border-right: 4px dotted #D9AC94;

  }
  .button-catalog{
    padding-right: rem(10);
    padding-left: rem(10);
  }
}
@media (max-width: em(769, 16)) and (min-width: em(480, 16)) {
  .why-we__container{
    padding: 0 calc(1rem + (32 - 16) * ((100vw - 30rem) / (769 - 480)));
  }
  .__item:last-child{
    margin-top: calc(0.875rem + (15 - 14) * ((100vw - 30rem) / (769 - 480)));
  }

  .description{
    font-size: calc(0.75rem + (15 - 12) * ((100vw - 30rem) / (769 - 480)));
  }
}
@media (max-width: em(479, 16)){
  .why-we{
    padding-top: rem(90)
  }
  .__text{
    font-weight: 900;
    align-items: flex-start;
    padding-left: rem(16);
    top:rem(43);
    right:0;
    span{
      text-align: left;
    }
  }
  .why-we__container{
    padding: 0 rem(16);

  }
  ._mt{
    margin-top: 0;
  }
  .__item{
    width: rem(169);
    margin-top: rem(14);
    &:last-child{
      margin-top: rem(14);
    }
  }
  .button-catalog{
    margin-top:  rem(42);
  }
}
@media (max-width: em(479, 16)) and (min-width: em(320, 16)){
  .__text{
    font-size: calc(0.9375rem + (27 - 10) * ((100vw - 20rem) / (479 - 320)));
    line-height: calc(1.4375rem + (40 - 23) * ((100vw - 20rem) / (479 - 320)));
  }
  .__ofer-text{
    width: calc(13.75rem + (320 - 220) * ((100vw - 20rem) / (479 - 320)));
  }

}
@media (max-width: em(319, 16)){
  .__ofer-text{
    width: rem(220);
    font-size: rem(15);
    line-height: rem(27);
  }
}

</style>