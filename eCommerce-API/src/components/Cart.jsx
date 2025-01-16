/* eslint-disable react/prop-types */
import "./../styles/Cart.css";

export default function Cart({ cart, clearCart }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button type="button" className="btn btn-danger"  onClick={clearCart}>
          Vaciar Carrito
        </button>
      )}
    </div>
  );
}
