import { Animal } from "redux/types/animal";
import { HttpService } from "services/http";
import { IAnimalClient } from "./types";

export class ZooApiClient implements IAnimalClient {

    private ZOO_API_URL: string = 'https://zoo-animal-api.herokuapp.com/animals/rand';
    private httpService: HttpService;

    constructor () {
        this.httpService = new HttpService(this.ZOO_API_URL);
    }

    public async getAnimal(): Promise<Animal> {
        const response = await this.httpService.get<{}, IZooApiResponse>('', {});
        return {
            name: response.data.name,
            type: response.data.animal_type,
            habitat: response.data.habitat,
            imageUrl: response.data.image_link,
        };
    }

}

export interface IZooApiResponse {
    data: IZooApiAnimal;
}

export interface IZooApiAnimal{
    name: string;
    latin_name: string;
    animal_type: string;
    active_time: string;
    length_min: number;
    length_max: number;
    weight_min: number;
    weight_max: number;
    lifespan: number;
    habitat: string;
    diet: string;
    geo_range: string;
    image_link: string;
    id: number;
}