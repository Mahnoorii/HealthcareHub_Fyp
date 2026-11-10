import React, { useState } from "react";

export default function ConfirmTest() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Blood Test", status: "Pending" },
    { id: 2, name: "MRI", status: "Pending" },
  ]);

  const handleDecision = (id, decision) => setRequests(requests.map(r => r.id === id ? {...r, status: decision} : r));

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", minHeight: "80vh", background: "linear-gradient(180deg, #f8fbff 0%, #edf6fb 100%)", padding: "50px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 6px 18px rgba(43,103,119,0.08)" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#2b6777", textAlign: "center", marginBottom: "25px" }}>Confirm Lab Tests</h2>
        {requests.map(r => (
          <div key={r.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <span>{r.name} - {r.status}</span>
            {r.status === "Pending" && (
              <div>
                <button style={{ padding: "8px 15px", backgroundColor: "#2b6777", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", marginRight: "8px" }} onClick={() => handleDecision(r.id, "Accepted")}>Accept</button>
                <button style={{ padding: "8px 15px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }} onClick={() => handleDecision(r.id, "Rejected")}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}