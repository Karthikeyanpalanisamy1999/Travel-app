import React from "react"
import Header from "./Header.js";

function Booking() {
     let s = JSON.parse(localStorage.getItem('see')) || [];
     let n2 = JSON.parse(localStorage.getItem('c')) || [];
    const Move=()=>{
        if(n2=='true')
          {
            window.location.href='/bookingform';
          }
        else    
        {
            alert("Please Login First & Book Your Tickets");
        }
    }

  return (
    <div>
        <Header/>
        <div className="d-flex  flex-wrap justify-content-center align-items-center">
            <img src={`data:image/jpeg;base64,${arrayBufferToBase64(s.image.data)}`} height={300} width={400} className="mt-5"></img>
        </div>
        <div className="d-flex  flex-wrap justify-content-center align-items-center">
            <h1 className="mt-3">Place:{s.place}</h1>
        </div>
        <div className="d-flex  flex-wrap justify-content-center align-items-center">
            <h3 className="mt-3">Duration:{s.duration}</h3>
        </div>
        <div className="d-flex  flex-wrap justify-content-center align-items-center">
            <h3 className="mt-3">Amount:{s.amount} (Pickup Point:Chennai)</h3>
        </div>
        <div className="d-flex  flex-wrap justify-content-center align-items-center">
            <button className="btn btn-warning mt-3 mb-5" onClick={Move}>Book Your Tickets</button>
        </div>
        
    </div>
  )
};

export default Booking;
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
