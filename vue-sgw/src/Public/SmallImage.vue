<template>
  <div v-bind:style="{width:ImageWidth+'px',height: ImageHeight+'px'}">
    <img :src="imgUrl" @load="addImage()" ref="MyImageView">
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
      return {}
    },
    methods: {
      addImage: function () {
//        var img = event.target;
        var img = this.$refs.MyImageView;
//        console.log(img.width,img.height,this.ImageWidth,this.ImageHeight,this.ImageWidth/img.width*img.height);
        if (img.width < img.height) {
          $(img).css({
            'position': 'relative',
            width: this.ImageWidth + 'px',
            heigh: this.ImageWidth/img.width *img.height +'px',
            top: -(this.ImageWidth/img.width *img.height - this.ImageHeight) / 2 + 'px'
          })
        } else {
          $(img).css({
            'position': 'relative',
            height: this.ImageHeight + 'px',
            width: this.ImageHeight/img.heigh *img.width +'px',
            left: -( this.ImageHeight/img.heigh *img.width  -this.ImageWidth)/ 2 + 'px'
          })
        }
      }
    },
  }
</script>

<style>
</style>
