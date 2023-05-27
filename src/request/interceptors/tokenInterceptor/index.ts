/**
 * @file 通用Header添加Token
 * @author will
 */

import type {InternalAxiosRequestConfig} from 'axios';
import store2 from 'store2';
import global, {TOKEN_LOCAL_KEY} from '@src/store/global';

export default function tokenInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const newConfig: InternalAxiosRequestConfig = {...config};

    newConfig.headers.Authorization = global.token || store2.get(TOKEN_LOCAL_KEY);

    return newConfig;
}
