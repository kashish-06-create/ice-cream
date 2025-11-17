import './Kulfi.css';

export default function Kulfi() {
  return (
    <div className="kulfi-container">
      <h1>🥥 Kulfi Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4dSRKgL0IDBG7Rsfu3dpd6kGy5O--iW_Qg&s"
        alt="Kulfi Ice Cream"
        className="kulfi-image"
      />

      <section className="kulfi-description">
        <h2>🥛 Traditional Indian Delight</h2>
        <p>
          Kulfi is a dense, creamy frozen dessert made by slowly simmering sweetened milk and flavoring it with saffron, cardamom, or pistachios. It’s known as the Indian version of ice cream, loved for its rich texture and authentic taste.
        </p>
      </section>

      <section className="kulfi-funfact">
        <h2>📜 Fun Fact</h2>
        <p>
          Kulfi originated during the Mughal era in the 16th century. It was traditionally set in clay pots, chilled on ice, and served on sticks — a true royal treat! 👑
        </p>
      </section>

      <section className="kulfi-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍮 Falooda noodles</li>
          <li>🌸 Rose syrup</li>
          <li>🍧 Rabri</li>
          <li>🌰 Chopped pistachios</li>
          <li>☕ Masala chai</li>
        </ul>
      </section>

      <footer className="kulfi-footer">
        <p>✨ A royal treat from India’s heritage in every bite!</p>
      </footer>
    </div>
  );
}
