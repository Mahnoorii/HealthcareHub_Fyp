import React, { useState, useEffect } from "react";

export default function ManageTest() {
  const [tests, setTests] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Fetch tests from backend
  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    const res = await fetch("http://localhost:5000/api/tests");
    const data = await res.json();
    setTests(data);
  };

  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure to delete this test?")) return;
    await fetch(`http://localhost:5000/api/tests/delete/${id}`, { method: "DELETE" });
    fetchTests();
  };

  const startEdit = (test) => {
    setEditingId(test._id);
    setEditValue(test.name);
  };

  const saveEdit = async (id) => {
    await fetch(`http://localhost:5000/api/tests/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editValue })
    });
    setEditingId(null);
    fetchTests();
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Manage Tests</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tests.map((t) => (
            <li key={t._id} style={listItemStyle}>
              {editingId === t._id ? (
                <input type="text" value={editValue} onChange={e => setEditValue(e.target.value)} style={editInputStyle} />
              ) : (
                <span>{t.name}</span>
              )}

              <div style={{ display: "flex", gap: "8px" }}>
                {editingId === t._id ? (
                  <>
                    <button style={btnStyleSave} onClick={() => saveEdit(t._id)}>Save</button>
                    <button style={btnStyleCancel} onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button style={btnStyleEdit} onClick={() => startEdit(t)}>Update</button>
                    <button style={btnStyleRemove} onClick={() => handleRemove(t._id)}>Remove</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const containerStyle = { fontFamily: "Segoe UI, sans-serif", minHeight: "80vh", background: "linear-gradient(180deg, #f8fbff 0%, #edf6fb 100%)", padding: "50px 20px" };
const cardStyle = { maxWidth: "600px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 6px 18px rgba(43,103,119,0.08)" };
const headingStyle = { fontSize: "28px", fontWeight: "700", color: "#2b6777", textAlign: "center", marginBottom: "25px" };
const listItemStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #e0e6ea" };
const editInputStyle = { fontSize: "16px", padding: "6px 10px", borderRadius: "6px", border: "1px solid #cfd8dc", flex: 1, marginRight: "10px" };

const btnStyleEdit = { padding: "8px 15px", backgroundColor: "#3498db", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" };
const btnStyleRemove = { padding: "8px 15px", backgroundColor: "#e74c3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" };
const btnStyleSave = { padding: "8px 15px", backgroundColor: "#2ecc71", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" };
const btnStyleCancel = { padding: "8px 15px", backgroundColor: "#95a5a6", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" };