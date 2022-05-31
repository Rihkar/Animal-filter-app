import './Styles/reset.scss';
import './App.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HomePage from './Components/HomePage';
import AnimalForm from './Components/AnimalForm';
import { RootState } from './Redux/Store';

const App = () => {
  const [page, setPage] = useState(0);
  const animals = useSelector((state:RootState) => state.animals.animalsList);
  console.log(animals);
  return (

    <div className="app">
      {page === 0 && (
      <HomePage
        onAddAnimal={() => setPage(1)}
      />
      )}
      {(page === 0 && animals.length > 1) && (
        animals.map((animal) => (
          <div key={animal.id}>{animal.name}</div>
        ))
      )}
      {page === 1 && (
      <AnimalForm
        onAdd={() => {
          setPage(0);
        }}
      />
      )}

    </div>
  );
};

export default App;
