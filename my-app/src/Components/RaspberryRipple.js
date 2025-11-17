import './RaspberryRipple.css';

export default function RaspberryRipple() {
  return (
    <div className="ripple-container">
      <h1>🍇 Raspberry Ripple Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7h0GmduNDzS4vQ1gUcxzfq8lxuPC2mOrKAw&s"
        alt="Raspberry Ripple Ice Cream"
        className="ripple-image"
      />

      <section className="ripple-description">
        <h2>🍨 Swirls of Sweet & Tangy</h2>
        <p>
          Raspberry Ripple ice cream features creamy vanilla swirled with rich raspberry sauce, creating a perfect balance of sweet and tart in every bite.
        </p>
      </section>

      <section className="ripple-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          The term “ripple” was first used in the 1930s to describe flavored swirls in ice cream. Raspberry Ripple remains a nostalgic classic in the UK and beyond!
        </p>
      </section>

      <section className="ripple-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍰 Lemon pound cake</li>
          <li>🍫 White chocolate shavings</li>
          <li>🍓 Mixed berries</li>
          <li>☕ Earl Grey tea</li>
          <li>🍪 Butter cookies</li>
        </ul>
      </section>

      <footer className="ripple-footer">
        <p>💜 Let the ripple of raspberry take you on a creamy adventure!</p>
      </footer>
    </div>
  );
}
