import './Coffee.css';

export default function Coffee() {
  return (
    <div className="coffee-container">
      <h1>☕ Coffee Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yUzkN2S2Guo3E_WG9RZ3W3J8kIrmK-pWJw&s"
        alt="Coffee Ice Cream"
        className="coffee-image"
      />

      <section className="coffee-description">
        <h2>🍨 Bold & Creamy Buzz</h2>
        <p>
          Coffee ice cream blends the richness of cream with the bold flavor of roasted coffee beans. It's the perfect treat for coffee lovers who crave a chill twist on their daily brew.
        </p>
      </section>

      <section className="coffee-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          The first coffee-flavored ice cream dates back to the 18th century in Italy — and it’s still a favorite today, especially for affogato (ice cream with espresso poured on top)! 🇮🇹
        </p>
      </section>

      <section className="coffee-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Dark chocolate chips</li>
          <li>🍪 Biscotti</li>
          <li>🍯 Caramel drizzle</li>
          <li>🥐 Croissants</li>
          <li>☕ Extra shot of espresso</li>
        </ul>
      </section>

      <footer className="coffee-footer">
        <p>⚡ Get energized and chill at the same time with coffee ice cream!</p>
      </footer>
    </div>
  );
}
