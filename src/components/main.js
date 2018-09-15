import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Route, Router, Link, hashHistory, browserHistory, IndexRoute} from 'react-router';
//引入antd的导航组件
import { Menu, Icon, Button,Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

//引入单个页面（嵌套的子页面）
import myIntroduce from './introduce';
import myTable from './table.js';
import myForm from './form.js';
import myProgress from './progress.js';
import myCarousel from './carousel.js';


let routeMap = {
  '/myIntroduce': '0',
  '/myTable': '1',
  '/myForm': '2',
  '/myProgress': '3',
  '/myCarousel': '4'
}

//配置导航
class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: '',
      username: ''
    }
  }

  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  // componentWillMount() {
  //   var route = this.props.location.pathname;
  //   this.setState({
  //     current: routeMap[route] || '0'
  //   })
  // }

  // componentDidMount() {
  //   this.setState({
  //     username: 'zxs'
  //   })
  // }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className='logo' />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px',padding: 24, background: '#fff', minHeight: 280}}>
            content
          </Content>
        </Layout>
      </Layout>
      // <div>
      //   <div style={{width: 200}}>
      //     <img src='./images/logo.png' width='50' id='logo' />
      //     <Button type='primary' onClick={this.toggle.bind(this)} style={{marginBottom: 16}}>
      //       <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
      //     </Button>
      //     <Menu 
      //       style={{ width: 200 }}
      //       defaultSelectedKeys={['1']}
      //       defaultOpenKeys={['sub1']}
      //       mode='inline'
      //       theme='dark'
      //       inlineCollapsed={this.state.collapsed}
      //     >
      //       <Menu.Item key="1">
      //         <Icon type="pie-chart" />
      //         <span>Option 1</span>
      //       </Menu.Item>
      //       <Menu.Item key="2">
      //         <Icon type="desktop" />
      //         <span>Option 2</span>
      //       </Menu.Item>
      //       <Menu.Item key="3">
      //         <Icon type="inbox" />
      //         <span>Option 3</span>
      //       </Menu.Item>
      //       <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
      //         <Menu.Item key="5">Option 5</Menu.Item>
      //         <Menu.Item key="6">Option 6</Menu.Item>
      //         <Menu.Item key="7">Option 7</Menu.Item>
      //         <Menu.Item key="8">Option 8</Menu.Item>
      //       </SubMenu>
      //       <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
      //         <Menu.Item key="9">Option 9</Menu.Item>
      //         <Menu.Item key="10">Option 10</Menu.Item>
      //         <SubMenu key="sub3" title="Submenu">
      //           <Menu.Item key="11">Option 11</Menu.Item>
      //           <Menu.Item key="12">Option 12</Menu.Item>
      //         </SubMenu>
      //       </SubMenu>
      //       {/* <Menu.Item key='0'><Link to='/myIntroduce'><Icon type='mail'>我没有子菜单</Icon></Link></Menu.Item>
      //       <SubMenu key='sub1' title={<span><Icon type="bars" /><span>主导航</span></span>}>
      //         <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
      //         <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
      //         <Menu.Item key="3"><Link to="/myProgress">进度条</Link></Menu.Item>
      //         <Menu.Item key="4"><Link to="/myCarousel">轮播</Link></Menu.Item>
      //       </SubMenu> */}
      //     </Menu>
      //   </div>
      //   {/* <div id="rightWrap">
      //     <Menu mode="horizontal">
      //       <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
      //         <Menu.Item key="setting:1">退出</Menu.Item>
      //       </SubMenu>
      //     </Menu>
      //     <div className="right-box">
      //       {this.props.children}
      //     </div>
      //   </div> */}
      // </div>
    )
  }
}

// 配置路由
ReactDom.render((
  // <Router history={browserHistory} >
  //   <Route path="/" component={Sider}>
  //     <IndexRoute component={myIntroduce} />
  //     <Route path="myIntroduce" component={myIntroduce} />
  //     <Route path="myTable" component={myTable} />
  //     <Route path="myForm" component={myForm} />
  //     <Route path="myProgress" component={myProgress} />
  //     <Route path="myCarousel" component={myCarousel} />
  //   </Route>
  // </Router>
  <Side />
), document.getElementById('app'));
