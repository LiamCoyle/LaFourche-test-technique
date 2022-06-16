import Card from "components/card";

import { CartContext } from "contexts/CartContext";
import { useContext } from "react";

function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <div className="row">
      {cartContext.products.length ? (
        cartContext.products.map((p) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={p.id}>
            <Card hit={p} />{" "}
          </div>
        ))
      ) : (
        <span>No Items in Cart</span>
      )}
    </div>
  );

  /*<span>test</span>*/
}
export default Cart;
