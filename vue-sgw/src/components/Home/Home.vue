<template>
  <div>
    <banner></banner>
    <SlideSelectionBtn :Items="Items" :ChangeSelectFun="ChangeSelectFun" :selectIndex="selectIndex"></SlideSelectionBtn>
    <div>
      <!--<mt-tab-container v-model="active" :swipeable="true">-->
        <!--<mt-tab-container-item id="tab-container1">-->
          <!--<div v-for="n in 10" title="tab-container 1">-->
            <!--1111-->
          <!--</div>-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="tab-container2">-->
          <!--<div v-for="n in 5" title="tab-container 2">-->
            <!--222-->
          <!--</div>-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="tab-container3">-->
          <!--<div v-for="n in 7" title="tab-container 3">-->
            <!--333-->
          <!--</div>-->
        <!--</mt-tab-container-item>-->
      <!--</mt-tab-container>-->
    </div>
  </div>
</template>

<script>
  import Banner from './banner.vue'
  import {GetRequestData} from '../../Http/SGHttp'
  import SlideSelectionBtn from '../../Public/SlideSelectionBtn.vue';
  export default {
    data () {
      return {
//        active: 'tab-container1',
        Items:['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh'],
        selectIndex:0
      }
    },
    components: {
      Banner,
      SlideSelectionBtn
    },
    created () {

//      let self = this;
//      this.$watch('active', function () {
//
//      }, {deep: true});
    },
    methods: {
//      GetListData: function (selectIndex) {
//        this.active = 'tab-container' + selectIndex;
//      },
      ChangeSelectFun:function (index) {
        this.selectIndex = index;
      }

    }
  }
</script>
<style>
</style>
