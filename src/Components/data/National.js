import { useState, useEffect } from "react";
import axios from 'axios';
import { FaTrash } from "@react-icons/all-files/fa/FaTrash.js";
import { FaPenSquare } from "@react-icons/all-files/fa/FaPenSquare.js";
import { Link } from "react-router-dom";

function National() {
  const [array2, setArray2] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/national")
      .then(response => {
        setArray2(response.data);
        console.log("Data from backend:", response.data);
      })
      .catch(error => console.log("Error fetching data:", error));
  }, []);

  const Move1 = (k) => {
    localStorage.setItem('see', JSON.stringify(k));
    window.location.href = '/booking';
  };
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/delete1/'+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err=>console.log(err))
}

const Moving=()=>{
  window.location.href='/addnational';
}

let name = JSON.parse(localStorage.getItem('t')) || [];
let password = JSON.parse(localStorage.getItem('t1')) || [];
let n2 = JSON.parse(localStorage.getItem('c')) || [];
  return (
    <div>
      {
        name == 'Yuvasakthi' && password == 'Yuvasakthi@2024' && n2 == 'true'? (  <div>
          <h2 className="ps-5 pt-3">National Packages</h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {array2.map((k, index) => (
                <>
              <div key={index} className="card card1 mt-3 ms-5 mb-3 bg-dark text-white" onClick={() => Move1(k)}>
                <img src={`data:image/jpeg;base64,${arrayBufferToBase64(k.image.data)}`} width={250} height={200} alt={k.place || "Image not found"} />
                <div className="card-body">
                  <h3 className="card-title">{k.place}</h3>
                  <p className="card-text">{k.duration}</p>
                  <p className="card-text">{k.amount}</p>
                  <p className="card-text bg-warning texwid ps-2">{k.rating}</p>
                </div>
              </div>
              <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <button className='btn btn-success ms-3 mb-2' onClick={Moving}>+</button>
                  <Link to={`/updatenational/${k._id}`} className="btn btn-warning ms-3 mb-2"><FaPenSquare/></Link>
                  <button className="ms-3 btn btn-danger" onClick={(e)=>handleDelete(k._id)}><FaTrash/></button>
              </div>    
              </div>
                </>
            ))}
          </div>
        </div>):(  <div>
      <h2 className="ps-5 pt-3">National Packages</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {array2.map((k, index) => (
            <>
          <div key={index} className="card card1 mt-3 ms-5 mb-3 bg-dark text-white" onClick={() => Move1(k)}>
            <img src={`data:image/jpeg;base64,${arrayBufferToBase64(k.image.data)}`} width={250} height={200} alt={k.place || "Image not found"} />
            <div className="card-body">
              <h3 className="card-title">{k.place}</h3>
              <p className="card-text">{k.duration}</p>
              <p className="card-text">{k.amount}</p>
              <p className="card-text bg-warning texwid ps-2">{k.rating}</p>
            </div>
          </div>
          <div>  
          </div>
            </>
        ))}
      </div>
    </div>)
      }
    </div>
  
  );
}

export default National;

// Function to convert ArrayBuffer to base64
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}