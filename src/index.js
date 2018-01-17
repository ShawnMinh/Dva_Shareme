import dva from 'dva';
import './index.css';

const clientMock = require('../src/Mock/mock');

clientMock();

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/shareme'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
