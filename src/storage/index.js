import {
    configureStore
} from '@reduxjs/toolkit'

import dashBoardInfo from './dashboard/reducer';


export const store = configureStore({
    reducer: {
        dashboard: dashBoardInfo
    },
    devTools: process.env.NODE_ENV !== 'production' ? true : false
});