// src/pages/patient_booklabtest.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientBookLabTest = () => {

  /* ================= STATES ================= */

  const [search, setSearch] = useState("");

  const [selectedTest, setSelectedTest] = useState(null);

  const [bookingConfirmed, setBookingConfirmed] =
    useState(false);

  const tests = [
    {
      id: "LT101",
      name: "Complete Blood Count",
      price: "Rs 1200",
      dates: "25 Feb - 5 Mar",
      time: "9:00 AM - 5:00 PM",
      lab: "Chughtai Lab",
    },

    {
      id: "LT102",
      name: "Blood Sugar Test",
      price: "Rs 800",
      dates: "26 Feb - 10 Mar",
      time: "8:00 AM - 3:00 PM",
      lab: "Excel Lab",
    },

    {
      id: "LT103",
      name: "Liver Function Test",
      price: "Rs 2500",
      dates: "24 Feb - 8 Mar",
      time: "10:00 AM - 4:00 PM",
      lab: "IDC Lab",
    },

    {
      id: "LT104",
      name: "Complete Blood Count",
      price: "Rs 1100",
      dates: "27 Feb - 7 Mar",
      time: "9:30 AM - 6:00 PM",
      lab: "Excel Lab",
    },
  ];

  /* ================= SEARCH WORKING ================= */

  const filteredTests = tests.filter((test) =>
    test.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= BOOKING FUNCTION ================= */

  const handleBooking = (e) => {

    e.preventDefault();

    alert("Confirmed Successfully Booked");

    setBookingConfirmed(true);

    setTimeout(() => {
      setSelectedTest(null);
      setBookingConfirmed(false);
    }, 1000);
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
          background:#18a7e0;
        }

        .lab-page{
          width:100%;
          min-height:100vh;
          background:#18a7e0;
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

        .navbar-left{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .plus-box{
          width:26px;
          height:26px;
          border-radius:5px;
          background:#18a7e0;
          color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:18px;
          font-weight:bold;
        }

        .logo-text{
          font-size:20px;
          font-weight:bold;
        }

        .navbar-right{
          display:flex;
          align-items:center;
          gap:28px;
        }

        .navbar-right a{
          text-decoration:none;
          color:black;
          font-size:14px;
          font-weight:500;
        }

        .logout-btn{
          background:#f44b42;
          color:white !important;
          padding:8px 14px;
          border-radius:5px;
        }

        /* ================= MAIN ================= */

        .main-wrapper{
          width:96%;
          min-height:90vh;
          margin:35px auto;
          background:#ececf1;
          padding:45px 26px;
        }

        .heading{
          font-size:24px;
          font-weight:bold;
          margin-bottom:22px;
          color:black;
        }

        /* ================= SEARCH ================= */

        .search-bar{
          width:100%;
          height:42px;
          border:1px solid #cfd5df;
          border-radius:8px;
          padding:0 15px;
          outline:none;
          margin-bottom:28px;
          font-size:14px;
        }

        /* ================= TEST GRID ================= */

        .test-grid{
          display:flex;
          gap:18px;
          flex-wrap:wrap;
          justify-content:center;
        }

        .test-card{
          width:320px;
          background:white;
          border-radius:12px;
          padding:20px 18px;
          box-shadow:0 2px 8px rgba(0,0,0,0.08);
        }

        .test-card h2{
          color:#1876e5;
          font-size:18px;
          margin-bottom:18px;
        }

        .test-card p{
          margin-bottom:14px;
          font-size:15px;
        }

        .test-card span{
          font-weight:bold;
        }

        .book-btn{
          width:100%;
          height:34px;
          border:none;
          background:#1876e5;
          color:white;
          border-radius:5px;
          margin-top:14px;
          cursor:pointer;
          font-size:14px;
        }

        /* ================= BOOKING FORM ================= */

        .booking-container{
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          margin-top:30px;
        }

        .booking-box{
          width:540px;
          background:#f5f5f5;
          border-radius:12px;
          padding:35px;
        }

        .back-btn{
          border:none;
          background:none;
          cursor:pointer;
          font-size:16px;
          margin-bottom:30px;
        }

        .booking-title{
          font-size:20px;
          font-weight:bold;
          margin-bottom:30px;
        }

        .booking-form{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .booking-form input,
        .booking-form textarea{
          width:100%;
          height:46px;
          border:1px solid #cfd5df;
          border-radius:6px;
          padding:0 14px;
          outline:none;
          font-size:14px;
        }

        .booking-form textarea{
          height:90px;
          padding-top:12px;
          resize:none;
        }

        .confirm-btn{
          width:100%;
          height:42px;
          border:none;
          background:#1876e5;
          color:white;
          border-radius:5px;
          cursor:pointer;
          font-size:15px;
        }

        .success-msg{
          text-align:center;
          color:green;
          font-size:18px;
          font-weight:bold;
          margin-top:20px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:768px){

          .navbar{
            flex-direction:column;
            height:auto;
            padding:15px;
          }

          .navbar-right{
            flex-wrap:wrap;
            justify-content:center;
            margin-top:10px;
          }

          .booking-box{
            width:95%;
          }
        }

      `}</style>

      <div className="lab-page">

        {/* ================= NAVBAR ================= */}

        <div className="navbar">

          <div className="navbar-left">

            <div className="plus-box">
              +
            </div>

            <div className="logo-text">
              HealthcareHub
            </div>

          </div>

          <div className="navbar-right">

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

          {!selectedTest ? (

            <>
              <div className="heading">
                Book Lab Test
              </div>

              {/* SEARCH WORKING */}

              <input
                type="text"
                placeholder="Search lab tests..."
                className="search-bar"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {/* TEST CARDS */}

              <div className="test-grid">

                {filteredTests.length > 0 ? (

                  filteredTests.map((test, index) => (

                    <div
                      className="test-card"
                      key={index}
                    >

                      <h2>{test.name}</h2>

                      <p>
                        <span>Test ID:</span>
                        {" "}
                        {test.id}
                      </p>

                      <p>
                        <span>Price:</span>
                        {" "}
                        {test.price}
                      </p>

                      <p>
                        <span>Available Dates:</span>
                        {" "}
                        {test.dates}
                      </p>

                      <p>
                        <span>Time:</span>
                        {" "}
                        {test.time}
                      </p>

                      <p>
                        <span>Laboratory:</span>
                        {" "}
                        {test.lab}
                      </p>

                      <button
                        className="book-btn"
                        onClick={() =>
                          setSelectedTest(test)
                        }
                      >
                        Book Now
                      </button>

                    </div>

                  ))

                ) : (

                  <h3>
                    No Lab Test Found
                  </h3>

                )}

              </div>
            </>

          ) : (

            /* ================= BOOKING FORM ================= */

            <div className="booking-container">

              <div className="booking-box">

                <button
                  className="back-btn"
                  onClick={() =>
                    setSelectedTest(null)
                  }
                >
                  ← Back
                </button>

                <div className="booking-title">

                  Book Test:
                  {" "}
                  {selectedTest.name}

                </div>

                <form
                  className="booking-form"
                  onSubmit={handleBooking}
                >

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Contact Number"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    required
                  />

                  <textarea
                    placeholder="Notes (Optional)"
                  ></textarea>

                  <input
                    type="date"
                    required
                  />

                  <input
                    type="time"
                    required
                  />

                  <button
                    type="submit"
                    className="confirm-btn"
                  >
                    Confirm Booking
                  </button>

                </form>

                {bookingConfirmed && (

                  <div className="success-msg">
                    Successfully Booked
                  </div>

                )}

              </div>

            </div>

          )}

        </div>

      </div>
    </>
  );
};

export default PatientBookLabTest;