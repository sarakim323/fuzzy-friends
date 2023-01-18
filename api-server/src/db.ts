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

export const db = {
  // addFriend: () => {

  // },
  // createProfile: () => {

  // },
  addUser: () => {
    const newUser = new User({ name: 'test', friends: ['1', '2'] });
    return newUser.save();
  },
};
