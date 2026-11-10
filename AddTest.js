import React, { useState } from "react";

export default function AddTest() {
  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddTest = async () => {
    if (!testName || !price) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/tests/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: testName,
          description,
          price: Number(price)
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Test added successfully");
        setTestName("");
        setDescription("");
        setPrice("");
      } else {
        alert(data.error || "Failed to add test");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={heading}>Add Diagnostic Test</h2>

        <input
          style={input}
          type="text"
          placeholder="Test Name"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
        />

        <textarea
          style={textarea}
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          style={input}
          type="number"
          placeholder="Price (PKR)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button style={button} onClick={handleAddTest} disabled={loading}>
          {loading ? "Adding..." : "Add Test"}
        </button>
      </div>
    </div>
  );
}

const container = {
  minHeight: "80vh",
  background: "linear-gradient(180deg, #f8fbff, #edf6fb)",
  padding: "60px 20px",
  fontFamily: "Segoe UI, sans-serif"
};

const card = {
  maxWidth: "550px",
  margin: "auto",
  background: "#fff",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(43,103,119,0.1)"
};

const heading = {
  textAlign: "center",
  color: "#2b6777",
  fontWeight: "700",
  marginBottom: "25px"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #cce1ed",
  fontSize: "14px"
};

const textarea = {
  ...input,
  height: "80px",
  resize: "none"
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#2b6777",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer"
};