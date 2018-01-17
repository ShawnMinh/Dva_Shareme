import React, { Component } from 'react';
import { connect } from 'react-redux';  // exlint-disable-line
import { Layout, Breadcrumb } from 'antd';
import HomeHeader from '../components/header/header';
import HomeSilder from '../components/silder/silder';

const { Content, Footer } = Layout;

class homePage extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '5vh' }}>
          <HomeHeader {...this.props} />
        </Layout>
        <Layout style={{ minHeight: '95vh' }}>
          <HomeSilder />
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Zone</Breadcrumb.Item>
                <Breadcrumb.Item>Shawn</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Shawn is a cat.
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Shawn Zhang ©2018
          </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shareme: state.shareme
  };
}

export default connect(
    mapStateToProps,
)(homePage);
