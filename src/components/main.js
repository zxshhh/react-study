import React from 'react';
import ReactDom from 'react-dom';
import {Route,Router,Link,hashHistory,IndexRoute} from 'react-router';

//引入antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

//引入单个页面（嵌套的子页面）
import myIntroduce from './introduce'



let routeMap = {
  '/myIntroduce': '0'
}


//配置导航
class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      current: '',
      username: ''
    })
  }

  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  componentWillMount(){
    var route = this.props.location.pathname;
    this.setState({
      current: routeMap[route] || '0'
    })
  }

  componentDidMount() {
    this.setState({
      username: 'zxs'
    })
  }

  render() {
    return (
      <div>
        <div id='leftMenu'>
          <img src='./images/logo.png' width='50' id='logo' />
          <Menu theme='dark'
            onClick={this.handleClick.bind(this)}
            style={{ width: 256 }}
            defaultSelectedKeys={[this.state.current]}
            defaultOpenKeys={['sub1']}
            mode='inline'
          >
            <Menu.Item key='0'><Link to='/myIntroduce'><Icon type='mail'>我没有子菜单</Icon></Link></Menu.Item>
            <SubMenu key='sub1' title={<span></span>}></SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}

// 配置路由
ReactDom.render((
  <Router history={hashHistory} >
      <Route path="/" component={Sider}>
          <IndexRoute component={myIntroduce} />
          <Route path="myIntroduce" component={myIntroduce} />
          {/* <Route path="myTable" component={myTable} />
          <Route path="myForm" component={myForm} />
          <Route path="myProgress" component={myProgress} />
          <Route path="myCarousel" component={myCarousel} /> */}
      </Route>
  </Router>
), document.getElementById('app'));
