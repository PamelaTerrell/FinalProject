import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // If you have global styles

// Import your components
import Home from './pages/Home';  // Assuming you have a Home page component
import WinePairings from './pages/WinePairings'; // Import WinePairings correctly

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Wine Pairing App</h1>
        </header>

        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pairings/:food" element={<WinePairings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
