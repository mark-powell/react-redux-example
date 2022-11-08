import { AnimalService } from "services/animals";
import { createAddAnimalAction, createSetAnimalLoadingAction, fetchAnimalAsync } from ".";

jest.mock('services/animals');

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

test('fetchAnimalAsync sets loading, adds animal then sets loading to false', async () => {
  (AnimalService.prototype.getAnimal as jest.Mock).mockResolvedValueOnce(animalServiceResponse);
  const fetchAnimalAction = fetchAnimalAsync();
  await fetchAnimalAction(dispatchMock, getStateMock);

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(createSetAnimalLoadingAction(true));
  expect(dispatchMock).toHaveBeenCalledWith(createAddAnimalAction(animalServiceResponse));
  expect(dispatchMock).toHaveBeenCalledWith(createSetAnimalLoadingAction(false));
});

const animalServiceResponse = { 
  name: 'testName',
  habitat: 'habitat',
  type: 'animal_type',
  imageUrl: 'image_link',
};
