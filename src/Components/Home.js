import React from "react"
import Header from "./Header.js";
import '../App.css';
function Home() {
  const Move=()=>{
    window.location.href='/main';
  }
  return (
    <div>
      <Header/>
      <div className="homeimg d-flex flex-wrap vh-100 bg-dark justify-content-center align-items-center ">
       <div className="w-50   justify-content-center align-items-center p-3 rounded-5">
        <h3 className="text-white flex-wrap tex justify-content-center align-items-center ">There are a lot of reasons to travel.
           Some people travel for fun while some do it for education purposes. Similarly, others have business reasons to travel. 
          In order to travel,
           one must first get an idea of their financial situation and then proceed.</h3>
           <div className=" d-flex flex-wrap justify-content-center align-items-center">
            <button className="btn btn-outline-warning mt-2 "
             onClick={Move}>Visit Our Page</button>
          </div> 
       </div>
    </div>
    </div>
  )
};

export default Home;
