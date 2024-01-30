import React from "react"

function Ticket() {
    let list = JSON.parse(localStorage.getItem('list')) || [];
  return (
    <div id="ticketContent">
    <div>
        <h1 className="d-flex justify-content-center align-items-center mt-5">
            <span className="text-danger me-2">AK</span> Travels</h1>
    </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
               <ul className="texi">
                <li>Name:{list.name}</li>
                <li>Mobile:{list.mobile}</li>
                <li>Age:{list.age}</li>
                <li>Date:{list.date}</li>
                <li>Passanger Address:{list.locations}</li>
                <li>Tour Place:{list.place}</li>
                <li>Amount:{list.amount}</li>
               </ul>
        </div>
        <h3 className="d-flex justify-content-center align-items-center mt-5">Happy....Journey</h3>
    </div>
  )
};

export default Ticket;
