import { combineReducers } from 'redux';
import {
    animalReducer,
    navigationReducer,
} from './reducers/index';

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    animal: animalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
