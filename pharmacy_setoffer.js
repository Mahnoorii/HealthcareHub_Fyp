import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PharmacySetOffer() {

  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [validity, setValidity] = useState("");
  const [discount, setDiscount] = useState("");

  const [offers, setOffers] = useState([]);

  /* ================= LOAD OFFERS ================= */

  useEffect(() => {

    const savedOffers =
      JSON.parse(localStorage.getItem("pharmacyOffers")) || [];

    setOffers(savedOffers);

  }, []);

  /* ================= ADD OFFER ================= */

  const handleAddOffer = () => {

    if (
      !offerName ||
      !description ||
      !validity ||
      !discount
    ) {
      alert("Please fill all fields");
      return;
    }

    const newOffer = {
      id: Date.now(),
      offerName,
      description,
      validity,
      discount,
    };

    const updatedOffers = [...offers, newOffer];

    setOffers(updatedOffers);

    localStorage.setItem(
      "pharmacyOffers",
      JSON.stringify(updatedOffers)
    );

    setOfferName("");
    setDescription("");
    setValidity("");
    setDiscount("");
  };

  /* ================= DELETE OFFER ================= */

  const handleDelete = (id) => {

    const updatedOffers =
      offers.filter((offer) => offer.id !== id);

    setOffers(updatedOffers);

    localStorage.setItem(
      "pharmacyOffers",
      JSON.stringify(updatedOffers)
    );
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

        .page-container{
          max-width:1100px;
          margin:40px auto;
          padding:0 20px;
        }

        .page-title{
          color:#0f3d91;
          font-size:42px;
          font-weight:800;
          margin-bottom:30px;
        }

        .form-grid{
          display:grid;
          grid-template-columns:220px 1fr;
          gap:18px;
          align-items:center;
          max-width:700px;
        }

        label{
          font-size:15px;
          font-weight:600;
          color:#1e3a8a;
        }

        input,
        textarea{
          width:100%;
          padding:12px;
          border:1px solid #d1d5db;
          border-radius:8px;
          outline:none;
          font-size:15px;
        }

        textarea{
          resize:none;
          height:90px;
        }

        .btn{
          margin-top:15px;
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 22px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
          transition:0.3s;
        }

        .btn:hover{
          background:#1d4ed8;
        }

        .table-title{
          margin-top:40px;
          margin-bottom:20px;
          color:#0f3d91;
          font-size:32px;
          font-weight:800;
        }

        .table-card{
          background:white;
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 4px 10px rgba(0,0,0,0.05);
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        thead{
          background:#f8fbff;
        }

        th{
          text-align:left;
          padding:16px;
          color:#1e40af;
          font-size:15px;
          border-bottom:1px solid #e5e7eb;
        }

        td{
          padding:16px;
          border-bottom:1px solid #f1f5f9;
          color:#374151;
        }

        .delete-btn{
          background:#ef4444;
          color:white;
          border:none;
          padding:10px 16px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
        }

        .delete-btn:hover{
          background:#dc2626;
        }

        .empty{
          text-align:center;
          padding:25px;
          color:#64748b;
        }

        .footer{
          margin-top:80px;
          text-align:center;
          color:#64748b;
        }

        @media(max-width:850px){

          .navbar{
            flex-direction:column;
            gap:15px;
            padding:20px;
          }

          .nav-links{
            justify-content:center;
          }

          .form-grid{
            grid-template-columns:1fr;
          }

          table{
            display:block;
            overflow-x:auto;
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

          <Link to="/addmedicine">
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

          <Link
            to="/set-offers"
            className="active-link"
          >
            Set Offers
          </Link>

          <Link to="/history">
            History
          </Link>

        </div>

      </nav>

      {/* ================= PAGE ================= */}

      <div className="page-container">

        <h1 className="page-title">
          Set Offers
        </h1>

        <div className="form-grid">

          <label>Offer Name</label>

          <input
            type="text"
            value={offerName}
            onChange={(e) =>
              setOfferName(e.target.value)
            }
          />

          <label>Description</label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <label>Validity Date</label>

          <input
            type="date"
            value={validity}
            onChange={(e) =>
              setValidity(e.target.value)
            }
          />

          <label>Discount (%)</label>

          <input
            type="number"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value)
            }
          />

        </div>

        <button
          className="btn"
          onClick={handleAddOffer}
        >
          Add Offer
        </button>

        <h2 className="table-title">
          Existing Offers
        </h2>

        <div className="table-card">

          <table>

            <thead>

              <tr>

                <th>Name</th>
                <th>Description</th>
                <th>Valid Until</th>
                <th>Discount</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {offers.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="empty"
                  >
                    No offers available
                  </td>

                </tr>

              ) : (

                offers.map((offer) => (

                  <tr key={offer.id}>

                    <td>{offer.offerName}</td>

                    <td>{offer.description}</td>

                    <td>{offer.validity}</td>

                    <td>{offer.discount}%</td>

                    <td>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(offer.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        <div className="footer">
          © 2026 HealthCare Hub
        </div>

      </div>

    </>
  );
}