import { ReactElement } from 'react';
import { BaseActionInterface } from './actions';
import { AnimalState } from './types/animal';
import { NavigationState } from './types/navigation';

export interface Action {
    type: string;
    payload?: never;
}

export type Reducer<S> = (state: S, action: BaseActionInterface) => S;

export interface ActionHandlers<S> {
    [key: string]: (state: S, payload: Action['payload']) => S;
}

export interface AppState {
    navigation: NavigationState;
    animal: AnimalState;
}


