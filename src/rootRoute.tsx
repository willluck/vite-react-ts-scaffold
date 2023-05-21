import React, {useEffect, Suspense, useState} from 'react';
import {useNavigate, Outlet} from 'react-router-dom';
import {observer} from 'mobx-react';
// import {message} from 'antd';
import global from '@src/store/global';
import {PageLoading} from '@src/components';

const RootRoute: React.FC<React.PropsWithChildren> = observer(() => {
    // 用户信息 & 企业信息请求loading
    const [loading] = useState<boolean>(false);
    const navigate = useNavigate();
    // const {pathname} = useLocation();

    // const {userStore} = global;
    // const {currentUser} = userStore;

    useEffect(() => {
        global.update({navigate});
    }, [navigate]);

    // useEffect(() => {
    //     // 登录路由
    //     if (pathname === '/' || pathname === '/login') {
    //         setLoading(false);
    //         return;
    //     }
    //     // 不存在当前用户id
    //     if (!currentUser.userId) {
    //         setLoading(true);
    //         userStore
    //             .getUserData()
    //             .then(res => {
    //                 const {enterpriseId} = res;
    //                 // 获取全局企业信息
    //                 return globalStore.getEnterpriseData(enterpriseId);
    //             })
    //             .catch(error => {
    //                 message.error(error.message);
    //             })
    //             .finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }, [currentUser.userId, pathname, userStore]);

    // 当前用户所拥有的项目列表请求完成后才能进入页面
    return <Suspense fallback={<PageLoading />}>{loading ? <PageLoading /> : <Outlet />}</Suspense>;
});

export default RootRoute;
