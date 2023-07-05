<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header__title">
      <span class="header__title--text">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>

export default {
  props:['title'],
  methods: {
  }
}
</script>
<style scoped>
span{
  font-weight: normal;
}
.header{
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background-color: #02a774;
}
.header__title{
  width: 160px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header__title--text{
  font-size: 20px;
}
</style>