import './Peach.css';

export default function Peach() {
  return (
    <div className="peach-container">
      <h1>🍑 Peach Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hkncK_scfRrVuCVVtsBq1uXscJooVEh34A&s"
        alt="Peach Ice Cream"
        className="peach-image"
      />

      <section className="peach-description">
        <h2>🍨 Creamy & Fruity Escape</h2>
        <p>
          Peach ice cream is a soft, delicate, and juicy delight that captures the natural sweetness of sun-ripened peaches blended with creamy dairy. A perfect refreshing treat for warm days!
        </p>
      </section>

      <section className="peach-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Georgia, USA is known as the “Peach State,” and peach ice cream is a summer staple there during harvest season!
        </p>
      </section>

      <section className="peach-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🥧 Peach cobbler</li>
          <li>🍯 Honey drizzle</li>
          <li>🥐 Flaky pastries</li>
          <li>🍓 Mixed berries</li>
          <li>🍋 Lemon sorbet</li>
        </ul>
      </section>

      <footer className="peach-footer">
        <p>🍑 Dive into a scoop of sunshine with peachy goodness!</p>
      </footer>
    </div>
  );
}
