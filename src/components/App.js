import React, { useEffect, useState } from 'react';

import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(data => setToyList(data));
  }, []);

  const addNewToy = newToy => {
    setToyList([...toyList, newToy]);
  };

  const deleteToy = id => {
    const updatedToyList = toyList.filter(toy =>
      toy.id !== id ? true : false
    );
    setToyList(updatedToyList);
  };

  const updateToy = id => {
    const updatedToyList = toyList.map(toy => {
      if (toy.id === id) toy.likes++;
      return toy;
    });
    setToyList(updatedToyList);
  };

  function handleClick() {
    setShowForm(showForm => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToyList={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toyList && (
        <ToyContainer
          deleteToy={deleteToy}
          toys={toyList}
          updateToy={updateToy}
        />
      )}
    </>
  );
}

export default App;
