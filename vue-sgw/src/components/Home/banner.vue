<template>
  <div>
    <swiper :options="swiperOption" class="swiperDiv">
      <div class="swiper-slide" v-for="banner in banners">
        <SmallImage v-bind:imgUrl='banner.cover' ImageWidth="100%" ImageHeight="200px"></SmallImage>
      </div>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../PublicComponent/SmallImage.vue'
  export default {
    data () {
      return {
        banners: [],
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      SmallImage
    },
    created () {
      this.GetListData()
    },
    methods: {
      GetListData: function () {
        let self = this;
        RequestData('get','course/listtui.json',{}, function (responseData) {
          responseData.data.map(function (item) {
            item.cover = responseData.imageServer + item.cover;
          })
          self.banners = responseData.data;
        })
      },
    }
  }
</script>
<style>
  .swiperDiv {
    background: red;
  }
</style>
