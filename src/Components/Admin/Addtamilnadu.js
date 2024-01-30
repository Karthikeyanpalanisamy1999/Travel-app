import React, { useEffect, useState } from "react";
import Header from "../Header.js";
import axios from 'axios';

function Addpackages() {

    const [image, setImages] = useState(null);
    const [place, setPlace] = useState("");
    const [amount, setAmount] = useState("");
    const [duration, setDuration] = useState("");
    const [rating, setRating] = useState("");
    const [array1, setArray1] = useState([{}]);

    const Cheack = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("place", place);
        formData.append("amount", amount);
        formData.append("duration", duration);
        formData.append("rating", rating);

        axios.post("http://localhost:3001/addtamilnadu", formData)
            .then(response => setArray1([...array1, response.data]))
            .catch(error => console.error(error));
            alert("Added Successfully");
            window.location.href='/main';
    };

    const handleImageChange = (e) => {
        setImages(e.target.files[0]);
    };

    return (
        <div>
            <Header />
            <div className="d-flex vh-100 register justify-content-center align-items-center">
                <div className="w-50 bur bg-white rounded-2 flex-wrap justify-content-center align-items-center p-3 ">
                    <h3 className="d-flex justify-content-center align-items-center">Add Packages</h3>
                    <form onSubmit={Cheack}>
                        <div>
                            <label className="mt-1"><h5>Place</h5></label>
                            <input className="form-control mt-2" type="text" placeholder="Enter Place" required
                                onChange={(e) => setPlace(e.target.value)} value={place}></input>
                        </div>
                        <div>
                            <label className="mt-1"><h5>Amount</h5></label>
                            <input className="form-control mt-2" type="text" placeholder="Enter Amount"
                                onChange={(e) => setAmount(e.target.value)} value={amount} required></input>
                        </div>
                        <div>
                            <label className="mt-1"><h5>Duration</h5></label>
                            <input className="form-control mt-2" type="text"
                                onChange={(e) => setDuration(e.target.value)} value={duration} placeholder="Enter Duration" required></input>
                        </div>
                        <div>
                            <label className="mt-1"><h5>Rating</h5></label>
                            <input className="form-control mt-2" type="text"
                                onChange={(e) => setRating(e.target.value)} value={rating} placeholder="Enter Rating" required></input>
                        </div>
                        <div>
                            <label className="mt-1"><h5>Image</h5></label>
                            <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mt-2" />
                        </div>
                        <button className="btn btn-success mt-3 ms-2 mb-3">Add Package</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Addpackages;
