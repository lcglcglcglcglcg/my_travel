<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <a class="icon-a" href="">
            <img class="icon-img" :src="item.imgUrl" alt="">
            <p class="icon-title">{{item.desc}}</p>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'MyIcons',
    props:{
      iconList:Array
    },
    data(){
      return {
        swiperOption:{
          //loop:true
        }
      }
    },
    computed:{
      pages(){
        const pages = []
        this.iconList.forEach((item,index)=>{
          const page = index/8 | 0
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped >
@import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    widht:100%
    height: 0
    padding-bottom: 50%
  .icons
    margin-top .1rem
    .icon
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-a
        text-align center
        .icon-img
          display block
          width 70%
          margin .1rem auto 0
          border-radius 50%
        .icon-title
          line-height .44rem
          font-size 12px
          font-weight bold
          color $darkTextColor
          ellipsis()
</style>
