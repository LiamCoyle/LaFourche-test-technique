import { createContext } from "react";

/*interface ICartContext {
  products: Array<any>;
  setCart: Function;
}

const initCartContext: ICartContext = {
  products: [],
  setCart: (cart) => cart,
};
export const CartContext = createContext<ICartContext>(initCartContext);*/

interface ICartContext {
  products: Array<any>;
  setProducts: Function;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  setProducts: () => {},
});
