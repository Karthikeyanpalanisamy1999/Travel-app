// Updatetamilnadu.js

import React, { useEffect, useState } from "react";
import Header from "../Header.js";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Updatetamilnadu() {
  const { id } = useParams();
  const [image, setImages] = useState(null);
  const [place, setPlace] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/update/${id}`)
      .then(result => {
        setPlace(result.data.place);
        setAmount(result.data.amount);
        setDuration(result.data.duration);
        setRating(result.data.rating);
        // Note: Set image URL or handle it as needed
        // For simplicity, let's assume the image URL is stored in result.data.image
        setImages(result.files[0].image);
      })
      .catch(err => console.log(err));
  }, []);

  const handleImageChange = (e) => {
    setImages(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("place", place);
    formData.append("amount", amount);
    formData.append("duration", duration);
    formData.append("rating", rating);
    formData.append("image", image);

    axios.put(`http://localhost:3001/updatetamilnadu/${id}`, formData)
      .then(result => {
        console.log(result);
        // Handle success, e.g., redirect to another page
      })
      .catch(err => console.log(err));
      window.location.href = '/main';
  };

  return (
    <div>
      <Header />
      <div className="d-flex vh-100 register justify-content-center align-items-center">
        <div className="w-50 bur bg-white rounded-2 flex-wrap justify-content-center align-items-center p-3 ">
          <h3 className="d-flex justify-content-center align-items-center">Add Packages</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="mt-1"><h5>Place</h5></label>
              <input className="form-control mt-2" type="text" placeholder="Enter Place" required
                onChange={(e) => setPlace(e.target.value)} value={place}
              />
            </div>
            <div>
              <label className="mt-1"><h5>Amount</h5></label>
              <input className="form-control mt-2" type="text" placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)} value={amount} required
              />
            </div>
            <div>
              <label className="mt-1"><h5>Duration</h5></label>
              <input className="form-control mt-2" type="text"
                onChange={(e) => setDuration(e.target.value)} value={duration} placeholder="Enter Duration" required
              />
            </div>
            <div>
              <label className="mt-1"><h5>Rating</h5></label>
              <input className="form-control mt-2" type="text"
                onChange={(e) => setRating(e.target.value)} value={rating} placeholder="Enter Rating" required
              />
            </div>
            <div>
              <label className="mt-1"><h5>Image</h5></label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control mt-2"
              />
            </div>
            <button className="btn btn-success mt-3 ms-2 mb-3">
              Add Package
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatetamilnadu;
