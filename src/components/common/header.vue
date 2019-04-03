<template>
  <div class="header">
    <div class="header-left">
      <span class="inconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游戏主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props:{
    city:String
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .header
    display:flex
    line-height :.86rem
    background: $bgColor
    color: #fff
    .header-left
      width:.64rem
      float left
      .back-icon
        text-align center
        font-size:.4rem
    .header-input
      flex:1
      height: .64rem
      line-height: .64rem
      margin: .12rem 0 0 .2rem
      background-color #fff
      border-radius:.1rem
      color: #ccc
    .header-right
      width:1.24rem
      float right
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
