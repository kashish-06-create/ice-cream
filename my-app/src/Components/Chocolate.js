import './chocolate.css';

export default function Chocolate() {
  return (
    <div className="chocolate-container">
      <h1>🍫 Chocolate Ice Cream</h1>

      <img
        src="https://assets.epicurious.com/photos/5935b2c4f692c10ac01affe6/1:1/w_775%2Cc_limit/Weekend-Warrior-Tin-Roof-Ice-Cream-002.jpg"
        alt="Delicious Chocolate Ice Cream"
        className="chocolate-image"
      />

      <section className="chocolate-description">
        <h2>🍦 Rich & Creamy Delight</h2>
        <p>
          Chocolate ice cream is a timeless classic loved all over the world. Made from high-quality cocoa,
          fresh cream, and a touch of sweetness, it’s smooth, indulgent, and comforting.
        </p>
      </section>

      <section className="chocolate-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          The first known recipe for chocolate ice cream appeared in Naples, Italy in 1692! 🇮🇹 It has since
          evolved into one of the most popular dessert flavors globally.
        </p>
      </section>

      <section className="chocolate-pairings">
        <h2>⭐ Perfect Pairings</h2>
        <ul>
          <li>🍓 Fresh strawberries</li>
          <li>🍪 Chocolate chip cookies</li>
          <li>🧇 Warm waffles</li>
          <li>🍫 Hot fudge or chocolate syrup</li>
          <li>🌰 Crushed nuts</li>
        </ul>
      </section>

      <footer className="chocolate-footer">
        <p>🍨 Enjoy every bite of this delicious chocolate treat!</p>
      </footer>
    </div>
  );
}
