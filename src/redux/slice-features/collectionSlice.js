import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        items: JSON.parse(localStorage.getItem('myCollection')) || []
    },
    reducers:{
        addCollection:(state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            );
            if(!alreadyExists){
                state.items.push(action.payload);
                localStorage.setItem('myCollection', JSON.stringify(state.items));
            }
        },
        removeCollection:(state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('myColection', JSON.stringify(state.items));
        },
        clearCollection:(state) => {
            state.items = [],
            localStorage.removeItem('myCollection')
        },
        addedToast: (state) => {
            toast("Added to collection")
        },
        removeToast: (state) => {
            toast.error("Removed from collection")
        }
    }
});

export const { addCollection, removeCollection,removeToast, clearCollection, addedToast} = collectionSlice.actions;
export default collectionSlice.reducer;
