// Hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addToCart, clearCart, deleteFromCart } from "../rtk/slices/CartSlice";

// Components
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;

    return +acc.toFixed(2);
  }, 0);

  const handleChange = (product, value) => {
    dispatch(addToCart({ product, value: value }));
  };

  return (
    <>
      <h2>Total: {totalPrice}$</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>quantity</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>1</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td className="d-flex gap-3 flex-column flex-md-row">
                <button
                  className="btn btn-primary"
                  onClick={() => handleChange(product, 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleChange(product, -1)}
                  disabled={product.quantity === 1 ? true : ""}
                >
                  -
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteFromCart(product.id))}
                >
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
