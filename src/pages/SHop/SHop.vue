<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import ShopHeader from '@/components/ShopHeader/ShopHeader.vue';
export default {
  components: { ShopHeader },
  // mounted() {
  //   this.$store.dispatch('getShopInfo')
  // }
}
</script>
<style scoped lang="less">
.tab {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;

  .tab-item {
    width: 70px;
    height: 36px;
    line-height: 36px;
    text-align: center;

    a {
      position: relative;
      display: block;
      color: #000;
      font-size: 14px;
      text-decoration: none;

      &.router-link-active {
        color: #02a774;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          background-color: #02a774;
          transform: translateX(-50%);
          box-shadow: 3px 3px .9em rgb(255, 115, 0), -1em 0 .4em olive;
        }
      }
    }
  }
}
</style>