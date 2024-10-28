import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice'
import categoryReducer from './categoryslice'
import newReducer from './newItemslice'
import giftReducer from './cartslice'


const store = configureStore({
    reducer:{
        product:productReducer,
        item:categoryReducer,
        newItem:newReducer,
        giftItem:giftReducer,
        

    }
})
export type AppDispatch = typeof store.dispatch;
export default store;