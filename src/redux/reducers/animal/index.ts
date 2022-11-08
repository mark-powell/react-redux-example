import { HandlerFunction } from '../../handlers';
import { createReducer } from '../../reducers/helpers';
import { AnimalState } from 'redux/types/animal';
import { addAnimalActionHandler, setAnimalLoadingActionHandler } from 'redux/handlers/animal';
import { ACTION_ADD_ANIMAL, ACTION_SET_ANIMAL_LOADING } from 'redux/actions/animal/actionTypes';


const animalInitialState: AnimalState = { 
    loadingAnimal: false,
    animals: [],
};

const actionHandler = new Map<string, HandlerFunction<AnimalState>>();

const mapActionHandler = (action:string, handler:HandlerFunction<AnimalState>): void => {
    actionHandler.set(action, handler);
};

export const animalReducer = createReducer<AnimalState>(
    animalInitialState,
    actionHandler,
);

// Action Mappings
mapActionHandler(ACTION_SET_ANIMAL_LOADING, setAnimalLoadingActionHandler);
mapActionHandler(ACTION_ADD_ANIMAL, addAnimalActionHandler);
