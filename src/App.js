import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import ConnectedHeader from './components/Header/ConnectedHeader';
import HeroSection from './components/HeroSection/HeroSection';
import SignInPage from './components/pages/SignIn/SignInPage';
import ClientHomePage from './components/pages/ClientHomePage/ClientHomePage';
import RestaurantPage from './components/pages/RestaurantPage/RestaurantPage';
import './App.css';
import DishPage from './components/pages/DishPage/DishPage';
import CartPage from './components/pages/CartPage/CartPage';
import SignUpPage from './components/pages/Signup/SignUpPage';  
import PasswordResetPage from './components/pages/PasswordResetPage/ResetPassword';
import MyProfilePage from './components/pages/MyProfile/MyProfilePage';
import PaymentMethodPage from './components/pages/PaymentMethod/PaymentMethodPage';
import ContactUsPage from './components/pages/ContactUs/ContactUsPage';
import ParametersPage from './components/pages/Parameters/ParametersPage';
import OrdersPage from './components/pages/Orders/OrdersPage';
import PaymentPage from './components/pages/PaymentPage/PaymentPage';
import OrderConfirmationPage from './components/pages/OrderConfirmationPage/OrderConfirmationPage';
import OrderStatusPage from './components/pages/OrderStatusPage/OrderStatusPage';
import { CartProvider } from './context/CartContext';
import { DishesProvider } from './context/DishesContext'; // Ajustez le chemin selon votre structure
import { PaymentProvider } from './context/PaymentContext';
import { UserProfileProvider } from './context/UserProfileContext';


const Layout = () => {
  let location = useLocation();

  // Un ensemble de chemins où le Header normal doit être affiché
  const publicPaths = ['/', '/signin', '/signup'];

  // Vérifiez si le chemin actuel est dans la liste des chemins publics
  const showPublicHeader = publicPaths.includes(location.pathname);

  return (
    <>
      {/* Affichez le Header normal sur les chemins publics sinon ConnectedHeader */}
      {showPublicHeader ? <Header /> : <ConnectedHeader />}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/home" element={<ClientHomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/dish/:id" element={<DishPage />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/resetpassword" element={<PasswordResetPage/>}/>
        <Route path="/myprofile" element={<MyProfilePage/>}/>
        <Route path="/paymentmethod" element={<PaymentMethodPage/>}/>
        <Route path="/contactus" element={<ContactUsPage/>}/>
        <Route path="/parameters" element={<ParametersPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/success" element={<OrderConfirmationPage/>}/>
        <Route path="/suivi" element={<OrderStatusPage/>}/>

      </Routes>
    </>
  );
};

// L'application principale utilise Router et rend le Layout
const App = () => {
  return (
    <Router>
      <UserProfileProvider>
      <PaymentProvider>
      <DishesProvider> {/* Enveloppez CartProvider et Layout avec DishesProvider */}
        <CartProvider>
          <Layout />
        </CartProvider>
      </DishesProvider>
      </PaymentProvider>
      </UserProfileProvider>
    </Router>
  );
};

export default App;
