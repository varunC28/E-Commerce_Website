import React, { useState }  from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputBase,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css"; 
import SearchIcon from '@mui/icons-material/Search';

const NavigationBar = ({ isLoggedIn, isAdmin }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate.push("/login");
  };

  const handleSignIn = () => {
    // Send sign-in request to backend
    fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "yourUsername",
        password: "yourPassword",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Redirect to products page after successful sign-in
          navigate("/products");
        } else {
          // Handle sign-in error
        }
      })
      .catch((error) => {
        // Handle network error
      });
  };

  const handleSignUp = () => {
    // Send sign-up request to backend
    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "yourEmail",
        password: "yourPassword",
        // Add other sign-up data as required by your backend
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle sign-up response
        console.log(data.message);
      })
      .catch((error) => {
        // Handle network error
      });
  };

  const handleSearch = () => {
    // Send search query to backend
    fetch(`/api/products?search=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle search results
        console.log(data);
      })
      .catch((error) => {
        // Handle network error
      });
  };


  return (
    <AppBar position="static">
      <Toolbar className="toolbar-container">
        <div className="left-section">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ShoppingCart />
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: 8 }}>
            upGrad Eshop
          </Typography>
        </div>
        <div className="center-section">
          <InputBase
            placeholder="   Search... " 
            className="search-bar" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startAdornment={
              <IconButton color="inherit" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            }
          />
        </div>
        <div className="right-section">
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/" className="home-button">
                Home
              </Button>
              {isAdmin && (
                <Button color="inherit" component={Link} to="/add-products" className="add-products-button">
                  Add Products
                </Button>
              )}
              <Button color="inherit" onClick={handleLogout} className="logout-button">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" onClick={handleSignIn} className="home-button">
                <u>Log In</u>
              </Button>
              <Button color="inherit" component={Link} to="/signup" onClick={handleSignUp}>
                <u>Sign Up</u>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
