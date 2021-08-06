import React from 'react';
// import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css'

// import { Route } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
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
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <i className="iconfont icon-ind"></i>
            }
            selectedIcon={
              <i className="iconfont icon-ind"></i>
            }
            selected={this.state.selectedTab === '/home/index'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/index',
              });
              this.props.history.push('/home/index')
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-ind"></i>
            }
            selectedIcon={
              <i className="iconfont icon-ind"></i>
            }
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === '/home/list'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/list',
              });
              this.props.history.push('/home/list')
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-ind"></i>
            }
            selectedIcon={
              <i className="iconfont icon-ind"></i>
            }
            title="资讯"
            key="Friend"
            selected={this.state.selectedTab === '/home/news'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/news',
              });
              this.props.history.push('/home/news')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-ind"></i>
            }
            selectedIcon={
              <i className="iconfont icon-ind"></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/home/profile'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/profile',
              });
              this.props.history.push('/home/profile')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

