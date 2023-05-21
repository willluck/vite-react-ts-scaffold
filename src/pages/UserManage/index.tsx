import {observer} from 'mobx-react';
import {Table, Form, Row, Col, Input, Button} from 'antd';
import {PageContent} from '@src/components';

import styles from './index.module.scss';

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'ID'
    },
    {
        title: '用户名称',
        dataIndex: 'username',
        key: 'username'
    },
    {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar'
    },
    {
        title: '个性签名',
        dataIndex: 'signature',
        key: 'signature'
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
    }
];

const UserManage = observer(() => {
    return (
        <PageContent>
            <section className={styles.searchContent}>
                <Form form={form}>
                    <Row gutter={24}>
                        <Col span={4}>
                            <Form.Item name="username" label="用户名称">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button type="primary">查询</Button>
                        </Col>
                    </Row>
                </Form>
            </section>

            <section className={styles.tableContent}>
                <Table
                    dataSource={[]}
                    columns={columns}
                    size="middle"
                    loading={false}
                    rowKey="id"
                    // pagination={{
                    //     current: pageNo,
                    //     pageSize,
                    //     total: totalCount,
                    //     position: ['bottomRight'],
                    //     showSizeChanger: true,
                    //     showQuickJumper: true
                    // }}
                />
            </section>
        </PageContent>
    );
});

export default UserManage;
