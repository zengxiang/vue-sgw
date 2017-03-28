<template>
  <div style="overflow-x: scroll; ">
    <div style="display: flex">
      <div v-for="item in items" style="padding:0px 10px;position: relative">
        <SmallImage v-bind:imgUrl='item.cover' :ImageWidth=100 :ImageHeight=75></SmallImage>
        <p style="text-overflow:ellipsis;width: 100px;max-height: 44px;overflow: hidden">{{item.name}}</p>
        <p :style="[classStyle,otherStyles(item)]">{{item.priceText}}</p>
      </div>
    </div>
  </div>
</template>


<!--overflow: hidden;-->
<!--text-overflow: ellipsis;-->
<!--display: -webkit-box;-->
<!-- -webkit-line-clamp: 3;-->

<script type="es6">
  import SmallImage from '../../Public/SmallImage.vue'
  import {RequestData} from '../../Http/SGHttp'
  export default {
    props: {
      doTapAllFun: Function
    },
    data () {
      return {
        items: [],
        classStyle: {
          position: 'absolute',
          padding: '2px 5px',
          top: '20px',
          right: '10px',
          color: 'white',
          fontSize: '12px'
        }
      }
    },
    components: {
      SmallImage
    },
    created(){
      this.GetListData();
    },
    methods: {
      GetListData: function () {
        let self = this;
        RequestData('get', 'course/listtui.json', {}, function (responseData) {
          responseData.data.map(function (item) {
            item.cover = responseData.imageServer + item.cover;
            item.priceText = item.price > 0 ? '付费' : '免费';
          })
          self.items = responseData.data;

//          alert(self.items);
        })
      },
      otherStyles: function (item) {
          console.log(item);
        return {
          background: item.price>0?'red':'yellow'
        }
      },
      textShow: function (text) {
        if (text.length > 20) {
          return text.substring(0, textLeng) + "... ...";
        } else {
          return text;
        }
      }
    }
  }


</script>
<style>
</style>
