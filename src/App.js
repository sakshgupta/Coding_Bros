import React from 'react';
import Title from './sections/title'
import AboutUs from './sections/aboutus'
import Footer from './sections/footer'
import Article from './sections/article'
import Shop from './sections/shop'
import Food from './sections/food'
import Form1 from './components/shelter_form'
import Form2 from './components/info_form'
import './App.css';

function App() {
  return (
    <div>
      <Title />
      <AboutUs />
      <Form1 />
      <Form2 />
      <Article />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
