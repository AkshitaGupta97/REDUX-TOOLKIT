import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './slice-features/counterSlice';

import searchReducer from './slice-features/searchSlice'
import collectionReducer from './slice-features/collectionSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,

        search: searchReducer,
        collection: collectionReducer,
    }
});
