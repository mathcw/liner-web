import React from 'react'
import { DatePicker, Input, Checkbox, Menu, Rate, Pagination, Table } from 'antd';
import { useState, useRef, useEffect } from 'react'
import Link from '../NextLink'
import './Content.css'

const dataSource = [
    {
        key: '1',
        start_time: '2020-04-12',
        end_time: '2020-04-12',
        room: '内舱双人间',
        place: '内舱',
        left_a: 15,
        price: 1269,
        button: '立即绑定',
    },
];

const columns = [
    {
        title: '开始时间',
        dataIndex: 'start_time',
        key: 'start_time',
    },
    {
        title: '结束时间',
        dataIndex: 'end_time',
        key: 'end_time',
    },
    {
        title: '房型',
        dataIndex: 'room',
        key: 'room',
    },
    {
        title: '位置',
        dataIndex: 'place',
        key: 'place',
    },
    {
        title: '剩位',
        dataIndex: 'left_a',
        key: 'left_a',
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '',
        dataIndex: 'button',
        key: 'button',
    },
];
export default function LeftContent() {
    const menuRef = useRef(null)
    const [menuArr, setMenuArr] = useState([])
    const [current, setcurrent] = useState(1)
    function scrollToView(children) {
        children.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        setMenuArr(menuRef.current.children)
        console.log(menuRef.current.children[0].getAttribute('id'))
    })
    return (
        <div className="route_detail_content">
            <div className="left_content" ref={menuRef}>
                {/* 产品信息 */}
                <div className="information" >
                    <div className="top">
                        <div className="title">
                            <span className="a">诺唯真游轮</span>
                        </div>
                        <div className="image">
                            <img src={'/back.png'} style={{ width: '120px' }} />
                        </div>
                    </div>
                    <div className="information_content">
                        诺唯真游轮（Norwegian Cruise Line）作为游轮行业最富创新力的品牌，在过
                        去50年品牌历史中不断地突破着对于游轮的传统定义。诺唯真游轮通过为客人在海
                        上提供自由和随心所欲的旅游体验，颠覆了传统的游轮旅游。再加上无与伦比的娱
                        乐和餐饮体验，将完美地满足中国年轻一代爱好邮轮旅游人群的需求。今天，诺
                        </div>
                </div>
                {/* 行程详情 */}
                <div className="travel_detail" >
                    <div className="top">
                        <div className="title">
                            <span className="a">行程详情</span>
                        </div>
                        <div className="image">
                            <img src={'/back.png'} style={{ width: '120px' }} />
                        </div>
                    </div>
                    <div className="teavel_content">
                        <div className="left">
                            <div className="left_mation">
                                <span className="front">持续时间：</span>
                                <span className="later">4天3晚</span>
                            </div>
                            <div className="left_mation">
                                <span className="front">交通信息：</span>
                                <span className="later">飞机</span>
                            </div>
                            <div className="left_mation">
                                <span className="front">出发地点：</span>
                                <span className="later">北京机场</span>
                            </div>
                            <div className="left_mation">
                                <span className="front">目  的 地：</span>
                                <span className="later">赫瓦尔</span>
                            </div>
                            <div className="left_mation">
                                <span className="front">年龄范围：</span>
                                <span className="later">10 ~ 45 周岁</span>
                            </div>
                            <div className="left_mation">
                                <span className="front">所在国家：</span>
                                <span className="later">克罗地亚</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="feature">
                                <div className="head">
                                    <img src={'/point.png'} />
                                    <span className="text">产品特色</span>
                                </div>
                                <div className="content">
                                    精选国航直飞航班，可配全国联运！海上八天七夜航行，在灿烂的阳光下享受
                                    \地中海美景！巴塞罗那素有欧洲之花的美称，又是加泰罗尼亚文化的发祥地！
                                    \在马略卡岛的精致小镇——帕尔马
                                    </div>
                                <div className="pro_detail">
                                    <div className="among">
                                        <div className="title">
                                            <span className="num">1</span>
                                            <span className="text">杜布罗夫尼克</span>
                                        </div>
                                        <div className="tdc">
                                            <div className="part">
                                                <img src={'/time2.png'} />
                                                <div className="text">上午8:00-下午4:00</div>
                                            </div>
                                            <div className="part">
                                                <img src={'/place.png'} />
                                                <div className="text">北京-西雅图</div>
                                            </div>
                                            <div className="part">
                                                <img src={'/catering.png'} />
                                                <div className="text">早餐、晚餐</div>
                                            </div>

                                        </div>
                                        <div className="image">
                                            <img src={'/img.png'} />
                                        </div>
                                        <div className="pic_describe">
                                            凌晨搭乘国际航班直飞意大利时尚之都——米兰，导游接机后游览意大利时尚之都米兰
                                            ，座主导意大利经济、工业的现代都市，现今已是欧洲最受瞩目的城市之一；参观
                                            Duomo di milano米兰大教堂★（入内）
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 产品包含 */}
                <div className="product_include" >
                    <div className="top">
                        <div className="title">
                            <span className="a">产品包含</span>
                        </div>
                        <div className="image">
                            <img src={'/back.png'} style={{ width: '120px' }} />
                        </div>
                    </div>
                    <div className="pro_information">
                        <div className="head">
                            <img src={'/right.png'} />
                            <span className="text">税费</span>
                        </div>
                        <div className="content">
                            行程中所列航班经济舱团体机票及相关税费，团队机票不允许改名、退票、
                            改票、改期，如果游客因个人原因临时放弃机票的，机票费用均不予退还；
                            （不含航空公司临时新增的燃油附加费）
                            </div>
                    </div>
                    <div className="pro_information">
                        <div className="head">
                            <img src={'/close.png'} />
                            <span className="text">税费</span>
                        </div>
                        <div className="content">
                            行程中所列航班经济舱团体机票及相关税费，团队机票不允许改名、退票、
                            改票、改期，如果游客因个人原因临时放弃机票的，机票费用均不予退还；
                            （不含航空公司临时新增的燃油附加费）
                            </div>
                    </div>
                </div>
                {/* 班期房型 */}
                <div className="schedule_room" >
                    <div className="top">
                        <div className="title">
                            <span className="a">班期房型</span>
                        </div>
                        <div className="image">
                            <img src={'/back.png'} style={{ width: '120px' }} />
                        </div>
                    </div>
                    <div className="table">
                        <Table dataSource={dataSource} columns={columns} pagination={false} />
                    </div>
                </div>
                {/* 其他航线 */}
                <div className="other_route" >
                    <div className="row">
                        <div className="top">
                            <div className="title">
                                <span className="a">其他航线</span>
                            </div>
                            <div className="image">
                                <img src={'/back.png'} style={{ width: '120px' }} />
                            </div>
                        </div>
                        <div className="content" style={{ padding: 0 }}>
                            <div className="chunk">
                                <Link href="">
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
                                <Link href="">
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
                                <Link href="">
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
                        </div>
                        <div style={{ marginTop: '15px', padding: 0 }} className="content">
                            <div className="chunk">
                                <Link href="">
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
                                <Link href="">
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
                                <Link href="">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_content">
                <div className='row' style={{ background: current == 0 ? "rgba(255, 248, 248, 1)":""}} onClick={() => {
                    scrollToView(menuArr[0])
                    setcurrent(0)
                }}>产品信息</div>
            <div className='row' style={{ background: current == 1 ? "rgba(255, 248, 248, 1)" : "" }} onClick={() => {
                scrollToView(menuArr[1])
                setcurrent(1)
            }}>行程详情</div>
            <div className='row' style={{ background: current == 2 ? "rgba(255, 248, 248, 1)" : "" }} onClick={() => {
                scrollToView(menuArr[2])
                setcurrent(2)
            }}>产品包含</div>
            <div className='row' style={{ background: current == 3 ? "rgba(255, 248, 248, 1)" : "" }} onClick={() => {
                scrollToView(menuArr[3])
                setcurrent(3)
            }}>班期房型</div>
            <div className='row' style={{ background: current == 4 ? "rgba(255, 248, 248, 1)" : "" }} onClick={() => {
                scrollToView(menuArr[4])
                setcurrent(4)
            }}>其他航线</div>
        </div>
        </div >
    )
}
