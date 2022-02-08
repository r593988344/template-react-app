import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '@/utils/axios';

export const nameSpace = 'user';

export type LoginItem = {
  account: string;
  password: string;
};

// 登录接口
export const SubmitLogin = createAsyncThunk(
  `${nameSpace}/submitLogin`,
  async (userLogin: LoginItem) => {
    const { data } = await Axios({
      url: '/login',
      method: 'POST',
      data: {
        account: userLogin.account,
        password: userLogin.password,
      },
    });
    return data;
  },
);
