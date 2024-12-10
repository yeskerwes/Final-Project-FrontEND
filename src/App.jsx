import React from 'react';
import './styles/App.css';
import Header from './header';
import Footer from './footer';
import Content from './content';
import SeasonCollections from './seasonCollections';
import AboutUs from './aboutUs';
import RecommendedShoes from './recommendedShoes';
import AnchorUp from './anchorUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <SeasonCollections />
      <AboutUs />
      <RecommendedShoes />
      <Footer />
      <AnchorUp />
    </div>
  );
}

export default App;
