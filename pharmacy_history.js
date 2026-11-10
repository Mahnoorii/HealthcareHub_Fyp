import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PharmacyHistory() {

  const [history, setHistory] = useState([]);

  /* ================= LOAD HISTORY ================= */

  useEffect(() => {

    const savedHistory =
      JSON.parse(localStorage.getItem("confirmedOrders")) || [];

    setHistory(savedHistory);

  }, []);

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
          font-size:42px;
          font-weight:800;
          margin-bottom:30px;
        }

        .table-card{
          background:white;
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 4px 10px rgba(0,0,0,0.05);
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        thead{
          background:#f8fbff;
        }

        th{
          text-align:left;
          padding:16px;
          color:#1e40af;
          font-size:15px;
          border-bottom:1px solid #e5e7eb;
        }

        td{
          padding:16px;
          border-bottom:1px solid #f1f5f9;
          color:#374151;
        }

        .empty{
          text-align:center;
          padding:25px;
          color:#64748b;
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

          <Link to="/managemedicine">
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

          <Link
            to="/history"
            className="active-link"
          >
            History
          </Link>

        </div>

      </nav>

      {/* ================= PAGE ================= */}

      <div className="page-container">

        <h1 className="page-title">
          Order History
        </h1>

        <div className="table-card">

          <table>

            <thead>

              <tr>

                <th>Order ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Order Summary</th>

              </tr>

            </thead>

            <tbody>

              {history.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="empty"
                  >
                    No confirmed orders
                  </td>

                </tr>

              ) : (

                history.map((order, index) => (

                  <tr key={index}>

                    <td>{order.id}</td>

                    <td>{order.name}</td>

                    <td>{order.email}</td>

                    <td>{order.date}</td>

                    <td>{order.summary}</td>

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