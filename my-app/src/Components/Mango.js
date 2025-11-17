import './Mango.css';

export default function Mango() {
  return (
    <div className="mango-container">
      <h1>🥭 Mango Ice Cream</h1>

      <img
        src="https://hungryinthailand.com/wp-content/uploads/2025/02/asian-mango-ice-cream.webp"
        alt="Mango Ice Cream"
        className="mango-image"
      />

      <section className="mango-description">
        <h2>🌞 Tropical Sunshine in a Scoop</h2>
        <p>
          Mango ice cream is a luscious tropical treat made from ripe, juicy mangoes and rich cream. It’s sweet, fruity, and melts in your mouth with every bite.
        </p>
      </section>

      <section className="mango-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Mango is the national fruit of India and one of the most loved summer flavors across Asia. No wonder mango ice cream is so iconic! 🇮🇳
        </p>
      </section>

      <section className="mango-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🥭 Fresh mango slices</li>
          <li>🍚 Sticky rice</li>
          <li>🍦 Vanilla or coconut ice cream</li>
          <li>🧇 Waffles</li>
          <li>🍹 Mango lassi</li>
        </ul>
      </section>

      <footer className="mango-footer">
        <p>☀️ Dive into the tropical sweetness of mango magic!</p>
      </footer>
    </div>
  );
}
