const nanoexpress = require('..');
const cors = require('../node_modules/cors');

const app = nanoexpress();

const corsConfigured = cors({
  origin: 'http://localhost:5000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
});

app.options('/*', corsConfigured);

app.get('/', async () => ({ hello: 'world' }));
app.post('/cors', async () => {
  return { cors: 'post' };
});
app.put('/cors', async () => {
  return { cors: 'put' };
});

app.listen(1234);
