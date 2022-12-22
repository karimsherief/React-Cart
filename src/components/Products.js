/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addToCart } from "../rtk/slices/CartSlice";
import { fetchProducts } from "../rtk/slices/ProductSlice";

// Styles
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="row align-items-center p-3 row-gap-3 gy-4">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="card">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}$</p>
            </div>
            <div className="card-body">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart({ product, value: 1 }))}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
