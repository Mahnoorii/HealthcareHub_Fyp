import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientHistory = () => {

  const [selectedHistory, setSelectedHistory] =
    useState("");

  const historyData = {
    medicines: [
      "Order #1021 - Augmentin - Rs 950",
      "Order #1022 - Calpol - Rs 180",
      "Order #1023 - Flagyl - Rs 400",
    ],

    appointments: [
      "Dr. Sara Ali - Cardiac - 25 Feb 2026",
      "Dr. Ahmed Khan - Orthopedic - 20 Feb 2026",
      "Dr. Ayesha Noor - Dermatologist - 15 Feb 2026",
    ],

    labtests: [
      "Blood Test - 22 Feb 2026",
      "MRI Scan - 18 Feb 2026",
      "Liver Function Test - 10 Feb 2026",
    ],
  };

  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, sans-serif;
        }

        body{
          background:#1da7e0;
        }

        .history-page{
          width:100%;
          min-height:100vh;
          background:#1da7e0;
        }

        /* NAVBAR */

        .navbar{
          width:100%;
          height:55px;
          background:white;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 35px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .plus-icon{
          width:26px;
          height:26px;
          border-radius:5px;
          background:#1da7e0;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
          font-weight:bold;
        }

        .logo h2{
          font-size:20px;
          font-weight:bold;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:28px;
        }

        .nav-links a{
          text-decoration:none;
          color:black;
          font-size:14px;
          font-weight:500;
        }

        .logout-btn{
          background:#f44c44;
          color:white !important;
          padding:8px 15px;
          border-radius:5px;
        }

        /* MAIN */

        .main-wrapper{
          width:100%;
          min-height:calc(100vh - 55px);
          display:flex;
          justify-content:center;
          align-items:flex-start;
          padding:35px;
        }

        .history-box{
          width:100%;
          max-width:1750px;
          background:#ececec;
          border-radius:22px;
          padding:40px 22px;
        }

        .history-title{
          font-size:24px;
          font-weight:bold;
          margin-bottom:22px;
        }

        .dropdown{
          width:240px;
          height:45px;
          border:1px solid #cfd6de;
          border-radius:8px;
          padding:0 12px;
          font-size:15px;
          outline:none;
          cursor:pointer;
          background:white;
        }

        .records-box{
          margin-top:30px;
        }

        .record-card{
          background:white;
          border-radius:12px;
          padding:18px 20px;
          margin-bottom:16px;
          font-size:16px;
          border-left:6px solid #1da7e0;
          box-shadow:0 2px 8px rgba(0,0,0,0.06);
        }

        .empty-text{
          margin-top:25px;
          color:#666;
          font-size:16px;
        }

        @media(max-width:900px){

          .history-box{
            padding:25px 18px;
          }

          .dropdown{
            width:100%;
          }
        }

        @media(max-width:768px){

          .navbar{
            flex-direction:column;
            height:auto;
            padding:15px;
          }

          .nav-links{
            flex-wrap:wrap;
            justify-content:center;
            margin-top:12px;
          }

          .main-wrapper{
            padding:20px;
          }
        }

      `}</style>

      <div className="history-page">

        {/* NAVBAR */}

        <div className="navbar">

          <div className="logo">

            <div className="plus-icon">
              +
            </div>

            <h2>HealthcareHub</h2>

          </div>

          <div className="nav-links">

            <Link to="/patient/dashboard">
              Dashboard
            </Link>

            <Link to="/patient-book-appointment">
              Book Appointments
            </Link>

            <Link to="/patient-booklabtest">
              Book Lab Tests
            </Link>

            <Link to="/patient-ordermedicine">
              Order Medicine
            </Link>

            <Link to="/patient-profile">
              Profile
            </Link>

            <Link to="/patient-logbook">
              Logbook
            </Link>

            <Link to="/patient-report">
              Reports
            </Link>

            <Link to="/patient-history">
              History
            </Link>

            <Link to="/" className="logout-btn">
              Logout
            </Link>

          </div>

        </div>

        {/* MAIN */}

        <div className="main-wrapper">

          <div className="history-box">

            <div className="history-title">
              History
            </div>

            <select
              className="dropdown"
              value={selectedHistory}
              onChange={(e) =>
                setSelectedHistory(e.target.value)
              }
            >

              <option value="">
                Select History
              </option>

              <option value="medicines">
                Medicine Orders
              </option>

              <option value="appointments">
                Appointments
              </option>

              <option value="labtests">
                Lab Tests
              </option>

            </select>

            {/* HISTORY DATA */}

            <div className="records-box">

              {selectedHistory === "" && (

                <div className="empty-text">
                  No history selected.
                </div>

              )}

              {selectedHistory !== "" &&
                historyData[selectedHistory].map(
                  (item, index) => (

                    <div
                      className="record-card"
                      key={index}
                    >
                      {item}
                    </div>

                  )
                )}

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default PatientHistory;