import './PanMasala.css';

export default function PanMasala() {
  return (
    <div className="panmasala-container">
      <h1>🌿 Pan Masala Ice Cream</h1>

      <img
        src="https://www.havmor.com/uploads/products/paan-ice-cream.jpg"
        alt="Pan Masala Ice Cream"
        className="panmasala-image"
      />

      <section className="panmasala-description">
        <h2>🍨 Bold & Aromatic</h2>
        <p>
          Pan Masala ice cream is a fusion flavor made using the essence of traditional Indian pan, blending betel leaves, fennel, cardamom, and rose. It's refreshing, cooling, and rich in flavor.
        </p>
      </section>

      <section className="panmasala-funfact">
        <h2>💡 Fun Fact</h2>
        <p>
          Pan-based desserts are very popular after meals in India — and this ice cream version offers the same zing and freshness in frozen form!
        </p>
      </section>

      <section className="panmasala-pairings">
        <h2>🍽️ Pairs Well With</h2>
        <ul>
          <li>🍛 Rich Indian curries</li>
          <li>🍮 Gulkand (rose jam)</li>
          <li>🥥 Coconut flakes</li>
          <li>🌸 Rose syrup</li>
          <li>🥭 Mango desserts</li>
        </ul>
      </section>

      <footer className="panmasala-footer">
        <p>🌿 Cool off with the royal flavor of Pan Masala!</p>
      </footer>
    </div>
  );
}
