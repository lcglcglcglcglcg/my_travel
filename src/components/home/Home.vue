<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper :swiperList1="swiperList"></my-swiper>
    <MyIcons :iconList="iconList"></MyIcons>
    <MyRecommend :recommendList="recommendList"></MyRecommend>
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MySwiper from "./components/swiper";
import MyIcons from "./components/icons";
import MyRecommend from "./components/recommend";
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  created() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      this.$axios
        .get("/api/index.json")
        .then(res => {
          this.swiperList = res.data.data.swiperList;
          this.iconList = res.data.data.iconList;
          this.recommendList = res.data.data.recommendList;
          this.weekendList = res.data.data.weekendList;
        })
        .catch(err => console.log(err));
    }
  },
  components: {
    MyHeader,
    MySwiper,
    MyIcons,
    MyRecommend
  }
};
</script>

<style scoped lang="stylus">
</style>
