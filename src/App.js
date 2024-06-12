import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopByCategory from "./Components/ShopByCategory";

function App() {
  const categories = ["fruits and vegetables", "bakery", "meat and seafood", "beverage", "biscuit and snacks"];

  return (
    <div className="App">
      <Home/>
      <ShopByCategory/>
    </div>
  );
}

export default App;
