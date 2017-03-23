<template>
  <div>
    <range
      :min="10"
      :max="90"
      :step="10"
      :bar-height="5">
    </range>
        <!--<small-image  v-bind:imgUrl='banner.cover' :ImageWidth="ImageWidth" :ImageHeight=200></small-image>-->
  </div>
</template>

<script type="es6">
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../../Public/SmallImage.vue'
  import {GetScreenWidth} from '../../Public/PublicAction'
  import { Range } from 'mint-ui';

  export default {
    data () {
      return {
        banners: [],
        ImageWidth:GetScreenWidth()
      }
    },
    components: {
      SmallImage,
      Range
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
