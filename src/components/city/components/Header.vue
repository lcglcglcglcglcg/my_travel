<template>
  <div class="header">
    城市选择
    <router-link to='/home'>
      <span class="inconfont city-back">&#xe78a;</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'CityHeader'
  }
</script>

<style lang="stylus" scoped >
 @import '~styles/varibles.styl'
  .header
    position relative
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .city-back
      position absolute
      left 0
      top 0
      width .64rem
      font-size .4rem
      color #fff
</style>
