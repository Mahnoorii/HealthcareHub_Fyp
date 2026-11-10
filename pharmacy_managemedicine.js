import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PharmacyManageMedicine() {

  const [medicines, setMedicines] = useState([]);

  /* ================= LOAD DATA ================= */

  useEffect(() => {

    const savedMeds =
      JSON.parse(localStorage.getItem("medicines")) || [];

    setMedicines(savedMeds);

  }, []);

  /* ================= DELETE ================= */

  const handleDelete = (index) => {

    const updated = medicines.filter(
      (_, i) => i !== index
    );

    setMedicines(updated);

    localStorage.setItem(
      "medicines",
      JSON.stringify(updated)
    );

  };

  return (

    <>

      {/* ================= CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Segoe UI,sans-serif;
          background:#edf5ff;
        }

        .navbar{
          width:100%;
          background:white;
          padding:15px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          box-shadow:0 2px 10px rgba(0,0,0,0.05);
        }

        .nav-left{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .logo-box{
          width:35px;
          height:35px;
          border-radius:10px;
          background:#2563eb;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          font-weight:bold;
        }

        .logo-text{
          font-size:24px;
          font-weight:700;
          color:#1e3a8a;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:18px;
          flex-wrap:wrap;
        }

        .nav-links a{
          text-decoration:none;
          color:#1e40af;
          font-weight:600;
          padding:10px 16px;
          border-radius:12px;
          transition:0.3s;
          font-size:15px;
        }

        .nav-links a:hover{
          background:#dbeafe;
        }

        .active-link{
          background:#dbeafe;
        }

        .page-container{
          max-width:1100px;
          margin:40px auto;
          padding:0 20px;
        }

        .page-title{
          color:#0f3d91;
          font-size:40px;
          font-weight:800;
          margin-bottom:30px;
        }

        .table-card{
          background:white;
          border-radius:18px;
          overflow:hidden;
          box-shadow:0 4px 15px rgba(0,0,0,0.05);
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        thead{
          background:#f3f8ff;
        }

        th{
          text-align:left;
          padding:18px;
          color:#1e40af;
          font-size:15px;
          border-bottom:1px solid #dbeafe;
        }

        td{
          padding:18px;
          border-bottom:1px solid #eef2ff;
          color:#374151;
        }

        .medicine-img{
          width:60px;
          height:60px;
          border-radius:10px;
          object-fit:cover;
          border:1px solid #dbeafe;
        }

        .delete-btn{
          background:#ef4444;
          color:white;
          border:none;
          padding:10px 16px;
          border-radius:10px;
          cursor:pointer;
          font-weight:600;
          transition:0.3s;
        }

        .delete-btn:hover{
          background:#dc2626;
        }

        .empty{
          text-align:center;
          padding:30px;
          color:#64748b;
          font-size:16px;
        }

        .footer{
          margin-top:80px;
          text-align:center;
          color:#64748b;
        }

        @media(max-width:850px){

          .navbar{
            flex-direction:column;
            gap:15px;
            padding:20px;
          }

          .nav-links{
            justify-content:center;
          }

          table{
            display:block;
            overflow-x:auto;
          }

        }

      `}</style>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="nav-left">

          <div className="logo-box">
            +
          </div>

          <div className="logo-text">
            HealthCare Hub
          </div>

        </div>

        <div className="nav-links">

          <Link to="/pharmacy/dashboard">
            Dashboard
          </Link>

          <Link to="/addmedicine">
            Add Medicine
          </Link>

          <Link
            to="/managemedicine"
            className="active-link"
          >
            Manage
          </Link>

          <Link to="/confirm-orders">
  Confirm Orders
</Link>

         <Link to="/view-all">
  View All
</Link>

          <Link to="/profile">
    Profile
  </Link>

  <Link to="/set-offers">
    Set Offers
  </Link>

  <Link to="/history">
    History
  </Link>

        </div>

      </nav>

      {/* ================= PAGE ================= */}

      <div className="page-container">

        <h1 className="page-title">
          Manage Medicines
        </h1>

        <div className="table-card">

          <table>

            <thead>

              <tr>

                <th>#</th>

                <th>Image</th>

                <th>Medicine Name</th>

                <th>Quantity</th>

                <th>Price (Rs)</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {medicines.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="empty"
                  >
                    No medicines found
                  </td>

                </tr>

              ) : (

                medicines.map((med, index) => (

                  <tr key={index}>

                    <td>{index + 1}</td>

                    <td>

                      {med.image ? (

                        <img
                          src={med.image}
                          alt="medicine"
                          className="medicine-img"
                        />

                      ) : (

                        "No Image"

                      )}

                    </td>

                    <td>{med.name}</td>

                    <td>{med.quantity}</td>

                    <td>{med.price}</td>

                    <td>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(index)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        <div className="footer">
          © 2026 HealthCare Hub
        </div>

      </div>

    </>

  );

}