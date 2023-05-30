<template>
  <div class="footer-guide">
    <a class="guide__item" :class="{ on: $route.path == '/msite' }" @click="goTo('/msite')">
      <span class="item__icon">
        <i>💗</i>
      </span>
      <span>外卖</span>
    </a>
    <a class="guide__item" :class="{ on: $route.path == '/search' }" @click="goTo('/search')">
      <span class="item__icon">
        <i>🔍</i>
      </span>
      <span>搜索</span>
    </a>
    <a class="guide__item" :class="{ on: $route.path == '/order' }" @click="goTo('/order')">
      <span class="item__icon">
        <i>📝</i>
      </span>
      <span>订单</span>
    </a>
    <a class="guide__item" :class="{ on: $route.path == '/profile' }" @click="goTo('/profile')">
      <span class="item__icon">
        <i>🤵</i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace({
        path: path
      })
    }
  }
}
</script>
<style scpoed>
.footer-guide {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 100;
  border-top: 1px solid #e4e4e4;
}

.guide__item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-flow: column;
  align-items: center;
  margin: 2px;
  color: #999;
}

.on {
  color: #02a774;
}

span {
  font-size: 14px;
  font-weight: bold;
}

i {
  font-size: 22px;
  font-style: normal;
}</style>