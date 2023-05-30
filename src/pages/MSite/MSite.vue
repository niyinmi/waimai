<template>
  <div>
    <HeaderTop title="北京市海淀区西北旺东路10号院中关村">
      <span class="header__search" slot="left">
        <i>🔍</i>
      </span>
      <span class="header__login" slot="right">
        <span>登录|注册</span>
      </span>
    </HeaderTop>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
        </div>
        <div class="swiper-slide">
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
          <div class="diva">aa</div>
        </div>
      </div>
      <div class="swiper-pagination"></div><!-- 如果需要分页器 -->
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
    </div>
    <ShopList></ShopList>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
import ShopList from '@/components/ShopList/ShopList.vue';
export default {
  components: {
    HeaderTop,
    ShopList
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        clickableClass: 'my-pagination-clickable',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
};
</script>
<style>
.header__login {
  font-size: 12px;
}

.swiper-slide {
  display: grid;
  grid-template-columns: repeat(auto-fill, 78px);
  column-gap: 20px;
  row-gap: 20px;
  height: 200px;
}

.diva {
  float: left;
  width: 50px;
  height: 50px;
  margin: auto;
  background-color: #ffb5b5;
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-navigation-size: 10px;
  /* 设置按钮大小 */
}
</style>