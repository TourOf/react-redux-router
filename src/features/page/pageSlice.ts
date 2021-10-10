import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type Status = 'idle' | 'loading' | 'failed'

export interface StatusState {
  status: Status;
}

const initialState: StatusState = {
  status: 'idle',
};


export const pageSlice = createSlice({
  name: 'page',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.status = action.payload;
    },
  },
});

export const { setStatus } = pageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPageState = (state: RootState) => state.pageStatus;

export default pageSlice.reducer;
