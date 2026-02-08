import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './slice-features/counterSlice';

import searchReducer from './slice-features/searchSlice'
import CollectionReducer from '../pages/CollectionPage';

export const store = configureStore({
    reducer: {
        counter: counterReducer,

        search: searchReducer,
        collection: CollectionReducer,
    }
});
