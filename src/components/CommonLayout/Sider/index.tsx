import {useNavigate} from 'react-router-dom';
import {UnorderedListOutlined, TeamOutlined, BookOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import type {MenuProps} from 'antd';
import styles from './index.module.scss';

const {Sider} = Layout;

const CommonLayoutSider = () => {
    const navigate = useNavigate();

    const onClickMenu: MenuProps['onClick'] = ({key}) => {
        navigate(`/${key}`);
    };

    return (
        <Sider className={styles.siderContent}>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['userManage']}
                onClick={onClickMenu}
                items={[
                    {
                        key: 'userManage',
                        icon: <TeamOutlined />,
                        label: '用户管理'
                    },
                    {
                        key: 'typeManage',
                        icon: <UnorderedListOutlined />,
                        label: '类别管理'
                    },
                    {
                        key: 'billManage',
                        icon: <BookOutlined />,
                        label: '账单管理'
                    }
                ]}
            />
        </Sider>
    );
};

export default CommonLayoutSider;
