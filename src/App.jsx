import React from 'react';
import './styles/App.css';
import Header from './header';
import Footer from './footer';
import Content from './content';
import AnchorUp from './anchorUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <AnchorUp />
    </div>
  );
}

export default App;
