import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './slice-features/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});
