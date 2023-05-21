import {CopyrightOutlined, GithubOutlined} from '@ant-design/icons';
import {Space, Layout} from 'antd';

import styles from './index.module.scss';

const {Footer} = Layout;

const PageHeader = () => {
    return (
        <Footer className={styles.loginFooter}>
            <Space size={40} className={styles.loginFooterTitle}>
                <span>Author by willGHY</span>
                <GithubOutlined />
                <span>Design by Ant Design</span>
            </Space>
            <div>
                <CopyrightOutlined className={styles.copyIcon} />
                2022 willGHY-DEMO设计出品
            </div>
        </Footer>
    );
};

export default PageHeader;
