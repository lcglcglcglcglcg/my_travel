<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList1" :key="item.id">
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
    props:{
      swiperList1:Array
    },
    data(){
      return {
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped >
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff !important
  .wrapper >>> .swiper-container
    overflow hidden
    width: 100%;
    height:0
    padding-bottom:32%
    background:#ccc
    a
      display block
      .swiper-img
        width: 100%
</style>
