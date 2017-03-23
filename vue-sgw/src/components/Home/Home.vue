<template>
  <div>
    <banner></banner>
    <div>
      <mt-button ref="myButton" v-bind:type="myBtnType1" @click="GetListData(1)">tab1</mt-button>
      <mt-button ref="myButton1" v-bind:type="myBtnType2" @click="GetListData(2)">tab2</mt-button>
      <mt-button ref="myButton1" v-bind:type="myBtnType3" @click="GetListData(3)">tab3</mt-button>
      <mt-tab-container v-model="active" :swipeable="true">
        <mt-tab-container-item id="tab-container1">
          <div v-for="n in 10" title="tab-container 1">
            1111
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div v-for="n in 5" title="tab-container 2">
            222
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <div v-for="n in 7" title="tab-container 3">
            333
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import Banner from './banner.vue'
  import {GetRequestData} from '../../Http/SGHttp'




  export default {
    data () {
      return {
        active: 'tab-container1',
        myBtnType1:'primary',
        myBtnType2:'default',
        myBtnType3:'default'

      }
    },
    components: {
      Banner
    },
    created () {

      let self = this;
      this.$watch('active', function () {
//        var myButton = self.$refs.myButton;
        if (self.active == 'tab-container1')
        {
          self.myBtnType1 = 'primary';
          self.myBtnType2 = 'default';
          self.myBtnType3 = 'default';
        }
        if (self.active == 'tab-container2')
        {
          self.myBtnType1 = 'default';
          self.myBtnType2 = 'primary';
          self.myBtnType3 = 'default';
        }
        if (self.active == 'tab-container3')
        {
          self.myBtnType1 = 'default';
          self.myBtnType2 = 'default';
          self.myBtnType3 = 'primary';
        }


      }, {deep: true});
    },
    methods: {
      GetListData: function (selectIndex) {
        this.active = 'tab-container' + selectIndex;
      }
    }
  }
</script>
<style>
</style>
