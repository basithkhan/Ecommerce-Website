import './App.css';
import Header from "./component/layout/header/header.js";
import Footer from "./component/layout/footer/footer.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import webfont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js"

function App() {
  React.useEffect(()=>{
    webfont.load({
      google:{
        families:["Roboto","Droid sans","Chilanka"]
      }
    })
  },[]);
  return (
    <Router>
      <Header/>
      <Routes><Route exact path="/" Component={Home} /></Routes>
      <Footer/>
    </Router>
  );
}

export default App;
