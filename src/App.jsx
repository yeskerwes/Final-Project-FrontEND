import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем необходимые компоненты
import './styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SeasonCollections from './components/seasonCollections';
import AboutUs from './components/aboutUs';
import ContactUsButton from './components/contactUsButton';
import RecommendedShoes from './components/recommendedShoes';
import AnchorUp from './components/anchorUp';
import SalesPage from './components/salesPage'; 
import ShopPage from './components/shopPage';
import KidsPage from './components/kidsPage';
import MenPage from './components/menPage';
import WomenPage from './components/womenPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/sales" element={<SalesPage />} /> 
          <Route path="/shop" element={<ShopPage />} /> 
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/men" element={<MenPage />} />  
          <Route path="/women" element={<WomenPage />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/season-collections" element={<SeasonCollections />} />
          <Route path="/recommended-shoes" element={<RecommendedShoes />} />
        </Routes>
        
        <Footer />
        <AnchorUp />
        <ContactUsButton />
      </div>
    </Router>
  );
}

export default App;
