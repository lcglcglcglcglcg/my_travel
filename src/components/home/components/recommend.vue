<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item boeder-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'MyRecommend',
    props:{
      recommendList:Array
    },
    data(){
      return {
      }
    }
  }
</script>

<style lang="stylus" scoped >
@import '~styles/mixins.styl'

 .title
    margin-top .2rem
    line-height: .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    border-bottom 1px solid #aaa
    padding .1rem
    .item-img
      width 20%
      height 100%
      border-radius 50%
    .item-info
      flex 1
      padding-left .1rem
      min-width 0
      .item-title
        font-size .32rem
        line-height .54rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #999
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        border-radius .06rem
        color #ffffff
        padding .08rem
</style>
