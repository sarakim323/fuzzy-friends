import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/fuzzy-friends');
const UserSchema = new mongoose.Schema(
  {
    userId: String,
    name: String,
    friends: [String],
  },
  { timestamps: true }
);
const User = mongoose.model('User', UserSchema);

const RequestSchema = new mongoose.Schema({
  userId: String,
  senderId: String,
});

const Request = mongoose.model('Request', RequestSchema);

const ProfileSchema = new mongoose.Schema({
  userId: String,
  name: String,
  age: Number,
  breed: String,
  gender: String,
  pictures: [String],
});
const Profile = mongoose.model('Profile', ProfileSchema);

const InvitesSchema = new mongoose.Schema(
  {
    sender: String,
    recipient: String,
    eventId: String,
    status: {
      type: String,
      enum: ['Active', 'Accepted', 'Rejected', 'Cancelled'],
    },
  },
  { timestamps: true }
);
const Invite = mongoose.model('Invite', InvitesSchema);

const EventsSchema = new mongoose.Schema({
  time: Date,
  coordinates: String,
  location: String,
  description: String,
});
const Event = mongoose.model('Event', EventsSchema);

const UserEventsSchema = new mongoose.Schema({
  UserId: String,
  EventId: String,
});
const UserEvent = mongoose.model('UserEvent', UserEventsSchema);

const messageSchema = new mongoose.Schema(
  {
    senderId: String,
    receiverId: String,
    messageContent: String,
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export const db = {
  addUser: () => {
    const newUser = new User({ name: 'test', friends: ['1', '2'] });
    return newUser.save();
  },
  getMessages: (senderId: string, receiverId: string) => {
    let listOfMessages: object[] = [];
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
  addMessage: (
    senderId: string,
    receiverId: string,
    messageContent: string
  ) => {
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
  getRequests: (userId: string) => {
    return Request.find({ userId });
  },
  addRequest: (userId: string, receiverId: string) => {
    const newRequest = new Request({ userId: receiverId, senderId: userId });
    return newRequest.save();
  },
  getFriends: (userId: string) => {
    return User.findOne({ userId: userId }).then((data) => {
      return Profile.find({
        userId: { $in: data.friends },
      });
    });
  },
  addFriend: (userId: string, senderId: string) => {
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
