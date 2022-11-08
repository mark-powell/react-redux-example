import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
    });

export type RootState = ReturnType<typeof store.getState>;
