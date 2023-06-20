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
import ajax from '@/api/ajax';

export default {
  props:['title'],
  mounted(){
    let promise = ajax('http://localhost:5000/students', {name:'wahaha', age:45})
    promise.then((res)=>console.log(res))
  },
  methods: {
  }
}
</script>
<style>
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