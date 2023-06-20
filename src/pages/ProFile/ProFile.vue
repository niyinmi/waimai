<template>
  <div>
    <HeaderTop title="我的">
    </HeaderTop>
    <div class="login" @click="loginRouter">
      <div class="login--left">
        <div class="left--div1"></div>
        <div class="left--div2"></div>
      </div>
      <div class="login--middle">
        <div class="middle--top">登录/注册</div>
        <div class="middle--bottom">📱 暂无绑定手机</div>
      </div>
      <div class="login--right">▶</div>
    </div>
    <div class="balance">
      <div class="balance--left">
        0.00元
        <div>我的余额</div>
      </div>
      <div class="balance--middle">
        0个
        <div>我的优惠</div>
      </div>
      <div class="balance--right">
        0分
        <div>我的积分</div>
      </div>
    </div>
    <div class="service">
      <div class="service--alone">
        <div>📝我的订单</div>
        <span>▶</span>
      </div>
      <div class="service--alone">
        <div>🏪积分商城</div>
        <span>▶</span>
      </div>
      <div class="service--alone">
        <div>🎀会员中心</div>
        <span>▶</span>
      </div>
      <div class="service--alone">
        <div>👨‍🍳服务</div>
        <span>▶</span>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
export default{
  components:{HeaderTop},
  methods:{
    loginRouter(){
      this.$router.replace({
        path:'/login'
      })
    }
  }
}
</script>
<style scoped>
.login{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: #fff;
  background-color: #02a774;
  border-top: 1px solid #85b8a8;
}
.login--left{
  overflow: hidden;
  width: 80px;
  height: 80px;
  background-color: rgb(162, 162, 162);
  border-radius: 40px;
}
.left--div1{
  width: 40px;
  height: 40px;
  margin:6px auto 0 auto;
  background-color: #ddd;
  border-radius: 20px;
}.left--div2{
  width: 60px;
  height: 60px;
  margin:2px auto 0 auto;
  background-color: #ddd;
  border-radius: 26px;
}
.balance{
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding: 16px 0;
}
.balance--left,.balance--middle{
  padding-right: 20px;
  border-right: 1px solid #ccc;
}
.service--alone{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-style: solid none solid none;
}
</style>