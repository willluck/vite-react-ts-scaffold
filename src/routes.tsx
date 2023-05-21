import {lazy} from 'react';
import {Navigate} from 'react-router-dom';

const Login = lazy(() => import('@src/pages/Login'));
const UserManage = lazy(() => import('@src/pages/UserManage'));

export interface IRoutesItem {
    // 路由path
    path: string;
    // 页面
    element: React.ReactNode;
    // 面包屑
    breadcrumb?: string;
}

// 登录页路由
export const ROUTER_LOGIN = '/login';

// 路由核心数据
export const coreConfig = [
    {
        path: '/userManage',
        element: <UserManage />,
        breadcrumb: '用户管理'
    }
];

// 边界路由
export const boundaryRouters: IRoutesItem[] = [
    {
        path: '/',
        element: <Navigate to={ROUTER_LOGIN} />
    },
    {
        path: '*',
        element: <Login />
    },
    {
        path: ROUTER_LOGIN,
        element: <Login />
    }
];
