<template>
  <div class="warningBox">
    <div class="box">
      <img src="https://img.ixintu.com/download/jpg/202002/3a60a396c2d5ff5c40f3c1750fb6a1f2.jpg!con0" alt="back">
      <div class="confirmBox">
        <span>{{ type }}</span>
        <h4>{{ text }}</h4>
        <div class="button">
          <div class="cancel" @click="cancelFn" v-if="show">取消</div>
          <div class="confirm" @click="confirmFn">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {'text':String, 'type':String, 'show': [String, Boolean]},
  methods: {
    confirmFn() {
      this.$emit('confirmE')
    },
    cancelFn() {
      this.$emit('cancelE')
    },
  }
}
</script>
<style scoped lang="less">
.warningBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #aaaaaa9d;
  z-index: 999;

  .box {
    position: relative;
    overflow: hidden;
    align-self: center;
    width: 230px;
    height: 200px;
    border-radius: 8px;

    img {
      width: 100%;
      transform: rotateY(180deg);
    }

    .confirmBox {
      position: absolute;
      bottom: 0;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      span {
        padding: 20px 20px 6px 20px;
        color: #ffffff;
        text-shadow: 2px 2px 3px #333, 0 0 1em rgb(255, 255, 102), 0 0 0.8em #222;
        border-bottom: 1px solid #ddd;
      }

      h4 {
        text-align: center;
      }

      .button {
        display: flex;

        .cancel {
          flex: 1;
          height: 40px;
          line-height: 40px;
          background-color: #ffffffe5;
          border: 1px solid #02a774;
          border-bottom-left-radius: 8px;
          text-align: center;
          box-sizing: border-box;
        }

        .confirm {
          flex: 1;
          height: 40px;
          line-height: 40px;
          background-color: #02a774;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
}</style>