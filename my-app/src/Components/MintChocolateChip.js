import './MintChocolateChip';

export default function Mint() {
  return (
    <div className="mint-container">
      <h1>🌿 Mint Chocolate Chip Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmbBh_-8mlXrgxH1i9zrbRm3YHkpbiA4I1g&s"
        alt="Mint Chocolate Chip Ice Cream"
        className="mint-image"
      />

      <section className="mint-description">
        <h2>🍨 Cool & Refreshing Treat</h2>
        <p>
          Mint Chocolate Chip ice cream features a creamy mint-flavored base with rich, crunchy chocolate chips. It’s a refreshing and invigorating blend that wakes up your taste buds!
        </p>
      </section>

      <section className="mint-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          This flavor was first created in the 1970s and quickly became one of the top 10 favorite ice cream flavors in the U.S.!
        </p>
      </section>

      <section className="mint-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Dark chocolate syrup</li>
          <li>☕ Mocha drinks</li>
          <li>🍪 Mint cookies</li>
          <li>🍰 Chocolate cake</li>
          <li>🍃 Fresh mint leaves</li>
        </ul>
      </section>

      <footer className="mint-footer">
        <p>💚 Fresh, cool, and chocolaty — mint your moments with joy!</p>
      </footer>
    </div>
  );
}
