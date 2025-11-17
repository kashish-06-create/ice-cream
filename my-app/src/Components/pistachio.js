import './pistachio.css';

export default function Pistachio() {
  return (
    <div className="pistachio-container">
      <h1>🌰 Pistachio Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b2g3k4Z5J6a8c7Y1j2Xr3f4s8x5v7y9z6A&s"
        alt="Pistachio Ice Cream"
        className="pistachio-image"
      />

      <section className="pistachio-description">
        <h2>🍨 Nutty & Creamy Bliss</h2>
        <p>
          Pistachio ice cream is a smooth, nutty delight made with roasted pistachios and creamy milk. Its unique green hue and rich taste make it an exotic treat for nut lovers.
        </p>
      </section>

      <section className="pistachio-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Pistachios were once considered a royal delicacy in the Middle East! Today, they add a luxurious twist to ice cream everywhere. 👑
        </p>
      </section>

      <section className="pistachio-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Dark chocolate chunks</li>
          <li>🍪 Almond cookies</li>
          <li>🍰 Baklava</li>
          <li>🥜 Mixed nuts</li>
          <li>☕ Espresso</li>
        </ul>
      </section>

      <footer className="pistachio-footer">
        <p>💚 Scoop into pistachio and taste the nutty magic!</p>
      </footer>
    </div>
  );
}
