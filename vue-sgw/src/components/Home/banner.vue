<template>
  <div>
    <Swipe class="my-swipe" :auto="0" :show-indicators="false" :show-continuous="false" style="height: 200px">
      <SwipeItem  v-for="banner in banners"  style="height: 200px">
        <div>banner.cover</div>
        <!--<SmallImage  v-bind:imgUrl='banner.cover' ImageWidth="320px" ImageHeight="200px"></SmallImage>-->
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vue-swipe'
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../PublicComponent/SmallImage.vue'
  export default {
    data () {
      return {
        banners: []
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
