"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const mock_data_1 = require("./mock_data");
const db_1 = require("./db");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/users/:id/messages/:mateId', (req, res) => {
    db_1.db.addMessage(req.params.id, req.params.mateId, req.body.content)
        .then(() => res.sendStatus(201))
        .catch((err) => res.send(err));
});
app.get('/users/:id/messages/:mateId', (req, res) => {
    db_1.db.getMessages(req.params.id, req.params.mateId)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.send(err);
    });
});
app.get('/users/:id/friends', (req, res) => {
    db_1.db.getFriends(req.params.id)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.send(err);
    });
});
app.post('/users/:id/friends/:mateId', (req, res) => {
    db_1.db.addFriend(req.params.id, req.params.mateId)
        .then(() => res.sendStatus(201))
        .catch((err) => res.send(err));
});
app.get('/users/:id/requests', (req, res) => {
    db_1.db.getRequests(req.params.id)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.send(err);
    });
});
app.post('/users/:id/requests/:mateId', (req, res) => {
    db_1.db.addRequest(req.params.id, req.params.mateId)
        .then(() => {
        res.send(201);
    })
        .catch(() => {
        res.send(501);
    });
});
app.get('/users/:id/discover', (req, res) => {
    res.send(mock_data_1.discover);
});
app.get('/test', (req, res) => {
    db_1.db.addUser()
        .then((data) => {
        res.send(data);
    })
        .catch(() => res.sendStatus(404));
});
app.get('/users/:id/events', (req, res) => {
    res.send(mock_data_1.sampleEvents);
});
app.post('/users/:id/events', async (req, res) => {
    const event = new db_1.Event(req.body);
    try {
        const result = await event.save();
        console.log('what does mongoose send back?', result);
        res.status(201).send(result);
    }
    catch (err) {
        console.log('what is the error:', err);
        res.sendStatus(500);
    }
});
app.put('/users/:id/events', async (req, res) => {
    if (req.body._id === undefined) {
        return res.sendStatus(400);
    }
    try {
        const result = await db_1.Event.updateOne({ _id: req.body._id }, req.body);
        if (result.modifiedCount === 0) {
            return res.sendStatus(404);
        }
        return res.sendStatus(200);
    }
    catch (err) {
        console.log('PUT events error:', err);
        res.sendStatus(500);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map