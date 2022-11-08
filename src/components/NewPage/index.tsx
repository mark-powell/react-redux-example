import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/types.redux';
import { AnimalState } from 'redux/types/animal';
import './NewPage.css';

const NewPage: FunctionComponent = () => {
  const { animals } = useSelector(({ animal}: AppState): AnimalState => animal);

  return (
    <div className="App">
      <h1>NEW PAGE</h1>
      We have {animals.length} animals!
    </div>
  );
}

export default NewPage;
