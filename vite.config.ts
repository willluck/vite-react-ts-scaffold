import {defineConfig} from 'vite';
import path from 'path';
import type {UserConfig} from 'vite';
import viteEslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';

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
            viteImagemin({
                // 无损压缩配置，无损压缩下图片质量不会变差
                optipng: {
                    optimizationLevel: 7
                },
                // 有损压缩配置，有损压缩下图片质量可能会变差
                pngquant: {
                    quality: [0.8, 0.9]
                },
                // svg 优化
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox'
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false
                        }
                    ]
                }
            }),
            legacy({
                targets: ['defaults', 'not IE 11']
            })
        ]
    };

    if (command === 'serve') {
        commonConfig.plugins.push(
            viteEslint()
            // viteStylelint({
            //     // 对某些文件排除检查
            //     exclude: /node_modules/
            // })
        );
    }

    return commonConfig;
});
