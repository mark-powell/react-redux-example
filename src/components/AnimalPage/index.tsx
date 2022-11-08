import Table from 'rc-table';
import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimalAsync } from 'redux/actions/animal';
import { AppState } from 'redux/types.redux';
import { Animal, AnimalState } from 'redux/types/animal';
import './AnimalPage.css';

interface AnimalDisplayRow extends Animal {
  key: number;
};

const AnimalPage: FunctionComponent = () => {

  const dispatch = useDispatch<any>();
  const { animals } = useSelector(({ animal}: AppState): AnimalState => animal);
  const [ displayData, setDisplayData ] = useState<Array<AnimalDisplayRow>>([]);

  const handleGetAnimal = () => {
    dispatch(fetchAnimalAsync());
  }

  useEffect(() => {
    const data: Array<AnimalDisplayRow> = [];
    animals.map(
      (animal, i) => {
        data.push({
          key: i,
          name: animal.name,
          type: animal.type,
          habitat: animal.habitat,
          imageUrl: animal.imageUrl,
        })
      }
    );
    setDisplayData(data);
  }, [animals]);

  return (
    <div className="App">
      <h1>ANIMALS</h1>

      <button
        type="button"
        className="checkout-header__logo-btn"
        onClick={handleGetAnimal}
        data-test="checkout-header-logo"
      >Get Animal</button>

      <Table
        columns={columns}
        data={displayData}
      />
    </div>
  );
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Habitit',
    dataIndex: 'habitat',
    key: 'habitat',
  },
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    render: (value: string) => <img width='100' src={value} />,
  },
];

export default AnimalPage;
