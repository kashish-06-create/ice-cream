import { Link } from "react-router-dom"; 
import './flavors.css';
import flawer from './card.json'; 
export default function Flavors(props) {
    // or however you import your data

function addtocart(id) {
  alert(`Item with ID ${id} added to cart`);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // ✅ Correctly use flawer.flavorData to find the item
  const item = flawer.flavorData.find((flavor) => flavor.id === id);

  if (item) {
    const price = item.price;

    // ✅ Update total price in localStorage
    const prevTotal = parseInt(localStorage.getItem("totalprice")) || 0;
    const newTotal = prevTotal + price;
    localStorage.setItem("totalprice", JSON.stringify(newTotal));

    // ✅ Add item to cart and save
    const updatedCart = [...storedCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    console.error(`Item with ID ${id} not found`);
  }
}
  return (
<div className="card-wrapper">
      {flawer.flavorData.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <Link className="card-link" to={item.link}>
              {item.name}
            </Link>
            <p>price {item.price}</p>
            <button onClick={() => addtocart(item.id)}>Add to Cart</button>          
          </div>
        </div>
      ))}
    </div>
  );
}
