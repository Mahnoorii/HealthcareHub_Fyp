import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signin failed");
        return;
      }

      alert(`Welcome back, ${data.user.name}!`);

      if (role === "lab") navigate("/diagnostic-center");
      else if (role === "doctor") navigate("/doctor/dashboard");
      else if (role === "patient") navigate("/patient/dashboard");
      else if (role === "pharmacist") navigate("/pharmacy/dashboard");
      else navigate("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  }

  const displayRole = role
    ? role.charAt(0).toUpperCase() + role.slice(1)
    : "User";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign In as {displayRole}</h2>
        <p style={styles.subtitle}>Enter your credentials below</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordBox}>
              <input
                style={styles.passwordInput}
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <span
                style={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                <span style={styles.eye}></span>
                {!showPassword && <span style={styles.slash}></span>}
              </span>
            </div>
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <Link to={`/signup/${role}`} style={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(135deg, #cce7ff 0%, #e6f3ff 100%)",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "45px 55px",
    borderRadius: "18px",
    boxShadow: "0 8px 30px rgba(0, 128, 255, 0.15)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    marginBottom: "8px",
    color: "#0a3d62",
    fontWeight: "600",
  },
  subtitle: {
    color: "#5272a0",
    marginBottom: "25px",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f3057",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #b0d4ff",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#f0f8ff",
  },
  passwordBox: {
    position: "relative",
  },
  passwordInput: {
    width: "100%",
    padding: "10px 40px 10px 14px",
    borderRadius: "10px",
    border: "1px solid #b0d4ff",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#f0f8ff",
  },
  eyeIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "18px",
    height: "12px",
    cursor: "pointer",
  },
  eye: {
    width: "18px",
    height: "12px",
    border: "2px solid #555",
    borderRadius: "50%",
    display: "block",
  },
  slash: {
    position: "absolute",
    width: "20px",
    height: "2px",
    background: "#555",
    top: "50%",
    left: "-1px",
    transform: "rotate(45deg)",
  },
  button: {
    marginTop: "10px",
    background: "linear-gradient(90deg, #4da6ff, #1e90ff)",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },
  error: {
    color: "#d90429",
    fontSize: "13px",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "13px",
    color: "#3b5998",
  },
  link: {
    color: "#1e90ff",
    textDecoration: "none",
    fontWeight: "500",
  },
};
