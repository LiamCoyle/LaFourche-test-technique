import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "contexts/CartContext";
import Layout from "layout/layout";

import { useEffect, useState } from "react";
import AppService from "services/app.service";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("cartId")) {
      AppService.createCart()
        .then((cart) => {
          localStorage.setItem("cartId", cart.id);
          setProducts(cart.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      AppService.getCart(parseInt(localStorage.getItem("cartId")!))
        .then((cart) => {
          setProducts(cart.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}

export default MyApp;
