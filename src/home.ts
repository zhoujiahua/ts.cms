interface UserInfo {
  username: string;
  password: string;
  age?: number;
  sex?: string;
}

export const userInfo: UserInfo = {
  username: "jerry",
  password: "123456",
};
