import { HttpService } from "services/http";
import { AnimalService } from ".";
import { ZooApiClient } from "./zooApiClient";

jest.mock('services/http');

test('check ZooApiClient.getAnimal returns correct data', async () => {

  (HttpService.prototype.get as jest.Mock).mockResolvedValueOnce(httpResponseApiData);

  const zooApiClient = new ZooApiClient();
  const animal = await zooApiClient.getAnimal();
  expect(animal).toStrictEqual(expectedResult);

});

test('check AnimalService.getAnimal returns correct data', async () => {

  (HttpService.prototype.get as jest.Mock).mockResolvedValueOnce(httpResponseApiData);
  const zooApiClient = new ZooApiClient();
  const animalService = new AnimalService(zooApiClient);
  const animal = await animalService.getAnimal();
  expect(animal).toStrictEqual(expectedResult);

});

const expectedResult = { 
  name: 'testName',
  habitat: 'habitat',
  type: 'animal_type',
  imageUrl: 'image_link',
};

const httpResponseApiData = {data: {
  name: 'testName',
  latin_name: 'latin_name',
  animal_type: 'animal_type',
  active_time: 'active_time',
  length_min: 'length_min',
  length_max: 'length_max',
  weight_min: 'weight_min',
  weight_max: 'weight_max',
  lifespan: 'lifespan',
  habitat: 'habitat',
  diet: 'diet',
  geo_range: 'geo_range',
  image_link: 'image_link',
  id: 'id',
}};
