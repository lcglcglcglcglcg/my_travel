<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <a href="#">
          <img class="swiper-img" :src="item.imgUrl" >
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'MySwiper',
    data(){
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[
          {id:'0001',imgUrl:'https://yantuz.cn/mmPic/'},
          {id:'0002',imgUrl:'https://yantuz.cn/mmPic/?t=qipao'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped >
  .wrapper >>> .swiper-pagination-bullet-active
      background: red !important
  .wrapper >>> .swiper-container
    overflow hidden
    width: 100%;
    height:0
    padding-bottom:50%
    background:#ccc
    a
      display block
      height 0
      padding-bottom 50%
      .swiper-img
        width: 100%
</style>
