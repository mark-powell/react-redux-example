import { Animal } from "redux/types/animal";

export interface IAnimalClient {
    getAnimal(): Promise<Animal>;
}
