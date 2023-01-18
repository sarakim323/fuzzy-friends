import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/fuzzy-friends');
const UserSchema = new mongoose.Schema(
  {
    name: String,
    friends: [String],
  },
  { timestamps: true }
);
const User = mongoose.model('User', UserSchema);

const ProfileSchema = new mongoose.Schema({
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
  // addFriend: () => {

  // },
  // createProfile: () => {

  // },
  addUser: () => {
    const newUser = new User({ name: 'test', friends: ['1', '2'] });
    return newUser.save();
  },
  getMessages: async (user: string, mate: string) => {
    const listOfMessages: object[] = [];
    await Message.find({ senderId: user, receiverId: mate })
      .then((data) => {
        listOfMessages.push(data);
        return Message.find({ senderId: mate, receiverId: user });
      })
      .then((data) => {
        listOfMessages.push(data);
      });
    return listOfMessages;
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
};
