import React, { useEffect, useState } from "react"
import Header from "./Header.js";

import axios from 'axios';
import { Link } from "react-router-dom";
function Register() {

    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[mobile,setMobile] = useState();
    const[password,setPassword] = useState();
    const[confirmpassword,setConfirmpassword] = useState();
    const[array1,setArray1] = useState([{

    }]);

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(response=>setArray1(response.data))
        .catch(error=>console.error(error))
    },[])

    const Cheack=(e)=>{
        e.preventDefault();
        if(password==confirmpassword)
        {
            alert("Registered Successfully");
            window.location.href='/login';

        }
        axios.post("http://localhost:3001/register",{name,email,mobile,password,confirmpassword})
        .then(response=>setArray1([...array1,response.data]))
        .catch(error=>console.error(error))
    }

  return (
    <div>
        <Header/>
    <div className="d-flex vh-100 register justify-content-center align-items-center">
       <div className="w-50 bur rounded-2 flex-wrap justify-content-center align-items-center p-3 ">
            <h3 className="d-flex justify-content-center align-items-center">Register</h3>
            <form onSubmit={Cheack}>
                <div>
                    <label className="mt-1"><h5>Name</h5></label>
                    <input className="form-control mt-2" type="text" placeholder="Enter Name" required
                    onChange={(e)=>setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <label className="mt-1"><h5>Mobile</h5></label>
                    <input className="form-control mt-2" type="text" placeholder="Enter Mobile number"
                    onChange={(e)=>setMobile(e.target.value)} value={mobile} required></input>
                </div>
                <div>
                    <label className="mt-1"><h5>Email</h5></label>
                    <input className="form-control mt-2" type="email"
                    onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" required></input>
                </div>
                <div>
                    <label className="mt-1"><h5>Password</h5></label>
                    <input className="form-control mt-2" type="password" 
                    onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password" required></input>
                </div>
                <div>
                    <label className="mt-1 "><h5>Confirm<br></br>Password</h5></label>
                    <input className="form-control mt-2" type="password"
                    onChange={(e)=>setConfirmpassword(e.target.value)} value={confirmpassword} required placeholder="Enter Confirm Password"></input>
                </div>
                <button className=" btn btn-success mt-3 ms-2 mb-3">Register</button>
            </form>
            <Link to='/login' className="mb-5">Allready have a Account</Link>
       </div>
    </div>
    </div>
  )
};

export default Register;
