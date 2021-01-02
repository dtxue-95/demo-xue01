module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
  //添加vue别名
          'vue$': 'vue/dist/vue.esm.js' 
        }
      }
  }
}
