import {defineConfig} from 'vite';
import path from 'path';
import type {UserConfig} from 'vite';
import viteEslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// 图片压缩插件
// import viteImagemin from 'vite-plugin-imagemin';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
// 打包分析插件
// import {visualizer} from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
    const commonConfig: UserConfig = {
        server: {
            port: 3030,
            open: 'http://localhost:3030/login',
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:7001',
                    changeOrigin: true
                }
            }
        },
        build: {
            // 采用esbuild进行build
            minify: 'esbuild',

            rollupOptions: {
                output: {
                    // 拆包
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                        'antd-library': ['antd']
                    },
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
                }
            }
        },
        css: {
            modules: {
                generateScopedName: '[local]_[hash:base64:5]'
            },
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
                    })
                ]
            }
        },
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src')
            }
        },
        plugins: [
            react(),
            svgr(),
            // 图片压缩配置，可以看情况使用，对于多图场景项目，一般B端项目一般不一定一定需要
            // viteImagemin({
            //     // 无损压缩配置，无损压缩下图片质量不会变差
            //     optipng: {
            //         optimizationLevel: 7
            //     },
            //     // 有损压缩配置，有损压缩下图片质量可能会变差
            //     pngquant: {
            //         quality: [0.8, 0.9]
            //     },
            //     // svg 优化
            //     svgo: {
            //         plugins: [
            //             {
            //                 name: 'removeViewBox'
            //             },
            //             {
            //                 name: 'removeEmptyAttrs',
            //                 active: false
            //             }
            //         ]
            //     }
            // }),
            legacy({
                targets: ['last 2 version', 'not dead', 'not IE 11']
            })
            // 打包分析插件
            // visualizer() as any
        ]
    };

    if (command === 'serve') {
        commonConfig.plugins.push(viteEslint());
    }

    return commonConfig;
});
