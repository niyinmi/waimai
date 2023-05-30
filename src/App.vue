<template>
  <div class="app">
    <router-view/>
    <FooterGuide
      v-show="$route.meta.isFooter"
    />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default{
  components:{FooterGuide},
  methods:{
    Fn(){
      this.$router.push({
        path:'/order'
      })
    }
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  background-color: #666;
}
.app{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>