// RoleSelection.js
import React from "react";
import { Link } from "react-router-dom";

export default function RoleSelection() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Your Role to Sign Up</h2>
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/signup/lab">Lab</Link>
        <Link to="/signup/doctor">Doctor</Link>
        <Link to="/signup/pharmacist">Pharmacy</Link>
        <Link to="/signup/patient">Patient</Link>
      </div>
    </div>
  );
}
