module.exports={
    // 代理
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                ws: false,
                changeOrigin: true
            },
        }
    }
}