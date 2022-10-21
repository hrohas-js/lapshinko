<template>
  <header>
    <Header></Header>
    <header-menu></header-menu>
  </header>
  <main>
    <div class="wrapper _box-gap_bg">
        <UserLk></UserLk>
        <user v-if="profileAction == 'profile'"></user>
    </div>
  </main>
  <footer>
    <footer-elem></footer-elem>
  </footer>

</template>

<script>
import Header from "@/components/header/Header";
import HeaderMenu from "@/components/header/HeaderMenu";
import FooterElem from "@/components/footer/FooterElem";
import UserLk from "@/components/profile/UserLk";
import User from "@/components/profile/User";

export default {
  name:'Lkv',
  components: {
    User,
    UserLk, FooterElem,
    HeaderMenu, Header},
  computed: {
    profileAction() {
      return this.$store.state.profile.userCurrentAction
    },
    width() {
      return this.$store.state.display_width;
    }
  }

}
</script>

<style scoped lang="scss">
._box-gap_bg{
  display: flex;
  gap: rem(172);
}
@media (max-width: em(1024,16)) {
  ._box-gap_bg{
    flex-direction: column;
    gap: rem(100);
  }
}
@media (max-width: em(1024,16)) and (min-width: em(320,16)){
  ._box-gap_bg{
    gap: calc(2rem + (100 - 32) *((100vw - 20rem) / (1024 - 320)));
  }
}
@media (max-width: em(320,16)){
  ._box-gap_bg{
    gap: rem(32)
  }
}
</style>