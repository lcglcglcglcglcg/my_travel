<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
    <MyIcons></MyIcons>
  </div>

</template>

<script>
import MyHeader from '../common/header'
import MySwiper from '../common/swiper'
import MyIcons from '../common/icons'
  export default {
    name:'Home',
    components: {
      MyHeader,
      MySwiper,
      MyIcons
    }
  }
</script>

<style scoped lang="stylus">
.home
  color: #ccc
</style>
