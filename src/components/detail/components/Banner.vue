<template>
  <div>
    <div class="banner" ref="banner">
      <div class="banner-wrapper" @click="handleBannerClick">
        <div class="banner-img">
          <img class="banner-img-box" :src="bannerImg">
        </div>
        <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe643;</span>
            {{gallaryImgs.length}}
          </div>
        </div>
      </div>
    </div>
    <FadeAnimation>
      <common-gallary
      @close="handleGallaryClick"
      :imgs="gallaryImgs"
      v-show="showGallary">
      </common-gallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import Bscroll from "better-scroll";
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: "DetailBanner",
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.banner);
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClick() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped >
  .banner-wrapper
    position: relative;
    .banner-img
      overflow hidden
      height: 0;
      padding-bottom: 55%;
      .banner-img-box
        width: 100%;
    .banner-info
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom 0
      line-height: 0.6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6));
      .banner-title
        flex: 1;
        font-size: 0.32rem;
        padding: 0 0.2rem;
      .banner-number
        padding: 0 0.4rem;
        line-height: 0.32rem;
        height: 0.32rem;
        margin-top: 0.14rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: 0.24rem;
        .banner-icon
          font-size: 0.24rem;
</style>
