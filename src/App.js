import React from "react";
import "./styles.css"; // Make sure styles.css is in src folder

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
  return (
    <div>
      <h1>Udhari Bike</h1>
      <div className="bike-container">
        {bikes.map((bike, index) => (
          <div key={index} className="bike-card">
            <img src={bike.image} alt={bike.name} />
            <h2>{bike.name}</h2>
            <p>{bike.price}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>

      {/* YouTube Video Section */}
      <div className="video-section">
        <h2>Watch Our Promo Video</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hVrvggR6wIo?si=3t_af3xM7h3N2adz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>

      {/* About Section (Shifted to Last) */}
      <div className="about-section">
        <h2>About Udhari Bike</h2>
        <p>
          Welcome to Udhari Bike! 🚲 Rent your favorite bikes at affordable prices.
          Whether it’s a city ride or a road trip, we’ve got you covered!
        </p>
      </div>
    </div>
  );
}
export default App;
