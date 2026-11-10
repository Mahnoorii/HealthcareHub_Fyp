import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PharmacyConfirmOrder() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);

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
          font-size:40px;
          font-weight:800;
          margin-bottom:25px;
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
          border:1px solid #e5e7eb;
        }

        td{
          padding:18px;
          border:1px solid #e5e7eb;
          color:#374151;
        }

        .empty{
          text-align:center;
          color:#64748b;
          padding:25px;
        }

        .confirm-btn{
          background:#2563eb;
          color:white;
          border:none;
          padding:8px 14px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
        }

        .confirm-btn:hover{
          background:#1d4ed8;
        }

        .footer{
          margin-top:100px;
          text-align:center;
          color:#64748b;
        }

        @media(max-width:900px){

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

          <Link
            to="/confirm-orders"
            className="active-link"
          >
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
          Confirm Orders
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

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {orders.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="empty"
                  >
                    No orders available
                  </td>

                </tr>

              ) : (

                orders.map((order, index) => (

                  <tr key={index}>

                    <td>{order.id}</td>

                    <td>{order.name}</td>

                    <td>{order.email}</td>

                    <td>{order.date}</td>

                    <td>{order.summary}</td>

                    <td>{order.status}</td>

                    <td>

                      <button className="confirm-btn">
                        Confirm
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