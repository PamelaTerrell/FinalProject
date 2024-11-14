import React from 'react';
import './Home.css';  // If you have specific styles for this page

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Wine Pairing App</h1>
      <p>Discover the best wine pairings for your meals!</p>
      <div>
        <h2>Popular Pairings:</h2>
        <ul>
          <li><a href="/pairings/chicken">Chicken</a></li>
          <li><a href="/pairings/beef">Beef</a></li>
          <li><a href="/pairings/pork">Pork</a></li>
          <li><a href="/pairings/seafood">Seafood</a></li>
          <li><a href="/pairings/cheese">Cheese</a></li>
        </ul>
        <h3>Want to explore specific wines?</h3>
        <a href="/wine-cellar">Go to Wine Cellar</a>
      </div>
    </div>
  );
}

export default Home;

