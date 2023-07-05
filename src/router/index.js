import VueRouter from "vue-router";
import MSite from '../pages/MSite/MSite.vue'
import ORder from '../pages/ORder/ORder.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import SEarch from '../pages/SEarch/SEarch.vue'
import LOgin from '../pages/LOgin/LOgin.vue'
import state from '@/store/state.js'

//shop商家页
import SHop from '@/pages/SHop/SHop.vue';
import ShopGoods from '@/pages/SHop/ShopGoods/ShopGoods.vue';
import ShopInfo from '@/pages/SHop/ShopInfo/ShopInfo.vue';
import ShopRatings from '@/pages/SHop/ShopRatings/ShopRatings.vue';
let a=VueRouter.prototype.push
let b=VueRouter.prototype.push
//由于重复进入同一个路由，vue会报错，这里重写路由原型里的push和replace方法
VueRouter.prototype.push=function(lacation,resolve,reject){
  if(resolve&&reject){
    a.call(this,lacation,resolve,reject)
  }else{
    a.call(this,lacation,()=>{},()=>{})
  }
}
VueRouter.prototype.replace=function(lacation,resolve,reject){
  if(resolve&&reject){
    b.call(this,lacation,resolve,reject)
  }else{
    b.call(this,lacation,()=>{},()=>{})
  }
}
const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:{name:'home'}
    },
    {
      name:'home',
      path:'/msite',
      component:MSite,
      meta:{isFooter:true}
    },
    {
      path:'/order',
      component:ORder,
      meta:{isFooter:true}
    },
    {
      path:'/profile',
      component:ProFile,
      meta:{isFooter:true}
    },
    {
      path:'/search',
      component:SEarch,
      meta:{isFooter:true}
    },
    {
      path:'/login',
      component:LOgin,
      meta:{isLogin:true}
    },
    {
      path:'/shop',
      component:SHop,
      //二级路由
      children:[
        {
          path:'',
          redirect:'/shop/goods'
        },
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if (to.meta.isLogin) {
    if (state.userInfo._id) {
      next({path:'/userinfo'})
    } else {
      next()
    }
  } else {next()}
})

export default router