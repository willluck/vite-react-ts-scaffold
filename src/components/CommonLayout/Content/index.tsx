import {Layout} from 'antd';
import styles from './index.module.scss';

const {Content} = Layout;

interface IPageContent {
    className?: string;
}

const CommonLayoutContent: React.FC<React.PropsWithChildren<IPageContent>> = ({children}) => (
    <Content className={styles.content}>{children}</Content>
);

export default CommonLayoutContent;
