import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (
      !profile.fullName ||
      !profile.email ||
      !profile.contact
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Profile Saved Successfully");

    console.log(profile);
  };

  const handleClear = () => {
    setProfile({
      fullName: "",
      email: "",
      contact: "",
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

        .profile-page{
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
          background:#f44b42;
          color:white !important;
          padding:8px 16px;
          border-radius:5px;
        }

        /* ================= MAIN ================= */

        .main-container{
          width:100%;
          min-height:calc(100vh - 55px);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px 20px;
        }

        .profile-box{
          width:790px;
          background:#ececec;
          border-radius:14px;
          padding:42px 28px;
        }

        .profile-title{
          font-size:20px;
          color:#144c9e;
          font-weight:bold;
          margin-bottom:26px;
        }

        /* ================= FORM ================= */

        .form-group{
          margin-bottom:28px;
        }

        .form-label{
          display:block;
          margin-bottom:10px;
          font-size:14px;
          color:#222;
        }

        .form-input{
          width:100%;
          height:42px;
          border:1px solid #bcc8d6;
          border-radius:8px;
          padding:0 14px;
          outline:none;
          background:white;
          font-size:14px;
        }

        .double-row{
          display:flex;
          gap:28px;
          margin-bottom:40px;
        }

        .double-field{
          flex:1;
        }

        /* ================= BUTTONS ================= */

        .btn-row{
          display:flex;
          gap:14px;
        }

        .save-btn{
          width:110px;
          height:40px;
          border:none;
          border-radius:8px;
          background:#2867e6;
          color:white;
          font-size:14px;
          cursor:pointer;
          font-weight:600;
        }

        .clear-btn{
          width:75px;
          height:40px;
          border:1px solid #bcc8d6;
          border-radius:8px;
          background:white;
          color:#2867e6;
          font-size:14px;
          cursor:pointer;
          font-weight:600;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:900px){

          .profile-box{
            width:95%;
          }

          .double-row{
            flex-direction:column;
            gap:20px;
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

          .profile-box{
            padding:30px 20px;
          }
        }

      `}</style>

      <div className="profile-page">

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

        {/* ================= PROFILE BOX ================= */}

        <div className="main-container">

          <div className="profile-box">

            <div className="profile-title">
              Set Profile
            </div>

            {/* Full Name */}

            <div className="form-group">

              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                className="form-input"
                value={profile.fullName}
                onChange={handleChange}
              />

            </div>

            {/* Email + Contact */}

            <div className="double-row">

              <div className="double-field">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={profile.email}
                  onChange={handleChange}
                />

              </div>

              <div className="double-field">

                <label className="form-label">
                  Contact Number
                </label>

                <input
                  type="text"
                  name="contact"
                  className="form-input"
                  value={profile.contact}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* Buttons */}

            <div className="btn-row">

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Profile
              </button>

              <button
                className="clear-btn"
                onClick={handleClear}
              >
                Clear
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default PatientProfile;