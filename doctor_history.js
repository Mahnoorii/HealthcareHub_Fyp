import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorHistory() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/signin/doctor");
  }

  const historyData = [
    {
      patient: "Ali Khan",
      diagnosis: "Thyroid Imbalance",
      treatment: "Medication Prescribed",
      date: "20 May 2026",
    },
    {
      patient: "Sara Ahmed",
      diagnosis: "Normal Results",
      treatment: "Follow-up after 1 month",
      date: "18 May 2026",
    },
    {
      patient: "Usman Tariq",
      diagnosis: "Hypothyroidism",
      treatment: "Blood Test Suggested",
      date: "16 May 2026",
    },
  ];

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <h2 style={styles.logo}>HealthCare Hub</h2>

        <nav style={styles.navLinks}>
          {[
            { name: "Dashboard", path: "/doctor/dashboard" },
            { name: "Appointments", path: "/doctor/appointments" },
            { name: "Lab Reports", path: "/doctor/labreport" },
            { name: "History", path: "/doctor/history" },
            { name: "Profile", path: "/doctor/profile" },
          ].map((item, i) => (
            <span
              key={i}
              onClick={() => navigate(item.path)}
              style={styles.navLink}
            >
              {item.name}
            </span>
          ))}

          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      <div style={styles.container}>
        <h1 style={styles.heading}>Consultation History</h1>

        {historyData.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3>{item.patient}</h3>
            <p><strong>Diagnosis:</strong> {item.diagnosis}</p>
            <p><strong>Treatment:</strong> {item.treatment}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f6fafc",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 50px",
    background: "linear-gradient(90deg,#2b6777,#52ab98)",
    color: "#fff",
  },

  logo: {
    fontWeight: 700,
    fontSize: 24,
  },

  navLinks: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },

  navLink: {
    cursor: "pointer",
    fontWeight: 500,
  },

  logoutBtn: {
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 8,
    cursor: "pointer",
  },

  container: {
    padding: "40px 60px",
  },

  heading: {
    color: "#2b6777",
    marginBottom: 30,
  },

  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 14,
    marginBottom: 20,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
};