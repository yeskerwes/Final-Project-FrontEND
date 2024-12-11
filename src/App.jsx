import React from 'react';
import './styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SeasonCollections from './components/seasonCollections';
import AboutUs from './components/aboutUs';
import RecommendedShoes from './components/recommendedShoes';
import AnchorUp from './components/anchorUp';
import Registration from './components/Registration';
import RegistrationForm from './components/registrationForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={<RegistrationForm />} />
        </Routes>
        <Footer />
        <AnchorUp />
      </div>
    </Router>
  );
}

export default App;
