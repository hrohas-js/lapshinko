<template>
  <div class="sub-filter" :class="{active:eat.id == 1}">
    {{eat.name}}
  </div>
</template>

<script>
export default {
  props:['eat'],
  name:'SubFilter'
}
</script>

<style scoped lang="scss">

.sub-filter{
  cursor: pointer;
  padding:rem(8) rem(18);
  gap: rem(10);
  background: #F9F9F9;
  border-radius: 35px;

  &:hover{
    background: #D9AC94;
    color: #FFFFFF;
  }
}
.active{
  background: #D9AC94;
  color: #FFFFFF;
}
</style>