import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import VideoDetailVC from  '../components/Video/VideoDetailVC.vue'
Vue.use(Router)

import 'mint-ui/lib/style.css'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/VideoDetailVC',
      name: 'VideoDetailVC',
      component: VideoDetailVC
    }
  ]
})
