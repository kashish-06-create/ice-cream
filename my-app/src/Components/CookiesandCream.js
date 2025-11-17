import './CookiesandCream.css';

export default function CookiesCream() {
  return (
    <div className="cookies-container">
      <h1>🍪 Cookies and Cream Ice Cream</h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvKxFv-u5IOOAl1yn7e8CHeMUBb8-oxby1w&s"
        alt="Cookies and Cream Ice Cream"
        className="cookies-image"
      />

      <section className="cookies-description">
        <h2>🍨 Creamy & Crunchy Indulgence</h2>
        <p>
          Cookies and Cream is a beloved ice cream flavor made with crushed chocolate sandwich cookies blended into vanilla or sweet cream base. It’s a nostalgic favorite for all ages.
        </p>
      </section>

      <section className="cookies-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          This flavor originated in the 1970s and has consistently ranked among the top five most popular ice cream flavors in the U.S.!
        </p>
      </section>

      <section className="cookies-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍫 Fudge brownies</li>
          <li>🥛 Chocolate milk</li>
          <li>🍰 Cheesecake</li>
          <li>🍪 Extra sandwich cookies</li>
          <li>☕ Cold brew coffee</li>
        </ul>
      </section>

      <footer className="cookies-footer">
        <p>🖤 Crave the crunch, love the cream!</p>
      </footer>
    </div>
  );
}
