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
      Items: '',
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
          display: 'flex'
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
    components: {
      Child
    },
    render: function (createElement) {
      var mybtnWidth = GetScreenWidth() / this.Items.length;
      if (this.Items.length > 5) {
        mybtnWidth = GetScreenWidth() / 5;
      }
      let self = this
      return createElement('div', [
        createElement('div', {
          style: {
            width: GetScreenWidth() + 'px',
            overflow: 'scroll',
            position: 'relative'
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
            style: {
              position: 'relative'
            },
            props: {
              Items: self.Items,
              btnWidth: mybtnWidth,
              doTapChange: self.doTapChange,
              selectIndex: self.selectIndex
            }
          })
        ]),
      ])
    },
    created ()
    {
      this.$watch('selectIndex', function () {
        console.log(this.selectIndex);
      })
    }
  }
</script>

<style>
</style>
