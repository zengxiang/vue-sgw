<template>
  <div>
    <mt-swipe :auto="4000"  style="height:200px">
      <mt-swipe-item  v-for="banner in banners">
        <small-image  v-bind:imgUrl='banner.cover' :ImageWidth="ImageWidth" :ImageHeight=200></small-image>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="es6">
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../../Public/SmallImage.vue'
  import {GetScreenWidth} from '../../Public/PublicAction'


  export default {
    data () {
      return {
        banners: [],
        ImageWidth:GetScreenWidth()
      }
    },
    components: {
      SmallImage
    },
    created(){
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
</style>
