import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { screen, render, waitFor } from '@testing-library/react';
import AnimalPage from '.';
import { act } from 'react-dom/test-utils';
import { AnimalService } from 'services/animals';

jest.mock('services/animals');

test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <AnimalPage />
    </Provider>
  );
});

test('has correct title', async () => {
  render(
    <Provider store={store}>
      <AnimalPage />
    </Provider>
  );

  expect(screen.getByText('ANIMALS')).toBeInTheDocument()
});

test('add animal button adds row', async () => {
  (AnimalService.prototype.getAnimal as jest.Mock).mockResolvedValueOnce(animalResult);

  render(
    <Provider store={store}>
      <AnimalPage />
    </Provider>
  );

  act(() => {
    const button = screen.getByText('Get Animal');
    button.click()
  });

  await waitFor(() => {
    expect(screen.getByText('testName')).toBeInTheDocument();
    expect(screen.getByText('habitat')).toBeInTheDocument();
    expect(screen.getByText('animal_type')).toBeInTheDocument();
  });
});

const animalResult = { 
  name: 'testName',
  habitat: 'habitat',
  type: 'animal_type',
  imageUrl: 'image_link',
};
