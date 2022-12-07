<template>
  <transition name="fade">
    <div v-if="showed" class="status">
      {{ text }}
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'StatusBox',
  computed: {
    ...mapState({
      text: 'statusText',
      showed: 'showedStatus'
    })
  }
}
</script>

<style scoped lang="scss">

.status {
  position: fixed;
  top: rem(30);
  right: rem(30);
  padding: rem(20);
  background: radial-gradient(146.15% 470.67% at 52.25% 118.27%, rgba(3, 102, 52, 0.2) 0%, rgba(3, 102, 52, 0.2) 100%), linear-gradient(81.93deg, #629C42 0.16%, #BFE82A 113.53%);
  box-shadow: 0px 2px 2px 0px rgb(147 187 0 / 60%), 0px 19px 22px -5px rgb(3 102 52 / 53%), inset 0px 0px 8px rgb(255 255 255 / 37%);
  color: #F9F9F9;
  text-align: center;
  z-index: 999999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
