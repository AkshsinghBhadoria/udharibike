import React from "react";
import "./styles.css"; // Make sure styles.css is in src folder
import { useState } from "react";

const bikes = [
  {
    name: "Honda Shine",
    price: "₹500/day",
    image: " https://imgs.search.brave.com/aEiEcVcEjyHfk0VmShxHWGXZXGZbil5nZwNie8-2Zqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYXV0b3guY29t/L3VwbG9hZHMvMjAy/Mi8wOC9Ib25kYS1T/aGluZS1CbGFjay5q/cGc "
  },
  {
    name: "Royal Enfield",
    price: "₹1200/day",
    image: "https://imgs.search.brave.com/T8nnhxwno4rwTtrhG6I4cZsxwWsM1IoeNzu--WeSJAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjlj/ODBpMDlreHkyYS5j/bG91ZGZyb250Lm5l/dC9jdXN0b20vbW90/b3JjeWNsZS1tb2Rl/bC12YXJpYW50LXBo/b3RvL3N0YW5kYXJk/L3JveWFsLWVuZmll/bGQtY29udGluZW50/YWwtZ3QtNjUwLXN0/YW5kYXJkLTIwMTkt/cHJlc2VudC02NDky/YTYzNTk4MThjLmpw/ZWc",
  },
  {
    name: "Yamaha R15",
    price: "₹1100/day",
    image: "https://imgs.search.brave.com/b1pTmexe05X0t1qDh4Y_Sz9ygtiOXb7nG1h3JjMYVwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56aWdjZG4uY29t/L21lZGlhL21vZGVs/LzIwMjQvU2VwL3lh/bWFoYS1yMTUtdjQt/cmlnaHQtc2lkZS12/aWV3XzYwMHg0MDAu/anBn ",
  },
  {
    name: "KTM Duke 390",
    price: "₹900/day",
    image: " https://imgs.search.brave.com/TmNSY678vdjn0Lnw3jRBH24EL5tG1XTqckXplrouJ4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZHBj/ZG4uZHgxYXBwLmNv/bS9wcm9kdWN0cy9V/U0EvS1QvMjAyNC9N/Qy9TUE9SVC8zOTBf/RFVLRS81MC9PUkFO/R0UvMjAwMDAwMDAw/OS5qcGc ",

  },
];
function App() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleBookNow = (bike) => {
    setSelectedBike(bike);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div style={{ textAlign: "center" }}>
      <h1>Booking Confirmed</h1>
      <p>Thank you, {customerDetails.name}, for booking with Udhari Bike!</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <p>We will contact you at {customerDetails.email} or {customerDetails.phone}.</p>
        <p>Delivery Address: {customerDetails.address}</p>
      </div>
      <button
        onClick={() => {
        setFormSubmitted(false);
        setSelectedBike(null);
        }}
        style={{
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px",
        }}
      >
        Go Back
      </button>
      </div>
    );
  }

  if (selectedBike) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Booking Form</h1>
        <div style={{ margin: "20px" }}>
          <h2>{selectedBike.name}</h2>
          <img
            src={selectedBike.image}
            alt={selectedBike.name}
            style={{ width: "300px", borderRadius: "8px" }}
          />
          <p>{selectedBike.price}</p>
          <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={customerDetails.name}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={customerDetails.email}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={customerDetails.phone}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={customerDetails.address}
                onChange={handleInputChange}
                required
                style={{
                  padding: "10px",
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm Booking
            </button>
          </form>
          <button
            onClick={() => setSelectedBike(null)}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Udhari Bike</h1>
      <div
        className="bike-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="bike-card"
            style={{
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              maxWidth: "200px",
            }}
          >
            <img
              src={bike.image}
              alt={bike.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h2>{bike.name}</h2>
            <p>{bike.price}</p>
            <button
              className="book-button"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleBookNow(bike)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* YouTube Video Section */}
      <div className="video-section" style={{ marginTop: "40px" }}>
        <h2>Watch Our Promo Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hVrvggR6wIo?si=3t_af3xM7h3N2adz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* About Section (Shifted to Last) */}
      <div className="about-section" style={{ marginTop: "40px" }}>
        <h2>About Udhari Bike</h2>
        <p>
          Welcome to Udhari Bike! 🚲 Rent your favorite bikes at affordable
          prices. Whether it’s a city ride or a road trip, we’ve got you
          covered!
        </p>
      </div>
    </div>
  );
}
export default App;
