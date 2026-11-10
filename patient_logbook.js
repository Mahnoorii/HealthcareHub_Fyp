import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientLogbook = () => {

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    bloodPressure: "",
    sugarLevel: "",
    weight: "",
    notes: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    if (
      !formData.date ||
      !formData.time ||
      !formData.bloodPressure ||
      !formData.sugarLevel ||
      !formData.weight ||
      !formData.notes
    ) {
      alert("Please fill all fields");
      return;
    }

    setRecords([...records, formData]);

    alert("Record Saved Successfully");

    setFormData({
      date: "",
      time: "",
      bloodPressure: "",
      sugarLevel: "",
      weight: "",
      notes: "",
    });

  };

  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#17a7e0;
        }

        .logbook-page{
          width:100%;
          min-height:100vh;
          background:#17a7e0;
        }

        /* ================= NAVBAR ================= */

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
          background:#17a7e0;
          color:white;
          border-radius:5px;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:18px;
          font-weight:bold;
        }

        .logo h2{
          font-size:20px;
          font-weight:bold;
          color:black;
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
          padding:8px 16px;
          border-radius:5px;
        }

        /* ================= MAIN ================= */

        .main-wrapper{
          width:100%;
          display:flex;
          justify-content:center;
          padding-top:35px;
          padding-bottom:40px;
        }

        .logbook-box{
          width:1050px;
          background:#ececec;
          border-radius:14px;
          padding:42px 28px;
        }

        .heading{
          text-align:center;
          font-size:22px;
          color:#5b2db5;
          font-weight:bold;
          margin-bottom:26px;
        }

        /* ================= INPUTS ================= */

        .input-row{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-bottom:10px;
        }

        .input-field{
          flex:1;
          min-width:140px;
          height:42px;
          border:1px solid #bfc9d8;
          border-radius:8px;
          padding:0 12px;
          outline:none;
          font-size:14px;
          background:white;
        }

        .save-btn{
          width:115px;
          height:38px;
          border:none;
          border-radius:7px;
          background:#2867e6;
          color:white;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
          margin-top:8px;
        }

        /* ================= RECORDS ================= */

        .records-section{
          margin-top:28px;
        }

        .record-card{
          background:white;
          padding:18px;
          border-radius:10px;
          margin-bottom:14px;
          border-left:5px solid #2867e6;
        }

        .record-card p{
          margin-bottom:7px;
          font-size:14px;
        }

        .no-record{
          font-size:15px;
          color:black;
          margin-top:20px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1100px){

          .logbook-box{
            width:95%;
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
            gap:18px;
          }

          .input-row{
            flex-direction:column;
          }

          .input-field{
            width:100%;
          }
        }

      `}</style>

      <div className="logbook-page">

        {/* ================= NAVBAR ================= */}

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

            <Link
              to="/"
              className="logout-btn"
            >
              Logout
            </Link>

          </div>

        </div>

        {/* ================= MAIN ================= */}

        <div className="main-wrapper">

          <div className="logbook-box">

            <div className="heading">
              📝 My Health Diary
            </div>

            {/* ================= INPUTS ================= */}

            <div className="input-row">

              <input
                type="date"
                name="date"
                className="input-field"
                value={formData.date}
                onChange={handleChange}
              />

              <input
                type="time"
                name="time"
                className="input-field"
                value={formData.time}
                onChange={handleChange}
              />

              <input
                type="text"
                name="bloodPressure"
                placeholder="Blood Pressure"
                className="input-field"
                value={formData.bloodPressure}
                onChange={handleChange}
              />

              <input
                type="text"
                name="sugarLevel"
                placeholder="Sugar Level"
                className="input-field"
                value={formData.sugarLevel}
                onChange={handleChange}
              />

              <input
                type="text"
                name="weight"
                placeholder="Weight"
                className="input-field"
                value={formData.weight}
                onChange={handleChange}
              />

              <input
                type="text"
                name="notes"
                placeholder="Notes"
                className="input-field"
                value={formData.notes}
                onChange={handleChange}
              />

            </div>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save Record
            </button>

            {/* ================= RECORDS ================= */}

            <div className="records-section">

              {records.length === 0 ? (

                <p className="no-record">
                  No records yet.
                </p>

              ) : (

                records.map((record, index) => (

                  <div
                    className="record-card"
                    key={index}
                  >

                    <p>
                      <strong>Date:</strong> {record.date}
                    </p>

                    <p>
                      <strong>Time:</strong> {record.time}
                    </p>

                    <p>
                      <strong>Blood Pressure:</strong> {record.bloodPressure}
                    </p>

                    <p>
                      <strong>Sugar Level:</strong> {record.sugarLevel}
                    </p>

                    <p>
                      <strong>Weight:</strong> {record.weight}
                    </p>

                    <p>
                      <strong>Notes:</strong> {record.notes}
                    </p>

                  </div>

                ))

              )}

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default PatientLogbook;