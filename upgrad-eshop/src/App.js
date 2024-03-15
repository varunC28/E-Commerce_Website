import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationbar/NavigationBar';
import LoginPage from './components/login-page/LoginPage';
import SignUpPage from './components/signup-page/SignupPage';
import HomePage from './components/home-page/HomePage';
import AddProductsPage from './components/addproducts-paeg/AddProductsPage';

function App() {
  return (
    <Router>
      <NavigationBar isLoggedIn={false} isAdmin={true} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add-products" element={<AddProductsPage />} />
        {/* <Route path="/" element={<HomePage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;