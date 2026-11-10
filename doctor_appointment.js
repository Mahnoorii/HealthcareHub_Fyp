import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorAppointment() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/signin/doctor");
  }

  return (
    <div style={styles.page}>
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
        <h1 style={styles.heading}>Appointment Management</h1>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Issue</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ali Khan</td>
              <td>22 Feb 2026</td>
              <td>10:30 AM</td>
              <td>Thyroid Check</td>
              <td>
                <button style={styles.confirmBtn}>Confirm</button>
                <button style={styles.rejectBtn}>Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
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

  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
    borderRadius: 14,
    overflow: "hidden",
  },

  confirmBtn: {
    background: "#2b6777",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    marginRight: 10,
    cursor: "pointer",
  },

  rejectBtn: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
};