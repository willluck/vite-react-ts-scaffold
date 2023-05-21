/**
 * @file 登录通用error拦截
 * @author will
 */
import {AxiosResponse} from 'axios';
import {message} from 'antd';

export default function commonErrorInterceptor(res: AxiosResponse): AxiosResponse | Promise<AxiosResponse> {
    if (!res.data.success) {
        message.error(res.data.msg);
        return Promise.reject(new Error(res.data.msg));
    }

    return Promise.resolve(res);
}
