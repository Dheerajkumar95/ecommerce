import React, {useRef } from "react";
import Logo from "../images/logo.png"; 
 

const Navbar = ({ cartItems }) => {
   
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }; 

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div  id="dkkk" className="cart-items-container" ref={cartRef}>
        {cartItems.length > 0 ? (
            cartItems.map((item, index)=>(
              <div className="cart-item" key={index}>
                <span  className="fas fa-times"></span>
          
                <div className="content">
                  <h3>{item.Name}</h3>
                  <img src={item.img} alt={item.Name} />
                  <div className="price">₹ {item.Menuprice}/-</div>
                </div>
              </div>
              
            ))
            
          ) 
          : (
            <p className="btn">empty.</p>
          )}
          {cartItems.length > 0 ? (
            
           <div><button className="btn">Order Now</button></div>
          )
          : (
            ''
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
