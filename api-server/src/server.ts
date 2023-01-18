import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
import { discover, friends, messages, sampleEvents } from './mock_data';
import { Request, Response } from 'express';
import { db, Event } from './db';

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/users/:id/messages/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get('/user/:id/messages/:friendId', (req: Request, res: Response) => {
  res.send(messages);
});

app.get('/users/:id/friends', (req: Request, res: Response) =>
  res.send(friends)
);

app.put('/users/:id/friends/*', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get('/users/:id/discover', (req: Request, res: Response) => {
  res.send(discover);
});

app.get('/test', (req, res) => {
  db.addUser()
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.sendStatus(404));
});

/*
  GET /events
  params:
    - month
    - year
*/

app.get('/users/:id/events', (req, res) => {
  res.send(sampleEvents);
});

app.post('/users/:id/events', async (req, res) => {
  //
  const event = new Event(req.body);
  try {
    const result = await event.save();
    console.log('what does mongoose send back?', result);
    res.status(201).send(result);
  } catch (err) {
    console.log('what is the error:', err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
