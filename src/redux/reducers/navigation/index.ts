import { HandlerFunction } from '../../handlers';
import { ACTION_SET_PAGE } from '../../actions/navigation/actionTypes';
import { setPageActionHandler } from '../../handlers/navigation';
import { createReducer } from '../../reducers/helpers';
import { NavigationState, Page } from 'redux/types/navigation';


const navigationInitialState: NavigationState = { currentPage: Page.HOME };

const actionHandler = new Map<string, HandlerFunction<NavigationState>>();

const mapActionHandler = (action:string, handler:HandlerFunction<NavigationState>): void => {
    actionHandler.set(action, handler);
};

export const navigationReducer = createReducer<NavigationState>(
    navigationInitialState,
    actionHandler,
);

// Action Mappings
mapActionHandler(ACTION_SET_PAGE, setPageActionHandler);
