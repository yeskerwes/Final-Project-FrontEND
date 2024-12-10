import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SeasonCollections from './components/seasonCollections';
import AboutUs from './components/aboutUs';
import RecommendedShoes from './components/recommendedShoes';
import AnchorUp from './components/anchorUp';

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
