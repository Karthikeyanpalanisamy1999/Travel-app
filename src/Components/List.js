import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header.js";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaDownload } from "@react-icons/all-files/fa/FaDownload.js";

function List() {
    const [array1, setArray1] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3001/list")
            .then(response => {
                setArray1(response.data);
                console.log("Data from backend:", response.data);
            })
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    const downloadPDF = (k) => {
        const { name, mobile, age, date, locations, place, amount } = k;

        const pdfDoc = new jsPDF();

        pdfDoc.text('AK Travel', 85, 20);

        const content = {
            startY: 30,
            body: [
                ['Passenger Name', name],
                ['Mobile', mobile],
                ['Age', age],
                ['Date', date],
                ['Passenger Address', locations],
                ['Tour Place', place],
                ['Amount', amount],
            ],
        };
        pdfDoc.autoTable(content);

        pdfDoc.text('Happy Journey...', 150, 100);


        // Save the PDF as a file
        pdfDoc.save('Ticket.pdf');
    };

    return (
        <div>
            <Header/>
            <div className="d-flex flex-wrap list vh-100 justify-content-center align-items-center">
                <div className="flex-wrap bg-white rounded-0 p-3 table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Age</th>
                                <th>Date</th>
                                <th>Passenger Address</th>
                                <th>Tour Place</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                array1.map((k) => (
                                    <tr key={k.mobile}>
                                        <td>{k.name}</td>
                                        <td>{k.mobile}</td>
                                        <td>{k.age}</td>
                                        <td>{k.date}</td>
                                        <td>{k.locations}</td>
                                        <td>{k.place}</td>
                                        <td>{k.amount}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => downloadPDF(k)}>
                                              Download Ticket  <FaDownload/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default List;
