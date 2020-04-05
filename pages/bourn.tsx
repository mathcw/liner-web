import Layout from '../components/BasicLayout';
import '/static/css/index.css'
import { DatePicker, Input, Checkbox, Menu, Rate, Pagination } from 'antd';
import Link from '../components/NextLink'


export default function about() {
    return (
        <Layout>
            {/* 顶部图片 */}
            <div className="route_top">
                <div className='route_back'></div>
                <div className="route_vague"></div>
                <div className="text">
                    <span className="all">全部航信</span>
                    <span className="main">主页 / 游轮公司 </span>
                </div>
            </div>
            {/* 下面内容部分 */}
            <div className="row">
                <div className="title">
                    <span className="a">亚洲</span>
                </div>
                <div className="image">
                    <img src={'/back.png'} />
                </div>
                <div className="content">
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div style={{ marginTop: '15px' }} className="content">
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="title">
                    <span className="a">欧洲</span>
                </div>
                <div className="image">
                    <img src={'/back.png'} />
                </div>
                <div className="content">
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div style={{ marginTop: '15px' }} className="content">
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp">
                                    <span className="city">美国</span>
                                    <span className="price">起价:￥200</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}