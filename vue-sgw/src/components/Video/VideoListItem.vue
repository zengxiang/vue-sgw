<template>
    <div style="padding: 10px;display: flex" >
      <SmallImage v-bind:imgUrl='item.cover' :ImageWidth=135 :ImageHeight=80></SmallImage>
      <div style="padding: 0px 0px 0px 5px">
        <p>{{item.name}}</p>
      </div>
    </div>
</template>

<script type="es6">
  import SmallImage from '../../Public/SmallImage.vue'
  export default {
    props:{
      item:{}
    },
    data () {
      return {
      }
    },
    components: {
      SmallImage
    },
    created(){
    },
    methods: {
    }
  }
</script>
<style>
</style>
