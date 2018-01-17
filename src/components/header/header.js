import React, { Component } from 'react';
import { Layout, Avatar, Popover, Button } from 'antd';
import { Link } from 'react-router'

const { Header } = Layout;

class HomeHeader extends Component {
  handleSignOut() {
    console.log(this.props)
    this.props.dispatch({
      type: 'shareme/r_Logout',
      payload: 'Sign Out'
    })
    console.log('Sign Out Success!')
  }
  handleGoyoLogin() {
    console.log(this.props.history)
    console.log('Go To Log in Success!')
  }
  render() {
    const user = this.props.shareme.user;
    const text = <span>{user.userName}</span>;
    const content = (
      <div>
        <p onClick={this.handleSignOut.bind(this)} >Sign Out</p>
      </div>
      );
    console.log(this.props.shareme.user)
    return (
      <Header style={{ padding: '0 25px' }} className="header">
        <div className="logo" />
        <span style={{ color: '#FFF', fontSize: '28px' }} >Share me</span>
        <span style={{ color: '#FFF', fontSize: '12px', marginLeft: '10px' }} >分享美好</span>
        {
        this.props.shareme.logstate ?
          <Popover placement="bottomRight" title={text} content={content} trigger="click">
            <Avatar
              style={{ float: 'right', marginTop: '18px' }}
              icon="user"
              title="user"
              src={user.avatar}
            />
          </Popover> :
          <Link to="/">
            <Avatar
              style={{ float: 'right', marginTop: '18px', cursor: 'pointer' }}
              icon="user"
              title="用户未登录"
              onClick={this.handleGoyoLogin.bind(this)}
            />
          </Link>
        }
      </Header>
    );
  }
}

export default HomeHeader;
