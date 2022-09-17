import "./App.css";
import Productlist from "./Components/Productlist";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";


function App() {
  const [isActive, setIsActive] = useState(false);

  const handleburger=()=>{
    setIsActive(current => !current);
  }
  return (
    <>
      <Router>
        <Navbar isActive={isActive}/> 
        <Routes>
          <Route exact path="/" element={<Productlist handleburger={handleburger}/>}/>
         <Route exact path="/electronics" element={<Products cat="electronics"/>}/>
         <Route exact path="/jewelery" element={<Products cat="jewelery"/>}/>
         <Route exact path="/mencloth" element={<Products cat="men's clothing"/>}/>
         <Route exact path="/womencloth" element={<Products cat="women's clothing"/>}/>
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/signup" element={<Signup/>}/>
           
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
