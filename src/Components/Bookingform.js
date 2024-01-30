import React, { useState,useEffect} from "react"
import Header from "./Header.js";
import axios from 'axios';
function Bookingform() {
 const [name,setName] = useState();
 const [mobile,setMobile] = useState();
 const [age,setAge] = useState();
 const [date,setDate] = useState();
 const [locations,setLocations] = useState();
 const[array1,setArray1] = useState([{
  
 }]);
 let s = JSON.parse(localStorage.getItem('see')) || [];
  let place = s.place;
  let amount = s.amount;
  const Doit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/bookingform",{name,mobile,age,date,locations,place,amount})
    .then(response=>setArray1([...array1,response.data]))
    .catch(error=>console.error(error))
    window.location.href='/final';

  }

  
    

  return (
    <div>
    <Header/>
<div className="d-flex vh-100 about justify-content-center align-items-center">
   <div className="w-50 bur rounded-2 flex-wrap text-warning justify-content-center align-items-center p-3 ">
        <h3 className="d-flex justify-content-center align-items-center">Book Your Tickets</h3>
        <form onSubmit={Doit}>
            <div>
                <label className="mt-1"><h5>Passanger Name</h5></label>
                <input className="form-control mt-2" type="text" placeholder="Enter Name" required
                onChange={(e)=>setName(e.target.value)} value={name}></input>
            </div>
            <div>
                <label className="mt-1"><h5>Mobile No</h5></label>
                <input className="form-control mt-2" type="text" placeholder="Enter Mobile number"
                onChange={(e)=>setMobile(e.target.value)} value={mobile} required></input>
            </div>
            <div>
                <label className="mt-1"><h5>Age</h5></label>
                <input className="form-control mt-2" type="number"
                onChange={(e)=>setAge(e.target.value)} value={age} placeholder="Enter your Age" required></input>
            </div>
            <div>
                <label className="mt-1"><h5>Date</h5></label>
                <input className="form-control mt-2" type="date" 
                onChange={(e)=>setDate(e.target.value)} value={date} placeholder="Enter your Age" required></input>
            </div>
            <div>
                <label className="mt-1"><h5>Your Location</h5></label>
                <input className="form-control mt-2" type="text" 
                onChange={(e)=>setLocations(e.target.value)} value={locations} placeholder="Enter location" required></input>
            </div>
            <button className=" btn btn-success mt-3 ms-2 mb-3">Book</button>
        </form>
   </div>
</div>
</div>
  )
};

export default Bookingform;
