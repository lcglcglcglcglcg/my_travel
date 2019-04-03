<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
  </div>

</template>

<script>
import MyHeader from '../common/header'
import MySwiper from '../common/swiper'
  export default {
    name:'Home',
    components: {
      MyHeader,
      MySwiper
    }
  }
</script>

<style scoped lang="stylus">
.home
  color: #ccc
</style>
