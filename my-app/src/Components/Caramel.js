import './Caramel.css';

export default function Caramel() {
  return (
    <div className="caramel-container">
      <h1>🍯 Caramel Swirl Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QyLUdLSAv2PR9qkFbXNjEcvEAApNHDfJ2A&s"
        alt="Caramel Swirl Ice Cream"
        className="caramel-image"
      />

      <section className="caramel-description">
        <h2>🍨 Smooth & Sweet Luxury</h2>
        <p>
          Caramel Swirl ice cream features velvety vanilla or cream base ice cream blended with golden ribbons of rich, buttery caramel. It’s the perfect combination of creamy and sweet indulgence.
        </p>
      </section>

      <section className="caramel-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Caramel was originally made by American settlers using sugar and water — and now it's one of the most beloved ice cream swirls across the globe!
        </p>
      </section>

      <section className="caramel-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍏 Baked apples</li>
          <li>🍪 Shortbread cookies</li>
          <li>🍫 Chocolate drizzle</li>
          <li>🥞 Pancakes or waffles</li>
          <li>☕ Salted caramel latte</li>
        </ul>
      </section>

      <footer className="caramel-footer">
        <p>🧡 Swirl into the sweetness with caramel dreams in every bite!</p>
      </footer>
    </div>
  );
}
