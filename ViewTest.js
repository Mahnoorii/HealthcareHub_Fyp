import React from "react";

export default function ViewTest() {
  const tests = [
    { name: "Blood Test", price: 50 },
    { name: "MRI", price: 500 },
    { name: "X-Ray", price: 100 },
  ];

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", minHeight: "80vh", background: "linear-gradient(180deg, #f8fbff 0%, #edf6fb 100%)", padding: "50px 20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 6px 18px rgba(43,103,119,0.08)" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#2b6777", textAlign: "center", marginBottom: "25px" }}>All Tests</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ background: "#2b6777", color: "#fff", padding: "12px", textAlign: "left" }}>Test Name</th>
              <th style={{ background: "#2b6777", color: "#fff", padding: "12px", textAlign: "left" }}>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t, i) => (
              <tr key={i}>
                <td style={{ padding: "12px", borderBottom: "1px solid #e0e6ea" }}>{t.name}</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #e0e6ea" }}>{t.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
