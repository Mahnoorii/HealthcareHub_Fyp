// src/pages/patient_bookappointment.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientBookAppointment = () => {

  /* ================= STATES ================= */

  const [specialization, setSpecialization] =
    useState("Orthopedic");

  const [search, setSearch] = useState("");

  const [showBookingForm, setShowBookingForm] =
    useState(false);

  const [selectedDoctor, setSelectedDoctor] =
    useState(null);

  /* ================= DOCTORS DATA ================= */

  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmed Khan",
      specialty: "Orthopedic",
      experience: "10 years",
      days: "Mon - Fri",
      availability: "09:00 AM - 05:00 PM",
    },

    {
      id: 2,
      name: "Dr. Ayesha Iqbal",
      specialty: "Orthopedic",
      experience: "9 years",
      days: "Mon - Fri",
      availability: "10:00 AM - 04:00 PM",
    },

    {
      id: 3,
      name: "Dr. Sara Ali",
      specialty: "Cardiac",
      experience: "12 years",
      days: "Mon - Fri",
      availability: "09:00 AM - 05:00 PM",
    },

    {
      id: 4,
      name: "Dr. Bilal Ahmed",
      specialty: "Dermatologist",
      experience: "7 years",
      days: "Tue - Sat",
      availability: "11:00 AM - 06:00 PM",
    },
  ];

  /* ================= FILTER DOCTORS ================= */

  const filteredDoctors = doctors.filter((doctor) => {

    const matchSpecialization =
      specialization === ""
        ? true
        : doctor.specialty
            .toLowerCase()
            .includes(specialization.toLowerCase());

    const matchSearch =
      doctor.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchSpecialization && matchSearch;
  });

  /* ================= SEARCH BUTTON ================= */

  const handleSearch = () => {

    if (filteredDoctors.length > 0) {

      setSelectedDoctor(filteredDoctors[0]);

      setShowBookingForm(true);

    } else {

      alert("No doctor found");
    }
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

        .appointment-page{
          width:100%;
          min-height:100vh;
          background:#1da7e0;
        }

        /* ================= NAVBAR ================= */

        .navbar{
          width:100%;
          height:60px;
          background:white;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 35px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
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
          color:black;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:26px;
        }

        .nav-links a{
          text-decoration:none;
          color:black;
          font-size:14px;
          font-weight:500;
        }

        .logout-btn{
          background:#f44b42;
          color:white !important;
          padding:8px 16px;
          border-radius:5px;
        }

        /* ================= MAIN ================= */

        .main-wrapper{
          width:100%;
          min-height:calc(100vh - 60px);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:50px 20px;
        }

        .appointment-box{
          width:900px;
          background:#efefef;
          border-radius:18px;
          padding:30px;
        }

        .heading{
          text-align:center;
          color:#179ce3;
          font-size:24px;
          font-weight:bold;
          margin-bottom:30px;
        }

        /* ================= SEARCH ================= */

        .search-row{
          display:flex;
          gap:14px;
          margin-bottom:30px;
        }

        .dropdown{
          width:220px;
          height:56px;
          border:1px solid #cfd6de;
          border-radius:10px;
          padding:0 14px;
          font-size:15px;
          outline:none;
          background:white;
        }

        .search-input{
          flex:1;
          height:56px;
          border:1px solid #cfd6de;
          border-radius:10px;
          padding:0 16px;
          font-size:15px;
          outline:none;
        }

        .search-btn{
          width:220px;
          border:none;
          border-radius:10px;
          background:#1da7e0;
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.3s;
        }

        .search-btn:hover{
          opacity:0.9;
        }

        /* ================= DOCTOR CARDS ================= */

        .doctor-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .doctor-card{
          background:#f8f8f8;
          border:1px solid #d8d8d8;
          border-radius:14px;
          padding:22px 18px;
        }

        .doctor-card.active{
          border:2px solid #1da7e0;
        }

        .doctor-card h3{
          font-size:20px;
          margin-bottom:14px;
          color:#111;
        }

        .doctor-card p{
          margin-bottom:8px;
          font-size:15px;
          color:#555;
        }

        .doctor-card span{
          font-weight:bold;
          color:#222;
        }

        .book-btn{
          width:100%;
          height:38px;
          border:none;
          border-radius:6px;
          background:#1da7e0;
          color:white;
          margin-top:18px;
          cursor:pointer;
          font-size:14px;
        }

        /* ================= BOOKING FORM ================= */

        .booking-container{
          width:900px;
          background:#efefef;
          border-radius:18px;
          padding:30px;
        }

        .back-btn{
          background:none;
          border:none;
          color:#2454ff;
          font-size:15px;
          cursor:pointer;
          margin-bottom:10px;
          font-weight:bold;
        }

        .booking-title{
          text-align:center;
          font-size:22px;
          font-weight:bold;
          margin-bottom:30px;
          color:#111;
        }

        .doctor-info-row{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:14px;
          margin-bottom:20px;
        }

        .info-box{
          background:#eceff3;
          border-left:3px solid #1da7e0;
          border-radius:10px;
          padding:14px;
        }

        .info-box small{
          display:block;
          color:#666;
          margin-bottom:5px;
        }

        .info-box h4{
          font-size:16px;
          color:#111;
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:14px;
        }

        .input-box{
          margin-bottom:18px;
        }

        .input-box label{
          display:block;
          margin-bottom:8px;
          font-size:14px;
          color:#222;
        }

        .input-box input{
          width:100%;
          height:48px;
          border:1px solid #bcc7d3;
          border-radius:8px;
          padding:0 14px;
          font-size:14px;
          outline:none;
          background:white;
        }

        .confirm-btn{
          width:100%;
          height:42px;
          border:none;
          border-radius:10px;
          background:linear-gradient(
            90deg,
            #16a5e7,
            #2d5be9
          );
          color:white;
          font-size:15px;
          font-weight:bold;
          cursor:pointer;
          margin-top:10px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1000px){

          .appointment-box,
          .booking-container{
            width:95%;
          }

          .doctor-info-row{
            grid-template-columns:1fr 1fr;
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

          .search-row{
            flex-direction:column;
          }

          .dropdown,
          .search-btn{
            width:100%;
          }

          .doctor-grid{
            grid-template-columns:1fr;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          .doctor-info-row{
            grid-template-columns:1fr;
          }
        }

      `}</style>

      <div className="appointment-page">

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

          {!showBookingForm ? (

            /* ================= SEARCH SCREEN ================= */

            <div className="appointment-box">

              <div className="heading">
                Find Your Doctor
              </div>

              <div className="search-row">

                <select
                  className="dropdown"
                  value={specialization}
                  onChange={(e) =>
                    setSpecialization(
                      e.target.value
                    )
                  }
                >

                  <option>Orthopedic</option>

                  <option>Cardiac</option>

                  <option>Dermatologist</option>

                </select>

                <input
                  type="text"
                  placeholder="Search doctor by name"
                  className="search-input"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

                <button
                  className="search-btn"
                  onClick={handleSearch}
                >
                  Search
                </button>

              </div>

              <div className="doctor-grid">

                {filteredDoctors.map((doctor) => (

                  <div
                    className="doctor-card"
                    key={doctor.id}
                  >

                    <h3>{doctor.name}</h3>

                    <p>
                      <span>Specialty:</span>{" "}
                      {doctor.specialty}
                    </p>

                    <p>
                      <span>Experience:</span>{" "}
                      {doctor.experience}
                    </p>

                    <button
                      className="book-btn"
                      onClick={() => {

                        setSelectedDoctor(doctor);

                        setShowBookingForm(true);
                      }}
                    >
                      Book Appointment
                    </button>

                  </div>

                ))}

              </div>

            </div>

          ) : (

            /* ================= BOOKING FORM ================= */

            <div className="booking-container">

              <button
                className="back-btn"
                onClick={() =>
                  setShowBookingForm(false)
                }
              >
                ← Back to Search
              </button>

              <div className="booking-title">
                Book Appointment
              </div>

              <div className="doctor-info-row">

                <div className="info-box">

                  <small>Doctor</small>

                  <h4>{selectedDoctor.name}</h4>

                </div>

                <div className="info-box">

                  <small>Specialty</small>

                  <h4>
                    {selectedDoctor.specialty}
                  </h4>

                </div>

                <div className="info-box">

                  <small>Working Days</small>

                  <h4>{selectedDoctor.days}</h4>

                </div>

                <div className="info-box">

                  <small>Availability</small>

                  <h4>
                    {selectedDoctor.availability}
                  </h4>

                </div>

              </div>

              <div className="form-grid">

                <div className="input-box">

                  <label>Full Name</label>

                  <input type="text" />

                </div>

                <div className="input-box">

                  <label>Contact No.</label>

                  <input type="text" />

                </div>

                <div className="input-box">

                  <label>WhatsApp No.</label>

                  <input type="text" />

                </div>

                <div className="input-box">

                  <label>Email</label>

                  <input type="email" />

                </div>

                <div className="input-box">

                  <label>Date</label>

                  <input type="date" />

                </div>

                <div className="input-box">

                  <label>Time</label>

                  <input type="time" />

                </div>

              </div>

              <button className="confirm-btn">
                Confirm Appointment
              </button>

            </div>

          )}

        </div>

      </div>
    </>
  );
};

export default PatientBookAppointment;