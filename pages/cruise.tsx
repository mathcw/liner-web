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
                    <span className="a" style={{fontSize:'28px'}}>国内</span>
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
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
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
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="title">
                    <span className="a" style={{fontSize:'28px'}}>境外</span>
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
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
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
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="chunk">
                        <Link href="">
                            <a>
                                <img src={'/pic.png'} />
                                <div className="vague"></div>
                                <div className="cp1">
                                    <span className="city">诺唯真游轮</span>
                                    <span className="price">时尚美食娱乐的海上乐园</span>
                                    <span className="price">旗下17艘邮轮</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}