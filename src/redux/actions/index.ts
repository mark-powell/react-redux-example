import { Page } from "redux/types/navigation";

export interface BaseActionInterface {
    type: string;
    payload: never;
}

export interface ActionInterface<T> {
    type: string;
    payload: T;
}

interface ActionFunction<PayloadType> {
    (payload: PayloadType): ActionInterface<PayloadType>;
}

export const createAction = <PayloadType>(
    type: string,
): ActionFunction<PayloadType> => (
    payload: PayloadType,
): ActionInterface<PayloadType> => ({
    type,
    payload,
});
