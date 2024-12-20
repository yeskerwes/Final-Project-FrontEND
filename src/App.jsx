import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCartModal,
  toggleFavoritesModal,
} from "./redux/uiSlice";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { toggleFavorite } from "./redux/favoritesSlice";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/mainPage/content";
import SeasonCollections from "./components/mainPage/seasonCollections";
import AboutUs from "./components/mainPage/aboutUs";
import ContactUsButton from "./components/contactUsButton";
import RecommendedShoes from "./components/mainPage/recommendedShoes";
import AnchorUp from "./components/anchorUp";
import SalesPage from "./components/sale/salesPage";
import ShopPage from "./components/shop/shopPage";
import KidsPage from "./components/men,women,kids/kidsPage";
import MenPage from "./components/men,women,kids/menPage";
import WomenPage from "./components/men,women,kids/womenPage";
import FaqPage from "./components/faq/faqPage";
import SignIn from "./components/signIn,registration/signIn";
import Registration from "./components/signIn,registration/Registration";
import AboutUsPage from "./components/aboutUs/aboutUsPage";
import Toolbar from "./components/toolbar";
import FavoritesModal from "./components/favoritesModal";
import CartSidebar from "./components/cart,order/CartSidebar";
import CartPage from "./components/cart,order/cartPage";
import ProfilePage from "./components/profile/profilePage";
import OrderPage from "./components/cart,order/orderPage";
import ContactsPage from "./components/faq/ContactsPage";
import PersonalDetailsPage from "./components/profile/PersonalDetailsPage";
import ChangePasswordPage from "./components/profile/ChangePasswordPage";

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
