import React, { useState } from "react"
import Header from "./Header.js";
import Footer from "./Footer.js";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser.js";
import "../Main.css";
import TamilNadu from "./data/tamilnadu.js";
import National from "./data/National.js";
import International from "./data/International.js";
function Mainpage() {
  

 let n1 = JSON.parse(localStorage.getItem('t')) || [];
 let n2 = JSON.parse(localStorage.getItem('c')) || [];

  const Move=()=>{
     window.location.href='/';
     localStorage.setItem('c',JSON.stringify('false'));
  }


  return (
    <div >
      <Header/>
      {
        n2=='false'  ? (<></>):
      (<div className="d-flex flex-wrap justify-content-end align-items-end me-5 mt-3">
        <h4 className="text-primary me-2"><FaRegUser/></h4>
         <h4>{n1}</h4> 
         <button className="btn btn-danger ms-3" onClick={Move}>Logout</button>
      </div>)
      }
      <div className="mt-5">
      <TamilNadu/>
      <National/>
      <International/>
      <Footer/>
     </div>
     </div>
  )
};

export default Mainpage;
