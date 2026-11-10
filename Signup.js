import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name || !form.email || !form.password || !form.confirmPassword)
      return "All fields are required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      return "Please enter a valid email address.";

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(form.password))
      return "Password must be at least 8 characters and include uppercase, lowercase, and a number.";

    if (form.password !== form.confirmPassword)
      return "Passwords do not match.";



    
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate(`/signin/${role}`), 1500);
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
        <h2 style={styles.title}>Sign Up as {displayRole}</h2>
        <p style={styles.subtitle}>Create your new account below</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordBox}>
              <input
                style={styles.passwordInput}
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
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

          {/* Confirm Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.passwordBox}>
              <input
                style={styles.passwordInput}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              <span
                style={styles.eyeIcon}
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <span style={styles.eye}></span>
                {!showConfirmPassword && <span style={styles.slash}></span>}
              </span>
            </div>
          </div>

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to={`/signin/${role}`} style={styles.link}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #cce7ff, #e6f3ff)",
  },
  card: {
    background: "#fff",
    padding: "45px",
    borderRadius: "18px",
    width: "400px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "26px",
    color: "#0a3d62",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#5272a0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  inputGroup: { textAlign: "left" },
  label: { fontSize: "14px", marginBottom: "6px", display: "block" },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #b0d4ff",
  },
  passwordBox: { position: "relative" },
  passwordInput: {
    width: "100%",
    padding: "10px 40px 10px 14px",
    borderRadius: "10px",
    border: "1px solid #b0d4ff",
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
    background: "#1e90ff",
    color: "#fff",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },
  error: { color: "#d90429", fontSize: "13px" },
  success: { color: "#1e90ff", fontSize: "13px" },
  footerText: { textAlign: "center", marginTop: "18px" },
  link: { color: "#1e90ff", textDecoration: "none" },
};
