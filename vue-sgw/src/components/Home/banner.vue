<template>
  <div>
    <Swipe style="height: 200px" :auto="1000">
      <SwipeItem  v-for="banner in banners" >
        <SmallImage  v-bind:imgUrl='banner.cover' :ImageWidth="ImageWidth" :ImageHeight=200></SmallImage>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  require('vue-swipe/dist/vue-swipe.css');
  import {Swipe, SwipeItem} from 'vue-swipe'
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../Public/SmallImage.vue'
  import {GetScreenWidth} from '../Public/PublicAction'
  export default {
    data () {
      return {
        banners: [],
        ImageWidth:GetScreenWidth()
      }
    },
    components: {
      Swipe,
      SwipeItem,
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
</style>
