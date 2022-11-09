<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="_box-gap_bg wrapper" v-if="width >= 770">
      <section class="goods">
        <div class="slider">
          <img :src="sliderMain.img" alt="продукт">
          <div class="gallery-arrow before" @click="showPrevImg">
            <img src="@/assets/svg/galleryArrow.svg" alt="переключить картинку">
          </div>
          <div class="gallery-arrow after" @click="showNextImg">
            <img src="@/assets/svg/galleryArrow.svg" alt="переключить картинку">
          </div>
        </div>
        <div class="goods__description" :class="{jcsb:properties == ''}">
          <h1 class="_title">{{ product.name }}</h1>
          <div :class="{compound:properties != ''}" v-if="properties != ''">
            <h2>Состав:</h2>
            <span>{{ properties }}</span>
          </div>
          <div class="nutritional-value" :class="{compound:properties == ''}">
            <h2>Пищевая ценность на 100 г:</h2>
            <div class="__table">
              <div>
                <span>Белки</span>
                <span class="kkal-count">1.4</span>
              </div>
              <div>
                <span>Жиры</span>
                <span class="kkal-count">92.8</span>
              </div>
              <div>
                <span>Углеводы</span>
                <span class="kkal-count">0</span>
              </div>
              <div>
                <span>Ккал</span>
                <span class="kkal-count">841</span>
              </div>
            </div>
          </div>
          <div class="mini-slider">
            <div class="mini-slider__item" v-for="item in sliderSub" :key="item.id">
              <img :src="item.img" alt="small-product">
            </div>
          </div>
        </div>
        <div class="goods__add-to-cart">
          <div class="wishButton">
            <img src="@/assets/svg/wishbutton.svg" alt="В избранное">
            <span>
                В избранное
              </span>
          </div>
          <div class="goods__add-to-cart__table">
            <div class="__go-to-basket">
              <div class="price">
                <h2>
                  {{ product.price }} ₽
                </h2>
                <span>
                    Цена/ 1 кг
                  </span>
              </div>
              <div class="_button _button_mobile">
                В корзину
              </div>
            </div>
            <div class="__goods-count">
              <div class="minus __count__elem">
                -
              </div>
              <div class="__count__value">
                <input type="text" class="__count__elem">
              </div>
              <div class="plus __count__elem">
                +
              </div>
            </div>
            <div class="delivery">
              <h2>Условия доставки</h2>
              <ul>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Минимальная сумма заказа – 1 000 ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Доставка по г. Москва - 500 ₽
                    Бесплатно от 2 000 ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Оплата картой/наличными
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки">
                  <div class="map">
                    <span>Есть самовывоз</span>
                    <span class="map__show">Посмотреть на карте</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="good-info container">
        <div class="good-info__item">
          <h2 class="_sub-title" @click="showDescription='desc'" :class="{active:showDescription=='desc'}">Описание</h2>
          <h2 class="_sub-title" @click="showDescription='del'" :class="{active:showDescription=='del'}">Доставка</h2>
          <h2 class="_sub-title" @click="showDescription='pay'" :class="{active:showDescription=='pay'}">Оплата</h2>
        </div>
      </div>
      <div class="good-description _box-gap_bg">
        <div class="__description" v-if="showDescription=='desc'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.1
        </div>
        <div class="__description" v-if="showDescription =='del'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.2
        </div>
        <div class="__description" v-if="showDescription == 'pay'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.3
        </div>
      </div>
      <div class="container">
        <Catalog title="card"></Catalog>
      </div>
    </div>
    <div v-if="width < 770">
      <div class="wrapper">
        <div class="nav-button">
          <router-link to="/catalog">
            <img src="@/assets/svg/galleryArrow.svg" alt="переключить картинку" class="before">
            <span>назад в каталог</span>
          </router-link>
          <div class="wishButton">
            <img src="@/assets/svg/wishbutton.svg" alt="В избранное">
            <span>
                В избранное
              </span>
          </div>
        </div>
        <h1 class="_title">Сало солёное по-домашнему</h1>
        <div class="slider">
          <img :src="sliderMain.img" alt="продукт">
          <div class="mini-slider">
            <div class="mini-slider__item" v-for="item in sliderSub" :key="item.id">
              <img :src="item.img" alt="small-product">
            </div>
          </div>
        </div>
        <div class="compound">
          <h2 :class="{'_sub-title':width > 450}">Состав:</h2>
          <span>сало, соль, перец, чеснок, лавровый лист.</span>
        </div>
        <div class="nutritional-value">
          <h2>Пищевая ценность на 100 г:</h2>
          <div class="__table">
            <div>
              <span>Белки</span>
              <span class="kkal-count">1.4</span>
            </div>
            <div>
              <span>Жиры</span>
              <span class="kkal-count">92.8</span>
            </div>
            <div>
              <span>Углеводы</span>
              <span class="kkal-count">0</span>
            </div>
            <div>
              <span>Ккал</span>
              <span class="kkal-count">841</span>
            </div>
          </div>
        </div>
        <div class="good-info container">
          <div class="good-info__item">
            <h2 class="_sub-title" @click="showDescription='desc'" :class="{active:showDescription=='desc'}">
              Описание</h2>
            <h2 class="_sub-title" @click="showDescription='del'" :class="{active:showDescription=='del'}">Доставка</h2>
            <h2 class="_sub-title" @click="showDescription='pay'" :class="{active:showDescription=='pay'}">Оплата</h2>
          </div>
        </div>
        <div class="good-description">
          <div class="__description" v-if="showDescription=='desc'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.1
          </div>
          <div class="__description" v-if="showDescription =='del'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.2
          </div>
          <div class="__description" v-if="showDescription == 'pay'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.3
          </div>
        </div>
        <div class="__go-to-basket _box-gap_bg">
          <div class="price">
            <h2>
              420,00 ₽
            </h2>
            <span>Цена/ 1 кг</span>
          </div>
          <div class="_button _button_mobile">
            В корзину
          </div>
        </div>
        <div class="__goods-count">
          <div class="minus __count__elem">
            -
          </div>
          <div class="__count__value">
            <input type="text" class="__count__elem">
          </div>
          <div class="plus __count__elem">
            +
          </div>
        </div>
        <div class="goods__add-to-cart _box-gap_bg">
          <div class="goods__add-to-cart__table">
            <div class="delivery">
              <h2>Условия доставки</h2>
              <ul>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Минимальная сумма заказа – 1 000 ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Доставка по г. Москва - 500 ₽
                    Бесплатно от 2 000 ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Оплата картой/наличными
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки">
                  <div class="map">
                    <span>Есть самовывоз</span>
                    <span class="map__show">Посмотреть на карте</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="catalog-container">
        <Catalog></Catalog>
      </div>
    </div>
  </main>
  <footer>
    <footer-elem></footer-elem>
  </footer>
</template>

<script>
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import Catalog from "@/components/catalog/Catalog";
import FooterElem from "@/components/footer/FooterElem";

export default {
  name: 'GoodsCart',
  data: () => ({
    sliderMain: null,
    sliderSub: null,
    showDescription: 'desc',
    objFlag: false
  }),
  created() {
    this.sliderMain = this.$store.state.product.sliderMain
    this.sliderSub = [...this.$store.state.product.sliderSub]
  },
  components: {
    FooterElem,
    Catalog,
    HeaderMenu,
    Header
  },
  computed: {
    width() {
      return this.$store.state.display_width;
    },
    product() {
      let product = {};
      [...this.$store.state.catalog.catalog].map(elem => {
        if (elem.id == this.$route.params.id) {
          product = elem;
          this.objFlag = true;
        }
      });
      return product;
    },
    properties() {
      if (this.objFlag) {
        let props = ''
        this.product.attributes.forEach(elem => {
          if (elem.id == 1) {
            props = elem.options[0];
          }
        })
        return props
      } else {
        return ''
      }
    }
  },
  methods: {
    showNextImg() {
      let temp = this.sliderSub[0];
      this.sliderSub = this.sliderSub.slice(1, this.sliderSub.length);
      this.sliderSub.push(this.sliderMain);
      this.sliderMain = temp;
    },
    showPrevImg() {
      let temp = this.sliderSub[this.sliderSub.length - 1];
      this.sliderSub = this.sliderSub.slice(0, this.sliderSub.length - 1);
      this.sliderSub.unshift(this.sliderMain)
      this.sliderMain = temp;
    }
  }
}
</script>

<style scoped lang="scss">
.goods {
  display: flex;
  gap: rem(36);
}

.slider {
  flex: 1 1 39%;
  position: relative;

  img {
    object-fit: cover;
    height: 100%;
  }
}

.gallery-arrow {
  background-color: #fff;
  padding: rem(12);
  border-radius: 50%;
  top: rem(212);
  position: absolute;
  cursor: pointer;
  user-select: none;
}

.after {
  right: rem(-23);
}

.before {
  left: rem(-23);
  transform: rotateY(180deg);
}

.goods__description {
  flex: 1 1 29%;
  display: flex;
  flex-direction: column;
}
.jcsb{
  justify-content: space-between;
}
.compound {
  margin-top: rem(49);
  margin-bottom: rem(90);
}

.nutritional-value {
  margin-bottom: rem(48);
}

.compound, .nutritional-value {
  h2 {
    font-weight: 700;
  }

  span {
    font-size: rem(14);
  }

  .kkal-count {
    font-weight: 900;
    font-size: rem(18);
  }
}

.nutritional-value {
  width: fit-content;
  padding: rem(8);
  border: 1px solid #C0C0C0;
  filter: drop-shadow(0px 2px 6px rgba(21, 27, 19, 0.08));

  h2 {
    margin-bottom: rem(8);
  }
}

.__table {
  display: flex;
  gap: rem(38);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.kkal-count {
  color: #629C42;
  margin-top: rem(8);
}

.mini-slider {
  display: flex;
  gap: rem(24);

  img {
    height: 100%;
    object-fit: cover;
  }
}

.mini-slider__item {
  width: rem(86);
}

.goods__add-to-cart {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.wishButton {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: rem(32);
}

.goods__add-to-cart__table {
  padding: rem(32) rem(20) rem(36) rem(18);
  background: #f9f9f9;
  box-shadow: 0px 5px 12px rgba(16, 20, 15, 0.12);
}

.__go-to-basket {
  display: flex;
  justify-content: space-between;

}

._button_mobile {
  margin: 0;
}

.price {
  h2 {
    font-family: 'Aqum2';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    margin-bottom: rem(8);
  }
}

.__goods-count {
  display: flex;
  align-items: center;
  gap: rem(12);
  margin-top: rem(16);
}

.__count__elem {
  width: rem(41);
  height: rem(32);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: rem(24);
  background: #FFFFFF;
  border: 1px solid #EAEBEA;
}

.minus, .plus {
  cursor: pointer;
}

.delivery {
  margin-top: rem(32);

  h2 {
    font-weight: 700;
    margin-bottom: rem(24);
  }

  li {
    font-size: rem(14);
    display: flex;
    gap: rem(10);
    margin-top: rem(16);
  }

  li:first-child {
    margin-top: 0;
  }
}

.map {
  display: flex;
  flex-direction: column;
}

.map__show {
  font-weight: 600;
  color: #036634;
  cursor: pointer;
}

.good-info {
  max-width: rem(429);
}

.good-info__item {
  display: flex;
  justify-content: space-between;

  ._sub-title {
    color: #585858;
  }

  .active {
    color: #090A08;
    border-bottom: 4px dotted #D9AC94;
  }
}


@media (max-width: em(1024, 16)) {
  .goods {
    flex-wrap: wrap;
  }
  .goods__add-to-cart {
    width: 100%;
  }
}

@media (max-width: em(769, 16)) {
  ._title {
    margin-bottom: rem(8);
  }
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mini-slider {
    margin-top: rem(16);
  }
  .nutritional-value {
    width: auto;
  }
  .__table {
    justify-content: space-between;
    gap: 0;
  }
  .good-info {
    max-width: 100%;
  }
  .delivery {
    margin: 0;
  }
  .nav-button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: rem(8);
      font-size: rem(12);
    }
  }
  .wishButton {
    margin: 0;
    font-size: rem(12);
    color: #585858;
  }
  .catalog-container {
    margin-top: rem(88);
    margin-left: rem(32);
  }
}

@media (max-width: em(769, 16)) and (min-width: em(320, 16)) {
  .mini-slider {
    gap: calc(0.8rem + (16 - 8) * ((100vw - 20rem) / (769 - 320)));
  }
  .compound {
    margin-top: calc(1.5rem + (49 - 24) * ((100vw - 20rem) / (769 - 320)));
    margin-bottom: calc(2rem + (50 - 32) * ((100vw - 20rem) / (769 - 320)));

    h2 {
      margin-top: calc(0.5rem + (20 - 8) * ((100vw - 20rem) / (769 - 320)));
    }

    span {
      font-size: calc(0.875rem + (16 - 14) * ((100vw - 20rem) / (769 - 320)));
    }
  }
  .nutritional-value {
    h2 {
      margin-bottom: calc(0.5rem + (20 - 8) * ((100vw - 20rem) / (769 - 320)));
    }
  }
  .kkal-count {
    margin-top: calc(0.25rem + (10 - 4) * ((100vw - 20rem) / (769 - 320)));
  }

  .good-description {
    margin-top: calc(1rem + (40 - 16) * ((100vw - 20rem) / (769 - 320)));
  }
  .goods__add-to-cart__table {
    padding: calc(1.3125rem + (32 - 21) * ((100vw - 20rem) / (769 - 320))) calc(1rem + (18 - 16) * ((100vw - 20rem) / (769 - 320)));
  }
}

@media (max-width: em(320, 16)) {
  .mini-slider {
    gap: rem(8);
  }
  .compound {
    margin-top: rem(24);
    margin-bottom: rem(32);

    h2 {
      margin-top: rem(8);
    }

    span {
      font-size: rem(14);
    }
  }
  .nutritional-value {
    h2 {
      margin-bottom: rem(8);
    }
  }
  .kkal-count {
    margin-top: rem(4);
  }

  .good-description {
    margin-top: rem(16);
  }
  .goods__add-to-cart__table {
    padding: rem(21);
  }
}
</style>