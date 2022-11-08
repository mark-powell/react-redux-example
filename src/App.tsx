import AnimalPage from 'components/AnimalPage';
import NewPage from 'components/NewPage';
import PeoplePage from 'components/PeoplePage';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSetPageAction } from 'redux/actions/navigation';
import { AppState } from 'redux/types.redux';
import { NavigationState, Page } from 'redux/types/navigation';
import './App.css';

const App: FunctionComponent = () => {

  const dispatch = useDispatch();
  const { currentPage } = useSelector(({ navigation }: AppState): NavigationState => navigation);

  const handlePageChange = (page: Page) => {
    dispatch(createSetPageAction(page));
  }

  return (
    <div className="App">
      <h1>MF React Redux Prototype</h1>

      <button
        type="button"
        className="checkout-header__logo-btn"
        onClick={() => {handlePageChange(Page.HOME)}}
        data-test="checkout-header-logo"
      >HOME</button>

      <button
        type="button"
        className="checkout-header__logo-btn"
        onClick={() => {handlePageChange(Page.ANIMALS)}}
        data-test="checkout-header-logo"
      >ANIMALS</button>

      <button
        type="button"
        className="checkout-header__logo-btn"
        onClick={() => {handlePageChange(Page.PEOPLE)}}
        data-test="checkout-header-logo"
      >PEOPLE</button>

      <button
        type="button"
        className="checkout-header__logo-btn"
        onClick={() => {handlePageChange(Page.NEW_PAGE)}}
        data-test="checkout-header-logo"
      >New PAGE</button>

      {currentPage === Page.ANIMALS && <AnimalPage />}
      {currentPage === Page.PEOPLE && <PeoplePage />}
      {currentPage === Page.NEW_PAGE && <NewPage />}

    </div>
  );
}

export default App;
