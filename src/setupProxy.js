const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {  //`api`是需要转发的请求
            target: 'http://192.168.0.106:8000',  // 这里是接口服务器地址
            changeOrigin: true,
            secure:false,
            pathRewrite:{
                "^/api":'/'
            }
        })
    )
}