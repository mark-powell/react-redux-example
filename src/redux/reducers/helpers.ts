import { HandlerFunction } from '../handlers';
import { Reducer } from '../types.redux';
import { BaseActionInterface } from '../actions';

export const createReducer = <T>(
    initialState: T,
    actionHandler: Map<string, HandlerFunction<T>>,
): Reducer<T> => (
    state: T = initialState, action: BaseActionInterface,
): T => {
    if (actionHandler.has(action.type)) {
        const handler = actionHandler.get(action.type);
        if (handler !== undefined) return handler(state, action);
    }
    return state;
};
