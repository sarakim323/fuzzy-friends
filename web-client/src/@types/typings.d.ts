interface Match {
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
  userId: string;
  message: string;
}
