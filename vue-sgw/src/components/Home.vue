<template>
  <div>
    <swiper class="swiperDiv">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {GetRequestData} from '../Http/SGHttp'
  export default {
    data () {
      return {
        banners: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created () {
      this.GetListData()
    },
    methods: {
      GetListData: function () {
        GetRequestData('course/listtui.json', {}, function (responseData) {
          console.log(responseData);
        }, function (error) {
          console.log(error);

        })
      }
    }
  }
</script>
<style>
  .swiperDiv {
    background: red;
  }

</style>
