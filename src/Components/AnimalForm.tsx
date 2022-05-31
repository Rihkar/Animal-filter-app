import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimal } from '../Redux/Reducers/AnimalSlice';
import { RootState } from '../Redux/Store';

type AnimalFormProps = {
    onAdd: () => void
}

const AnimalForm = ({
  onAdd,
}:AnimalFormProps) => {
  const [animalName, setAnimalName] = useState('');
  const [animalImage, setAnimalImage] = useState('');
  const [animalSpecies, setAnimalSpecies] = useState('');
  const animals = useSelector((state:RootState) => state.animals.animalsList);

  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(addAnimal({
      ...animals,
      name: animalName,
      imgSrc: animalImage,
      species: animalSpecies,
      id: 0,
    }));
    onAdd();
  };
  return (
    <div className="animal-form-wrapper">
      <h1>Add Animal</h1>
      <form className="animal-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            required
            type="text"
            id="name"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
        </label>
        <label htmlFor="imgSrc">
          <span>Image Source</span>
          <input
            required
            type="text"
            id="imgSrc"
            value={animalImage}
            onChange={(e) => setAnimalImage(e.target.value)}
          />
        </label>
        <label htmlFor="Species">
          <span>Species</span>
          <input
            required
            type="text"
            id="Species"
            value={animalSpecies}
            onChange={(e) => setAnimalSpecies(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="button-add-animal"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AnimalForm;
