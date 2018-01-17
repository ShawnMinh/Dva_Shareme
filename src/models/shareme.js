import * as testmock from '../services/testmock';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'shareme',

  state: {
    dlorzc: true,
    logstate: true,
    user: {
      userName: 'shawn',
      password: '123',
      power: '0',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      remember: false
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      testmock.get({}, {
        errorNotification: (args) => {
          console.log(args); //eslint-disable-line
        },
        successNotification: 'Successful' // String or Function
      }).then((d) => {
        console.log(d.data,12132); // eslint-disable-line
       // dispatch({ type: 'r_setDataSource', payload: { test: d.data.tests } });
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *e_jumpjump({ payload }, { put }) {
      yield put(routerRedux.push({
        pathname: payload.path
      }))
    }
  },
  reducers: {
    r_setDataSource(state, action) {
      return { ...state, ...action.payload };
    },
    r_Changed_lorzc(state, { payload: dlorzc }) {
      return { ...state, ...dlorzc }
    },
    r_Logout(state) { // 退出登录
      state.logstate = false;
      Object.keys(state.user).map((item) => {
        state.user[item] = '';
        return item;
      })
      state.user.avatar = '';
      console.log(state.user)
      return { ...state }
    },
    r_login(state, { payload: { user } }) {
      if (user.userName !== 'shawn' || user.password !== '123') {
        let logstate = false;
        return { ...state, logstate }
      }
      state.user.userName = user.userName;
      state.user.password = user.password;
      state.user.remember = user.remember;
      state.user.avatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
      state.logstate = true;
      return { ...state }
    }
  },

};
