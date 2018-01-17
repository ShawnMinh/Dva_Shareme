import Mock from 'mockjs';

const Random = Mock.Random;

const clientMockInit = () => {
  Mock.mock('http://asdsadsa.com', {
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'username|': '@cname',
      'password|000000-999999': 1,
      'username2|': Random.cname()
    }]
  })
};

export default clientMockInit;
