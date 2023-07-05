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
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShops
} from '../api/index.js'
export default {
  //根据经纬度请求地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      let address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //获取食品分类列表
  async getFoodCategorys({commit}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      let categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //根据经纬度获取商铺列表
  async getShops({commit, state}) {
    const result = await reqShops(state.longitude, state.latitude)
    if (result.code === 0) {
      let shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //存储登录信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },
  //请求根据会话获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code == 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },
  //请求登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code == 0) {
      commit(RESET_USER_INFO)
    }
  },

  //异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code == 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  //异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code == 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },
  //异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code == 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback()
    }
  },
  //根据经纬度和关键字搜索商铺列表
  async getSearchShops({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash, keyword)
    console.log(result);
    if (result.code === 0) {
      let searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
}