import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PharmacyProfile() {

  const [profile, setProfile] = useState({
    fullName: "",
    license: "",
    email: "",
    contact: "",
    location: "",
  });

  /* ================= LOAD SAVED PROFILE ================= */

  useEffect(() => {

    const savedProfile =
      JSON.parse(localStorage.getItem("pharmacyProfile"));

    if (savedProfile) {
      setProfile(savedProfile);
    }

  }, []);

  /* ================= HANDLE INPUT ================= */

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  /* ================= SAVE PROFILE ================= */

  const handleSave = () => {

    localStorage.setItem(
      "pharmacyProfile",
      JSON.stringify(profile)
    );

    alert("Profile Saved Successfully");

  };

  /* ================= CLEAR PROFILE ================= */

  const handleClear = () => {

    const emptyProfile = {
      fullName: "",
      license: "",
      email: "",
      contact: "",
      location: "",
    };

    setProfile(emptyProfile);

    localStorage.removeItem("pharmacyProfile");

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

        .container{
          max-width:800px;
          margin:40px auto;
          background:white;
          padding:35px;
          border-radius:20px;
          box-shadow:0 4px 15px rgba(0,0,0,0.05);
        }

        .title{
          color:#0f3d91;
          margin-bottom:25px;
          font-size:32px;
          font-weight:800;
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .full{
          grid-column:1/3;
        }

        label{
          display:block;
          margin-bottom:8px;
          color:#1e3a8a;
          font-weight:600;
        }

        input{
          width:100%;
          padding:14px;
          border-radius:12px;
          border:1px solid #dbeafe;
          font-size:15px;
          outline:none;
        }

        input:focus{
          border:1px solid #2563eb;
        }

        .btns{
          margin-top:25px;
          display:flex;
          gap:15px;
        }

        .save-btn{
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          cursor:pointer;
          font-weight:700;
        }

        .clear-btn{
          background:#f1f5f9;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          cursor:pointer;
          font-weight:700;
        }

        .footer{
          text-align:center;
          margin-top:60px;
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

          .form-grid{
            grid-template-columns:1fr;
          }

          .full{
            grid-column:auto;
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

          <Link
            to="/profile"
            className="active-link"
          >
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

      <div className="container">

        <h1 className="title">
          Pharmacist Profile
        </h1>

        <div className="form-grid">

          <div>

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>
              License Verification No.
            </label>

            <input
              type="text"
              name="license"
              value={profile.license}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>
              Contact Number
            </label>

            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
            />

          </div>

          <div className="full">

            <label>
              Pharmacy Complete Location
            </label>

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="btns">

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

      <div className="footer">
        © 2026 HealthCare Hub
      </div>

    </>

  );

}