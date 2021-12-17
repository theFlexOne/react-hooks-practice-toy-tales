import React from 'react';

function ToyCard({ toy, deleteToy, updateToy }) {
  const { id, name, image, likes } = toy;

  const handleDonation = () => {
    fetch(`http://localhost:3001/toys/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(deleteToy(id));
  };

  const addLike = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then(res => res.json())
      .then(updateToy(id));
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={addLike}>
        Like {'<3'}
      </button>
      <button className="del-btn" onClick={handleDonation}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
