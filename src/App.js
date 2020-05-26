import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;
