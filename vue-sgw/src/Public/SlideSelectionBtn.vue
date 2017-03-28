<script>
  import {GetScreenWidth} from './PublicAction'


  var ChildBtn = {
    template: '<div @click="doTapChange">{{title}}</div>',
    data: function () {
      return {}
    },
    props: {
      title: '',
      TapChange: Function,
      myIndex: 0
    },
    methods: {
      doTapChange: function () {
        this.TapChange(this.myIndex)
      }
    }
  }


  var Child = {
    data: function () {
      return {}
    },
    props: {
      Items: Array,
      btnWidth: 0,
      doTapChange: Function,
      selectIndex: 0
    },
    components: {
      ChildBtn
    },
    render: function (createElement) {

      let self = this
      return createElement('div', {
        style: {
          width: self.btnWidth * this.Items.length + 'px',
          display: 'flex',
          position: 'relative'
        }
      }, [
        self.Items.map(function (title, index) {
          var textColor = 'black'
          if (self.selectIndex == index) {
            textColor = 'red'
          }
          return createElement(ChildBtn, {
            style: {
              width: self.btnWidth + 'px',
              padding: '10px',
              textAlign: 'center',
              color: textColor
            },
            props: {
              title: title,
              myIndex: index,
              TapChange: self.doTapChange
            }
          }, [])
        }),
        createElement('div', {
          style: {
            height: '2px',
            background: 'red',
            width: self.btnWidth + 'px',
            position: 'absolute',
            left: self.selectIndex * self.btnWidth + 'px',
            bottom: '0px',
            transition: 'left 0.3s Linear'
          }
        })
      ]);

    },
    methods: {}
  }

  export default {
    props: {
      Items: Array,
      ChangeSelectFun: Function,
      selectIndex: 0
    },
    data: function () {
      return {}
    },
    methods: {
      doTapChange: function (index) {
        this.ChangeSelectFun(index);
      }
    },
    created(){
      if (this.Items.length > 5) {
        var mybtnWidth = GetScreenWidth() / 5;
        let self = this;
        this.$watch('selectIndex', function () {
          var myChild = self.$refs.myChild;
          if (self.selectIndex < 2) {
            $(myChild).animate({scrollLeft: 0 + 'px'}, 300);
          }
          if (self.selectIndex > 1 && self.selectIndex < self.Items.length - 2) {
            let scrollL = (self.selectIndex - 2) * mybtnWidth
            $(myChild).animate({scrollLeft: scrollL + 'px'}, 300);
          }
          if (self.selectIndex > self.Items.length - 3) {
            console.log((self.Items.length - 3 - 2) * mybtnWidth);
            $(myChild).animate({scrollLeft: (self.Items.length - 2) * mybtnWidth + 'px'}, 300);
          }
        }, {deep: true});
      }
    },
    components: {
      Child
    },
    render: function (createElement) {
      var mybtnWidth = GetScreenWidth() / this.Items.length;
      if (this.Items.length > 5) {
        mybtnWidth = GetScreenWidth() / 5;
      }
      let self = this
      return createElement('div', {}, [
        createElement('div', {
          ref: 'myChild',
          style: {
            width: GetScreenWidth() + 'px',
            overflow: 'scroll',
            position: 'relative',
            background: 'white'
          }
        }, [
          createElement('div', {
            style: {
              height: '2px',
              background: '#efefef',
              width: self.Items.length * mybtnWidth + 'px',
              position: 'absolute',
              left: '0px',
              bottom: '0px'
            }
          }),
          createElement(Child, {
            props: {
              Items: self.Items,
              btnWidth: mybtnWidth,
              doTapChange: self.doTapChange,
              selectIndex: self.selectIndex
            }
          })
        ]),
      ])
    }
  }
</script>

<style>
</style>
