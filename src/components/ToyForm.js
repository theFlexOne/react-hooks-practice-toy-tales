import React, { useState } from 'react';

function ToyForm({ updateToyList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const addNewToy = e => {
    e.preventDefault();
    const formData = {
      name,
      image,
      likes: 0,
    };
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(updateToyList);
  };

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
