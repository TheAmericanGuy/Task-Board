import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string> => {
  const { username, password } = userInfo;

  const response = await axios.post('/api/auth/login', { username, password });
  return response.data.token;
};

export { login };
