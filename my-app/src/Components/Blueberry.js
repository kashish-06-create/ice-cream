import './Blueberry.css';

export default function Blueberry() {
  return (
    <div className="blueberry-container">
      <h1>🫐 Blueberry Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdp7z0Z1xYHj9V5cWZP4R-Q2e03FAhf9KoQ&s"
        alt="Blueberry Ice Cream"
        className="blueberry-image"
      />

      <section className="blueberry-description">
        <h2>🍨 Tangy & Sweet Temptation</h2>
        <p>
          Blueberry ice cream is a creamy delight swirled with real blueberries, delivering a perfect blend of tartness and sweetness in every bite. Its vibrant purple hue and berry-rich flavor make it a refreshing choice.
        </p>
      </section>

      <section className="blueberry-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Blueberries are one of the only naturally blue foods and are packed with antioxidants! A scoop of blueberry ice cream is both a treat and a tiny health boost. 🫐💪
        </p>
      </section>

      <section className="blueberry-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍋 Lemon zest</li>
          <li>🍰 Cheesecake</li>
          <li>🧇 Waffles</li>
          <li>🥧 Blueberry pie</li>
          <li>☕ Iced tea or black coffee</li>
        </ul>
      </section>

      <footer className="blueberry-footer">
        <p>💜 Scoop some blueberry and chill your mood instantly!</p>
      </footer>
    </div>
  );
}
