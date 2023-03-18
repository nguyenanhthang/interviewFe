import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    open: boolean;
}

const initialState: CounterState = {
    open: true
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        }
    }
});

export const { setOpen } = userSlice.actions;

export default userSlice.reducer;
