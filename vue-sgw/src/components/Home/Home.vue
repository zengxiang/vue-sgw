<template>
  <div>
    <SlideSelectionBtn v-show="isShow" style="position: fixed;left: 0;top:0;z-index: 100" :Items="Items"
                       :ChangeSelectFun="ChangeSelectFun"
                       :selectIndex="getIndex()"></SlideSelectionBtn>
    <mt-loadmore ref="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <banner ref="aaaaa"></banner>
      <HomeTitleRow :title="333" :doTapAllFun="doTapAllFun"></HomeTitleRow>
      <RecommendVideoItemScroll></RecommendVideoItemScroll>
      <div style="height: 6px;background: #eeeeee"></div>
      <SlideSelectionBtn  id="homeSlideWrap" :Items="Items" :ChangeSelectFun="ChangeSelectFun"
                         :selectIndex="getIndex()"></SlideSelectionBtn>


      <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item id="tabContainer1">
          <div v-for="n in 10" title="tab-container 1">
            1111
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tabContainer2">
          <div v-for="n in 50" title="tab-container 2">
            222
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tabContainer3">
          <div v-for="n in 80" title="tab-container 3">
            333
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-loadmore>

  </div>
</template>


<script>
  import Banner from './banner.vue'
  import HomeTitleRow from './HomeTitleRow.vue'
  import RecommendVideoItemScroll from './RecommendVideoItemScroll.vue'

  import {GetRequestData} from '../../Http/SGHttp'
  import SlideSelectionBtn from '../../Public/SlideSelectionBtn.vue'

  export default {
    data () {
      return {
        Items: ['推荐课程', '讲师团队', '关于我们'],
        allLoaded: false,
        isShow: false,
        dataArray: [],
        active: 'tabContainer1'
      }
    },
    components: {
      Banner,
      SlideSelectionBtn,
      HomeTitleRow,
      RecommendVideoItemScroll
    },
    created () {

      let self = this;
      $(window).scroll(function (event) {
        event.stopPropagation();
        var top = document.getElementById('homeSlideWrap').offsetTop - $(document).scrollTop();
//        if (top <= document.getElementById('homeSlideWrap').offsetHeight) {

        if (top <=  0) {

          self.isShow = true;
        } else {
          self.isShow = false;
        }

        console.log(top);
      });
//      this.$watch('active', function () {
//          self.selectIndex = self.active.charAt(self.active.length -1) -1
//
//        alert(self.selectIndex);
//      }, {deep: true});


      for (let i = 1; i <= 80; i++) {
        this.dataArray.push(i);
      }
    },
    methods: {
      loadTop(id) {
//        alert(id)
        console.log(id);
//        this.$broadcast('onTopLoaded', id);
        this.$refs.loadmore.onTopLoaded(id);
      },
      loadBottom(id) {
        // 加载更多数据
//        this.allLoaded = true;// 若数据已全部获取完毕
//        this.$broadcast('onBottomLoaded', id);
//        this.$refs.loadmore.onBottomLoaded(id);

        setTimeout(() => {
          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      getIndex: function () {
        return this.active.charAt(this.active.length - 1) - 1;
      },
      ChangeSelectFun: function (index) {
        this.active = 'tabContainer' + (index + 1);
        console.log(this.active);
//        this.$refs.aaaaa.GetListData('66666');
      },
      doTapAllFun:function () {
       alert('点击全部');
      }

    }
  }
</script>
<style>
</style>
