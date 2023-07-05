<template>
  <div class="skeleton">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.skeleton{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .skeleton:empty{
      background-color: #f0ffff;
    }
    .skeleton:empty::after{
			content: '';
			display: block;
			width: 100%;
			height: 100%;
      background: linear-gradient(85deg,#f0ffff 25%,#c8c8c8 37%,#f0ffff 63%);
			transform: translateX(-100%);
			animation: loading 1.4s infinite;
    }
    @keyframes loading{
      100%{
        transform: translateX(100%);
      }
    }
</style>