import fastify from 'fastify';
import ejs from 'ejs';
import cors from 'cors';
import fastifyStatic from 'fastify-static';
import fastifyResponseTime from 'fastify-response-time';
import fastifyHelmet from 'fastify-helmet';
import pointOfView from 'point-of-view';
import { join } from 'path';

import config from './config';

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

app.get('/', (req, res) => {
  res.view('index.ejs', { test: 'test' });
});

app.listen(PORT, (err, address) => {
  if (err) throw err;
  console.info(`⚡ Server is Running ${address}`);
});
