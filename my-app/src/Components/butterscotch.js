import './Butterscotch.css';

export default function Butterscotch() {
  return (
    <div className="butterscotch-container">
      <h1>🍯 Butterscotch Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-INC8Uxem8uE4TAKRkFweuiW_FEwCUnLqaA&s"
        alt="Butterscotch Ice Cream"
        className="butterscotch-image"
      />

      <section className="butterscotch-description">
        <h2>🍬 Sweet & Crunchy Bliss</h2>
        <p>
          Butterscotch ice cream blends rich caramelized brown sugar, butter, and cream into a sweet delight. Often topped with crunchy praline or nuts, it’s a delicious mix of creamy and crispy textures!
        </p>
      </section>

      <section className="butterscotch-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          The word “butterscotch” comes from “scotch,” meaning “to cut,” as it was traditionally cut into pieces. Today, it’s a top choice for Indian ice cream lovers! 🇮🇳
        </p>
      </section>

      <section className="butterscotch-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍪 Caramel cookies</li>
          <li>🧁 Cupcakes</li>
          <li>🍫 Chocolate drizzle</li>
          <li>🥜 Roasted nuts</li>
          <li>☕ Coffee</li>
        </ul>
      </section>

      <footer className="butterscotch-footer">
        <p>✨ A golden scoop of nostalgic sweetness!</p>
      </footer>
    </div>
  );
}
