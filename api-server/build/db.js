"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.Event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/fuzzy-friends')
    .catch((err) => console.log('unable to open mongodb', err));
const UserSchema = new mongoose_1.default.Schema({
    userId: String,
    name: String,
    friends: [String],
}, { timestamps: true });
const User = mongoose_1.default.model('User', UserSchema);
const RequestSchema = new mongoose_1.default.Schema({
    userId: String,
    senderId: String,
});
const Request = mongoose_1.default.model('Request', RequestSchema);
const ProfileSchema = new mongoose_1.default.Schema({
    userId: String,
    name: String,
    age: Number,
    breed: String,
    gender: String,
    pictures: [String],
});
const Profile = mongoose_1.default.model('Profile', ProfileSchema);
const InvitesSchema = new mongoose_1.default.Schema({
    sender: String,
    recipient: String,
    eventId: String,
    status: {
        type: String,
        enum: ['Active', 'Accepted', 'Rejected', 'Cancelled'],
    },
}, { timestamps: true });
const Invite = mongoose_1.default.model('Invite', InvitesSchema);
const EventsSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    friend: String,
    location: String,
    start: String,
    end: String,
});
exports.Event = mongoose_1.default.model('Event', EventsSchema);
const UserEventsSchema = new mongoose_1.default.Schema({
    UserId: String,
    EventId: String,
});
const UserEvent = mongoose_1.default.model('UserEvent', UserEventsSchema);
const messageSchema = new mongoose_1.default.Schema({
    senderId: String,
    receiverId: String,
    messageContent: String,
}, { timestamps: true });
const Message = mongoose_1.default.model('Message', messageSchema);
exports.db = {
    addUser: () => {
        const newUser = new User({ name: 'test', friends: ['1', '2'] });
        return newUser.save();
    },
    getMessages: (senderId, receiverId) => {
        let listOfMessages = [];
        return new Promise((resolve, reject) => {
            Message.find({ senderId, receiverId })
                .then((data) => {
                listOfMessages = data;
                return Message.find({ senderId: receiverId, receiverId: senderId });
            })
                .then((data) => {
                listOfMessages = [...listOfMessages, ...data];
                resolve(listOfMessages);
            })
                .catch((err) => {
                reject(err);
            });
        });
    },
    addMessage: (senderId, receiverId, messageContent) => {
        return new Promise((resolve, reject) => {
            const newMessage = new Message({ senderId, receiverId, messageContent });
            newMessage
                .save()
                .then(() => {
                resolve('Success');
            })
                .catch((err) => {
                reject(err);
            });
        });
    },
    getRequests: (userId) => {
        return Request.find({ userId });
    },
    addRequest: (userId, receiverId) => {
        const newRequest = new Request({ userId: receiverId, senderId: userId });
        return newRequest.save();
    },
    getFriends: (userId) => {
        return User.findOne({ userId: userId }).then((data) => {
            return Profile.find({
                userId: { $in: data.friends },
            });
        });
    },
    addFriend: (userId, senderId) => {
        return new Promise((resolve, reject) => {
            Request.findOneAndRemove({ userId, senderId })
                .then(() => {
                return User.findOne({ userId });
            })
                .then((user) => {
                user.friends.push(senderId);
                return user.save();
            })
                .then(() => {
                resolve('Success');
            })
                .catch((err) => {
                reject(err);
            });
        });
    },
};
//# sourceMappingURL=db.js.map