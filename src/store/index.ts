import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '@pages/login/slice/login.slice';
import layoutReducer from '@layout/layout.slice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    layout: layoutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
