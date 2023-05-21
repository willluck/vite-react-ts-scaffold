import {Layout} from 'antd';
import Sider from './Sider';
import Content from './Content';
import Header from './Header';

import styles from './index.module.scss';

const CommonLayout: React.FC<React.PropsWithChildren> = ({children}) => (
    <Layout className={styles.mainContent}>
        <Header />
        <Layout>
            <Sider />
            <Content>{children}</Content>
        </Layout>
    </Layout>
);

export default CommonLayout;
