import fastify from 'fastify';
import ejs from 'ejs';
import cors from 'cors';
import fastifyStatic from 'fastify-static';
import fastifyResponseTime from 'fastify-response-time';
import fastifyHelmet from 'fastify-helmet';
import pointOfView from 'point-of-view';
import { join } from 'path';

import config from 'config';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = fastify();
const PORT = config.port;

// Middlewares
app.use(cors());
app.register(fastifyStatic, {
  root: join(__dirname, '../public')
});
app.register(fastifyHelmet);
app.register(fastifyResponseTime);
app.register(pointOfView, {
  engine: {
    ejs
  },
  templates: 'views'
});

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.view('index.ejs', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(PORT, (err, address) => {
  if (err) throw err;
  console.info(`[${Date.now()}] ⚡ Server is Running ${address}`);
});
