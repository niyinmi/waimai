import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RECEIVE_SEARCH_SHOPS
} from './mutation-type.js'
import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USERINFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = ''
  },

  //改商家信息
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },
  //改商品评价列表
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  //改商品列表
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  //加一样食物，调用者是某个食物
  increment_food_count(state, food) {
    // food.count 是记录该食物自身的 被购买数量
    if (food.count) {
      food.count++
    } else if (food.count == 0) {
      food.count = 1
      state.cartFoods.push(food)
    } else if (!Object.hasOwn(food, 'count')) {
      Vue.set(food, 'count', 1)
      //将该对象的地址，存储到cartFoods
      state.cartFoods.push(food)
    } else {
      console.log('在mutations里边食物的数量加减判断出了问题');
    }
  },
  //减一样食物，调用者是某个食物
  decrement_food_count(state, food) {
    // food.count 是记录该食物自身的 被购买数量
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  //购物车清空
  clearCart(state) {
    state.cartFoods.forEach((food)=>{
      food.count = 0
    })
    state.cartFoods = []
  },
  //
  [RECEIVE_SEARCH_SHOPS](state, searchShops) {
    state.searchShops = searchShops
  }
}