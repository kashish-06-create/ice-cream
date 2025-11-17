import './Lychee.css';

export default function Lychee() {
  return (
    <div className="lychee-container">
      <h1>🍈 Lychee Ice Cream</h1>

      <img
        src="https://i.pinimg.com/originals/55/e3/9f/55e39f6245d72a02a48e235bd2a6b4ce.jpg"
        alt="Lychee Ice Cream"
        className="lychee-image"
      />

      <section className="lychee-description">
        <h2>🍨 Light, Exotic & Floral</h2>
        <p>
          Lychee ice cream is a fragrant, juicy dessert that captures the sweet floral notes of fresh lychees. This tropical delight is smooth, refreshing, and utterly unique.
        </p>
      </section>

      <section className="lychee-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Lychees are native to southern China and were once considered a royal delicacy. Their juicy flesh makes them perfect for ice cream and sorbets!
        </p>
      </section>

      <section className="lychee-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🥭 Mango chunks</li>
          <li>🍍 Pineapple slices</li>
          <li>🥥 Coconut cream</li>
          <li>🍵 Green tea</li>
          <li>🍪 Light almond cookies</li>
        </ul>
      </section>

      <footer className="lychee-footer">
        <p>🌸 Chill with the floral burst of lychee love!</p>
      </footer>
    </div>
  );
}
