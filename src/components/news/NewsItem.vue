<template>
  <router-link to="/someNews" class="news-item" v-if="width >=550"
           :class="{reverse:(index+1)%10 == 0, big:(index+1)%5 == 0 && width > 1300, hov:width > 1300}"
           ref="big"
           :style="styleObject"
           @mouseenter="active = true"
           @mouseleave="active = false"
  >
    <div class="img-container">
      <img :src="news.img" alt="новость">
      <div class="more-info" :class="{active:active && width > 1300}" >
        <router-link to="/someNews"> Подробнее <img src="@/assets/svg/arrowRight.svg" alt="каталог"></router-link>
      </div>
      <div class="blur" :class="{active:active && width > 1300}"></div>
    </div>
    <div class="description">
      <span class="data">{{ news.data }}</span>
      <h2 :class="{_title:width > 1300 && (index+1)%5 == 0, '_sub-title':width <= 1300 || (index+1)%5 != 0}" class="">{{ news.title }}</h2>
      <article>
        {{ news.description }}
      </article>
    </div>
  </router-link>
  <router-link to="/someNews" class="news-item" v-if="width < 550">
    <div class="__header">
      <div class="img-container">
        <img :src="news.img" alt="новость">
      </div>
      <div class="description">
        <span class="data">{{ news.data }}</span>
        <h2 class="_sub-title">{{ news.title }}</h2>
      </div>
    </div>
    <article>
      {{ news.description }}
    </article>
  </router-link>

</template>

<script>
export default {
  props: ['news', 'index'],
  name: 'NewsItem',
  data:()=>({
    styleObject:{
      gridRowStart:'',
      gridRowEnd:''
    },
    active:false
  }),
  computed: {
    width() {
      return this.$store.state.displayWidth
    }
  },
  mounted() {
      if(this.index == 4){
        this.$store.commit('news/CLEAR_COUNT');
      }
      if ((this.index + 1) % 5 == 0) {
        let count = 0;
        this.$store.commit('news/SET_COUNT');
        count = this.$store.state.news.count;
        this.$store.commit('news/SET_COUNT');
        this.styleObject.gridRowStart = this.width>=1300 ? count: 'auto';
        this.styleObject.gridRowEnd = this.width>=1300  ? this.$store.state.news.count : 'auto';
      }
  }
}
</script>

<style scoped lang="scss">
.reverse {
  flex-direction: row-reverse;
}
.big{
  grid-column: 1 / 3;
  .img-container{
    flex: 1 1 auto;
    img{
      object-fit: cover;
      width: 100%;
    }
  }
  ._title{
    margin-top: rem(24);
    margin-bottom: rem(16);
    transition: color 0.3s;
  }
  .more-info{
    padding: rem(24) rem(24) rem(24) rem(48);
    left: rem(200);
    font-style: rem(20);
    img{
      width: 20px;
    }
  }
}
.news-item {
  cursor: pointer;
  flex: 1 1 50%;

  display: flex;

  img {
    height: 100%;
  }
}
.hov{
  &:hover{
    ._sub-title, ._title{
      color: #629C42;
    }
  }
}
.img-container {
  flex: 1 1 50%;
  position: relative;
}
.more-info{
  width: fit-content;
  opacity: 0;
  position: absolute;
  top: 38%;
  left: rem(61);
  right: rem(61);
  padding: rem(12) rem(12) rem(12) rem(24);
  border: 1px solid #FFFFFF;
  z-index: 2;
  transition: opacity 0.3s;
  a{
    color: #FFFFFF;
  }
  img{
    margin-left: rem(8);
  }
}

.blur{
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1;
  background: linear-gradient(0deg, rgba(9, 10, 8, 0.5), rgba(9, 10, 8, 0.5));
  transition: opacity 0.3s;
}
.active{
  opacity: 1;

}
.description {
  height: 100%;
  flex: 1 1 50%;
  padding: rem(10) rem(8);
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(21, 27, 19, 0.08);
}

.data {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: rem(12);
  line-height: rem(15);
  color: #585858;
}

._sub-title {
  max-width: rem(180);
  margin: rem(16) 0 rem(8);
  transition: color 0.3s;
}

@media (max-width: em(1300, 16)) {
  .news-item {
    max-width: 604px;
    flex-direction: column;
    grid-row: auto;
  }
  img {
    width: 100%;
  }
  ._sub-title {
    max-width: 100%;
  }
  .data {
    display: flex;
    justify-content: flex-end;
  }
  .big{
    grid-column: auto;
  }
}

@media (max-width: em(769, 16)) {
  .news-item {
    max-width: 100%;
    flex-direction: row;

    img {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    height: auto;
  }
}

@media (max-width: em(549, 16)) {
  .news-item {
    flex-direction: column;
    box-shadow: 0px 2px 6px rgb(21 27 19 / 8%);
  }
  .__header {
    display: flex;
  }
  .img-container {
    flex: 1 1 50%;
  }
  .description {
    flex: 1 1 50%;
    box-shadow: none;
    padding: 0 rem(6) 0 rem(8);
  }
  ._sub-title {
    margin: rem(16) 0 0;
  }
  article {
    padding: rem(8);
  }
  .data {
    justify-content: flex-start;
  }
}

@media (max-width: em(549, 16)) and (min-width: em(320, 16)) {
  article {
    font-size: calc(0.75rem + (16 - 12) * ((100vw - 20rem) / (549 - 320)));
  }
}

@media (max-width: em(320, 16)) {
  article {
    font-size: rem(12)
  }
}
</style>
