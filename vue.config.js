const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/_variables.scss";`
            }
        }
    },
    configureWebpack: config => {
        return {
            devServer: {
                proxy: {
                    '/wp-json': {
                        target: 'http://lapshinka-api.store',
                        secure: false,
                        changeOrigin: true
                    }
                }
            }
        }
    }
})
