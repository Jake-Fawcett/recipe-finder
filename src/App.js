import React from 'react';
import './App.css';
import Header from './components/Header'
import DietaryForm from './components/DietaryForm'
import Intro from './components/Intro'
import Raider from './components/Raider'
import Recipes from './components/Recipes'

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <DietaryForm />
      <Raider />
      <Recipes />
    </div>
  );
}

export default App;
