const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((name, i) => (
          <li key={i}>{name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart