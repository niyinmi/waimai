<template>
  <div class="login">
    <span class="return" @click="$router.back()">く</span>
    <div class="login--left">
      <div class="left--div1"></div>
      <div class="left--div2"></div>
    </div>
    <form>
      <label>账号:
        <input title="账号" placeholder="请输入账号">
      </label><br><br>
      <label>密码:
        <input type="password" title="密码" placeholder="请输入密码">
      </label>
      <label><br><br>
        <button type="button">提交</button>
      </label>
    </form>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.return {
  width: 30px;
  height: 30px;
  font-size: 18px;
}
//头像
.login--left {
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  background-color: rgb(162, 162, 162);
  border-radius: 40px;
  .left--div1 {
    width: 40px;
    height: 40px;
    margin: 6px auto 0 auto;
    background-color: #ddd;
    border-radius: 20px;
  }
  .left--div2 {
    width: 60px;
    height: 60px;
    margin: 2px auto 0 auto;
    background-color: #ddd;
    border-radius: 26px;
  }
}


form {
  display: flex;
  flex-flow: column;
  align-items: center;
  button{
    margin-bottom: 50px;
  }
}
</style>