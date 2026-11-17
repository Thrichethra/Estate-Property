import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav, properties } from "./Data.jsx";

const Header = ({ savedIds = [], toggleSave }) => {
  const [navList, setNavList] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!userEmail.trim()) return;
    setLoggedInUser(userEmail.split("@")[0]);
    setShowLogin(false);
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <h2>RentUP</h2>
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} onClick={() => setNavList(false)}>
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => setShowWishlist(true)}
            >
              <span>{savedIds.length}</span> My List
            </h4>
            {loggedInUser ? (
              <button
                className="btn1"
                onClick={() => setLoggedInUser("")}
                title="Click to Sign Out"
              >
                <i className="fa fa-user"></i> Hi, {loggedInUser}
              </button>
            ) : (
              <button className="btn1" onClick={() => setShowLogin(true)}>
                <i className="fa fa-sign-in"></i> Sign In
              </button>
            )}
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Wishlist Modal Drawer */}
      {showWishlist && (
        <div className="modal-backdrop" onClick={() => setShowWishlist(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="flex" style={{ marginBottom: "20px" }}>
              <h3>My Saved Properties ({savedProperties.length})</h3>
              <button className="btn4" onClick={() => setShowWishlist(false)}>
                ✕
              </button>
            </div>

            {savedProperties.length === 0 ? (
              <p>
                No saved properties yet. Click "Add to List" or the heart icon on
                any property!
              </p>
            ) : (
              <>
                {savedProperties.map((prop) => (
                  <div key={prop.id} className="wishlist-item flex">
                    <div>
                      <strong>{prop.type}</strong> — {prop.location}
                      <div style={{ color: "#27ae60", fontWeight: 600 }}>
                        ${prop.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex" style={{ gap: "10px" }}>
                      <Link
                        to={`/property/${prop.id}`}
                        className="details-link"
                        style={{ margin: 0 }}
                        onClick={() => setShowWishlist(false)}
                      >
                        View
                      </Link>
                      <button
                        className="btn3"
                        onClick={() => toggleSave(prop.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className="flex"
                  style={{
                    marginTop: "20px",
                    paddingTop: "15px",
                    borderTop: "2px solid #edf0f5",
                  }}
                >
                  <div>
                    <span style={{ color: "#72809d", fontSize: "14px" }}>
                      Total Estimated Value
                    </span>
                    <h3 style={{ color: "#27ae60" }}>
                      $
                      {savedProperties
                        .reduce((sum, item) => sum + Number(item.price || 0), 0)
                        .toLocaleString()}
                    </h3>
                  </div>
                  <Link to="/contact" onClick={() => setShowWishlist(false)}>
                    <button>Inquire About List</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showLogin && (
        <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="flex" style={{ marginBottom: "15px" }}>
              <h3>Sign In to RentUP</h3>
              <button className="btn4" onClick={() => setShowLogin(false)}>
                ✕
              </button>
            </div>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  padding: "12px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                style={{
                  width: "100%",
                  border: "1px solid #ddd",
                  padding: "12px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                }}
              />
              <button type="submit" style={{ width: "100%" }}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;