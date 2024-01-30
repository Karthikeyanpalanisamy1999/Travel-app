import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [array1, setArray1] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/login")
            .then(response => {
                setArray1(response.data);
                console.log("Data from backend:", response.data);
            })
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    const check = (e) => {
        e.preventDefault();
        const user = array1.find((x) => x.name === name);

        if (user) {
            if (user.password === password) {
                alert("Login successfully");
                window.location.href = '/main';
                localStorage.setItem('c',JSON.stringify('true'));
                localStorage.setItem("t",JSON.stringify(name));
                localStorage.setItem("t1",JSON.stringify(password));
            } else {
                alert("Invalid password");
            }
        } else {
            alert("User not found");
        }
    }

    return (
        <div>
            <Header />
            <div className="d-flex vh-100 login justify-content-center align-items-center ">
                <div className="w-50  bur rounded-2 flex-wrap justify-content-center align-items-center p-3 ">
                    <h3 className="d-flex justify-content-center align-items-center">Login</h3>
                    <form onSubmit={check}>
                        <div>
                            <label className="mt-3"><h5>UserID</h5></label>
                            <input className="form-control mt-2"
                                onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter UserID"></input>
                        </div>
                        <div>
                            <label className="mt-3"><h5>Password</h5></label>
                            <input className="form-control mt-2" type="password"
                                onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password"></input>
                        </div>
                        <button className="btn btn-success mt-3 ms-2 mb-5">Login</button>
                    </form>
                    <Link to='/register' className=" mb-5"><b>Create a New Account</b></Link>
                </div>
            </div>
        </div>
    )
};

export default Login;
