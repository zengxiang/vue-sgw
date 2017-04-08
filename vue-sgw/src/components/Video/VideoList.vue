<template>
  <div>
    <!--<mt-loadmore ref="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">-->
      <div
        v-infinite-scroll="loadBottom"
        infinite-scroll-disabled="allLoaded"
        infinite-scroll-distance="30">
        <div v-for="item in dataArray">
          <VideoListItem :item='item'></VideoListItem>
        </div>
      </div>
    <!--</mt-loadmore>-->
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
      SmallImage,
      VideoListItem
    },
    created(){
    },
    methods: {
      loadTop() {
        this.allLoaded = false;// 若数据已全部获取完毕
        this.page = 1
        this.GetListData();
      },
      loadBottom() {
        // 加载更多数据
        this.page++
        this.GetListData();
      },
      GetListData: function () {
        if (this.page == 1) {
          this.dataArray.splice(0, this.dataArray.length)
        }
        let self = this;
        console.log(this.page);
        RequestData('get', 'course/list.json', {"p": this.page}, function (responseData) {
          responseData.data.map(function (item) {
            item.cover = responseData.fileServer + item.cover;
            self.dataArray.push(item)
          })
          if (responseData.data.length < 10)
          {
            self.allLoaded = true;// 若数据已全部获取完毕
          }
          self.$refs.loadmore.onTopLoaded();
          self.$refs.loadmore.onBottomLoaded();
        });
      },
    }
  }
</script>
<style>
</style>
