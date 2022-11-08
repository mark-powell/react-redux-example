import { Animal } from "redux/types/animal";
import { IAnimalClient } from "./types";
import { ZooApiClient } from "./zooApiClient";

export class AnimalService {
    private animalClient: IAnimalClient;

    constructor(animalClient: IAnimalClient) {
        this.animalClient = animalClient;
    }

    public getAnimal(): Promise<Animal> {
        return this.animalClient.getAnimal();
    }
}

export const animalService: AnimalService = new AnimalService(new ZooApiClient());