import './TenderCoconut.css';

export default function TenderCoconut() {
  return (
    <div className="coconut-container">
      <h1>🥥 Tender Coconut Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rQqNcUn9fUKlf7Xqk4YyD2mYQJQQJWf5Aw&s"
        alt="Tender Coconut Ice Cream"
        className="coconut-image"
      />

      <section className="coconut-description">
        <h2>🍨 Creamy & Tropical Delight</h2>
        <p>
          Tender coconut ice cream captures the light, refreshing essence of young coconut. Its subtle sweetness and tropical notes make it a soothing dessert on hot days.
        </p>
      </section>

      <section className="coconut-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Tender coconut water and pulp are packed with electrolytes, making this ice cream not only tasty but hydrating too — a rare combo!
        </p>
      </section>

      <section className="coconut-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍍 Pineapple chunks</li>
          <li>🥭 Mango sauce</li>
          <li>🍫 White chocolate drizzle</li>
          <li>🌴 Palm sugar syrup</li>
          <li>☕ Iced coffee</li>
        </ul>
      </section>

      <footer className="coconut-footer">
        <p>🌊 Taste the tropics with every creamy scoop of tender coconut!</p>
      </footer>
    </div>
  );
}
