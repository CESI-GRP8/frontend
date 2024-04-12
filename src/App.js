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
import SettingsPage from './components/pages/Settings/SettingsPage';
import OrdersPage from './components/pages/Orders/OrdersPage';
import PaymentPage from './components/pages/PaymentPage/PaymentPage';
import OrderConfirmationPage from './components/pages/OrderConfirmationPage/OrderConfirmationPage';
import OrderStatusPage from './components/pages/OrderStatusPage/OrderStatusPage';
import OrderDeniedPage from './components/pages/OrderDeniedPage/OrderDeniedPage';
import NotificationsPage from './components/pages/Notifications/NotificationsPage';
import R_Orders from './components/pages/R_Orders/R_OrdersPage';
import { CartProvider } from './context/CartContext';
import R_Menu from './components/pages/R_Menu/R_Menu';
import L_DeliveryAvailable from './components/pages/L_DeliveryAvailable/L_DeliveryAvailable';
import L_Wallet from './components/pages/L_Wallet/L_Wallet';
import { DishesProvider } from './context/DishesContext'; // Ajustez le chemin selon votre structure
import { PaymentProvider } from './context/PaymentContext';
import { UserProfileProvider } from './context/UserProfileContext';
import R_ConnectedHeader from './components/Header/R_ConnectedHeader';
import L_ConnectedHeader from './components/Header/L_ConnectedHeader';


const Layout = () => {
  let location = useLocation();

  // Un ensemble de chemins où le Header normal doit être affiché
  const publicPaths = ['/', '/signin', '/signup'];
// Define the paths for different types of headers

const rConnectedPaths = ['/orders_r', '/menu_r'];  // Paths for L_ConnectedHeader
const lConnectedPaths = ['/wallet_l', '/delivery_available_l'];  // Paths for L_ConnectedHeader

// Determine which header to show based on the current path
const renderHeader = () => {
  if (publicPaths.includes(location.pathname)) {
    return <Header />;
  } else if (rConnectedPaths.includes(location.pathname)) {
    return <R_ConnectedHeader />;
  } else if (lConnectedPaths.includes(location.pathname)) {
    return <L_ConnectedHeader />;
  }
  else {
    return <ConnectedHeader />;
  }
};
  // Vérifiez si le chemin actuel est dans la liste des chemins publics

  return (
    <>
      {/* Affichez le Header normal sur les chemins publics sinon ConnectedHeader */}
      {renderHeader()}

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
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/success" element={<OrderConfirmationPage/>}/>
        <Route path="/denied" element={<OrderDeniedPage/>}/>
        <Route path="/suivi" element={<OrderStatusPage/>}/>
        <Route path="/notifications" element={<NotificationsPage/>}/>
        <Route path="/orders_r" element={<R_Orders/>}/>
        <Route path="/menu_r" element={<R_Menu/>}/>
        <Route path="/delivery_available_l" element={<L_DeliveryAvailable/>}/>
        <Route path="/wallet_l" element={<L_Wallet/>}/>
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
