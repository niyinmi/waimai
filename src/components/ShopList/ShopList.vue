<template>
  <div>
    <div v-if="shops.length == 0">
      <img src="./image/shop_back.svg" alt="back" v-for="(item, index) in 6" :key="index">
    </div>
    <div class="ul" v-else>
      <div class="list" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
        <div class="list-left"></div>
        <div class="list-middle">
          <div>
            <i>💳</i>
            <span class="middle-span">{{ shop.name }}</span>
          </div>
          <div>
            <i>⭐⭐⭐</i>
            <span style="color:orange;font-weight: bold;">{{ shop.rating }} </span>
            <span>月售{{ shop.recent_order_num }}单</span>
          </div>
          <div>
            <span>￥{{ shop.float_delivery_fee }}起送/</span>
            <span>配送费约{{ shop.float_minimum_order_amount }}元</span>
          </div>
        </div>
        <div class="list-right">
          <div class="label_top">
            <span class="label-span" v-for="(s, index) in shop.supports" :key="index">{{ s.icon_name }}</span>
          </div>
          <div class="label_bottom">图案外卖</div>
        </div>
      </div>
    </div>
    <div class="after"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['shops']),
  },
}
</script>
<style scoped>
.ul-list:last-child {
  margin-bottom: 100px;
}

.after::after {
  display: block;
  height: 100px;
  line-height: 60px;
  background-color: #02a77329;
  text-align: center;
  content: '我是有底线的~~~';
}

.list {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.list-left {
  width: 90px;
  height: 90px;
  background-color: rgb(245, 100, 100);
}

.middle-span {
  display: inline-block;
  width: 170px;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.label-span {
  border: 1px solid #666;
  border-radius: 4px;
}

.label_bottom {
  font-size: 14px;
  color: #02a774;
  border: 1px solid;
  border-radius: 4px;
}
</style>