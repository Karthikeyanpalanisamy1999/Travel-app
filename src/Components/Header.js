import React from "react"
import { Link } from "react-router-dom";

function Header() {

  return (
      <div>
         <nav class="navbar navbar-expand-sm bg-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li className="ms-5">
               <h1 className="text-danger">AK <span className="text-white texs">Travels</span></h1>
            </li>
            <li class="nav-item">
             <Link to='/'><span className="btn btn-outline-warning ms-5 mt-2 ">Home</span></Link>
            </li>
            <li class="nav-item">
             <Link to='/login'><span className="btn btn-outline-warning ms-5 mt-2">Login</span></Link>
            </li>
            <li class="nav-item me-5">
             <Link to='/register'><span  className="btn btn-outline-warning ms-5 mt-2 me-5">Register</span></Link>
            </li>
            <li class="nav-item ms-5">
             <Link to='/list'><span className="btn btn-outline-primary ms-5 mt-2">Passengers List</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Header;
