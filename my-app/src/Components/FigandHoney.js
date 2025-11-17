import './FigandHoney.css';

export default function FigHoney() {
  return (
    <div className="fighoney-container">
      <h1>🍯 Fig & Honey Ice Cream</h1>

      <img
        src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/fig-ice-cream.jpg"
        alt="Fig and Honey Ice Cream"
        className="fighoney-image"
      />

      <section className="fighoney-description">
        <h2>🍨 Rich, Nutty & Naturally Sweet</h2>
        <p>
          Fig and Honey ice cream blends the earthy sweetness of dried figs with the golden richness of pure honey. It’s a decadent dessert that feels both wholesome and luxurious.
        </p>
      </section>

      <section className="fighoney-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Figs have been cultivated for thousands of years and were once considered sacred in ancient Greece — now they’re divine in dessert form too!
        </p>
      </section>

      <section className="fighoney-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🧀 Cream cheese</li>
          <li>🍯 Drizzle of extra honey</li>
          <li>🥜 Walnuts or pistachios</li>
          <li>🍪 Almond biscotti</li>
          <li>🍇 Dried fruits</li>
        </ul>
      </section>

      <footer className="fighoney-footer">
        <p>🌿 Savor the timeless taste of fig & honey bliss!</p>
      </footer>
    </div>
  );
}
