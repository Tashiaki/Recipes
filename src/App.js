import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=dd4361b2&app_key=6344eb3ee6fd74c078a20218ab6a884d`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.hits);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;