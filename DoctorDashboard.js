import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paperclip, Send } from "lucide-react";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  // ===== STATES =====
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  // ===== LOGOUT =====
  function handleLogout() {
    localStorage.clear();
    navigate("/signin/doctor");
  }

  // ===== SEND FUNCTION =====
  const handleSend = async () => {
    if (!selectedFile) {
      alert("Please upload a PDF report first");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/api/analyze-report", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data);

    } catch (error) {
      console.error(error);
      alert("Error processing report");
    }
  };

  return (
    <div style={styles.page}>

      {/* ===== NAVBAR ===== */}
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

      {/* ===== HERO SECTION ===== */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Welcome, Doctor!</h1>

          <p style={styles.heroText}>
            Manage appointments, analyze patient lab reports,
            track consultation history, and improve healthcare
            services using AI-powered diagnosis support.
          </p>

          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/doctor/appointments")}
          >
            View Appointments
          </button>
        </div>

        <img
          src="https://i.pinimg.com/736x/89/22/50/892250aa1fda66547a84fd913031300d.jpg"
          alt="Doctor"
          style={styles.heroImg}
        />
      </section>

      {/* ===== QUICK STATS ===== */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h2>25+</h2>
          <p>Today's Patients</p>
        </div>

        <div style={styles.statCard}>
          <h2>12</h2>
          <p>Pending Reports</p>
        </div>

        <div style={styles.statCard}>
          <h2>18</h2>
          <p>Appointments</p>
        </div>

        <div style={styles.statCard}>
          <h2>96%</h2>
          <p>Accuracy Rate</p>
        </div>
      </section>

      {/* ===== IMAGE GALLERY ===== */}
      <section style={styles.imageGallery}>
        <img
          src="https://i.pinimg.com/736x/77/86/6b/77866bb0501c5f07d6373bc667d5ee7b.jpg"
          alt="Medical Team"
          style={styles.galleryImg}
        />

        <img
          src="https://i.pinimg.com/736x/93/09/ee/9309ee0c968f33669bc2bb227840f16a.jpg"
          alt="Medical Equipment"
          style={styles.galleryImg}
        />

        <img
          src="https://i.pinimg.com/736x/e2/6e/4e/e26e4efa7bba727900b3c25ec902b0ad.jpg"
          alt="Medical Tools"
          style={styles.galleryImg}
        />
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <section style={styles.quickActions}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>

        <div style={styles.actionsGrid}>
          {[
            {
              text: "View Appointments",
              path: "/doctor/appointments",
            },

            {
              text: "View Lab Reports",
              path: "/doctor/labreport",
            },

            {
              text: "Consultation History",
              path: "/doctor/history",
            },

            {
              text: "Manage Profile",
              path: "/doctor/profile",
            },
          ].map((action, i) => (
            <button
              key={i}
              style={styles.actionBtn}
              onClick={() => navigate(action.path)}
            >
              {action.text}
            </button>
          ))}
        </div>
      </section>

      {/* ===== AI CHATBOT ===== */}
      <section style={styles.chatbotSection}>
        <h2 style={styles.sectionTitle}>
          AI Thyroid Disease Assistant
        </h2>

        <div style={styles.chatbotContainer}>

          {/* FILE INPUT */}
          <label style={{ cursor: "pointer" }}>
            <input
              type="file"
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />

            <Paperclip size={22} color="#2b6777" />
          </label>

          <input
            type="text"
            placeholder="Upload report and ask AI Assistant..."
            style={styles.chatInput}
          />

          <button style={styles.sendBtn} onClick={handleSend}>
            <Send size={16} />
            Send
          </button>
        </div>

        {/* SELECTED FILE */}
        {selectedFile && (
          <p style={styles.selectedFile}>
            Selected File: {selectedFile.name}
          </p>
        )}

        {/* RESULT */}
        {response && (
          <div style={styles.resultBox}>
            <h3 style={{ color: "#2b6777" }}>
              Extracted Values
            </h3>

            <p>TSH: {response.values?.TSH}</p>
            <p>T3: {response.values?.T3}</p>
            <p>TT4: {response.values?.TT4}</p>
            <p>T4U: {response.values?.T4U}</p>
            <p>FTI: {response.values?.FTI || "N/A"}</p>

            <h3 style={{ color: "#2b6777", marginTop: 20 }}>
              Diagnosis
            </h3>

            <p>{response.prediction}</p>

            <h3 style={{ color: "#2b6777", marginTop: 20 }}>
              Recommendation
            </h3>

            <p>{response.advice}</p>
          </div>
        )}

        <img
          src="https://i.pinimg.com/1200x/60/fe/cc/60fecc6f6f36786316915ac632c7d451.jpg"
          alt="AI Assistant"
          style={styles.chatbotImg}
        />
      </section>

      {/* ===== FEATURES ===== */}
      <section style={styles.infoSection}>
        <div style={styles.infoCard}>
          <img
            src="https://i.pinimg.com/736x/27/e8/21/27e8211db7a630552fc7dcf78d098f6b.jpg"
            alt="Hospital"
            style={styles.infoImg}
          />

          <h3>Patient Management</h3>

          <p>
            Easily manage consultations, treatments,
            and patient records.
          </p>
        </div>

        <div style={styles.infoCard}>
          <img
            src="https://i.pinimg.com/736x/34/5c/43/345c431ab85289c1461c175216e00243.jpg"
            alt="Lab Reports"
            style={styles.infoImg}
          />

          <h3>Lab Report Analysis</h3>

          <p>
            Upload and analyze patient thyroid reports
            instantly using AI.
          </p>
        </div>

        <div style={styles.infoCard}>
          <img
            src="https://i.pinimg.com/736x/e2/6e/4e/e26e4efa7bba727900b3c25ec902b0ad.jpg"
            alt="Consultation"
            style={styles.infoImg}
          />

          <h3>Consultation History</h3>

          <p>
            Access previous consultation records and
            treatment recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}

// ===== STYLES =====

const styles = {

  page: {
    fontFamily: "Poppins, sans-serif",
    background: "#f5fbff",
    minHeight: "100vh",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 50px",
    background: "linear-gradient(90deg,#2b6777,#52ab98)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    fontWeight: 700,
    fontSize: 24,
  },

  navLinks: {
    display: "flex",
    gap: 22,
    alignItems: "center",
  },

  navLink: {
    color: "#fff",
    fontWeight: 500,
    cursor: "pointer",
  },

  logoutBtn: {
    background: "#ff6b6b",
    border: "none",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 500,
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 60px",
    background: "#eaf7f6",
    margin: "30px 60px",
    borderRadius: 20,
    flexWrap: "wrap",
    gap: 30,
  },

  heroLeft: {
    flex: 1,
    minWidth: 300,
  },

  heroTitle: {
    fontSize: 40,
    color: "#2b6777",
    marginBottom: 15,
  },

  heroText: {
    color: "#567",
    lineHeight: 1.8,
    maxWidth: 600,
    marginBottom: 20,
  },

  primaryBtn: {
    background: "#2b6777",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 15,
  },

  heroImg: {
    width: 350,
    borderRadius: 18,
    objectFit: "cover",
  },

  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
    padding: "0 60px",
  },

  statCard: {
    background: "#fff",
    padding: 25,
    borderRadius: 16,
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },

  imageGallery: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    margin: "50px 60px",
  },

  galleryImg: {
    width: 320,
    height: 220,
    objectFit: "cover",
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },

  quickActions: {
    padding: "20px 60px",
  },

  sectionTitle: {
    color: "#2b6777",
    marginBottom: 25,
    textAlign: "center",
  },

  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
  },

  actionBtn: {
    padding: "18px",
    borderRadius: 12,
    border: "none",
    background: "#edf7f6",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
  },

  chatbotSection: {
    padding: "50px 60px",
    margin: "40px 60px",
    background: "#f0f9fb",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  chatbotContainer: {
    display: "flex",
    width: "80%",
    maxWidth: 700,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },

  chatInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: 15,
    padding: "10px",
  },

  sendBtn: {
    backgroundColor: "#2b6777",
    color: "white",
    border: "none",
    borderRadius: 10,
    padding: "10px 16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  selectedFile: {
    color: "#2b6777",
    marginBottom: 15,
  },

  resultBox: {
    background: "#fff",
    padding: 25,
    borderRadius: 14,
    marginTop: 20,
    width: "80%",
    maxWidth: 700,
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },

  chatbotImg: {
    width: 280,
    borderRadius: 16,
    marginTop: 30,
  },

  infoSection: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 25,
    padding: "40px 60px 70px",
  },

  infoCard: {
    background: "#fff",
    padding: 20,
    borderRadius: 16,
    width: 320,
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },

  infoImg: {
    width: "100%",
    height: 190,
    borderRadius: 14,
    objectFit: "cover",
    marginBottom: 15,
  },
};