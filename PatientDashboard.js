// src/pages/PatientDashboard.js
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientDashboard = () => {
  const [patientProfile, setPatientProfile] = useState(null);

  useEffect(() => {
    fetchPatientProfile();
  }, []);

  const fetchPatientProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/patient-profile"
      );

      if (response.data.success) {
        setPatientProfile(response.data.profile);
      }
    } catch (error) {
      console.log(error);
    }
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

        .patient-dashboard{
          width:100%;
          min-height:100vh;
          background:#18a7e0;
        }

        /* ================= NAVBAR ================= */

        .navbar{
          width:100%;
          height:50px;
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
          color:black;
        }

        .navbar-right{
          display:flex;
          align-items:center;
          gap:32px;
        }

        .navbar-right a{
          text-decoration:none;
          color:black;
          font-size:13px;
          font-weight:500;
        }

        .logout-btn{
          background:#f44b42;
          color:white !important;
          padding:8px 14px;
          border-radius:5px;
        }

        /* ================= PROFILE ================= */

        .profile-container{
          width:96%;
          margin:auto;
          background:#efefef;
          margin-top:38px;
          padding:35px 28px;
        }

        .loading-text{
          font-size:15px;
          color:black;
        }

        .profile-data h3{
          margin-bottom:8px;
          font-size:22px;
        }

        .profile-data p{
          margin-bottom:6px;
          font-size:15px;
        }

        /* ================= CONTENT ================= */

        .content{
          width:92%;
          margin:auto;
          margin-top:70px;
        }

        .dashboard-heading{
          color:white;
          font-size:26px;
          font-weight:bold;
          margin-bottom:25px;
        }

        /* ================= HERO ================= */

        .hero-box{
          width:100%;
          height:330px;
          background:#e9e9ee;
          border-radius:18px;
          overflow:hidden;
          position:relative;
        }

        .hero-box img{
          position:absolute;
          left:50%;
          top:0;
          transform:translateX(-50%);
          width:340px;
          height:100%;
          object-fit:cover;
        }

        /* ================= CARDS ================= */

        .stats-row{
          display:flex;
          justify-content:space-between;
          gap:40px;
          margin-top:48px;
          flex-wrap:wrap;
        }

        .stat-card{
          flex:1;
          min-width:300px;
          background:#efefef;
          height:150px;
          border-radius:14px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }

        .stat-card h4{
          color:#1098e3;
          font-size:16px;
          margin-bottom:28px;
        }

        .stat-card h2{
          font-size:42px;
          color:black;
        }

        /* ================= HEALTH TIPS ================= */

        .health-section{
          margin-top:85px;
          text-align:center;
        }

        .health-title{
          color:black;
          font-size:32px;
          font-weight:bold;
          margin-bottom:28px;
        }

        .health-cards{
          display:flex;
          justify-content:center;
          gap:18px;
          flex-wrap:wrap;
        }

        .health-card{
          width:165px;
          background:#dfe3ef;
          border-radius:10px;
          padding:22px 16px;
          text-align:left;
        }

        .health-card h3{
          font-size:18px;
          margin-bottom:14px;
          color:black;
        }

        .health-card p{
          font-size:13px;
          line-height:1.5;
          color:#333;
        }

        /* ================= ABOUT ================= */

        .about-box{
          width:100%;
          background:#dfe3ef;
          margin-top:70px;
          border-radius:12px;
          padding:34px 24px;
          margin-bottom:60px;
        }

        .about-box h2{
          font-size:34px;
          margin-bottom:18px;
          color:black;
        }

        .about-box p{
          font-size:15px;
          margin-bottom:14px;
          line-height:1.7;
          color:black;
        }

        .developer-heading{
          margin-top:20px;
          margin-bottom:10px;
          font-size:22px;
          font-weight:bold;
        }

        .developer-names{
          font-size:16px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1200px){

          .navbar{
            flex-direction:column;
            height:auto;
            padding:20px;
            gap:15px;
          }

          .navbar-right{
            flex-wrap:wrap;
            justify-content:center;
            gap:18px;
          }

          .hero-box img{
            width:260px;
          }
        }

        @media(max-width:768px){

          .stats-row{
            flex-direction:column;
          }

          .hero-box{
            height:260px;
          }

          .hero-box img{
            width:220px;
          }

          .health-title{
            font-size:26px;
          }

          .about-box h2{
            font-size:28px;
          }
        }

      `}</style>

      <div className="patient-dashboard">

        {/* ================= NAVBAR ================= */}

        <div className="navbar">

          <div className="navbar-left">
            <div className="plus-box">+</div>

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

  <Link to="/" className="logout-btn">
    Logout
  </Link>

           

          </div>
        </div>

        {/* ================= PROFILE ================= */}

        <div className="profile-container">

          {patientProfile ? (
            <div className="profile-data">

              <h3>{patientProfile.fullName}</h3>

              <p>{patientProfile.email}</p>

              <p>{patientProfile.contactNumber}</p>

              <p>ID: {patientProfile.patientId}</p>

            </div>
          ) : (
            <p className="loading-text">
              Loading profile...
            </p>
          )}

        </div>

        {/* ================= CONTENT ================= */}

        <div className="content">

          <div className="dashboard-heading">
            Dashboard
          </div>

          {/* ================= HERO ================= */}

          <div className="hero-box">

            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop"
              alt="healthcare"
            />

          </div>

          {/* ================= STATS ================= */}

          <div className="stats-row">

            <div className="stat-card">

              <h4>Upcoming Appointments</h4>

              <h2>2</h2>

            </div>

            <div className="stat-card">

              <h4>Pending Lab Reports</h4>

              <h2>1</h2>

            </div>

            <div className="stat-card">

              <h4>Medicine Orders Pending</h4>

              <h2>1</h2>

            </div>

          </div>

          {/* ================= HEALTH TIPS ================= */}

          <div className="health-section">

            <div className="health-title">
              Health Tips
            </div>

            <div className="health-cards">

              <div className="health-card">

                <h3>Stay Hydrated</h3>

                <p>
                  Drink at least 8 glasses of water daily.
                </p>

              </div>

              <div className="health-card">

                <h3>Balanced Diet</h3>

                <p>
                  Include fruits and vegetables.
                </p>

              </div>

              <div className="health-card">

                <h3>Exercise</h3>

                <p>
                  30 minutes daily.
                </p>

              </div>

              <div className="health-card">

                <h3>Mental Health</h3>

                <p>
                  Meditation helps reduce stress.
                </p>

              </div>

            </div>

          </div>

          {/* ================= ABOUT ================= */}

          <div className="about-box">

            <h2>About Healthcare Hub</h2>

            <p>
              Healthcare Hub is a smart patient-centered
              healthcare platform designed to simplify
              digital healthcare services for patients.
            </p>

            <p>
              It helps manage appointments, lab reports,
              medicine orders, and health tracking
              in one place.
            </p>

            <div className="developer-heading">
              Developed By
            </div>

            <div className="developer-names">
              Noori Rehman, Mahnoor Shahid,
              Muhammad Abbas
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default PatientDashboard;