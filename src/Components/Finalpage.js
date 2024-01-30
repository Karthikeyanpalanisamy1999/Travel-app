import React from "react"
import { Link } from "react-router-dom";
import Header from "./Header.js";

function Final() {
  return (
    <div>
        <Header/>
    <div className="d-flex mt-5 justify-content-center align-items-center">
       <h1>Tickets Booked Successfully</h1>
    </div>
    <div className="d-flex justify-content-center align-items-center mt-2">
       <Link className="btn btn-success" to='/bookingform'>Add More</Link>
    </div>
    </div>
  )
};

export default Final;
