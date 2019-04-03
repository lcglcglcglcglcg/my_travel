<template>
  <div class="home">
    <my-header :city="city"></my-header>
    <my-swiper :swiperList1="swiperList"></my-swiper>
    <MyIcons :iconList="iconList"></MyIcons>
    <MyRecommend :recommendList="recommendList"></MyRecommend>
  </div>

</template>

<script>
import MyHeader from '../common/header'
import MySwiper from '../common/swiper'
import MyIcons from '../common/icons'
import MyRecommend from '../common/recommend'
  export default {
    name:'Home',
    data(){
      return{
        city:'北京',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    created(){
      this.getHomeInfo()
      // this.getCity()
    },
    methods:{
      getHomeInfo (){
        this.$axios.get('/api/index.json')
        .then((res)=>{
          console.log(res.data.data.swiperList);
          this.swiperList = res.data.data.swiperList
          this.iconList = res.data.data.iconList
          this.recommendList = res.data.data.recommendList
          this.weekendList = res.data.data.weekendList
        })
        .catch((err)=>console.log(err))
      },
      getCity(){
        this.$axios.get('/api/city.json')
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>console.log(err))
      }
    },
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
