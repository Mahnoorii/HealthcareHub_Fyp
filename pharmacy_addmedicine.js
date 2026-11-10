import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PharmacyAddMedicine() {

  const [medicine, setMedicine] = useState({
    name: "",
    expiry: "",
    quantity: "",
    price: "",
    image: null,
  });

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setMedicine({
      ...medicine,
      [name]: value,
    });

  };

  /* ================= HANDLE IMAGE ================= */

  const handleImage = (e) => {

    setMedicine({
      ...medicine,
      image: e.target.files[0],
    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(medicine);

    alert("Medicine Added Successfully");

  };

  /* ================= CLEAR ================= */

  const handleClear = () => {

    setMedicine({
      name: "",
      expiry: "",
      quantity: "",
      price: "",
      image: null,
    });

  };

  return (

    <>

      {/* ================= CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Segoe UI,sans-serif;
          background:#edf5ff;
        }

        /* ================= NAVBAR ================= */

        .navbar{
          width:100%;
          background:white;
          padding:15px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          box-shadow:0 2px 10px rgba(0,0,0,0.05);
        }

        .nav-left{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .logo-box{
          width:35px;
          height:35px;
          border-radius:10px;
          background:#2563eb;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          font-weight:bold;
        }

        .logo-text{
          font-size:24px;
          font-weight:700;
          color:#1e3a8a;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:18px;
          flex-wrap:wrap;
        }

        .nav-links a{
          text-decoration:none;
          color:#1e40af;
          font-weight:600;
          padding:10px 16px;
          border-radius:12px;
          transition:0.3s;
          font-size:15px;
        }

        .nav-links a:hover{
          background:#dbeafe;
        }

        .active-link{
          background:#dbeafe;
        }

        /* ================= PAGE ================= */

        .page-container{
          min-height:100vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          padding-top:40px;
        }

        .form-card{
          width:700px;
          background:white;
          border-radius:20px;
          padding:30px;
          box-shadow:0 4px 15px rgba(0,0,0,0.05);
        }

        .form-title{
          color:#0f3d91;
          font-size:34px;
          font-weight:800;
          margin-bottom:25px;
        }

        .form-group{
          margin-bottom:20px;
        }

        .form-group label{
          display:block;
          margin-bottom:8px;
          color:#1e3a8a;
          font-weight:600;
        }

        .form-control{
          width:100%;
          padding:14px;
          border:1px solid #cbd5e1;
          border-radius:10px;
          font-size:15px;
          outline:none;
          transition:0.3s;
        }

        .form-control:focus{
          border-color:#2563eb;
          box-shadow:0 0 0 3px rgba(37,99,235,0.15);
        }

        .btn-group{
          display:flex;
          gap:12px;
          margin-top:10px;
        }

        .add-btn{
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .add-btn:hover{
          background:#1d4ed8;
        }

        .clear-btn{
          background:#f1f5f9;
          color:#1e3a8a;
          border:none;
          padding:12px 20px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .clear-btn:hover{
          background:#dbeafe;
        }

        .footer{
          margin-top:120px;
          color:#64748b;
          font-size:15px;
        }

        @media(max-width:850px){

          .form-card{
            width:95%;
          }

          .navbar{
            flex-direction:column;
            gap:15px;
            padding:20px;
          }

          .nav-links{
            justify-content:center;
          }

        }

      `}</style>

      {/* ================= NAVBAR ================= */}

<nav className="navbar">

  <div className="nav-left">

    <div className="logo-box">
      +
    </div>

    <div className="logo-text">
      HealthCare Hub
    </div>

  </div>

  <div className="nav-links">

    <Link to="/pharmacy/dashboard">
      Dashboard
    </Link>

    <Link to="/addmedicine" className="active-link">
      Add Medicine
    </Link>

    <Link to="/managemedicine">
      Manage
    </Link>

    <Link to="/confirm-orders">
  Confirm Orders
</Link>

    <Link to="/view-all">
  View All
</Link>
<Link to="/profile">
    Profile
  </Link>

  <Link to="/set-offers">
    Set Offers
  </Link>

  <Link to="/history">
    History
  </Link>

  </div>

</nav>
      {/* ================= PAGE ================= */}

      <div className="page-container">

        <div className="form-card">

          <h2 className="form-title">
            Add New Medicine
          </h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label>
                Medicine Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                value={medicine.name}
                onChange={handleChange}
                required
              />

            </div>

            {/* EXPIRY */}

            <div className="form-group">

              <label>
                Expiry Date
              </label>

              <input
                type="date"
                name="expiry"
                className="form-control"
                value={medicine.expiry}
                onChange={handleChange}
                required
              />

            </div>

            {/* QUANTITY */}

            <div className="form-group">

              <label>
                Quantity Available
              </label>

              <input
                type="number"
                name="quantity"
                className="form-control"
                value={medicine.quantity}
                onChange={handleChange}
                required
              />

            </div>

            {/* PRICE */}

            <div className="form-group">

              <label>
                Price (per unit)
              </label>

              <input
                type="number"
                name="price"
                className="form-control"
                value={medicine.price}
                onChange={handleChange}
                required
              />

            </div>

            {/* IMAGE */}

            <div className="form-group">

              <label>
                Medicine Image
              </label>

              <input
                type="file"
                className="form-control"
                onChange={handleImage}
              />

            </div>

            {/* BUTTONS */}

            <div className="btn-group">

              <button
                type="submit"
                className="add-btn"
              >
                Add Medicine
              </button>

              <button
                type="button"
                className="clear-btn"
                onClick={handleClear}
              >
                Clear
              </button>

            </div>

          </form>

        </div>

        {/* FOOTER */}

        <div className="footer">
          © 2026 HealthCare Hub
        </div>

      </div>

    </>

  );

}