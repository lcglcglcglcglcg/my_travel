<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      list: [],
      gallaryImgs: []
    };
  },
  methods: {
    getDetailInfo() {
      this.$axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          if (res.data.ret && res.data.data) {
            this.sightName = res.data.data.sightName;
            this.bannerImg = res.data.data.bannerImg;
            this.list = res.data.data.categoryList;
            this.gallaryImgs = res.data.data.gallaryImgs;
          }
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped >
</style>
