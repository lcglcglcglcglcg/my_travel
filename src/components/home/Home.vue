<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
    <MyIcons></MyIcons>
    <MyRecommend></MyRecommend>
  </div>

</template>

<script>
import MyHeader from '../common/header'
import MySwiper from '../common/swiper'
import MyIcons from '../common/icons'
import MyRecommend from '../common/recommend'
  export default {
    name:'Home',
    components: {
      MyHeader,
      MySwiper,
      MyIcons,
      MyRecommend
    }
  }
</script>

<style scoped lang="stylus">

</style>
