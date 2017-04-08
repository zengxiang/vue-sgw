<template>
  <div>
    <!--<SlideSelectionBtn  v-show="isActive" style="position: fixed;left: 0;top:0;z-index: 100" :Items="Items"-->
                       <!--:ChangeSelectFun="ChangeSelectFun"-->
                       <!--:selectIndex="getIndex()"></SlideSelectionBtn>-->


    <banner ref="HomeBanner"></banner>
      <HomeTitleRow title="推荐课程" :doTapAllFun="doTapAllFun"></HomeTitleRow>
      <RecommendVideoItemScroll></RecommendVideoItemScroll>
      <div style="height: 6px;background: #eeeeee"></div>
      <SlideSelectionBtn  id="homeSlideWrap" :Items="Items" :ChangeSelectFun="ChangeSelectFun"
                         :selectIndex="getIndex()"></SlideSelectionBtn>
      <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item  style="min-height: 568px"  id="tabContainer1">
          <VideoList></VideoList>
        </mt-tab-container-item>
        <mt-tab-container-item  style="min-height: 568px"  id="tabContainer2">
          <div v-for="n in 50" title="tab-container 2">
            222
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item  style="min-height: 568px"  id="tabContainer3">
          <div v-for="n in 80" title="tab-container 3">
            333
          </div>
        </mt-tab-container-item>
      </mt-tab-container>

  </div>
</template>


<script>
  import Banner from './banner.vue'
  import HomeTitleRow from './HomeTitleRow.vue'
  import RecommendVideoItemScroll from './RecommendVideoItemScroll.vue'
  import VideoList from  './../Video/VideoList.vue'

  import {GetRequestData} from '../../Http/SGHttp'
  import SlideSelectionBtn from '../../Public/SlideSelectionBtn.vue'

  export default {
    data () {
      return {
        Items: ['推荐课程', '讲师团队', '关于我们'],
        active: 'tabContainer1'
      }
    },
    components: {
      Banner,
      SlideSelectionBtn,
      HomeTitleRow,
      RecommendVideoItemScroll,
      VideoList
    },
    mounted() {
    },
    created () {
      let self = this;
//      $(window).scroll(function (event) {
//        event.stopPropagation();
//        var top = document.getElementById('homeSlideWrap').offsetTop - $(document).scrollTop();
//        if (top <= document.getElementById('homeSlideWrap').offsetHeight) {
////        if (top <= 0) {
//          self.isActive = true;
//        } else {
//          self.isActive = false;
//        }
//        console.log(top);
//      });

    },
    methods: {
      getIndex: function () {
        return this.active.charAt(this.active.length - 1) - 1;
      },
      ChangeSelectFun: function (index) {
        this.active = 'tabContainer' + (index + 1);
//        this.$refs.HomeBanner.GetListData('66666');
      },
      doTapAllFun: function () {
        alert('点击全部');
      }

    }
  }
</script>
<style>

</style>
