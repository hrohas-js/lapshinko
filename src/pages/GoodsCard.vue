<template>
  <main>
    <div v-if="width >= 770" class="_box-gap_bg wrapper">
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
        <div class="goods__description" :class="{jcsb:properties === ''}">
          <h1 class="_title">
            {{ product.name }}
          </h1>
          <div v-if="properties !== ''" :class="{compound:properties !== ''}">
            <h2>
              Состав:
            </h2>
            <span>
              {{ properties }}
            </span>
          </div>
          <div class="nutritional-value" :class="{compound:properties === ''}">
            <h2>
              Пищевая ценность на 100 г:
            </h2>
            <div class="__table">
              <div>
                <span>
                  Белки
                </span>
                <span class="kkal-count">
                  1.4
                </span>
              </div>
              <div>
                <span>
                  Жиры
                </span>
                <span class="kkal-count">
                  92.8
                </span>
              </div>
              <div>
                <span>
                  Углеводы
                </span>
                <span class="kkal-count">
                  0
                </span>
              </div>
              <div>
                <span>
                  Ккал
                </span>
                <span class="kkal-count">
                  841
                </span>
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
          <div class="wish-button" @click="fetchLike">
            <img src="@/assets/svg/wishbutton.svg" alt="добавить в избранное" v-if="!heart">
            <img src="@/assets/svg/activeHeart.svg" alt="добавить в избранное" v-if="heart">
            <span>
                В избранное
              </span>
          </div>
          <div class="goods__add-to-cart__table">
            <div class="__go-to-basket">
              <div class="price">
                <h2>
                  {{ currentPrice }} ₽
                </h2>
                <span>
                    Цена/ {{ weight }}
                  </span>
              </div>
              <div class="_button _button_mobile" @click="addToCart">
                В корзину
              </div>
            </div>
            <div class="__goods-count">
              <div class="minus __count__elem" @click="quantity > 1 ? quantity-- : quantity = 1">
                -
              </div>
              <div class="__count__value">
                <input type="text" readonly class="__count__elem" v-model="quantity">
              </div>
              <div class="plus __count__elem" @click="quantity++">
                +
              </div>
            </div>
            <div v-if="hasVariations" class="value-select">
              <div class="value-select__item value-select_body" @click="valueShown = !valueShown">
                <span>
                  {{ currentVariationName }}
                </span>
                <div class="value-select__arrow" :class="{'__arrow_round':valueShown}">
                  <img src="@/assets/svg/valueArrow.svg" alt="arrow">
                </div>
              </div>
              <div v-if="valueShown" class="value-select__list">
                <div
                    v-for="item in variations"
                    :key="item.id"
                    class="value-select__item"
                    @click="chooseValue(item)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="delivery">
              <h2>Условия доставки</h2>
              <ul>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Минимальная сумма заказа – {{ minCost }} ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Доставка {{ deliveryCost }} ₽<br>
                    Бесплатно от {{ freeDelivery }} ₽
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
          <h2
              class="_sub-title"
              :class="{active:showDescription === 'desc'}"
              @click="showDescription='desc'"
          >
            Описание
          </h2>
          <h2
              class="_sub-title"
              :class="{active:showDescription === 'del'}"
              @click="showDescription='del'"
          >
            Доставка
          </h2>
          <h2
              class="_sub-title"
              :class="{active:showDescription === 'pay'}"
              @click="showDescription='pay'"
          >
            Оплата
          </h2>
        </div>
      </div>
      <div class="good-description _box-gap_bg">
        <div class="__description" v-if="showDescription === 'desc'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.1
        </div>
        <div class="__description" v-if="showDescription === 'del'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.2
        </div>
        <div class="__description" v-if="showDescription === 'pay'">
          Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.3
        </div>
      </div>
      <div class="container">
        <Catalog title="card"/>
      </div>
    </div>
    <div v-if="width < 770">
      <div class="wrapper">
        <div class="nav-button">
          <router-link to="/catalog">
            <img src="@/assets/svg/galleryArrow.svg" alt="переключить картинку" class="before">
            <span>назад в каталог</span>
          </router-link>
          <div class="wish-button" @click="fetchLike">
            <img src="@/assets/svg/wishbutton.svg" alt="добавить в избранное" v-if="!heart">
            <img src="@/assets/svg/activeHeart.svg" alt="добавить в избранное" v-if="heart">
            <span>
                В избранное
              </span>
          </div>
        </div>
        <h1 class="_title">
          {{ product.name }}
        </h1>
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
          <span>{{ properties }}</span>
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
            <h2
                class="_sub-title"
                :class="{active:showDescription === 'desc'}"
                @click="showDescription='desc'"
            >
              Описание
            </h2>
            <h2
                class="_sub-title"
                :class="{active:showDescription === 'del'}"
                @click="showDescription='del'"
            >
              Доставка
            </h2>
            <h2
                class="_sub-title"
                :class="{active:showDescription === 'pay'}"
                @click="showDescription='pay'"
            >
              Оплата
            </h2>
          </div>
        </div>
        <div class="good-description">
          <div class="__description" v-if="showDescription === 'desc'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.1
          </div>
          <div class="__description" v-if="showDescription === 'del'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.2
          </div>
          <div class="__description" v-if="showDescription === 'pay'">
            Сало подают к столу как одну из закусок, в качестве дополнения к первым блюдам.3
          </div>
        </div>
        <div class="__go-to-basket _box-gap_bg">
          <div class="price">
            <h2>
              {{ currentPrice }} ₽
            </h2>
            <span>
              Цена/ {{ weight }}
            </span>
          </div>
          <div class="_button _button_mobile" @click="addToCart">
            В корзину
          </div>
        </div>
        <div class="__goods-count">
          <div class="minus __count__elem">
            -
          </div>
          <div class="__count__value">
            <input type="text" readonly class="__count__elem" v-model="quantity">
          </div>
          <div class="plus __count__elem">
            +
          </div>
        </div>
        <div v-if="hasVariations" class="value-select">
          <div class="value-select__item value-select_body" @click="valueShown = !valueShown">
                <span>
                  {{ currentVariationName }}
                </span>
            <div class="value-select__arrow" :class="{'__arrow_round':valueShown}">
              <img src="@/assets/svg/valueArrow.svg" alt="arrow">
            </div>
          </div>
          <div v-if="valueShown" class="value-select__list">
            <div
                v-for="item in variations"
                :key="item.id"
                class="value-select__item"
                @click="chooseValue(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="goods__add-to-cart _box-gap_bg">
          <div class="goods__add-to-cart__table">
            <div class="delivery">
              <h2>Условия доставки</h2>
              <ul>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Минимальная сумма заказа – {{ minCost }} ₽
                  </span></li>
                <li><img src="@/assets/svg/temp.svg" alt="условия доставки"><span>
                    Доставка {{ deliveryCost }} ₽<br>
                    Бесплатно от {{ freeDelivery }} ₽
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
        <Catalog/>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Catalog from "@/components/catalog/Catalog";

export default {
  name: 'GoodsCart',
  data: () => ({
    sliderMain: null,
    sliderSub: null,
    showDescription: 'desc',
    objFlag: false,
    heart: false,
    quantity: 1,
    valueShown: false,
    currentPrice: 0,
    currentVariationID: 0,
    weight: '',
    currentVariationName: 'объем',
    inCart: false

  }),
  components: {
    Catalog
  },
  computed: {
    ...mapState({
      width: 'displayWidth',
      burger: 'showBurger'
    }),
    ...mapState('wishlist', {
      wish: 'wishlist'
    }),
    ...mapState('cart', {
      minCost: 'minCost',
      freeDelivery: 'freeDeliveryCostCart',
      deliveryCost: 'deliveryCost'
    }),
    ...mapState('product', {
      variations: 'variations'
    }),
    product() {
      let product = {};
      [...this.$store.state.catalog.catalog].map(elem => {
        if (elem.id === parseInt(this.$route.params.id)) {
          product = elem;
          this.objFlag = true;
        }
      });
      console.log(product)
      return product;
    },
    hasVariations() {
      if (this.objFlag) {
        return this.product.variations.length > 0
      } else {
        return false
      }
    },
    properties() {
      if (this.objFlag) {
        let props = ''
        this.product.attributes.forEach(elem => {
          if (elem.id === 1) {
            props = elem.options[0];
          }
        })
        return props
      } else {
        return ''
      }
    }
  },
  watch: {
    objFlag(newValue) {
      if (newValue) {
        this.$store.dispatch('product/FetchVariations', this.product.id)
        this.currentPrice = parseInt(this.product.price)
        this.weight = this.product.attributes[this.product.attributes.length - 1].options[0]
      }
    }
  },
  created() {
    this.sliderMain = this.$store.state.product.sliderMain
    this.sliderSub = [...this.$store.state.product.sliderSub]
  },
  mounted() {
    if (this.burger) {
      this.$store.commit('SET_SHOW_BURGER')
    }
    if (this.wish.length > 0) {
      this.wish.forEach(elem => {
        if (elem.id === this.product.id) {
          this.heart = true
        }
      })
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
    },
    fetchLike() {
      this.heart = !this.heart
      if (this.heart) {
        this.$store.dispatch('wishlist/addToWishList', {
          id: this.product.id,
          name: this.product.name,
          price: parseInt(this.product.price)
        })
      } else {
        this.$store.dispatch('wishlist/deleteFromWishList', this.product.id)
      }
    },
    chooseValue(item) {
      this.valueShown = false
      this.currentVariationID = item.id
      this.currentVariationName = item.name
      this.currentPrice = item.price
      this.weight = item.name
    },
    addToCart() {
      if (this.currentVariationName !== 'обЪем' && !this.inCart) {
        if (this.hasVariations) {
          this.$store.dispatch('cart/addToCart', {
            product_id: this.product.id,
            variation_id: this.currentVariationID,
            quantity: this.quantity,
            name: this.product.name,
            price: parseInt(this.currentPrice)
          })
        } else {
          this.$store.dispatch('cart/addToCart', {
            product_id: this.product.id,
            variation_id: this.product.id + 1,
            quantity: this.quantity,
            name: this.product.name,
            price: parseInt(this.currentPrice)
          })
        }
        this.inCart = true
      }
    },
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

.jcsb {
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

.wish-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: rem(32);
  cursor: pointer;
}

.goods__add-to-cart__table {
  padding: rem(32) rem(20) rem(36) rem(18);
  background: #f9f9f9;
  box-shadow: 0 5px 12px rgba(16, 20, 15, 0.12);
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
    font-family: 'Aqum2', sans-serif;
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
  max-width: rem(147);
}

.value-select {
  margin-top: rem(20);
  max-width: rem(147);
  position: relative;
}

.value-select__arrow {
  display: flex;
  transition: transform 0.3s;
}

.__arrow_round {
  transform: rotate(180deg);
}

.value-select__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: rem(10) 0;
  user-select: none;
  cursor: pointer;
}

.value-select_body {
  gap: rem(12);
  background: #F9F9F9;
  border: 1px solid #EAEBEA;
}

.value-select__list {
  position: absolute;
  width: 100%;
  background-color: #FFFFFF;
}

.__count__elem {
  width: rem(41);
  height: rem(32);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: rem(24);
  background: #FFFFFF;
  border: 1px solid #EAEBEA;
  user-select: none;
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
  .wish-button {
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
