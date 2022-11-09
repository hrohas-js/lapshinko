<template>
  <div class="filter">
    <div class="go-beak filter_wrapper">
      <router-link to="/catalog"><img src="@/assets/svg/arrow-left.svg" alt="назад в каталог">
        <span>Назад в каталог</span></router-link>
    </div>
    <div class="filter_wrapper">
      <div class="choose-elem">
        <h2 class="_sub-title">категории</h2>
      </div>
      <ul class="offer-position eat">
        <li v-for="item in categories" :key="item.id" :class="{active:item.id == $route.params.categoryId}">
          <router-link :to="{ name: `CatalogBody`, params: { categoryId:item.id, subcategoryId:'all'}}">{{
              item.name
            }}
          </router-link>
        </li>
      </ul>
      <div class="chose-offer">
        <div class="choose-elem">
          <h2 class="_sub-title">предложения</h2>
        </div>
      </div>
      <ul class="offer-position">
        <li>
          <div class="offer">
            <input type="radio" id="sale" name="offer" v-model="options" value="sale" class="custom-radio"
                   @change="sendOptions">
            <label for="sale">Со скидкой</label>
          </div>
          <span class="count-position">(300)</span>
        </li>
        <li>
          <div class="offer">
            <input type="radio" id="new" name="offer" v-model="options" value="new" class="custom-radio"
                   @change="sendOptions">
            <label for="new">Новинка</label>
          </div>
          <span class="count-position">(300)</span>
        </li>
        <li>
          <div class="offer">
            <input type="radio" id="promo" name="offer" v-model="options" value="promo" class="custom-radio"
                   @change="sendOptions">
            <label for="promo">Aкци</label>
          </div>
          <span class="count-position">(300)</span>
        </li>
      </ul>
      <div class="chose-offer">
        <div class="choose-elem">
          <h2 class="_sub-title">Цена,₽</h2>
        </div>
        <div class="range-slider">
          <div class="filter-container">
            <div class="show-filter">
              <input type="number" class="show-filter__elem"
                     v-model.number="minValue"
                     @keydown="focus"
                     @blur="FilterValidatorMin">
              <span class="show-filter__text">от</span>
            </div>
            <span>-</span>
            <div class="show-filter">
              <input type="number" class="show-filter__elem"
                     v-model.number="maxValue"
                     @keydown="focus"
                     @blur="FilterValidatorMax">
              <span class="show-filter__text">до</span>
            </div>
          </div>
          <Slider
              v-model="value"
              tooltipPosition="bottom"
              :min="min"
              :max="max"
              @input="changeSlider"
          />
        </div>
      </div>
      <div class="clear-button" @click="clearAll">
        Сбросить все
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
  name: 'Filter',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1000
    }
  },
  data: () => ({
    options: '',
    value: [20, 40],
    minValue: 0,
    maxValue: 1000
  }),
  mounted() {
    this.minValue = this.min;
    this.maxValue = this.max;
    this.value = [this.min, this.max];
  },
  watch: {
    min: function (newValue) {
      this.minValue = newValue;
      this.value[0] = newValue;
    },
    max: function (newValue) {
      this.maxValue = newValue
      this.value[1] = newValue;
    },
    minValue:function (newValue){
      this.$store.commit('catalogSettings/SET_MIN_PRICE',newValue);
    },
    maxValue: function (newValue){
      this.$store.commit('catalogSettings/SET_MAX_PRICE',newValue)
    }
  },
  components: {
    Slider
  },
  computed: {
    categories() {
      return this.$store.getters["category/mainCategories"];
    },
  },
  methods: {
    FilterValidatorMin() {
      if (this.min < this.minValue) {
        this.value[0] = this.minValue;
      } else {
        this.value[0] = this.min;
        this.minValue = this.min;
      }
    },
    FilterValidatorMax() {
      if (this.max > this.maxValue) {
        this.value[1] = this.maxValue
      } else {
        this.value[1] = this.max;
        this.maxValue = this.max;
      }
    },
    focus(e) {
      if (e.keyCode == '13') {
        e.target.blur()
      }
    },
    sendOptions() {
      if (this.options != '') {
        this.$store.commit('catalogSettings/SЕT_PARAMS', this.options);
      }
    },
    clearAll() {
      this.$router.push('/catalogBody/all/all');
    },
    changeSlider(value) {
      this.maxValue = value[1];
      this.minValue = value[0];
    }
  },

}
</script>
<style src="@vueform/slider/themes/default.css">
  .
</style>

<style scoped lang="scss">


.filter {
  flex: 1 1 20%;
  background: #F9F9F9;
  box-shadow: 0px 5px 12px rgba(16, 20, 15, 0.12);
  height: fit-content;
}

.filter_wrapper {
  padding: rem(19) rem(28) rem(41) rem(32);
}

.go-beak {
  border-bottom: 4px dotted #D9AC94;

  a {
    display: flex;
    align-items: center;
    gap: rem(8);
    color: #585858;
  }
}

._eat {
  max-width: rem(212);
}

._offer {
  max-width: rem(223);
}

.choose-elem {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.offer-position {
  margin-top: rem(16);

  li {
    display: flex;
    justify-content: space-between;
    margin-top: rem(12);
  }

  li:first-child {
    margin-top: 0;
  }
}

.active {
  font-weight: 900;

  a {
    color: #036534;
  }
}

.eat {
  li {
    cursor: pointer;
  }
}

.chose-offer {
  margin-top: rem(24);
}

.offer {
  display: flex;
  gap: rem(8);

  label, input {
    cursor: pointer;
  }
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
  width: rem(15);
  height: rem(15);
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #D9AC94;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-radio:checked + label::before {
  background: url("https://dreamteam-webdev.ru/lapshinkoServ/png/filter/filter_beakground.svg") center center no-repeat;
  background-size: rem(6.67);
}

.filter-container {
  margin-top: rem(16);
  display: flex;
  align-items: center;
  gap: rem(6);
}

.show-filter {
  position: relative;
}

.show-filter__elem {
  font-family: 'Mulish';
  max-width: rem(135);
  border: 1px solid #C0C0C0;
  padding: rem(10) rem(6) rem(10) rem(49);
  font-weight: 400;
  font-size: rem(16);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}

.show-filter__text {
  position: absolute;
  font-size: rem(14);
  color: #C0C0C0;
  left: rem(26);
  top: rem(12);
}

.clear-button {
  margin-top: rem(40);
  text-align: center;
  padding: rem(12) 0;
  border: 2px solid #629C42;
  cursor: pointer;
}
</style>