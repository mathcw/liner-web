import Layout from '../components/BasicLayout';
import '/static/css/index.css'
import { DatePicker, Input, Checkbox, Menu, Rate, Pagination } from 'antd';
import Link from '../components/NextLink'

const { RangePicker } = DatePicker;
const { Search } = Input;
const options = [
  { label: '不限', value: 'buxian' }
];
export default function about() {
  return (
    <Layout>
      {/* 顶部图片 */}
      <div className="route_top">
        <div className='route_back'></div>
        <div className="route_vague"></div>
        <div className="text">
          <span className="all">全部航信</span>
          <span className="main">主页 / 航线 </span>
        </div>
      </div>
      {/* 下面内容部分 */}
      <div className="route_main">
        {/* 左侧搜索内容 */}
        <div className="route_left">
          <div className="key_name">
            <div className="text">名称关键字</div>
            <div className="content">
              <Search style={{ width: 180 }} placeholder="搜索关键字" onSearch={value => console.log(value)} enterButton />
            </div>
          </div>
          <div className="go_city">
            <div className="text">出发城市</div>
            <div className="content">
              <ul>
                <li><Checkbox>北京(420)</Checkbox></li>
                <li><Checkbox>北京(420)</Checkbox></li>
                <li><Checkbox>北京(420)</Checkbox></li>
                <li><Checkbox>北京(420)</Checkbox></li>
                <li><Checkbox>北京(420)</Checkbox></li>
              </ul>
            </div>
          </div>
          <div className="go_date">
            <div className="text">出发日期</div>
            <div className="content"><RangePicker /></div>
          </div>
        </div>
        {/* 右侧内容显示区域 */}
        <div className="route_right">
          <div className="right_top">
            <div className="cloumn">
              <span className="type">产品类型</span>
              <div className="checkbox">
                <span><Checkbox.Group options={options} defaultValue={['buxian']} /></span>
                <span><Checkbox>航线</Checkbox></span>
              </div>
              <div className="more">更多 &nbsp;&nbsp;></div>
            </div>
            <div className="cloumn">
              <span className="type">目的地</span>
              <div className="checkbox">
                <span><Checkbox.Group options={options} defaultValue={['buxian']} /></span>
                <span><Checkbox>航线</Checkbox></span>
              </div>
              <div className="more">更多 &nbsp;&nbsp;></div>
            </div>
            <div className="cloumn">
              <span className="type">出发地</span>
              <div className="checkbox">
                <span><Checkbox.Group options={options} defaultValue={['buxian']} /></span>
                <span><Checkbox>航线</Checkbox></span>
              </div>
              <div className="more">更多 &nbsp;&nbsp;></div>
            </div>
            <div className="cloumn">
              <span className="type">邮轮公司</span>
              <div className="checkbox">
                <span><Checkbox.Group options={options} defaultValue={['buxian']} /></span>
                <span><Checkbox>航线</Checkbox></span>
              </div>
              <div className="more">更多 &nbsp;&nbsp;></div>
            </div>
            <div className="choice">
              <span className="type">您已选择</span>
              <div className="opt">
                <p>欧洲</p>
                <p className="close">x</p>
              </div>
            </div>
          </div>
          <div className="right_bottom">
            <div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ border: '0', width: '70%' }}
              >
                <Menu.Item key="1">名称</Menu.Item>
                <Menu.Item key="2">价钱</Menu.Item>
                <Menu.Item key="3">销量</Menu.Item>
                <Menu.Item key="4">评分</Menu.Item>
                <Menu.Item key="5">新品</Menu.Item>
              </Menu>
              <div style={{ display: 'flex', position: 'absolute', right: '0' }}>
                <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.65)', lineHeight: '16px' }}>查看方式:</span>
                <img style={{ height: '18px', width: '18px', marginLeft: '5px' }} src={'/list.png'} />
                <img style={{ height: '18px', width: '18px', marginLeft: '5px' }} src={'/menu.png'} />
              </div>
            </div>
            <div className="row" style={{ marginTop: '-30px' }}>
              <div className="content" style={{ padding: '0' }}>
                <div className="chunk">
                  <Link href="/route_details">
                    <a>
                      <div className="top">
                        <img src={'/pic.png'} />
                        <div className="cp">
                          <span className="time">4天3夜</span>
                        </div>
                      </div>
                      <div className="bottom">
                        <div>
                          <span className="adress">恋爱中的巴黎</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', marginTop: '5px' }}>
                          <div style={{ display: 'flex' }}>
                            <Rate style={{ color: '#76C8E6', fontSize: '15px' }} allowHalf disabled defaultValue={2.5} />
                            <span className="star">2.5星</span>
                          </div>
                          <span className="buck">￥2600</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="chunk">
                  <div className="top">
                    <img src={'/pic.png'} />
                    <div className="cp">
                      <span className="time">4天3夜</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <div>
                      <span className="adress">恋爱中的巴黎</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', marginTop: '5px' }}>
                      <div style={{ display: 'flex' }}>
                        <Rate style={{ color: '#76C8E6', fontSize: '15px' }} allowHalf disabled defaultValue={2.5} />
                        <span className="star">2.5星</span>
                      </div>
                      <span className="buck">￥2600</span>
                    </div>
                  </div>
                </div>
                <div className="chunk">
                  <div className="top">
                    <img src={'/pic.png'} />
                    <div className="cp">
                      <span className="time">4天3夜</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <div>
                      <span className="adress">恋爱中的巴黎</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', marginTop: '5px' }}>
                      <div style={{ display: 'flex' }}>
                        <Rate style={{ color: '#76C8E6', fontSize: '15px' }} allowHalf disabled defaultValue={2.5} />
                        <span className="star">2.5星</span>
                      </div>
                      <span className="buck">￥2600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page">
            <Pagination className="pg" defaultCurrent={1} total={100} />
          </div>
        </div>


      </div>

    </Layout>
  );
}