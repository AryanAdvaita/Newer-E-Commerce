
function ProductCard({ product, addToCart }) {
    const dispatch = useDispatch();
    dispatch(addToCart(product));
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
