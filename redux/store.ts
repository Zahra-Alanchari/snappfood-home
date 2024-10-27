import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice'
import categoryReducer from './data2slice'
import newReducer from './data3slice'
import giftReducer from './data4slice'
import specialTasteReducer from './data5slice'
import freeDeliveryReducer from './data6slice'


const store = configureStore({
    reducer:{
        product:productReducer,
        item:categoryReducer,
        newItem:newReducer,
        giftItem:giftReducer,
        specialTaste:specialTasteReducer,
        freeDelivery:freeDeliveryReducer,

    }
})
export type AppDispatch = typeof store.dispatch;
export default store;