import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Chief from '../views/chief/index.vue'

Vue.use(VueRouter)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '/',
    name: 'Chief',
    component: Chief,
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '/monitor',
        name: 'monitor',
        component: () => import(/* webpackChunkName: "Chief" */ '../views/chief/monitor/index.vue')
      },
      {
        path: '/analyse',
        name: 'analyse',
        component: () => import(/* webpackChunkName: "Chief" */ '../views/chief/analyse/index.vue')
      },
      {
        path: '/smon',
        name: 'smon',
        component: () => import(/* webpackChunkName: "Chief" */ '../views/chief/smon/index.vue')
      },
      {
        path: '/grid',
        name: 'grid',
        component: () => import(/* webpackChunkName: "Chief" */ '../views/chief/grid/index.vue')
      }
    ],
    redirect: '/monitor'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      isLogin: true
    },
    children:[
      // {
      //   path: '/login',
      //   name: 'Login',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
      // } 
      {
        path: '/meter',
        name: 'Meter',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Meter.vue')
      },
      {
        path: '/tagMake',
        name: 'TagMake',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/tagMake/index.vue')
      },
      {
        path: '/productMake',
        name: 'ProductMake',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/productMake/index.vue')
      },
      {
        path: '/templateMake',
        name: 'TemplateMake',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/templateMake/index.vue')
      },
      {
        path: '/productMake/preview',
        name: 'Preview',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/preview/index.vue')
      },
      {
        path: '/easyRelease',
        name: 'EasyRelease',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/easyRelease/index.vue')
      },
      {
        path: '/publishList',
        name: 'PublishList',
        component: () => import(/* webpackChunkName: "servicemanage" */ '../views/serviceManage/publishList/index.vue')
      },
      // ????????????
      //   ????????????
      {
        path: '/system/menuControl',
        name: 'menuControl',
        component: () => import(/* webpackChunkName: "system" */ '../views/system/menus/index.vue')
      },
      //   ????????????
      {
        path: '/system/staff',
        name: 'staff',
        component: () => import(/* webpackChunkName: "system" */ '../views/system/staff/index.vue')
      },
      //   ????????????
      {
        path: '/system/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "system" */ '../views/system/role/index.vue')
      },
      //   ????????????
      {
        path: '/system/power',
        name: 'power',
        component: () => import(/* webpackChunkName: "system" */ '../views/system/power/index.vue')
      },

      //  ????????????
          //  ??????
      {
        path: '/configure/email',
        name: 'email',
        component: () => import(/* webpackChunkName: "configure" */ '../views/configure/email/index.vue')
      },

      //  ????????????
          //  ????????????
      {
        path: '/business/audience',
        name: 'audience',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/audience/index.vue')
      },
          // ??????
      {
        path: '/business/disaster',
        name: 'disaster',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/disaster/index.vue')
      },
          //  ??????
      {
        path: '/business/group',
        name: 'group',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/group/index.vue')
      },
          //  ?????????
      {
        path: '/business/keyWord',
        name: 'keyWord',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/keyWord/index.vue')
      }, 
      //  ??????
      {
        path: '/business/organization',
        name: 'organization',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/organization/index.vue')
      },
          //  ??????
      {
        path: '/business/strategy',
        name: 'strategy',
        component: () => import(/* webpackChunkName: "business" */ '../views/business/strategy/index.vue')
      },


      //  ????????????
      {
        path: '/riskSurvey',
        name: 'riskSurvey',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/index.vue')
      },
      //  ????????????
          //  ????????????
      {
        path: '/riskSurvey/assess/dataEntry',
        name: 'dataEntry',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/index.vue')
      },
              //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/rain',
        name: 'dErain',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/rain/index.vue')
      },
              //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/drought',
        name: 'drought',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/drought/index.vue')
      },
            //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/highTem',
        name: 'highTem',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/highTem/index.vue')
      },
            //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/lowTem',
        name: 'lowTem',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/lowTem/index.vue')
      },

            //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/gale',
        name: 'gale',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/gale/index.vue')
      },
            //   ??????
      {
        path: '/riskSurvey/assess/dataEntry/hail',
        name: 'hail',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/hail/index.vue')
      },
            //  ??????
      {
        path: '/riskSurvey/assess/dataEntry/snowstorm',
        name: 'snowstorm',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/snowstorm/index.vue')
      },
            //  
      {
        path: '/riskSurvey/assess/dataEntry/thunder',
        name: 'thunder',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/dataEntry/thunder/index.vue')
      },
      //  ???????????????
      {
        path: '/riskSurvey/assess/plan',
        name: 'plan',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/plan/index.vue')
      },
      //  ??????????????????
      {
        path: '/riskSurvey/assess/reports',
        name: 'reports',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/assess/reports/index.vue')
      },
      //  ????????????
      {
        path: '/riskSurvey/predict',
        name: 'predict',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/index.vue')
      },
          //  ?????????
      {
        path: '/riskSurvey/predict/radar',
        name: 'radar',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/radar/index.vue')
      },
          //  ??????
      {
        path: '/riskSurvey/predict/cloud',
        name: 'cloud',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/cloud/index.vue')
      },
          //  ??????
      {
        path: '/riskSurvey/predict/live',
        name: 'live',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/live/index.vue')
      },
          //  ???????????????
      {
        path: '/riskSurvey/predict/analysis',
        name: 'analysis',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/analysis/index.vue')
      },
          //  ??????????????????
      {
        path: '/riskSurvey/predict/report',
        name: 'report',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/predict/report/index.vue')
      },
          //  ????????????
      {
        path: '/riskSurvey/judge',
        name: 'judge',
        component: () => import(/* webpackChunkName: "riskSurvey" */ '../views/riskSurvey/judge/index.vue')
      },




    ],
    redirect: '/meter'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      isLogin: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
