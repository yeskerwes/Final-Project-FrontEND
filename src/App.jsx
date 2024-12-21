import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import SeasonCollections from "./components/seasonCollections";
import AboutUs from "./components/aboutUs";
import RecommendedShoes from "./components/recommendedShoes";
import AnchorUp from "./components/anchorUp";
import SalesPage from "./components/salesPage";
import ShopPage from "./components/shopPage";
import KidsPage from "./components/kidsPage";
import MenPage from "./components/menPage";
import WomenPage from "./components/womenPage";
import FaqPage from "./components/faqPage";
import SignIn from "./components/signIn";
import Registration from "./components/Registration";
import AboutUsPage from "./components/aboutUsPage";
import Toolbar from "./components/toolbar";
import FavoritesModal from "./components/favoritesModal";
import CartSidebar from "./components/CartSidebar";
import CartPage from "./components/cartPage";
import ProfilePage from './components/profilePage';
import AdminPage from "./components/AdminPage";
import Charts from "./components/Charts";
import ContactUsButton from "./components/contactUsButton";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const location = window.location.pathname;

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item) => {
    setFavoriteItems((prevItems) => {
      if (prevItems.some((favorite) => favorite.id === item.id)) {
        return prevItems.filter((favorite) => favorite.id !== item.id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const toggleCartModal = () => {
    setIsCartModalOpen((prev) => !prev);
  };

  const toggleFavoritesModal = () => {
    setIsFavoritesModalOpen((prev) => !prev);
  };
  
  return (
    <Router>
      <div className="App">
        {location !== "/admin" && location !== "/charts" && <Header />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Content />
                <AboutUs />
                <SeasonCollections />
                <RecommendedShoes />
              </>
            }
          />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/kids" element={<KidsPage addToCart={addToCart} favoriteItems={favoriteItems} toggleFavorite={toggleFavorite} />} />
          <Route path="/men" element={<MenPage addToCart={addToCart} favoriteItems={favoriteItems} toggleFavorite={toggleFavorite} />} />
          <Route path="/women" element={<WomenPage addToCart={addToCart} favoriteItems={favoriteItems} toggleFavorite={toggleFavorite} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
        <Toolbar
          cartItems={cartItems}
          favoriteItems={favoriteItems}
          onCartClick={toggleCartModal}
          onFavoritesClick={toggleFavoritesModal}
        />
        {location !== "/admin" && location !== "/charts" && <Footer />}
        {location !== "/admin" && location !== "/charts" && <ContactUsButton />}
        <AnchorUp />
        <CartSidebar
          isOpen={isCartModalOpen}
          closeSidebar={toggleCartModal}
          cartItems={cartItems || []}  
          removeFromCart={removeFromCart}
        />
        <FavoritesModal
          isOpen={isFavoritesModalOpen}
          closeModal={toggleFavoritesModal}
          favoriteItems={favoriteItems}
        />
      </div>
    </Router>
  );
}

export default App;
