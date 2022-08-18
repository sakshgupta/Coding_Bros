import React from 'react';
import Title from './sections/title'
import AboutUs from './sections/about'
import Footer from './sections/footer'
import Article from './sections/article'
import Shop from './sections/shop'
import Form1 from './components/shelter_form'
import Form2 from './components/info_form'
import Route from './routes/routes'
import './App.css';

function App() {
  return (
    <div>
      <Route />
      {/* <Title /> */}
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
