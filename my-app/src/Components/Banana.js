import './Banana.css';

export default function Banana() {
  return (
    <div className="banana-container">
      <h1>🍌 Banana Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9I6lICSk2A62Az3sLT6GvUub3eP8EJAXEA&s"
        alt="Banana Ice Cream"
        className="banana-image"
      />

      <section className="banana-description">
        <h2>🍨 Creamy & Naturally Sweet</h2>
        <p>
          Banana ice cream brings the tropical flavor of ripe bananas into a rich and creamy frozen dessert. It’s smooth, sweet, and naturally delicious — no artificial flavoring needed!
        </p>
      </section>

      <section className="banana-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Banana ice cream can be made with just one ingredient — frozen bananas blended until creamy. It’s a popular vegan alternative!
        </p>
      </section>

      <section className="banana-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Chocolate chips</li>
          <li>🥜 Peanut butter</li>
          <li>🍯 Honey drizzle</li>
          <li>🍪 Graham crackers</li>
          <li>☕ Coffee syrup</li>
        </ul>
      </section>

      <footer className="banana-footer">
        <p>🍌 Go bananas for this smooth and healthy treat!</p>
      </footer>
    </div>
  );
}
