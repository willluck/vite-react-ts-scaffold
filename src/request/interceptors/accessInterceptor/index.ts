/**
 * @file 登录鉴权拦截器
 * @author will
 */
import {AxiosResponse} from 'axios';
import {message} from 'antd';
import global, {COMMON_MESSAGE_KEY} from '@src/store/Global';

export default function accessInterceptor(res: AxiosResponse): AxiosResponse | Promise<AxiosResponse> {
    if (res.data.code === 400 || res.data.code === 401) {
        if (global.navigate) {
            message.error({key: COMMON_MESSAGE_KEY, content: res.data.msg});
            global.navigate('/login');
        }
    }

    return Promise.resolve(res);
}
