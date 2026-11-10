// src/pages/patient_ordermedicine.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const PatientOrderMedicine = () => {

  /* ================= STATES ================= */

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [showOrderPage, setShowOrderPage] =
    useState(false);

  const medicines = [

    {
      name: "Panadol",
      pharmacy: "D-Watson Pharmacy",
      price: 200,
      city: "Rawalpindi",
      contact: "0511234567",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Brufen",
      pharmacy: "Servaid Pharmacy",
      price: 350,
      city: "Islamabad",
      contact: "0519876543",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Augmentin",
      pharmacy: "Chughtai Pharmacy",
      price: 950,
      city: "Lahore",
      contact: "0421234567",
      image:
        "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Disprin",
      pharmacy: "Shaheen Pharmacy",
      price: 120,
      city: "Karachi",
      contact: "0214567890",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Calpol",
      pharmacy: "D-Watson Pharmacy",
      price: 180,
      city: "Rawalpindi",
      contact: "0511234567",
      image:
        "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Flagyl",
      pharmacy: "Servaid Pharmacy",
      price: 400,
      city: "Islamabad",
      contact: "0519876543",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Cac1000",
      pharmacy: "Chughtai Pharmacy",
      price: 600,
      city: "Lahore",
      contact: "0421234567",
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Zyrtec",
      pharmacy: "Shaheen Pharmacy",
      price: 500,
      city: "Karachi",
      contact: "0214567890",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    },

  ];

  /* ================= SEARCH ================= */

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  /* ================= ADD TO CART ================= */

  const addToCart = (medicine) => {

    const existing = cart.find(
      (item) => item.name === medicine.name
    );

    if (existing) {

      const updatedCart = cart.map((item) =>
        item.name === medicine.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...medicine,
          quantity: 1,
        },
      ]);
    }
  };

  /* ================= REMOVE ================= */

  const removeItem = (name) => {

    const updated = cart.filter(
      (item) => item.name !== name
    );

    setCart(updated);
  };

  /* ================= QUANTITY ================= */

  const increaseQty = (name) => {

    const updated = cart.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updated);
  };

  const decreaseQty = (name) => {

    const updated = cart.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    );

    setCart(updated);
  };

  /* ================= TOTAL ================= */

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  /* ================= CONFIRM ORDER ================= */

  const handleOrder = (e) => {

    e.preventDefault();

    alert("Confirmed Successfully Booked");

    setCart([]);

    setShowOrderPage(false);
  };

  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#18a7e0;
        }

        .medicine-page{
          width:100%;
          min-height:100vh;
          background:#18a7e0;
        }

        /* ================= NAVBAR ================= */

        .navbar{
          width:100%;
          height:55px;
          background:white;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 35px;
        }

        .navbar-left{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .plus-box{
          width:26px;
          height:26px;
          border-radius:5px;
          background:#18a7e0;
          color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:18px;
          font-weight:bold;
        }

        .logo-text{
          font-size:20px;
          font-weight:bold;
        }

        .navbar-right{
          display:flex;
          align-items:center;
          gap:28px;
        }

        .navbar-right a{
          text-decoration:none;
          color:black;
          font-size:14px;
          font-weight:500;
        }

        .logout-btn{
          background:#f44b42;
          color:white !important;
          padding:8px 14px;
          border-radius:5px;
        }

        /* ================= MAIN ================= */

        .main-wrapper{
          width:100%;
          min-height:100vh;
          display:flex;
        }

        .medicine-section{
          flex:1;
          padding:40px 30px;
        }

        .heading{
          text-align:center;
          font-size:24px;
          font-weight:bold;
          margin-bottom:22px;
          color:black;
        }

        .search-bar{
          width:270px;
          height:38px;
          border:none;
          border-radius:8px;
          padding:0 15px;
          outline:none;
          display:block;
          margin:0 auto 28px auto;
        }

        /* ================= CARDS ================= */

        .medicine-grid{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:22px;
        }

        .medicine-card{
          width:220px;
          background:#f5f5f5;
          border-radius:14px;
          padding:14px;
        }

        .medicine-card img{
          width:100%;
          height:120px;
          object-fit:cover;
          border-radius:10px;
          margin-bottom:12px;
        }

        .medicine-card h3{
          font-size:16px;
          margin-bottom:14px;
        }

        .medicine-card p{
          margin-bottom:10px;
          font-size:14px;
        }

        .add-btn{
          width:100%;
          height:34px;
          border:none;
          border-radius:5px;
          background:#2c61ea;
          color:white;
          cursor:pointer;
          margin-top:12px;
        }

        /* ================= CART ================= */

        .cart-section{
          width:320px;
          background:#efefef;
          padding:25px 18px;
          overflow-y:auto;
        }

        .cart-title{
          text-align:center;
          font-size:18px;
          font-weight:bold;
          margin-bottom:25px;
        }

        .cart-item{
          border-bottom:1px solid #d0d0d0;
          padding-bottom:18px;
          margin-bottom:18px;
        }

        .cart-item h4{
          text-align:center;
          margin-bottom:16px;
        }

        .qty-row{
          display:flex;
          align-items:center;
          gap:10px;
          margin-bottom:14px;
        }

        .qty-btn{
          width:22px;
          height:22px;
          cursor:pointer;
        }

        .remove-btn{
          margin-top:10px;
          cursor:pointer;
        }

        .total{
          text-align:center;
          font-size:22px;
          font-weight:bold;
          margin:30px 0;
        }

        .confirm-btn{
          width:100%;
          height:40px;
          border:none;
          border-radius:5px;
          background:#2474d9;
          color:white;
          cursor:pointer;
          font-size:15px;
        }

        /* ================= ORDER PAGE ================= */

        .order-wrapper{
          width:96%;
          background:#ececf1;
          margin:35px auto;
          padding:35px;
        }

        .back-btn{
          border:none;
          background:none;
          color:#1876e5;
          font-size:16px;
          cursor:pointer;
          margin-bottom:28px;
        }

        .order-heading{
          font-size:24px;
          font-weight:bold;
          margin-bottom:18px;
        }

        .order-details{
          margin-bottom:35px;
        }

        .order-details p{
          margin-bottom:14px;
          font-size:18px;
        }

        .order-total{
          font-weight:bold;
          font-size:22px;
          margin-top:15px;
        }

        .form-container{
          width:100%;
          display:flex;
          justify-content:center;
        }

        .order-form{
          width:450px;
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .order-form input{
          width:100%;
          height:44px;
          border:1px solid #cfd5df;
          border-radius:6px;
          padding:0 14px;
          outline:none;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1200px){

          .main-wrapper{
            flex-direction:column;
          }

          .cart-section{
            width:100%;
          }
        }

      `}</style>

      <div className="medicine-page">

        {/* ================= NAVBAR ================= */}

        <div className="navbar">

          <div className="navbar-left">

            <div className="plus-box">
              +
            </div>

            <div className="logo-text">
              HealthcareHub
            </div>

          </div>

          <div className="navbar-right">

            <Link to="/patient/dashboard">
              Dashboard
            </Link>

            <Link to="/patient-book-appointment">
              Book Appointments
            </Link>

            <Link to="/patient-booklabtest">
              Book Lab Tests
            </Link>

            <Link to="/patient-ordermedicine">
              Order Medicine
            </Link>

            <Link to="/patient-profile">
              Profile
            </Link>

            <Link to="/patient-logbook">
              Logbook
            </Link>

            <Link to="/patient-report">
  Reports
</Link>

            <Link to="/patient-history">
  History
</Link>

            <Link
              to="/"
              className="logout-btn"
            >
              Logout
            </Link>

          </div>

        </div>

        {/* ================= ORDER PAGE ================= */}

        {showOrderPage ? (

          <div className="order-wrapper">

            <button
              className="back-btn"
              onClick={() =>
                setShowOrderPage(false)
              }
            >
              ← Back
            </button>

            <div className="order-heading">
              Confirm Your Order
            </div>

            <div className="order-details">

              <h2
                style={{
                  marginBottom:"20px"
                }}
              >
                Order Details
              </h2>

              {cart.map((item, index) => (

                <p key={index}>

                  {item.name}
                  {" "}
                  x
                  {" "}
                  {item.quantity}
                  {" "}
                  =
                  {" "}
                  Rs
                  {" "}
                  {item.price * item.quantity}

                </p>

              ))}

              <p>
                Delivery Charges:
                {" "}
                Rs 200
              </p>

              <div className="order-total">
                Total:
                {" "}
                Rs
                {" "}
                {total + 200}
              </div>

            </div>

            <div className="form-container">

              <form
                className="order-form"
                onSubmit={handleOrder}
              >

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  placeholder="Contact Number"
                  required
                />

                <input
                  type="text"
                  placeholder="Complete Address"
                  required
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  required
                />

                <button
                  type="submit"
                  className="confirm-btn"
                >
                  Place Order
                </button>

              </form>

            </div>

          </div>

        ) : (

          /* ================= MAIN PAGE ================= */

          <div className="main-wrapper">

            {/* LEFT SIDE */}

            <div className="medicine-section">

              <div className="heading">
                Order Medicines
              </div>

              {/* SEARCH */}

              <input
                type="text"
                placeholder="Search medicines..."
                className="search-bar"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {/* CARDS */}

              <div className="medicine-grid">

                {filteredMedicines.map(
                  (medicine, index) => (

                    <div
                      className="medicine-card"
                      key={index}
                    >

                      <img
                        src={medicine.image}
                        alt={medicine.name}
                      />

                      <h3>
                        {medicine.name}
                      </h3>

                      <p>
                        {medicine.pharmacy}
                      </p>

                      <p>
                        Rs
                        {" "}
                        {medicine.price}
                      </p>

                      <p>
                        {medicine.city}
                      </p>

                      <p>
                        {medicine.contact}
                      </p>

                      <button
                        className="add-btn"
                        onClick={() =>
                          addToCart(medicine)
                        }
                      >
                        Add to Cart
                      </button>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* CART */}

            <div className="cart-section">

              <div className="cart-title">
                Your Cart
              </div>

              {cart.map((item, index) => (

                <div
                  className="cart-item"
                  key={index}
                >

                  <h4>
                    {item.name}
                  </h4>

                  <div className="qty-row">

                    <button
                      className="qty-btn"
                      onClick={() =>
                        decreaseQty(item.name)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      className="qty-btn"
                      onClick={() =>
                        increaseQty(item.name)
                      }
                    >
                      +
                    </button>

                  </div>

                  <p>
                    Rs
                    {" "}
                    {item.price * item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.name)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

              <div className="total">

                Total:
                {" "}
                Rs
                {" "}
                {total}

              </div>

              <button
                className="confirm-btn"
                onClick={() =>
                  setShowOrderPage(true)
                }
              >
                Confirm Order
              </button>

            </div>

          </div>

        )}

      </div>
    </>
  );
};

export default PatientOrderMedicine;