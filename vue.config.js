// vue.config.js
module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/ceisum/'
        : '/',//自定义二级文件路径
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "地理信息三维系统";
            return args;
        })
    },
    //outputDir: "output",//自定义发布文件路径
    productionSourceMap: false,
    devServer: {
        //proxy: 'http://localhost:4000',//配置本地dev跨域 所有的请求

        // proxy: { //更细粒度的控制跨域
        //     '/api': {
        //       target: '<url>',
        //       ws: true,
        //       changeOrigin: true
        //     },
        //     '/foo': {
        //       target: '<other_url>'
        //     }
        //   }
    }
}