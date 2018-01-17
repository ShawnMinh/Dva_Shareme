import axios from 'axios';

function request(config) {
  config = { ...config };
  config.data = JSON.stringify(config.data);
  return axios.request(config);
}

function GET(url, data, config) {
  let CONF = {
    url: url,
    method: 'GET',
    data: data
  };
  return request({ ...CONF, ...config });
}

export function get() {
  return GET('http://asdsadsa.com', '', {});
}
