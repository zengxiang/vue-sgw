<template>
  <div style="padding:10px">
    <div style="border-left:3px solid #FC7B42;padding: 0px 10px;display: flex;justify-content:space-between">
      <div style="background: yellow">{{title}}</div>
      <div v-if="doTapAllFun" style="background:  red"><p style="padding: 0 10px" @click="doTapALL">全部</p></div>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    props: {
      title: '',
      doTapAllFun: Function
    },
    data () {
      return {}
    },
    components: {},
    created(){
    },
    methods: {
      doTapALL: function () {
        this.doTapAllFun();
      }
    }
  }
</script>
<style>
</style>
