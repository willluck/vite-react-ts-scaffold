import styles from './index.module.scss';

const LoginHeader = () => {
    return (
        <div className={styles.top}>
            <div className={styles.title}>vite-react-ts-scaffold</div>
            <div className={styles.titleTip}>vite-react-ts-scaffold管理系统</div>
        </div>
    );
};

export default LoginHeader;
