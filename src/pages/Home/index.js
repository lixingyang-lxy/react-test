import React from 'react';
// import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css'
// TabBar 数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }
  renderTabBarItems() {
    return tabItems.map(item => {
      return <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`}></i>}
        selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          });
          this.props.history.push(item.path)
        }}
      ></TabBar.Item>
    })
  }
  render() {
    return (
      <div className="home">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent="true"
        >
          {this.renderTabBarItems()}
        </TabBar>
      </div>
    );
  }
}

