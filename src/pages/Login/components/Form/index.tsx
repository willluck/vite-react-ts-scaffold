import {Form, Input, Button, message} from 'antd';
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import global from '@src/store/global';
import type {ILoginParams} from '@src/store/global';

import styles from './index.module.scss';

const LoginForm = observer(() => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const {loginLoading} = global;

    // 登录
    const onLogin = () => {
        form.validateFields().then((value: ILoginParams) => {
            global
                .login(value)
                .then(() => {
                    navigate('/userManage');
                })
                .catch(err => {
                    message.error(err.message);
                });
        });
    };

    return (
        <div className={styles.formContent}>
            <Form form={form}>
                <Form.Item name="username" rules={[{required: true, message: '请填写用户名'}]}>
                    <Input placeholder="用户名" size="large" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                    <Input.Password placeholder="密码" size="large" prefix={<LockOutlined />} />
                </Form.Item>

                <Button type="primary" className={styles.loginBtn} onClick={onLogin} loading={loginLoading}>
                    登录
                </Button>
            </Form>
        </div>
    );
});

export default LoginForm;
