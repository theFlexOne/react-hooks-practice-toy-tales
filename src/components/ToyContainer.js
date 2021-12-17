import React from 'react';
import ToyCard from './ToyCard';

function ToyContainer({ toys, deleteToy, updateToy }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard
          toy={toy}
          key={toy.id}
          deleteToy={deleteToy}
          updateToy={updateToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
