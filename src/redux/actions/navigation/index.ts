import { Page } from 'redux/types/navigation';
import { createAction } from '../index';
import { ACTION_SET_PAGE } from './actionTypes';

export const createSetPageAction = createAction<Page>(ACTION_SET_PAGE);
