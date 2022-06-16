import { CartContext } from "contexts/CartContext";
import { useContext } from "react";
import AppService from "services/app.service";

function Card({ hit }) {
  const cartContext = useContext(CartContext);

  const isProductInCart = () => {
    return cartContext.products.find((p) =>
      p.id == hit.objectID ? hit.objectID : hit.id
    ) === undefined
      ? false
      : true;
  };

  const addToCart = () => {
    cartContext.products.push({
      id: hit.objectID,
      name: hit.name,
      salePrice: hit.salePrice,
      image: hit.image,
    });

    AppService.addToCart(
      parseInt(localStorage.getItem("cartId")!),
      cartContext.products
    ).then(
      (cart) => {
        cartContext.setProducts(Object.assign([], cartContext.products));
      },
      (err) => {
        console.log(err);
        cartContext.products.pop();
      }
    );
  };

  const removeFromCart = () => {
    let filteredProducts = cartContext.products.filter(
      (p) => p.id != (hit.objectID ? hit.objectID : hit.id)
    );
    AppService.addToCart(
      parseInt(localStorage.getItem("cartId")!),
      filteredProducts
    ).then(
      (cart) => {
        cartContext.setProducts(filteredProducts);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <article className="card">
      <header className="hit-image-container">
        <img src={hit.image} alt={hit.name} className="hit-image" />
      </header>
      <div className="card-body">
        <h3>{hit.name}</h3>

        <footer>
          <p>
            <span className="">$</span> <strong>{hit.salePrice}</strong>{" "}
          </p>
          {isProductInCart() ? (
            <button
              className="btn btn-primary"
              onClick={() => removeFromCart()}
            >
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => addToCart()}>
              Add to Cart
            </button>
          )}
        </footer>
      </div>
    </article>
  );
}

export default Card;
