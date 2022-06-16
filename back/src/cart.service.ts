import { Injectable, NotImplementedException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type Cart = {
  id: string;
  items: Item[];
};

export type Item = {
  id: string;
  name: string;
  salePrice: number;
  image: string;
};

@Injectable()
export class CartService {
  // Use this array as your database
  private carts: Cart[] = [];
  private counter: number = 0;

  create(): Cart {
    const cart = { id: this.counter.toString(), items: [] };
    this.carts.push(cart);
    this.counter++;
    console.log({ created: cart });
    return cart;
  }

  getCart(id: string): Cart {
    console.log({ carts: this.carts });
    return this.carts.find((c) => c.id.toString() === id);
  }

  putItem(id: string, item: Item): Cart {
    throw new NotImplementedException();
  }

  putItems(id: string, items: Item[]): Cart {
    const index = this.carts.findIndex((c) => c.id === id);
    console.log({ id, index, cart: this.carts[index], items });
    this.carts[index].items = items;

    return this.carts[index];
  }
}
