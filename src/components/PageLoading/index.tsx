import {Spin} from 'antd';

import styles from './index.module.scss';

const PageLoading = () => {
    return (
        <div className={styles.loadingContainer}>
            <Spin />
        </div>
    );
};

export default PageLoading;
