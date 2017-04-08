<template>
  <div>
    <div  :style="classStyle">
      <img :src="imgUrl" @load="addImage()" ref="MyImageView">
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      imgUrl: '',
      ImageWidth: 0,
      ImageHeight: 0
    },
    data: function () {
      return {
        classStyle: {}
      }
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
            heigh: this.ImageWidth / img.width * img.height + 'px',
            top: -(this.ImageWidth / img.width * img.height - this.ImageHeight) / 2 + 'px'
          })
        } else {
          $(img).css({
            'position': 'relative',
            height: this.ImageHeight + 'px',
            width: this.ImageHeight / img.heigh * img.width + 'px',
            left: -( this.ImageHeight / img.heigh * img.width - this.ImageWidth) / 2 + 'px'
          })
        }
        this.classStyle = {
          width: this.ImageWidth + 'px',
          height: this.ImageHeight + 'px',
          overflow: 'hidden'
        }
      }
    },
  }
</script>

<style>
</style>
