import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Layout {
  collapsed: boolean;
}

const initialState: Layout = {
  collapsed: false,
};

const LayoutSlice = createSlice({
  // 命名空间
  name: 'layout',
  // 初始化状态
  initialState,
  // reducers 设置 state
  reducers: {
    setCollapsed(state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload;
    },
  },
});

export const { setCollapsed } = LayoutSlice.actions;

export const selectCollapsed = (state: RootState): boolean =>
  state.layout.collapsed;

export default LayoutSlice.reducer;
