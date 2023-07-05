<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" 
        v-show="food.count"
        @click.stop="CountFn(0)"
      >
        ㊀
      </div>
  </transition>
    <div 
      class="cart-count" 
      v-show="food.count"
    >
      {{ food.count }}
    </div>
    <div 
      class="iconfont icon-add_circle" 
      @click.stop="CountFn(1)"
    >
      ㊉
    </div>
  </div>
</template>

<script>
export default {
  props:{
    food:Object
  },
  methods:{
    //如果传的值是0那就是减，1则是加：事物的数量
    CountFn(val) {
      if (val) {
      this.$store.commit('increment_food_count', this.food)
      }else {
        this.$store.commit('decrement_food_count', this.food)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }

    .icon-remove_circle_outline{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: green;
    
      &.move-enter-active, &.move-leave-active{
        transition: all .3s;
      }
      &.move-enter, &.move-leave-to{
        opacity: 0;
        transform: translateX(15px) rotate(180deg);
      }
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .icon-add_circle{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: green;
    }
  }
</style>
