type HomePageProps = {
    onAddAnimal: () => void
}

const HomePage = ({
  onAddAnimal,
}:HomePageProps) => (
  <div
    className="home-page"
  >
    <header
      className="logo"
    >
      LOGO
    </header>

    <h1>
      No animals added yet
    </h1>

    <button
      className="button-add-animals"
      onClick={onAddAnimal}
    >
      add animal
    </button>

  </div>

);

export default HomePage;
