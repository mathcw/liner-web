import Layout from '../components/BasicLayout'
import Link from '../components/NextLink'
import Head from 'next/head'
import '/static/css/index.css'
import { Select, Input, DatePicker, Button, Rate } from 'antd';


const { Option } = Select;
export default function Blog() {
  return (
    <Layout>
      <div>
        {/* 顶部搜索 */}
        <div style={{ position: 'relative' }}>
          <div className='top_back'></div>
          <div className="top_vague"></div>
          <div className="container">
            <div className="top_title">与永恒号一起游览大海</div>
            <div className="top_explain">追随梦想中的国度，一起探索未知</div>
            <div className="input_find">
              <div>
                <Select defaultValue="航线" style={{ width: 160 }}>
                  <Option value="巴黎">巴黎</Option>
                </Select>
              </div>
              <div>
                <Input placeholder="选择出发地" />
                <Input placeholder="选择目的地" />
              </div>
              <div>
                <DatePicker className="data" placeholder="请输入日期" />
              </div>
              <div>
                <Button className="btn">搜索</Button>
              </div>
            </div>
          </div>
        </div>
        {/* 热门目的地 */}
        <div className="row">
          <div className="title">
            <span className="a">热门目的地</span>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2%' }}>
              <Link href=""><a>
                <span className="more">更多</span>
                <img className="img" src={'/more.png'} />
              </a></Link>
            </div>
          </div>
          <div className="image">
            <img src={'/bottom_row.png'} />
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
        {/* 邮轮公司 */}
        <div className="row">
          <div className="title">
            <span className="a">邮轮公司</span>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2%' }}>
              <Link href=""><a>
                <span className="more">更多</span>
                <img className="img" src={'/more.png'} />
              </a></Link>
            </div>
          </div>
          <div className="image">
            <img src={'/bottom_row.png'} />
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
          <div style={{marginTop:'15px'}} className="content">
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
        {/* 特价航线 */}
        <div className="row">
          <div className="title">
            <span className="a">特价航线</span>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2%' }}>
              <Link href=""><a>
                <span className="more">更多</span>
                <img className="img" src={'/more.png'} />
              </a></Link>
            </div>
          </div>
          <div className="image">
            <img src={'/bottom_row.png'} />
          </div>
          <div className="content">
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
          <div style={{ marginTop: '15px' }} className="content">
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
        {/* 关于我们 */}
        <div className="row">
          <div className="title">
            <span className="a">关于我们</span>
          </div>
          <div className="image">
            <img src={'/bottom_row.png'} />
          </div>
          <div className="text">
            诺唯真游轮（Norwegian Cruise Line）作为游轮行业最富创新力的品牌，
            我报别线地几计门将交便领结向还成思过文段张研红油细低往称的五八又走
            关厂得亲场管积分你造她造严身眼复府增认严形来识计文高。清天美起不必
            后山报与头样后本无报都立率点加大想直最速然色维口他中前区阶品马严转
            处圆需万他里层矿地无油术此克感小准长度然说开。属际研级石权特养委在
            指多导声国改放革及价组离斗其下斯委收业低共铁清展他京白家至往后众行
            农构青出理山反人府角了金养子极办最飞天江林不科专。理适律存发济江律
            声方再务主被或入速都确口调相电对传或元当联深低装部应据日进酸整数上
            方该由平场走难性省该年物民族向制事水信参压政效边求。
          </div>
        </div>
        {/* 底部 */}
        
      </div>

    </Layout>
  );
}