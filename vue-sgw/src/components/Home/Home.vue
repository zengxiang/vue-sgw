<template>
  <div>
    <SlideSelectionBtn  v-show="isShow" style="position: fixed;left: 0;top:0;z-index: 100" :Items="Items"
                       :ChangeSelectFun="ChangeSelectFun"
                       :selectIndex="selectIndex"></SlideSelectionBtn>


    <mt-loadmore ref="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <banner ref="aaaaa"></banner>
      <SlideSelectionBtn :Items="Items" :ChangeSelectFun="ChangeSelectFun"
                         :selectIndex="selectIndex"></SlideSelectionBtn>
      <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item id="tab-container1">
          <div v-for="n in 10" title="tab-container 1">
            1111
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div v-for="n in 50" title="tab-container 2">
            222
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
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
  import {GetRequestData} from '../../Http/SGHttp'
  import SlideSelectionBtn from '../../Public/SlideSelectionBtn.vue'

  export default {
    data () {
      return {
        active: 'tab-container1',
        Items: ['推荐课程', '讲师团队', '关于我们'],
        selectIndex: 0,
        allLoaded: false,
        isShow:false,
        dataArray: []
      }
    },
    components: {
      Banner,
      SlideSelectionBtn
    },
    created () {



      let self = this;
      $(window).scroll(function (event) {
        event.stopPropagation();
        var top =  200 - $(document).scrollTop();
        if (top <=0)
        {
          self.isShow =  true;
        }else {
          self.isShow =  false;
        }
      });

      for (let i = 1; i <= 80; i++) {
        this.dataArray.push(i);
      }

//      let self = this;
//      this.$watch('active', function () {
//
//      }, {deep: true});
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

//      GetListData: function (selectIndex) {
//        this.active = 'tab-container' + selectIndex;
//      },
      ChangeSelectFun: function (index) {
        this.selectIndex = index;
        this.$refs.aaaaa.GetListData('66666');

      }

    }
  }
</script>
<style>
</style>
