<template>
  <div>
      <ul style="padding: 10px;border-top: 1px solid #ccc;">
        <div class="list">
          <div class="list-left"></div>
          <div class="list-middle">
            <div>
              <i>💳</i>
              <span class="middle-span">沪上阿姨奶茶，果汁，饮料，冰淇淋</span>
            </div>
            <div>
              <i>⭐⭐⭐</i>
              <span style="color:orange;font-weight: bold;">3.6 </span>
              <span>月售106单</span>
            </div>
            <div>
              <span>￥20起送/</span>
              <span>配送费约5元</span>
            </div>
          </div>
          </div>
      </ul>
  </div>
</template>
<script>
export default{

}
</script>
<style>
.list {
  display: flex;
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
</style>