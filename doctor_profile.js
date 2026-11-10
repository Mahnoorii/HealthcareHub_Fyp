import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorProfile() {
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
        <h1 style={styles.heading}>Doctor Profile</h1>

        <div style={styles.card}>
          <input placeholder="Doctor Name" style={styles.input} />
          <input placeholder="Specialization" style={styles.input} />
          <input placeholder="Experience" style={styles.input} />
          <input placeholder="Hospital Name" style={styles.input} />

          <button style={styles.updateBtn}>Update Profile</button>
        </div>
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
    padding: 30,
    borderRadius: 14,
    maxWidth: 700,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },

  input: {
    width: "100%",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    border: "1px solid #ccc",
  },

  updateBtn: {
    background: "#2b6777",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: 8,
    cursor: "pointer",
  },
};