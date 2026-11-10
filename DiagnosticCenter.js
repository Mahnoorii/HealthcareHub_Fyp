import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function IDCDashboard() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setTests(JSON.parse(localStorage.getItem("tests") || "[]"));
    setRequests(JSON.parse(localStorage.getItem("requests") || "[]"));
  }, []);

  const pending = requests.filter(r => r.status === "Pending").length;

  function handleLogout() {
    localStorage.clear();
    navigate("/signup/lab");
  }

  return (
    <div style={styles.page}>
      {/* ===== NAVBAR ===== */}
      <header style={styles.navbar}>
        <h2 style={styles.logo}>IDC Health Panel</h2>

        <nav style={styles.navLinks}>
          {[
            "Dashboard",
            "Add Test",
            "Manage Test",
            "Confirm Test",
            "Reports",
          ].map((t, i) => (
            <Link
              key={i}
              to={`/${t.toLowerCase().replace(" ", "-")}`}
              style={styles.navLink}
            >
              {t}
            </Link>
          ))}

          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Diagnostic Center Dashboard</h1>
          <p style={styles.heroText}>
            Manage laboratory tests, patient requests, and diagnostic services
            with confidence.
          </p>

          <div>
            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/add-test")}
            >
              + Add New Test
            </button>
            <button
              style={styles.secondaryBtn}
              onClick={() => navigate("/manage-test")}
            >
              Manage Tests
            </button>
          </div>
        </div>

        <img
          src="https://kiranpetct.com/wp-content/uploads/2023/05/diagonstic.png"
          alt="Diagnostic Illustration"
          style={styles.heroImg}
        />
      </section>

      {/* ===== MAIN GRID ===== */}
      <main style={styles.mainGrid}>
        {/* LEFT SIDEBAR */}
        <aside>
          <div style={styles.profileCard}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2OEMCSospJoOZEbd-XN9juWUJ9dpkVMVMA&s"
              alt="Islamabad Diagnostic Center"
              style={styles.centerImg}
            />

            <h3>Islamabad Diagnostic Center</h3>
            <p style={styles.muted}>Trusted Diagnostic Services</p>

            <div style={styles.statRow}>
              <Stat title="Tests" value={tests.length} />
              <Stat title="Pending" value={pending} />
              <Stat title="Requests" value={requests.length} />
            </div>
          </div>

          <div style={styles.offerCard}>
            <h3>🎁 Offers</h3>
            <p>✔ Free BP Checkup</p>
            <p>✔ 20% Discount on Panels</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section>
          {/* STATS */}
          <div style={styles.statsGrid}>
            <StatCard title="Total Tests" value={tests.length} />
            <StatCard title="Pending Requests" value={pending} />
            <StatCard
              title="Completed Requests"
              value={requests.length - pending}
            />
          </div>

          {/* RECENT REQUESTS */}
          <div style={styles.card}>
            <h3>Recent Patient Requests</h3>

            {requests.length === 0 ? (
              <p style={styles.muted}>No recent activity</p>
            ) : (
              <ul>
                {requests
                  .slice(-5)
                  .reverse()
                  .map(r => (
                    <li key={r._id}>
                      <strong>{r.patientName}</strong> • {r.testName} •{" "}
                      <span>{r.status}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* QUICK ACTIONS */}
          <div style={styles.card}>
            <h3>Quick Actions</h3>

            <div style={styles.actions}>
              <ActionBtn text="Add Test" onClick={() => navigate("/add-test")} />
              <ActionBtn
                text="Manage Tests"
                onClick={() => navigate("/manage-test")}
              />
              <ActionBtn
                text="Confirm Requests"
                onClick={() => navigate("/confirm-test")}
              />
              <ActionBtn
                text="Reports"
                onClick={() => navigate("/reports")}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Stat = ({ title, value }) => (
  <div style={{ textAlign: "center" }}>
    <small>{title}</small>
    <h3>{value}</h3>
  </div>
);

const StatCard = ({ title, value }) => (
  <div style={styles.statCard}>
    <div>
      <small>{title}</small>
      <h2>{value}</h2>
    </div>
  </div>
);

const ActionBtn = ({ text, onClick }) => (
  <button style={styles.actionBtn} onClick={onClick}>
    {text}
  </button>
);

/* ================= STYLES ================= */

const styles = {
  page: {
    fontFamily: "Poppins, sans-serif",
    background: "#f5fbff",
    minHeight: "100vh",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 50px",
    background: "linear-gradient(90deg,#2b6777,#52ab98)",
    color: "#fff",
    alignItems: "center",
  },

  logo: { fontWeight: 700 },

  navLinks: { display: "flex", gap: 22, alignItems: "center" },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
  },

  logoutBtn: {
    background: "#ff6b6b",
    border: "none",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 500,
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 60px",
    background: "#eaf7f6",
  },

  heroTitle: { fontSize: 34, color: "#2b6777" },
  heroText: { color: "#567", maxWidth: 520 },
  heroImg: { width: 220, objectFit: "contain" },

  primaryBtn: {
    background: "#2b6777",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: 8,
    border: "none",
    marginRight: 10,
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid #2b6777",
    color: "#2b6777",
    padding: "10px 18px",
    borderRadius: 8,
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: 20,
    padding: "30px 50px",
  },

  profileCard: {
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,.06)",
  },

  centerImg: {
  width: 140,
  height: 140,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 10,
  border: "3px solid #2b6777",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
},


  muted: { color: "#6b7b86", fontSize: 13 },

  statRow: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 16,
  },

  offerCard: {
    background: "#fff",
    padding: 16,
    borderRadius: 14,
    marginTop: 16,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 16,
  },

  statCard: {
    background: "#fff",
    padding: 18,
    borderRadius: 14,
    boxShadow: "0 6px 18px rgba(0,0,0,.05)",
  },

  card: {
    background: "#fff",
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,.05)",
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 10,
  },

  actionBtn: {
    padding: "10px",
    borderRadius: 8,
    border: "none",
    background: "#edf7f6",
    cursor: "pointer",
  },
};
