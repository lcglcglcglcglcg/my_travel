<template>
  <div>
    <div class="banner" ref="banner">
      <div class="banner-wrapper" @click="handleBannerClick">
        <div class="banner-img">
          <img class="banner-img-box" :src="imgs[0].imgUrl">
        </div>
        <div class="banner-info">
          <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe643;</span>
            39
          </div>
        </div>
      </div>
    </div>
    <common-gallary @close="handleGallaryClick" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import Bscroll from "better-scroll";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        { imgUrl: "https://yantuz.cn/mmPic/" },
        { imgUrl: "https://yantuz.cn/mmPic/?333" },
        { imgUrl: "https://yantuz.cn/mmPic/?33" },
        { imgUrl: "https://yantuz.cn/mmPic/?3" },
        { imgUrl: "https://yantuz.cn/mmPic/?4" },
        { imgUrl: "https://yantuz.cn/mmPic/?5" }
      ]
    };
  },
  components: {
    CommonGallary
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
      line-height: 0.6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
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
