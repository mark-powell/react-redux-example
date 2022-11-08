import { createActionHandler, HandlerFunction } from '../index';
import { AnimalState } from 'redux/types/animal';
import { AddAnimalInterface, SetAnimalLoadingInterface } from 'redux/actions/animal/actionInterfaces';

export const addAnimalActionHandler: HandlerFunction<AnimalState, AddAnimalInterface> = createActionHandler(
    (state: AnimalState, action: AddAnimalInterface) => ({
        ...state,
        animals: [
            action.payload,
            ...state.animals,
        ]
    }),
);

export const setAnimalLoadingActionHandler: HandlerFunction<AnimalState, SetAnimalLoadingInterface> = createActionHandler(
    (state: AnimalState, action: SetAnimalLoadingInterface) => ({
        ...state,
        loadingAnimal: action.payload,
    }),
);
