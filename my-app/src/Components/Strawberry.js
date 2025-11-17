import './Strawberry.css';

export default function Strawberry() {
  return (
    <div className="strawberry-container">
      <h1>🍓 Strawberry Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzqho0CVEvflBK-6ems-YbOOXQUzWCvXDZA&s"
        alt="Strawberry Ice Cream"
        className="strawberry-image"
      />

      <section className="strawberry-description">
        <h2>🍨 Sweet & Fruity Delight</h2>
        <p>
          Strawberry ice cream is a refreshing and fruity dessert made from real strawberries and rich cream. Its natural pink color and sweet berry flavor make it a summer favorite.
        </p>
      </section>

      <section className="strawberry-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Did you know? Strawberry was one of the original three ice cream flavors in the U.S., along with vanilla and chocolate — the Neapolitan trio! 🇺🇸
        </p>
      </section>

      <section className="strawberry-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍰 Cheesecake</li>
          <li>🍫 Chocolate sauce</li>
          <li>🍪 Wafers or cones</li>
          <li>🍓 Fresh berries</li>
          <li>☕ Vanilla latte</li>
        </ul>
      </section>

      <footer className="strawberry-footer">
        <p>💖 Scoop some strawberry and taste happiness!</p>
      </footer>
    </div>
  );
}
