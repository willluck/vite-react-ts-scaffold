import {Suspense} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {CommonLayout, PageLoading} from './components';
import RootRoute from './rootRoute';
import {coreConfig, boundaryRouters} from './routes';

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Suspense fallback={<PageLoading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<RootRoute />}>
                            {coreConfig.map(({path, element}) => {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<CommonLayout key={path}>{element}</CommonLayout>}
                                    />
                                );
                            })}
                            {boundaryRouters.map(({path, element}) => {
                                return <Route key={path} path={path} element={element} />;
                            })}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ConfigProvider>
    );
};

export default App;
