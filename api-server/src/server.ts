import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
import { discover, friends, messages, sampleEvents } from './mock_data';
import { Request, Response } from 'express';
import { db } from './db';
import { request } from 'axios';

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/users/:id/messages/:mateId', (req: Request, res: Response) => {
  db.addMessage(req.params.id, req.params.mateId, req.body.content)
    .then(() => res.sendStatus(201))
    .catch((err) => res.send(err));
});

app.get('/users/:id/messages/:mateId', (req: Request, res: Response) => {
  db.getMessages(req.params.id, req.params.mateId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/users/:id/friends', (req: Request, res: Response) => {
  db.getFriends(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/users/:id/friends/:mateId', (req: Request, res: Response) => {
  db.addFriend(req.params.id, req.params.mateId)
    .then(() => res.sendStatus(201))
    .catch((err) => res.send(err));
});

app.get('/users/:id/requests', (req: Request, res: Response) => {
  db.getRequests(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/users/:id/requests/:mateId', (req: Request, res: Response) => {
  db.addRequest(req.params.id, req.params.mateId)
    .then(() => {
      res.send(201);
    })
    .catch(() => {
      res.send(501);
    });
});

// app.put('/users/:id/friends/*', (req: Request, res: Response) => {
//   db.
//   res.sendStatus(200);
// });

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
