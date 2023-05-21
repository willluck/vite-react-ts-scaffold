/**
 * @file store/global.ts
 * @author will
 * 全局store
 */
import {observable, makeObservable, action, flow} from 'mobx';
import store2 from 'store2';
import type {AxiosResponse} from 'axios';
import type {NavigateFunction} from 'react-router-dom';
import {IDataRes} from '@src/types';
import API from '@src/api';
import request from '../../request';
// import User from '../User/UserDetail';
// import type {IUser} from '../User/UserDetail';

interface IGlobal {
    // token
    token: string;
    // 用户数据
    // user: IUser;
    // 登录loading
    loginLoading: boolean;
    // 路由history
    navigate: NavigateFunction | null;
}

export interface ILoginParams {
    // 用户名称
    username: string;
    // 密码
    password: string;
}

interface ILoginRes {
    // token
    token: string;
}

export const COMMON_MESSAGE_KEY = 'commonMessageKey';

export const TOKEN_LOCAL_KEY = 'vite-react-ts-scaffold';

class Global implements IGlobal {
    token = '';

    loginLoading = false;

    // user: IUser = new User();

    navigate: NavigateFunction | null = null;

    constructor(params?: Partial<IGlobal>) {
        makeObservable(this, {
            token: observable,
            // user: observable.ref,
            loginLoading: observable,
            navigate: observable.ref,
            update: action
        });
        this.update(params);
    }

    // 更新属性方法
    update = (params?: Partial<IGlobal>) => {
        Object.assign(this, params);
    };

    // 登录
    login = flow(function* login(this: Global, params: ILoginParams) {
        try {
            this.loginLoading = true;
            const res: AxiosResponse<IDataRes<ILoginRes>> = yield request.post(API.USER.LOGIN, params);
            const {data} = res;
            const {data: resData} = data;
            if (resData) {
                const {token} = resData;
                this.token = token;
                store2(TOKEN_LOCAL_KEY, token);
            }
            return resData;
        } finally {
            this.loginLoading = false;
        }
    });
}

export default new Global();
