<template>
  <div>
    aaaaaaaaaaaaaaaaaaaaa
  </div>
</template>

<script type="es6">
  import {RequestData} from '../../Http/SGHttp'
  import SmallImage from '../../Public/SmallImage.vue'
  import {GetScreenWidth} from '../../Public/PublicAction'
  import VideoListItem from './VideoListItem.vue'

  export default {
    data () {
      return {
        allLoaded: false,
        dataArray: [],
        page: 0
      }
    },
    components: {
//      SmallImage,
//      VideoListItem
    },
    created(){
    },
    methods: {
      loadTop() {
//        this.allLoaded = false;// 若数据已全部获取完毕
//        this.page = 1
//        this.GetListData();
      },
      loadBottom() {
//        this.page++
//        this.GetListData();
      },
      GetListData: function () {

      },
    }
  }
</script>
<style>
</style>
