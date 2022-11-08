import App from './App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
