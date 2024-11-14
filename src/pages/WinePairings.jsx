import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // To access the dynamic route parameter

function WinePairings() {
  const { food } = useParams();  // This gets the dynamic "food" param from the URL
  const [pairing, setPairing] = useState('');

  useEffect(() => {
    // Mocking the wine pairing response based on food type
    if (food === 'chicken') {
      setPairing("Pair your chicken with a nice Chardonnay!");
    } else if (food === 'beef') {
      setPairing("Pair your beef with a rich Cabernet Sauvignon.");
    } else if (food === 'pork') {
      setPairing("Pair your pork with a refreshing Pinot Noir.");
    } else if (food === 'seafood') {
      setPairing("Pair your seafood with a crisp Sauvignon Blanc.");
    } else if (food === 'cheese') {
      setPairing("Pair your cheese with a smooth Merlot.");
    } else {
      setPairing("We don't have a pairing for this food.");
    }
  }, [food]);  // Re-run the effect if the "food" parameter changes

  return (
    <div className="pairings-container">
      <h2>Wine Pairing for {food.charAt(0).toUpperCase() + food.slice(1)}</h2>
      <p>{pairing}</p>
    </div>
  );
}

export default WinePairings;
