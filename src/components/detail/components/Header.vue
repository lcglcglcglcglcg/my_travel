<template>
  <div class="detail-header">
    <div @click="back" v-show="showAbs" class="header-abs">
      <span class="iconfont header-abs-back">&#xe78a;</span>
    </div>
    <div v-show="!showAbs" class="header-fixed" :style="opacityStyle">
      景点选择
      <router-link to='/home'>
        <span class="inconfont header-fixed-back">&#xe78a;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailHeader',
    data(){
      return {
        showAbs: true,
        opacityStyle:{
          opacity: 0
        }
      }
    },
    activated(){
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
      back() {
        this.$router.go(-1);
      },
      handleScroll(){
        let top = document.documentElement.scrollTop
        if(top > 50){
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else{
          this.showAbs = true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped >
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 0.8rem;
    .header-abs-back
      font-size: 0.5rem;
      color: #fff;
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      left 0
      top 0
      width .64rem
      font-size .4rem
      color #fff
</style>
