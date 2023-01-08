<template>
  <main>
    <div class="wrapper">
      <div class="section-header">
        <h1 v-if="!isCurrentItemEmpty" class="_title">
          {{ current.title.rendered }}
        </h1>
      </div>
    </div>
    <div v-if="!isCurrentItemEmpty" class="banner">
      <img :src="current.image" alt="image">
    </div>
    <div class="wrapper">
      <div v-if="!isCurrentItemEmpty" class="container">
        <article class="text" v-html="current.content.rendered" />
      </div>
    </div>
    <div :class="{wrapper:width>=770}">
      <div class="go-up" v-if="width<=769" @click="scrollTo()">
        <img src="@/assets/svg/arrowUp.svg" alt="в начало новости">
      </div>
      <div class="button-navigation">
        <div
            v-if="width>=770 && !isPrevItemEmpty"
            class="button _button _button_disable"
            @click="goToPrev"
        >
          Предыдущая новость
        </div>
        <div
            v-if="!isNextItemEmpty"
            class="button _button"
            @click="goToNext"
        >
          Следующая новость
        </div>
        <div v-if="width <= 769" class="_link">
          Назад к списку
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'PageNewsItem',
  computed: {
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapState('news', {
      current: 'currentNews',
      prev: 'prevNews',
      next: 'nextNews'
    }),
    isCurrentItemEmpty() {
      return Object.keys(this.current).length === 0
    },
    isPrevItemEmpty() {
      return Object.keys(this.prev).length === 0
    },
    isNextItemEmpty() {
      return Object.keys(this.next).length === 0
    },
    newsID() {
      return parseInt(this.$route.params.id)
    }
  },
  watch: {
    newsID: function (newValue) {
      this.$store.commit('news/SET_CURRENT_NEWS', newValue)
    }
  },
  created() {
    this.$store.commit('news/SET_CURRENT_NEWS', this.newsID)
  },
  methods:{
    scrollTo(){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    goToPrev() {
      this.$router.push({name: 'NewsItem', params: {id: this.prev.id}})
    },
    goToNext() {
      this.$router.push({name: 'NewsItem', params: {id: this.next.id}})
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  height: rem(300);
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
}

p {
  line-height: rem(20);
}

.section-banner {
  max-width: rem(473);
  padding: rem(90) 0 rem(120);
  color: #FFFFFF;

  p {
    margin-top: rem(13);
  }

  p:first-child {
    margin: 0;
  }
}

.text {
  p {
    margin-top: rem(31);
  }

  p:first-child {
    margin-top: 0;
  }
}

.about-product {
  display: flex;
  gap: rem(30);
}

._sub-title {
  margin-bottom: rem(31);
}

.button-navigation {
  display: flex;
  justify-content: center;
  margin-top: rem(82);
  gap: rem(30);
}

.button {
  padding: rem(12) rem(29);
}
.go-up{
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
@media (max-width: em(1300, 16)) and (min-width: em(770, 16)) {
  .text {
    p {
      margin-top: calc(1rem + (31 - 16) * ((100vw - 48.125rem) / (1300 - 770)));
    }
  }
  ._sub-title {
    margin-bottom: calc(1rem + (31 - 16) * ((100vw - 48.125rem) / (1300 - 770)));
  }
  .button-navigation{
    margin-top: calc(1.9375rem + (82 - 31) * ((100vw - 48.125rem) / (1300 - 770)));
  }
}

@media (max-width: em(769, 16)) {
  .text {
    p {
      margin-top: rem(16)
    }
  }
  .about-product{
    flex-direction: column;
  }
  ._sub-title {
    margin-bottom: rem(16)
  }
  .button-navigation{
    flex-direction: column;
    align-items: center;
    margin-top:rem(31);
  }
  .button{
    width: fit-content;
  }
}
</style>
