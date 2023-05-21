import React from 'react';
import classnames from 'classnames';
import PageHeader from '@src/components/PageHeader';

import styles from './index.module.scss';

interface IPageContent {
    className?: string;
}

const PageContent: React.FC<React.PropsWithChildren<IPageContent>> = ({children, className}) => (
    <div className={classnames(styles.mainContent, className)}>
        <PageHeader />
        <div className={styles.content}>{children}</div>
    </div>
);

export default PageContent;
