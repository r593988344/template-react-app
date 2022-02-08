import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nameSpace, SubmitLogin } from '../service/login.service';

interface UserState {
  loading: boolean;
  isLogin: boolean;
  userInfo: User | null;
}

interface User {
  id: number;
  account: string;
  username: string;
  avatar_url: string;
  role_id: number;
  status: number;
  last_login_at: string;
}

const initialState: UserState = {
  loading: false,
  isLogin: false,
  userInfo: null,
};

const LoginSlice = createSlice({
  // 命名空间
  name: nameSpace,
  // 初始化状态
  initialState,
  // reducers 设置 state
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [SubmitLogin.fulfilled.type]: (
      state,
      action: PayloadAction<{
        user: User;
      }>,
    ) => {
      state.userInfo = action.payload.user;
      state.isLogin = true;
      state.loading = false;
    },
    [SubmitLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [SubmitLogin.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const { setLoading } = LoginSlice.actions;

export const selectLoading = (state: RootState): boolean => state.login.loading;
export const selectIsLogin = (state: RootState): boolean => state.login.isLogin;
export const selectUser = (state: RootState): User =>
  state.login.userInfo as User;

export default LoginSlice.reducer;
