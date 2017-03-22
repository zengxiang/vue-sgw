<template>
  <div style="overflow: hidden;position: relative">
    <div v-bind:style="{width:ImageWidth,height: ImageHeight}">
      <img  :src="imgUrl" @load="addImage()" ref="MyImageView">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imgUrl: '',
      ImageWidth: "",
      ImageHeight: ""
    },
    data: function () {
      return {

      }
    },
    methods: {
      addImage: function () {
//        var img = event.target;
        var img = this.$refs.MyImageView;
        if(img.width < img.height)
        {
          $(img).css({
            width: '100%',
            'position': 'relative',
            top: -($(img).height() - $(img).parent().height()) / 2 + 'px'
          })
        }else {
          $(img).css({
            height: '100%',
            'position': 'relative',
            left: -($(img).width() - $(img).parent().width()) / 2 + 'px'
          })
        }
      }
    },
  }
</script>

<style>
</style>
