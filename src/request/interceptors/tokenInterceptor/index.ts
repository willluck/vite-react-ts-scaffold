/**
 * @file 通用Header添加Token
 * @author will
 */

import {AxiosRequestConfig} from 'axios';
import store2 from 'store2';
import global, {TOKEN_LOCAL_KEY} from '@src/store/Global';

export default function tokenInterceptor(config: AxiosRequestConfig) {
    const newConfig = {
        ...config,
        headers: {
            ...config.headers,
            Authorization: global.token || store2.get(TOKEN_LOCAL_KEY)
        }
    };
    return newConfig;
}
