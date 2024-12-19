import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
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
import FaqPage from './components/faqPage';
import SignIn from './components/signIn';
import Registration from './components/Registration';
import AboutUsPage from './components/aboutUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Content />
              <AboutUs />
              <SeasonCollections />
              <RecommendedShoes />
            </>
          } />
          <Route path="/sales" element={<SalesPage />} /> 
          <Route path="/shop" element={<ShopPage />} /> 
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/men" element={<MenPage />} />  
          <Route path="/women" element={<WomenPage />} /> 
          <Route path="/faq" element={<FaqPage />} /> 
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={<SignIn />} /> 
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        
        <Footer />
        <AnchorUp />
        <ContactUsButton />
      </div>
    </Router>
  );
}

export default App;
