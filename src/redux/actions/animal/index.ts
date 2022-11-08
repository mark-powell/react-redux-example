import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Animal } from 'redux/types/animal';
import { animalService } from 'services/animals';
import { createAction } from '../index';
import { ACTION_ADD_ANIMAL, ACTION_SET_ANIMAL_LOADING } from './actionTypes';

export const createSetAnimalLoadingAction = createAction<boolean>(ACTION_SET_ANIMAL_LOADING);
export const createAddAnimalAction = createAction<Animal>(ACTION_ADD_ANIMAL);

export type FetchAnimalThunk = ThunkAction<Promise<void>, Animal, void, AnyAction>;

export const fetchAnimalAsync = (): FetchAnimalThunk => async (
    dispatch,
): Promise<void> => {
    dispatch(createSetAnimalLoadingAction(true));
    try {
        const animal: Animal = await animalService.getAnimal();

        dispatch(createAddAnimalAction(animal));
    } catch (error) {
        //
    }
    dispatch(createSetAnimalLoadingAction(false));
};