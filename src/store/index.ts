import { configureStore } from "@reduxjs/toolkit";
import generationReducer from './slice/generation';

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;