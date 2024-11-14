import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function WineDetail() {
  const [wine, setWine] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/wines/${id}`)
      .then(response => setWine(response.data))
      .catch(error => console.error('Error fetching wine:', error));
  }, [id]);

  if (!wine) return <p>Loading...</p>;

  return (
    <div>
      <h1>{wine.name}</h1>
      <p>{wine.description}</p>
      <h2>Wine Pairings</h2>
      <p><strong>Pairs well with:</strong></p>
      <ul>
        {Object.keys(wine.pairings).map(foodType => (
          <li key={foodType}>{foodType}: {wine.pairings[foodType].join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}

export default WineDetail;
