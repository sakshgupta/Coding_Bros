import React from 'react';
import Title from './sections/title'
import Footer from './sections/footer'
import Article from './sections/article'
import Food from './sections/food'
import Form1 from './components/shelter_form'
import Form2 from './components/info_form'
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <Form1 />
      <Form2 />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
