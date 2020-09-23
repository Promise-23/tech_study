module.exports = {
  configureWebpack:{
    // entry: {
    //   app:['./src/main.js'] //兼容ie
    // },
    externals: {
      'BMapGL':'BMapGL'
    }
  }
}