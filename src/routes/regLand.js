import React, { Component } from 'react';
import { connect } from 'react-redux';  // exlint-disable-line
import Sign from '../components/SignLand/Sign';
import Register from '../components/SignLand/register';
import styles from '../routes/regLand.css';

class LogShareme extends Component {
  render() {
    return (
      <div className={styles.firstHead} >
        <h1 style={{ color: '#FFF', fontSize: '138px', margin: 0 }}>Share me <span style={{ fontSize: '50px' }}>分享美好</span></h1>
        <div className={styles.SignBox} >
          <h1 style={{ color: '#000', fontSize: '36px' }}>{this.props.shareme.dlorzc ? '登录' : '注册' }</h1>
          {
            this.props.shareme.dlorzc ? <Sign {...this.props} /> : <Register {...this.props} />
          }
        </div>
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
)(LogShareme);
