<template>
  <section  class="container">
  <div class="section-header">
    <div class="section-title">
      <h2 class="_title">
        новости
      </h2>
      <img src="@/assets/svg/hit.svg" alt="новости">
    </div>
    <div class="link-container" v-if="width >= 550">
      <link-to-all @click="goToAllNews" />
    </div>
  </div>
  <div class="choose-container">
    <news-item v-for="item in preview" :news="item" :key="item.id" />
  </div>
  <div class="link-container">
    <link-to-all v-if="width < 550" @click="goToAllNews" />
  </div>
</section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NewsItem from "@/components/news/NewsItem";
import LinkToAll from "@/components/UI/LinkToAll";

export default {
  name:'NewsPreview',
  components: {LinkToAll, NewsItem},
  computed:{
    ...mapState({
      width: 'displayWidth'
    }),
    ...mapGetters('news', {
      preview: 'previewNews'
    })
  },
  methods: {
    goToAllNews() {
      this.$router.push('/news')
    }
  }
}
</script>

<style scoped lang="scss">
.choose-container{
  display: flex;
  gap: rem(30);
}
@media (max-width: em(1300, 16)){
  .choose-container{
    gap: rem(30);
  }
}
@media (max-width: em(769, 16)){
  .choose-container{
    flex-direction: column;
  }
}
@media (max-width: em(769, 16)) and  (max-width: em(320, 16)){
  .choose-container{
    gap: calc(1.625rem + (30 - 26) * ((100vw - 20rem) / (549 - 320)));
  }
}
@media (max-width: em(320, 16)){
  .choose-container{
    gap: rem(26)
  }
}
</style>
