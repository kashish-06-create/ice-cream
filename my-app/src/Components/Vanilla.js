import './Vanilla.css';

export default function Vanilla() {
  return (<>
    <Vanilla/>
    <div className="vanilla-container">
      <h1>🍨 Vanilla Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw-9zG6xFziblZYQGQJJiX17CgBWmbq3LqA&s"
        alt="Vanilla Ice Cream"
        className="vanilla-image"
      />

      <section className="vanilla-description">
        <h2>🌼 Smooth & Classic Flavor</h2>
        <p>
          Vanilla ice cream is the elegant and timeless favorite. Made from fresh cream and real vanilla beans,
          it's sweet, aromatic, and beautifully simple.
        </p>
      </section>

      <section className="vanilla-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Did you know? Vanilla is the second most expensive spice after saffron 🌱 because it's hand-pollinated and grown in tropical regions.
        </p>
      </section>

      <section className="vanilla-pairings">
        <h2>⭐ Perfect Pairings</h2>
        <ul>
          <li>🍰 Apple pie</li>
          <li>🍓 Berries and fruit salads</li>
          <li>☕ Espresso shots (Affogato!)</li>
          <li>🥧 Warm brownies</li>
          <li>🍯 Honey drizzle</li>
        </ul>
      </section>

      <footer className="vanilla-footer">
        <p>💛 A scoop of vanilla makes everything better!</p>
      </footer>
    </div>
</>  );
}
