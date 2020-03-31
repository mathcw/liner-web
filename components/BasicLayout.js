import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '/static/css/index.css'
const { Header, Content, Footer } = Layout;
import Head from 'next/head'
import Link from '../components/NextLink'


export default (props) => {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div style={{ width: '100%', height: '3rem', background: '#FA6767' }}></div>
            <div style={{ width: '100%', background: '#fff', paddingLeft: '8%', display: 'flex' }}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ border: '0', width: '70%' }}
                >
                    <Menu.Item key="1" ><Link href="/index"><a>首页</a></Link></Menu.Item>
                    <Menu.Item key="2"><Link href="/about"><a>全部航线</a></Link></Menu.Item>
                        <Menu.Item key="3">床票套餐</Menu.Item>
                        <Menu.Item key="4">邮轮公司</Menu.Item>
                        <Menu.Item key="3">目的地</Menu.Item>
                </Menu>
                        <div style={{ height: '3rem', width: '30%', display: 'flex', alignItems: 'center', background: '#fff', lineHeight: '3rem' }}>
                            <div style={{ position: 'absolute' }}>
                                <img src={'/tell.png'} />
                                <span style={{ fontSize: '0.8rem', color: '#000000', marginLeft: '1rem' }}>致电我们：010 249 8989</span>
                            </div>
                        </div>
            </div>
                    <Content >
                        <div className="content">{props.children}</div>
                        <style jsx>
                            {`
                    .content{
                        background:#fff;
                        min-height:100vh;
                    }
                `}</style>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    )
}
