import {React} from "react";
import { menu } from "../Data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Menu = ({ cartItems, setCartItems }) => {
  const addToCart = (index) => {
    const item = menu[index];
    setCartItems([...cartItems, item]);
    toast.success("Add to cart");
  };

  return (
    <>
      <ToastContainer/>
      <section className="menu" id="menu">
        <h1 className="heading">
          our<span>menu</span>
        </h1> 
        <div className="box-container">
          {menu.map((item, index) => (
            <div   className="box" key={index * Math.random()}>
              <img src={item.img} alt="img"/>
              <h5>{item.Name}</h5>
              <div className="price">
              ₹ {item.Menuprice} <span>{item.spanprice}</span>
              <div>
              <button onClick={() => addToCart(index)} className="btn">add to cart</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  
  );
};

export default Menu;
  