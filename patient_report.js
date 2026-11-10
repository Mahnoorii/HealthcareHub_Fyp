import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientReport = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 1,
      title: "Blood Test Report",
      date: "2026-02-20",
      content: `
Patient Name: Ahmed Khan

Hemoglobin: 13.5 g/dL
WBC Count: 7500 /uL
Platelets: 250000 /uL

Doctor Remarks:
Everything appears normal.
      `,
    },

    {
      id: 2,
      title: "X-Ray Report",
      date: "2026-02-18",
      content: `
Patient Name: Ahmed Khan

Chest X-Ray Result:
No active cardiopulmonary disease detected.

Doctor Remarks:
Normal chest x-ray.
      `,
    },

    {
      id: 3,
      title: "MRI Scan",
      date: "2026-02-15",
      content: `
Patient Name: Ahmed Khan

MRI Findings:
Mild disc bulge at L4-L5.

Doctor Remarks:
Physiotherapy recommended.
      `,
    },

    {
      id: 4,
      title: "Liver Function Report",
      date: "2026-02-10",
      content: `
Patient Name: Ahmed Khan

ALT: 32 U/L
AST: 28 U/L
Bilirubin: Normal

Doctor Remarks:
Liver function normal.
      `,
    },
  ];

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

        .report-page{
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
          color:black;
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
          align-items:center;
          padding:40px 20px;
        }

        .report-box{
          width:55%;
          background:#ececec;
          border-radius:18px;
          padding:35px;
        }

        .report-card{
          background:#dfe3e8;
          border-radius:10px;
          padding:16px 18px;
          margin-bottom:16px;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .report-title{
          color:#1180d8;
          font-size:18px;
          font-weight:bold;
          margin-bottom:3px;
        }

        .report-date{
          color:#555;
          font-size:14px;
        }

        .view-btn{
          background:#2d5be3;
          color:white;
          border:none;
          border-radius:8px;
          padding:10px 20px;
          cursor:pointer;
          font-size:14px;
        }

        .report-viewer{
          margin-top:25px;
          background:white;
          border-radius:12px;
          padding:25px;
          white-space:pre-line;
          line-height:1.8;
          border:1px solid #d6d6d6;
        }

        .viewer-heading{
          color:#1180d8;
          font-size:22px;
          margin-bottom:20px;
        }

        @media(max-width:1200px){

          .report-box{
            width:75%;
          }
        }

        @media(max-width:900px){

          .report-box{
            width:95%;
          }

          .report-card{
            flex-direction:column;
            align-items:flex-start;
            gap:15px;
          }

          .view-btn{
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
            margin-top:10px;
          }
        }

      `}</style>

      <div className="report-page">

        {/* NAVBAR */}

        <div className="navbar">

          <div className="logo">
            <div className="plus-icon">+</div>
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

          <div className="report-box">

            {reports.map((report) => (

              <div className="report-card" key={report.id}>

                <div>

                  <div className="report-title">
                    {report.title}
                  </div>

                  <div className="report-date">
                    {report.date}
                  </div>

                </div>

                <button
                  className="view-btn"
                  onClick={() => setSelectedReport(report)}
                >
                  View Report
                </button>

              </div>

            ))}

            {selectedReport && (

              <div className="report-viewer">

                <div className="viewer-heading">
                  {selectedReport.title}
                </div>

                <div>
                  {selectedReport.content}
                </div>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
};

export default PatientReport;