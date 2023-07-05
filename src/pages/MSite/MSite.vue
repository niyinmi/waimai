<template>
  <div>
    <HeaderTop :title="address.name">
      <span class="header__search" slot="left">
        <i>🔍</i>
      </span>
      <span class="header__login" slot="right" @click="loginRouter">
        <span>{{userInfo.name || '登录|注册'}}</span>
      </span>
    </HeaderTop>
    <div class="swiper-container" v-if="categorys.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(category, index) in categoryArr" :key="index">
          <div class="diva" v-for="(c, index) in category" :key="index">
            <img :src="`${baseImageUrl}${c.image_url}`">
            <p style="font-size: 12px;text-align: center;">{{ c.title }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div><!-- 如果需要分页器 -->
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
    </div>
    <img src="./image/msite_back.svg" alt="back" v-else>
    <ShopList></ShopList>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
import ShopList from '@/components/ShopList/ShopList.vue';
import { mapState } from 'vuex';
export default {
  components: {
    HeaderTop,
    ShopList
  },
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted() {
    this.$store.dispatch('getFoodCategorys')
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    categoryArr() {
      const { categorys } = this
      let arr = []
      let arr2 = []
      for (let i = 0; i < categorys.length; i++) {
        arr2.push(categorys[i])
        if (arr2.length >= 8) {
          arr.push(arr2)
          arr2 = []
        }
      }
      if (arr2.length > 0) {
        arr.push(arr2)
      }
      return arr
    }
  },
  watch: {
    categorys() {
      //只有等到vux里categorys有数据，才会new轮播图
      this.$nextTick(function () {
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
      })
    }
  },
  methods:{
    loginRouter() {
      this.$router.push({
        path:'/login'
      })
    }
  }
}
</script>
<style scoped>
.header__login {
  font-size: 12px;
}

.swiper-slide {
  display: grid;
  grid-template-columns: repeat(auto-fill, 78px);
  grid-template-rows: repeat(auto-fill, 90px);
  column-gap: 20px;
  height: 200px;
}

.diva {
  float: left;
  width: 50px;
  height: 50px;
  margin: auto;
}

.diva img {
  width: 100%;
  height: 100%;
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-navigation-size: 10px;
  /* 设置按钮大小 */
}
</style>