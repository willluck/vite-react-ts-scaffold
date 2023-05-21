import {Breadcrumb} from 'antd';
import {useLocation} from 'react-router-dom';
import {coreConfig} from '@src/routes';
import styles from './index.module.scss';

const PageHeader = () => {
    const location = useLocation();

    const localRoute = coreConfig.find(item => item.path === location.pathname);

    return (
        <div className={styles.mainContent}>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <div className={styles.pageTitle}>{localRoute?.breadcrumb}</div>
        </div>
    );
};

export default PageHeader;
