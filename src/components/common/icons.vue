<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <a class="icon-a" href="">
            <img class="icon-img" src="https://uploadbeta.com/api/pictures/random/?key=女" alt="">
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
    data(){
      return {
        swiperOption:{
          //loop:true
        },
        iconList:[
          {id:'001',dessc:'张新建金额泡温泉'},
          {id:'002',desc:'泡温泉'},
          {id:'003',desc:'泡温泉'},
          {id:'004',desc:'泡温泉'},
          {id:'005',desc:'泡温泉'},
          {id:'006',desc:'泡温泉'},
          {id:'007',desc:'泡温泉'},
          {id:'008',desc:'泡温泉'},
          {id:'009',desc:'温泉'}
        ]
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
