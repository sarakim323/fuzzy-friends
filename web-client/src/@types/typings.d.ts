interface Match {
  _id: string;
  name: string;
  age: number;
  breed: string;
  gender: 'female' | 'male';
  profilePic: string;
  pictures: string[];
  calendarInvite: string[];
}
interface TempMatch {
  _id: string;
  name: string;
  age: number;
  breed: string;
  gender: 'female' | 'male';
  profilePic: string;
  pictures: string[];
  calendarInvite: string[];
}

interface Mate {
  _id: string;
  name: string;
  age: number;
  breed: string;
  gender: 'female' | 'male';
  profilePic: string;
  pictures: string[];
  calendarInvite: string[];
  description: string;
}

interface User {
  _id: string;
  name: string;
  age: number;
  breed: string;
  gender: 'female' | 'male';
  profilePic: string;
  pictures: string[];
  calendarInvite: string[];
  description: string;
}

interface Chat {
  integer: string;
}

interface PlayEvent {
  _id: string;
  title: string;
  description: string;
  friend: string;
  location: string;
  date: Date;
  start: string;
  end: string;
}
