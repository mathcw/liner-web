import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default (props) => {
    return (
        <Layout>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <img src="http://www.66cruises.com/Content/Images/Index_Top.jpg" />
                <Menu
                    theme='dark'
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </div>
            <Content style={{ padding: '0 200px 0 200px' }}>
                <div className="content">{props.children}</div>
                <style jsx>
                    {`
                    .content{
                        background:#fff;
                        padding:24;
                        min-height:100vh;
                    }
                `}</style>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}
