import { Animal } from 'redux/types/animal';
import { ActionInterface } from '../index';

export type SetAnimalLoadingInterface = ActionInterface<boolean>;
export type AddAnimalInterface = ActionInterface<Animal>;
