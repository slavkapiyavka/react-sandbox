import { useState } from "react";

const Basket = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const increaseItemCount = (id: number): void =>
    setCart((c) =>
      c.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );

  const deleteProduct = (id: number): void =>
    setCart((c) => c.filter((p) => p.id !== id));

  const resetBasket = (): void => setCart([]);

  return (
    <section className="card basket">
      <ul className="product-list">
        {cart.map((i) => (
          <li className="product" key={i.id}>
            <p className="card__text">
              {i.title} (pcs.{i.count})
            </p>
            <div className="buttons-group">
              <button onClick={() => increaseItemCount(i.id)} type="button">
                +1
              </button>
              <button onClick={() => deleteProduct(i.id)} type="button">
                delete
              </button>
            </div>
          </li>
        ))}
        {!cart.length && <p className="card__text">basket is empty</p>}
        <button onClick={resetBasket} type="button">
          reset basket
        </button>
      </ul>
    </section>
  );
};

export default Basket;
