import menuImage1 from "./images/menu-1.png";
import menuImage2 from "./images/menu-2.png";
import menuImage3 from "./images/menu-3.png";
import menuImage4 from "./images/menu-4.png";
import menuImage5 from "./images/menu-5.png";
import menuImage6 from "./images/menu-6.png";
import menuImage7 from "./images/popcorn.png";
import menuImage8 from "./images/veg thali.png";
 
import cartImage1 from "./images/cart-item-1.png";
import cartImage2 from "./images/cart-item-2.png";
import cartImage3 from "./images/cart-item-3.png";
import productImage1 from "./images/product-1.png";
import productImage2 from "./images/product-3.png";
import productImage3 from "./images/popcorn.png";
import reviewImage1 from "./images/pic-1.png";
import reviewImage2 from "./images/pic-1.png";
import reviewImage3 from "./images/pic-1.png";
import blogImage1 from "./images/blog-1.jpeg";
import blogImage2 from "./images/blog-2.jpeg";
import blogImage3 from "./images/blog-3.jpeg";
 
const menu = [
  {
    img: menuImage1,
    'Name':'Cheeseburger',
    'Menuprice':'199',
    'spanprice':'299'
  },
  {
    img: menuImage2,
    'Name':'Chicken Nuggets',
    'Menuprice':'139',
    'spanprice':'299'
  },
  {
    img: menuImage3,
    'Name':'fried Chicken',
    'Menuprice':'149',
    'spanprice':'299'
    
  },
  {
    img: menuImage4,
    'Name':'Pizza',
    'Menuprice':'199',
    'spanprice':'299'
  },
  {
    img: menuImage5,
    'Name':'Combo Meal',
    'Menuprice':'179',
    'spanprice':'299'
  },
  {
    img: menuImage6,
    'Name':'Coffee',
    'Menuprice':'49',
    'spanprice':'149'
  },
  {
    img: menuImage7,
    'Name':'popcorn',
    'Menuprice':'99',
    'spanprice':'199'
  },
  {
    img: menuImage8,
    'Name':'Veg Thali',
    'Menuprice':'149',
    'spanprice':'299'
  }
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
];

const product = [
  {
    img: productImage1,
    'name':'Burger',
    'price':'99',
    'spanprice':'149'
  },
  {
    img: productImage2,
    'name':'Ice Creame',
    'price':'99',
    'spanprice':'199'
  },
  {
    img: productImage3,
    'name':'popcorn',
    'price':'99',
    'spanprice':'199'
  },
];
const review = [
  {
    img: reviewImage1,
  },
  {
    img: reviewImage2,
  },
  {
    img: reviewImage3,
  },
];
const blog = [
  {
    img: blogImage1,
    'Date':'3 November, 2024',
    'Heading':'tasty and refreshing spices',
  },
  {
    img: blogImage2,
    'Date':'5 November, 2024',
    'Heading':'tasty and refreshing spices',
  },
  {
    img: blogImage3,
    'Date':'1 November, 2024',
    'Heading':'tasty and refreshing spices',
  },
];
export { menu, cart, product, review, blog };
