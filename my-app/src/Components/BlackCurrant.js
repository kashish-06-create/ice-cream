import './BlackCurrant.css';

export default function BlackCurrant() {
  return (
    <div className="currant-container">
      <h1>🍇 Black Currant Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjYcbNJgjGJLS32mFfSv49R3H1x0pSPkS_A&s"
        alt="Black Currant Ice Cream"
        className="currant-image"
      />

      <section className="currant-description">
        <h2>🍨 Bold, Tart & Delicious</h2>
        <p>
          Black Currant ice cream blends rich, creamy textures with the bold, slightly tart flavor of real black currants. It's a berry-packed experience for sophisticated palates.
        </p>
      </section>

      <section className="currant-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Black currants were once banned in the U.S. due to concerns about tree disease — but now they’re back and bringing bold flavor to desserts like ice cream!
        </p>
      </section>

      <section className="currant-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Dark chocolate chunks</li>
          <li>🍰 Cheesecake</li>
          <li>🍒 Cherries</li>
          <li>☕ Black tea or espresso</li>
          <li>🍪 Almond biscuits</li>
        </ul>
      </section>

      <footer className="currant-footer">
        <p>💜 Dive into a scoop of deep berry bliss with black currant!</p>
      </footer>
    </div>
  );
}
