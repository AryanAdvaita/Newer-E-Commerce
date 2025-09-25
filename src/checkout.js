const total = cart.reduce((sum, item) => sum + item.price, 0);
<button onClick={() => dispatch(clearCart())}>Place Order</button>
