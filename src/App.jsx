import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCartModal,
  toggleFavoritesModal,
} from "./redux/uiSlice";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { toggleFavorite } from "./redux/favoritesSlice";
import "./styles/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import SeasonCollections from "./components/seasonCollections";
import AboutUs from "./components/aboutUs";
import ContactUsButton from "./components/contactUsButton";
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
import ProfilePage from "./components/profilePage";
import OrderPage from "./components/orderPage";
import ContactsPage from "./components/ContactsPage";
import PersonalDetailsPage from "./components/PersonalDetailsPage";
import ChangePasswordPage from "./components/ChangePasswordPage";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);
  const isCartModalOpen = useSelector((state) => state.ui.isCartModalOpen);
  const isFavoritesModalOpen = useSelector((state) => state.ui.isFavoritesModalOpen);

  return (
    <Router>
      <div className="App">
        <Header />
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
          <Route
            path="/kids"
            element={
              <KidsPage
                addToCart={(item) => dispatch(addToCart(item))}
                favoriteItems={favoriteItems}
                toggleFavorite={(item) => dispatch(toggleFavorite(item))}
              />
            }
          />
          <Route
            path="/men"
            element={
              <MenPage
                addToCart={(item) => dispatch(addToCart(item))}
                favoriteItems={favoriteItems}
                toggleFavorite={(item) => dispatch(toggleFavorite(item))}
              />
            }
          />
          <Route
            path="/women"
            element={
              <WomenPage
                addToCart={(item) => dispatch(addToCart(item))}
                favoriteItems={favoriteItems}
                toggleFavorite={(item) => dispatch(toggleFavorite(item))}
              />
            }
          />
          <Route
            path="/cartPage"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={(id) => dispatch(removeFromCart(id))}
              />
            }
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orderPage" element={<OrderPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/person-details" element={<PersonalDetailsPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
        </Routes>
        <Toolbar
          cartItems={cartItems}
          favoriteItems={favoriteItems}
          onCartClick={() => dispatch(toggleCartModal())}
          onFavoritesClick={() => dispatch(toggleFavoritesModal())}
        />
        <Footer />
        <AnchorUp />
        <ContactUsButton />
        <CartSidebar
          isOpen={isCartModalOpen}
          closeSidebar={() => dispatch(toggleCartModal())}
          cartItems={cartItems}
          removeFromCart={(id) => dispatch(removeFromCart(id))}
        />
        <FavoritesModal
          isOpen={isFavoritesModalOpen}
          closeModal={() => dispatch(toggleFavoritesModal())}
          favoriteItems={favoriteItems}
        />
      </div>
    </Router>
  );
}

export default App;
