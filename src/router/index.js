import VueRouter from "vue-router";
import MSite from '../pages/MSite/MSite.vue'
import ORder from '../pages/ORder/ORder.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import SEarch from '../pages/SEarch/SEarch.vue'
import LOgin from '../pages/LOgin/LOgin.vue'
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
export default new VueRouter({
  routes:[
    {
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
      component:LOgin
    },
  ]
})