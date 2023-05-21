import {Layout} from 'antd';
import styles from './index.module.scss';

const {Header} = Layout;

const CommonLayoutHeader = () => (
    <Header className={styles.header}>
        <div className={styles.title}>vite-react-ts-scaffold</div>
    </Header>
);

export default CommonLayoutHeader;
