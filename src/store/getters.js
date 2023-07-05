export default {
  //计算购物车的食品总 数量
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food)=>{
      return preTotal + food.count
    }, 0)
  },
  totalPrice(state) {
    //计算购物车的食品总 价格
    return state.cartFoods.reduce((preTotal, food)=>{
      return preTotal + food.count * food.price
    }, 0)
  },
  //让这个方法返回一个数据，满意的评论个数
  positiveSize(state) {
    return state.ratings.reduce((preTotal, rating)=>{
      return preTotal + (rating.rateType ? 0 : 1)
    }, 0)
  }
}