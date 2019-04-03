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
    data(){
      return {
        swiperOption:{
          //loop:true
        },
        iconList:[
          {id:'001',imgUrl:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'张新建金额泡温泉'},
          {id:'002',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'003',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'004',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'005',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'006',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'007',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'008',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'泡温泉'},
          {id:'009',imgUrL:'http://wx4.sinaimg.cn/small/97ca63e6ly8fwrqjyo9kaj205k05k0tl.jpg',desc:'温泉'}
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
        margin .1rem auto 0
        width 70%
      .icon-title
        line-height .44rem
        font-size 12px
        font-weight bold
        color $darkTextColor
        ellipsis()
</style>
