import './card.css';

export default function Cart() {
const cart = JSON.parse(localStorage.getItem("cart")) || []; 
console.log(cart);
const totalPrice = JSON.parse(localStorage.getItem("totalprice")) || 0;
  return (
    <div className="card-wrapper">
      <h1>Cart</h1>
      <h2>Total Price: {totalPrice}</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="card-item" key={index}>
              <h3>{item.name}</h3>
              <img src={item.image} style={{ width: "100px", height: "100px" }} alt={item.name} />
              <p>Price: {item.price}</p>
            </div>

          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      </div>
  );
}
