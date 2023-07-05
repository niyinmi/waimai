const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      'api':{//匹配所有以/api开头的路径
        target:'http://localhost:4000',//代理目标的基础路径
        changeOrigin:true,//用于控制请求头中的host值，这里默认就是true
        pathRewrite:{'^/api':''},//重写路径，去掉路径中开头的/api
      }
    }
  }
})
