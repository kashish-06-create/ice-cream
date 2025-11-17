import './AlmondFudge.css';

export default function AlmondFudge() {
  return (
    <div className="almondfudge-container">
      <h1>🌰🍫 Almond Fudge Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-PKdbHzlU0G3-UUIuSkUjNKnx61ZqAB69A&s"
        alt="Almond Fudge Ice Cream"
        className="almondfudge-image"
      />

      <section className="almondfudge-description">
        <h2>🍨 Rich & Nutty Indulgence</h2>
        <p>
          Almond Fudge ice cream is a luscious blend of creamy vanilla or chocolate base swirled with rich chocolate fudge and crunchy roasted almonds. It’s a perfect harmony of nutty and chocolatey goodness.
        </p>
      </section>

      <section className="almondfudge-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Fudge was originally a happy accident in candy making — now it's a dreamy swirl in many ice cream flavors, especially when paired with roasted almonds!
        </p>
      </section>

      <section className="almondfudge-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Hot fudge sauce</li>
          <li>🥮 Brownies</li>
          <li>🍪 Biscotti</li>
          <li>☕ Coffee or mocha drinks</li>
          <li>🍒 Cherries</li>
        </ul>
      </section>

      <footer className="almondfudge-footer">
        <p>🤎 A scoop of almond fudge brings cozy comfort and crunchy joy!</p>
      </footer>
    </div>
  );
}
