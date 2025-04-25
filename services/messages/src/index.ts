import { HelloWorldMessage, MESSAGE_TYPE } from '@chefguevara/types';
import cors from 'cors';
import express from 'express';

import { hello } from '@/messages';

const message: HelloWorldMessage = {
  message: hello,
  type: MESSAGE_TYPE.HELLO,
};

const app = express();
const port = 3000;

app.use(cors()); // Allow requests from any origin

app.get('/message', (_, res) => {
  res.json(message);
});

app.listen(port, () => {
  console.log(`✅ API listening at http://localhost:${port}/message`);
});
