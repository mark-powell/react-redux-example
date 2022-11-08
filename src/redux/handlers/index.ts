import { BaseActionInterface } from '../actions';

export type HandlerFunction<StateType, ActionType = BaseActionInterface> = (
    state: StateType,
    action: ActionType,
) => StateType;

export const createActionHandler = <StateType, ActionType>(
    handleFunction: (
        state: StateType,
        action: ActionType,
    ) => StateType,
): HandlerFunction<StateType, ActionType> => (
    state: StateType,
    action: ActionType,
): StateType => (handleFunction(state, action));
