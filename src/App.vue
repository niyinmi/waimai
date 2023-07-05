<template>
  <div class="app">
    <!-- 缓存路由组件 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    <FooterGuide v-show="$route.meta.isFooter" />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  async mounted() {
    //根据经纬度请求地址
    await this.$store.dispatch('getAddress')
    //根据会话获取用户信息
    await this.$store.dispatch('getUserInfo')
  },
  components: { FooterGuide },
  methods: {
    Fn() {
      this.$router.push({
        path: '/order'
      })
    }
  }
}
</script>
<style lang="less">
ul{
  padding: 0;
}
li{
  list-style: none;
}
body {
  margin: 0;
  padding: 0;
  background-color: #666;
}

.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

</style>