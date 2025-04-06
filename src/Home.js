import React from "react";
import "./styles.css";

const bikes = [
  { name: "Honda Shine", price: "₹300/day", img: "/images/hondashine.jpg" },
  { name: "Royal Enfield", price: "₹500/day", img: "/images/royalenfield.jpg" },
  { name: "KTM Duke", price: "₹450/day", img: "/images/ktmduke.jpg" },
  { name: "Bajaj Pulsar", price: "₹350/day", img: "/images/pulsar.jpg" },
  { name: "Yamaha R15", price: "₹400/day", img: "/images/r15.jpg" }
];

const Home = () => {
  return (
    <div>
      <h1>Udhari Bike Rentals</h1>
      <div className="bike-container">
        {bikes.map((bike, index) => (
          <div key={index} className="bike-card">
            <img src={bike.img} alt={bike.name} />
            <h2>{bike.name}</h2>
            <p>{bike.price}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Udhari Bike</h2>
        <p>
          Udhari Bike Rentals provides affordable and convenient bike rentals for daily use. 
          Choose from a variety of bikes and enjoy a hassle-free ride experience!
        </p>
      </div>
    </div>
  );
};

export default Home;
