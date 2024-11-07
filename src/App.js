import {useState ,React} from "react";
import "./css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar cartItems={cartItems}/>
      <Home/>
      <About/>
      <Menu cartItems={cartItems} setCartItems={setCartItems}/>
      <Products/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  );
};

export default App;
