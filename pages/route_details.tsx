import Layout from '../components/BasicLayout';
import '/static/css/index.css'
import { DatePicker, Input, Checkbox, Menu, Rate, Pagination, Table } from 'antd';
import Link from '../components/NextLink'
import Content from '../components/routeDetails/Content.jsx'

const { RangePicker } = DatePicker;
const { Search } = Input;
const options = [
    { label: '不限', value: 'buxian' }
];

export default function about() {
    return (
        <Layout>
            {/* 顶部图片 */}
            <div className="route_detail_top">
                <div className='route_details_back'>
                    <img src="/route_detail_back.png"/>
                </div>
                <div className="route_vague"></div>
                <div className="text">
                    <span className="title">诺唯真游轮</span>
                    <span className="lable">记忆点源于与众不同，专业感源于整齐划一 </span>
                    <div className="bt_content">
                        <div className="left">
                            <div className="part" style={{ borderRight: '1px solid #fff', paddingRight: '20px' }}>
                                <Rate style={{ color: '#fff', fontSize: '15px' }} allowHalf disabled defaultValue={2.5} />
                                <span className="star">2.5星</span>
                            </div>
                            <div className="part" style={{ borderRight: '1px solid #fff', paddingRight: '20px' }}>
                                <img src={'/attention.png'} />
                                <span className="star">198 关注</span>
                            </div>
                            <div className="part" style={{ borderRight: '1px solid #fff', paddingRight: '20px' }}>
                                <img src={'/time.png'} />
                                <span className="star">4天3夜</span>
                            </div>
                            <div className="part">
                                <img src={'/price.png'} />
                                <span className="star">￥2490/起</span>
                            </div>
                        </div>
                        <div className="right">
                            <span className="m">￥</span>
                            <span className="c">7802</span>
                            <span className="c">起/人</span>
                        </div>
                    </div>

                </div>


            </div>
            {/* 中间部分 */}
            <div className="route_detail_middle">主页/目的地/美国/航线/游轮</div>
            {/* 内容区域 */}
            <Content ></Content>
        </Layout>
    );
}