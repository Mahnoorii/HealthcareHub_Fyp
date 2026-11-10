import React from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, User, FlaskConical, Pill } from "lucide-react"; // ✅ professional icons

export default function Home() {
  const navigate = useNavigate();

  // ✅ roles array (as you wrote)
  const roles = [
    {
      id: "doctor",
      title: "As a Doctor",
      description: "Manage appointments and analyze lab reports",
      icon: <Stethoscope size={40} className="text-gray-700" />,
    },
    {
      id: "patient",
      title: "As a Patient",
      description: "Book appointments and manage your health",
      icon: <User size={40} className="text-gray-700" />,
    },
    {
      id: "lab",
      title: "As a Lab",
      description: "Process tests and deliver reports",
      icon: <FlaskConical size={40} className="text-gray-700" />,
    },
    {
      id: "pharmacist",
      title: "As a Pharmacist",
      description: "Manage inventory and fulfill orders",
      icon: <Pill size={40} className="text-gray-700" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(90deg, #e9f4fa, #ffffff)",
          borderRadius: "12px",
          padding: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
          marginBottom: "28px",
        }}
      >
        <div>
          <h1
            style={{
              margin: "0 0 10px 0",
              fontSize: "26px",
              color: "#2b6777",
              fontWeight: "700",
            }}
          >
            Welcome to HealthCare Hub
          </h1>
          <p
            style={{
              margin: 0,
              color: "#556b74",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            Choose your role to continue — secure accounts for Doctors,
            Patients, Labs, and Pharmacies.
          </p>
        </div>
      </div>

      {/* Roles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => navigate(`/signup/${role.id}`)}
            style={{
              background: "#ffffff",
              padding: "22px",
              borderRadius: "12px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(43,103,119,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(0,0,0,0.05)")
            }
          >
            <div style={{ marginBottom: "12px" }}>{role.icon}</div>
            <h3
              style={{
                margin: "0 0 4px 0",
                color: "#2b6777",
                fontWeight: "600",
              }}
            >
              {role.title}
            </h3>
            <p
              style={{
                color: "#6c7e88",
                fontSize: "13px",
                lineHeight: "1.4",
              }}
            >
              {role.description}
            </p>
          </div>
        ))}
      </div>

      {/* Signin Link */}
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <p style={{ color: "#556b74", fontSize: "14px" }}>
          <span
            onClick={() => navigate("/signin/patient")}
            style={{
              color: "#2b6777",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            
          </span>
        </p>
      </div>
    </div>
  );
}
