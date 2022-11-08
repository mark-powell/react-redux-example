import { SetPageInterface } from '../../actions/navigation/actionInterfaces';
import { createActionHandler, HandlerFunction } from '../index';
import { NavigationState } from 'redux/types/navigation';

export const setPageActionHandler: HandlerFunction<NavigationState, SetPageInterface> = createActionHandler(
    (state: NavigationState, action: SetPageInterface) => ({
        ...state,
        currentPage: action.payload,
    }),
);
