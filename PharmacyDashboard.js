import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function PharmacyDashboard() {
  const [profile, setProfile] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ================= DUMMY DATA ================= */

  useEffect(() => {

  const savedProfile =
    JSON.parse(localStorage.getItem("pharmacyProfile"));

  if (savedProfile) {

    setProfile({
      name: savedProfile.fullName,
      pharmacy: savedProfile.location,
      photo: "https://i.pravatar.cc/150?img=12",
    });

  } else {

    setProfile({
      name: "Mahnoor Shahid",
      pharmacy: "Healthcare Pharmacy",
      photo: "https://i.pravatar.cc/150?img=12",
    });

  }

    setMedicines([
      {
        name: "Panadol",
        quantity: 20,
        price: 50,
        orders: 10,
      },
      {
        name: "Brufen",
        quantity: 15,
        price: 80,
        orders: 7,
      },
      {
        name: "Vitamin C",
        quantity: 30,
        price: 120,
        orders: 12,
      },
      {
        name: "Augmentin",
        quantity: 10,
        price: 200,
        orders: 5,
      },
    ]);

    setOrders([
      {
        _id: 1,
        customer: "Ali",
        total: 500,
        confirmed: true,
      },
      {
        _id: 2,
        customer: "Ahmed",
        total: 800,
        confirmed: false,
      },
      {
        _id: 3,
        customer: "Fatima",
        total: 1200,
        confirmed: true,
      },
    ]);
  }, []);

  /* ================= CALCULATIONS ================= */

  const totalMed = medicines.length;

  const totalQty = medicines.reduce(
    (s, m) => s + Number(m.quantity || 0),
    0
  );

  const totalValue = medicines.reduce(
    (s, m) =>
      s + Number(m.price || 0) * Number(m.quantity || 0),
    0
  );

  /* ================= OFFERS ================= */

  const offers = [
    {
      id: 1,
      title: "20% off on Vitamins",
      desc: "Selected vitamin brands this week",
    },
    {
      id: 2,
      title: "Buy 2 Get 1",
      desc: "On selected cough syrups",
    },
  ];

  /* ================= TRENDING MEDICINES ================= */

  const seasonalAlerts = [...medicines]
    .sort((a, b) => (b.orders || 0) - (a.orders || 0))
    .slice(0, 3);

  /* ================= LOGOUT ================= */

  const handleLogout = () => {
    window.location.href = "/";
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
          position:sticky;
          top:0;
          z-index:100;
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

        .dashboard-container{
          max-width:1400px;
          margin:auto;
          padding:30px;
        }

        .dashboard-header{
          background:#f2f8ff;
          border-radius:20px;
          padding:25px 30px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:25px;
        }

        .dashboard-header h2{
          color:#0f3d91;
          font-size:38px;
          font-weight:800;
        }

        .logout-btn{
          background:#2563eb;
          color:white;
          border:none;
          padding:12px 22px;
          border-radius:12px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .logout-btn:hover{
          background:#1d4ed8;
        }

        .layout{
          display:grid;
          grid-template-columns:330px 1fr;
          gap:25px;
        }

        aside{
          display:flex;
          flex-direction:column;
          gap:25px;
        }

        .profile-card,
        .card,
        .about-card{
          background:white;
          border-radius:20px;
          padding:25px;
          box-shadow:0 4px 15px rgba(0,0,0,0.05);
        }

        .profile-pic{
          width:110px;
          height:110px;
          border-radius:50%;
          object-fit:cover;
          display:block;
          margin:auto;
          border:4px solid #dbeafe;
        }

        .profile-info{
          text-align:center;
          margin-top:18px;
        }

        .profile-name{
          font-size:24px;
          font-weight:800;
          color:#1e3a8a;
        }

        .profile-sub{
          margin-top:6px;
          color:#6b7280;
          font-size:15px;
        }

        .profile-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
          margin-top:25px;
        }

        .stat{
          background:#eff6ff;
          padding:16px;
          border-radius:14px;
          text-align:center;
        }

        .muted{
          color:#6b7280;
          font-size:13px;
        }

        .stat h3{
          color:#1d4ed8;
          margin-top:5px;
          font-size:22px;
        }

        .main-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:25px;
        }

        .card h3,
        .about-card h3{
          color:#0f3d91;
          margin-bottom:18px;
          font-size:24px;
        }

        .overview-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:15px;
        }

        .orders-list ul,
        .alerts-card ul{
          padding-left:20px;
        }

        .orders-list li,
        .alerts-card li{
          margin-bottom:12px;
          color:#374151;
          line-height:1.6;
        }

        .tips-card p{
          color:#2563eb;
          line-height:1.9;
          font-size:16px;
        }

        .offers{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .offer-card{
          display:flex;
          align-items:center;
          gap:15px;
          background:#eaf3ff;
          padding:18px;
          border-radius:15px;
        }

        .offer-badge{
          width:50px;
          height:50px;
          border-radius:15px;
          background:#2563eb;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          font-weight:bold;
        }

        .offer-title{
          color:#1e3a8a;
          font-weight:700;
          margin-bottom:4px;
        }

        .offer-desc{
          color:#6b7280;
          font-size:14px;
        }

        .about-us-section{
          margin-top:35px;
          text-align:center;
        }

        .about-us-section p{
          max-width:800px;
          margin:20px auto;
          line-height:1.9;
          color:#374151;
          font-size:16px;
        }

        .team-members{
          display:flex;
          flex-direction:column;
          gap:12px;
          margin-top:25px;
        }

        .team-members a{
          color:#2563eb;
          text-decoration:none;
          font-weight:600;
        }

        .team-members a:hover{
          text-decoration:underline;
        }

        @media(max-width:1100px){

          .layout{
            grid-template-columns:1fr;
          }

          .main-grid{
            grid-template-columns:1fr;
          }

        }

        @media(max-width:700px){

          .navbar{
            flex-direction:column;
            gap:15px;
            padding:20px;
          }

          .nav-links{
            justify-content:center;
          }

          .dashboard-header{
            flex-direction:column;
            gap:20px;
            text-align:center;
          }

          .dashboard-header h2{
            font-size:28px;
          }

          .overview-stats{
            grid-template-columns:1fr;
          }

          .profile-stats{
            grid-template-columns:1fr;
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
      {/* ================= MAIN CONTAINER ================= */}

      <div className="dashboard-container">

        {/* ================= HEADER ================= */}

        <div className="dashboard-header">

          <h2>
            Healthcare Hub — Pharmacy Dashboard
          </h2>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

        {/* ================= MAIN LAYOUT ================= */}

        <div className="layout">

          {/* ================= SIDEBAR ================= */}

          <aside>

            {/* PROFILE CARD */}

            <div className="profile-card">

              <img
                src={profile?.photo}
                alt="profile"
                className="profile-pic"
              />

              <div className="profile-info">

                <div className="profile-name">
                  {profile?.name}
                </div>

                <div className="profile-sub">
                  {profile?.pharmacy}
                </div>

              </div>

              <div className="profile-stats">

                <div className="stat">
                  <small className="muted">
                    Medicines
                  </small>

                  <h3>{totalMed}</h3>
                </div>

                <div className="stat">
                  <small className="muted">
                    Quantity
                  </small>

                  <h3>{totalQty}</h3>
                </div>

                <div className="stat">
                  <small className="muted">
                    Stock Value
                  </small>

                  <h3>Rs {totalValue}</h3>
                </div>

              </div>

            </div>

            {/* OFFERS */}

            <div className="card">

              <h3>Special Offers</h3>

              <div className="offers">

                {offers.map((o) => (

                  <div
                    className="offer-card"
                    key={o.id}
                  >

                    <div className="offer-badge">
                      %
                    </div>

                    <div>

                      <div className="offer-title">
                        {o.title}
                      </div>

                      <div className="offer-desc">
                        {o.desc}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </aside>

          {/* ================= MAIN SECTION ================= */}

          <section>

            <div className="main-grid">

              {/* OVERVIEW */}

              <div className="card">

                <h3>Overview</h3>

                <div className="overview-stats">

                  <div className="stat">
                    <small className="muted">
                      Total Medicines
                    </small>

                    <h3>{totalMed}</h3>
                  </div>

                  <div className="stat">
                    <small className="muted">
                      Total Quantity
                    </small>

                    <h3>{totalQty}</h3>
                  </div>

                  <div className="stat">
                    <small className="muted">
                      Stock Value
                    </small>

                    <h3>Rs {totalValue}</h3>
                  </div>

                </div>

              </div>

              {/* RECENT ORDERS */}

              <div className="card">

                <h3>Recent Orders</h3>

                <div className="orders-list">

                  {orders.length === 0 ? (

                    <div className="muted">
                      No recent orders
                    </div>

                  ) : (

                    <ul>

                      {orders
                        .slice()
                        .reverse()
                        .map((o) => (

                          <li key={o._id}>

                            <strong>
                              {o.customer}
                            </strong>

                            {" "}— Rs {o.total} —{" "}

                            {o.confirmed
                              ? "Confirmed"
                              : "Pending"}

                          </li>

                        ))}

                    </ul>

                  )}

                </div>

              </div>

              {/* SEASONAL ALERTS */}

              <div className="card alerts-card">

                <h3>Seasonal Alerts</h3>

                {seasonalAlerts.length === 0 ? (

                  <p className="muted">
                    No trending medicines currently.
                  </p>

                ) : (

                  <ul>

                    {seasonalAlerts.map((m, i) => (

                      <li
                        key={i}
                        style={{
                          color:"#b91c1c",
                          fontWeight:"600"
                        }}
                      >

                        {m.name}
                        {" "}— Ordered {m.orders} times

                      </li>

                    ))}

                  </ul>

                )}

              </div>

              {/* TIPS */}

              <div className="card tips-card">

                <h3>Pharmacist Tips</h3>

                <p>

                  Keep your inventory updated,
                  monitor expiry dates,
                  and provide excellent customer service.

                  Tracking your stock and popular medicines
                  helps optimize sales and improve patient satisfaction.

                </p>

              </div>

            </div>

          </section>

        </div>

        {/* ================= ABOUT US ================= */}

        <div className="about-card about-us-section">

          <h3>About Us</h3>

          <p>

            Healthcare Hub is developed by our dedicated
            team to provide pharmacists with a modern
            interface to manage inventory,
            monitor orders,
            and serve customers efficiently.

          </p>

          <div className="team-members">

            <span>
              Mahnoor Shahid —{" "}

              <a href="mailto:mahnoorashahid20004@gmail.com">
                mahnoorashahid20004@gmail.com
              </a>

            </span>

            <span>
              Muhammad Abbas Khan —{" "}

              <a href="mailto:mabbbas2003@gmail.com">
                mabbbas2003@gmail.com
              </a>

            </span>

            <span>
              Noori Rehman —{" "}

              <a href="mailto:noorirehman2004@gmail.com">
                noorirehman2004@gmail.com
              </a>

            </span>

          </div>

        </div>

      </div>

    </>
  );
}