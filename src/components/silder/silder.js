import React, { Component } from 'react';
import { Layout, Menu, Icon, } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class HomeSilder extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item style={{ marginTop: 0 }} key="1">
            <Icon type="user" />
            <span>我的空间</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="message" />
            <span>即时聊天</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="pie-chart" />
            <span>用户分布</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="team" /><span>我的团队</span></span>}
          >
            <Menu.Item key="4">Team 1</Menu.Item>
            <Menu.Item key="5">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <Icon type="calendar" />
            <span>日程安排</span>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={<span><Icon type="global" /><span>网络资源</span></span>}
          >
            <Menu.Item key="7">图片资源</Menu.Item>
            <Menu.Item key="8">小说资源</Menu.Item>
            <Menu.Item key="9">视频资源</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="appstore-o" /><span>小功能</span></span>}
          >
            <Menu.Item key="10">快递查询</Menu.Item>
            <Menu.Item key="11">天气查询</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default HomeSilder;
