<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li 
            class="menu-item" 
            v-for="(good, index) in goods" 
            :key="index"
            :class="{current:index === currentIndex}"
            @click="clickMenuItem(index)"
          >
            <span class="text bottom-border-1px">
              <img
                class="icon"
                :src="good.icon"
                v-if="good.icon"
              />
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px" 
                v-for="(food, index) in good.foods" 
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <SKeleton>
                  <img
                    width="57"
                    height="57"
                    :src="food.icon"
                    v-if="food.icon"
                  />
                  </SKeleton>
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart></ShopCart>
      <FOod :food="food" ref="food"></FOod>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import SKeleton from '@/components/SKeleton/SKeleton.vue'
import CartControl from '@/components/CartControl/CartControl.vue'
import FOod from '@/components/FOod/FOod.vue'
import ShopCart from '@/components/ShopCart/ShopCart.vue'
import BScroll from 'better-scroll'
export default {
  components:{ SKeleton, CartControl, FOod, ShopCart},
  data() {
    return {
      scrollY:0,//右侧滑动的Y轴坐标（滑动过程实时变化）
      tops:[],//所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）
      foodScroll:'',
      food:{}
    }
  },
  mounted() {
    this.$store.dispatch('getShopGoods', ()=>{
      this.$nextTick(()=>{
        this.initScroll()
        this.initTops()
      })
    })
  },
  computed:{
    ...mapState(['goods']),
    currentIndex() {
      const {scrollY, tops} = this
      const index = tops.findIndex((top, index) =>{
        return scrollY >= top && scrollY < tops[index + 1]
      })
      return index
    }
  },
  methods:{
    initScroll() {
      //左侧点击事件默认是false，移动端点不了
      new BScroll('.menu-wrapper', {click:true})
      this.foodScroll = new BScroll('.foods-wrapper', {probeType:2, click:true})//惯性滑动不会触发
      this.foodScroll.on('scroll', ({x, y})=>{
        x;//eslint
        //收集滑动实时变化
        this.scrollY = Math.abs(y)
      })
      this.foodScroll.on('scrollEnd', ({x, y})=>{
        x;//eslint
        //收集滑动实时变化
        this.scrollY = Math.abs(y)
      })
    },
    initTops() {
      let tops = []
      let top = 0
      tops.push(top)
      let t = this.$refs.foodsUl.children
      Array.from(t).forEach((item)=>{
        top += item.clientHeight
        tops.push(top)
      })
      this.tops = tops
    },
    clickMenuItem(index) {
      //重复点击一个位置，直接返回
      if (this.tops[index] == this.scrollY) return
      this.scrollY = this.tops[index]
      this.foodScroll.scrollTo(0, -this.scrollY, 300)
    },
    showFood(food) {
      this.food = food
      this.$refs.food.toggleShow()
    }
  }
}
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active{
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .goods{
    display: flex;
    position: absolute;
    top: 224px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 12px;
        line-height: 14px;
        &.current{
          //暂时
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #fff;
          color: #008000;
          font-weight: 700;
          .text{
            border: none;
          }
        }
        .icon{
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
        }
        .text{
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          border-bottom: 1px rgba(7, 17, 27, 0.1);
          font-size: 12px;
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .title{
        padding-left: 14px;
        height: 26px;
        margin: 0;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .food-item{
        position: relative;
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        border-bottom: 1px rgba(7, 17, 27, 0.1);
        &:last-child{
          border:none;
          margin-bottom: 0;
        }
        .icon{
          flex: 0 0 57px;
          height: 57px;
          margin-right: 10px;
        }
        .content{
          flex: 1;
          .name{
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .desc, .extra{
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .desc{
            line-height: 12px;
            margin-bottom: 8px;
          }
          .extra{
            .count{
              margin-right: 12px;
            }
          }
          .price{
            font-weight: 700;
            line-height: 24px;
            .now{
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old{
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .cartcontrol-wrapper{
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        }
      }
    }
  }
</style>