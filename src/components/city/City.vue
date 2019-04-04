<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :hotCities='hotCities' :cities="cities"></city-list>
    <city-alphabet :cities="cities" @change='handleLetterClick'></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

  export default {
    data(){
      return {
        hotCities:[],
        cities:{},
        letter:''
      }
    },
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods:{
      getCityInfo(){
        this.$axios.get('/api/city.json')
        .then((res)=>{
          if(res.data.ret && res.data.data){
            this.cities = res.data.data.cities
            this.hotCities = res.data.data.hotCities
          }
        })
        .catch((err)=>console.log(err))
      },
      handleLetterClick(title){
        this.letter = title
      }
    },
    mounted(){
      this.getCityInfo()
    }
  }
</script>

<style lang='stylus' scoped >

</style>
