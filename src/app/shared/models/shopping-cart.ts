import { Product } from './products';
import { shopingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: shopingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: shopingCartItem }) {
      this.itemsMap = itemsMap || {};

      for(let productId in itemsMap){
        let item = itemsMap[productId];

        this.items.push( new shopingCartItem({
          ...item, // => this is spread operator
          $key: productId
        }));
      }
    }

    getQuantity(product: Product) {
      console.log("product", product);
      let item = this.itemsMap[product.$key];
      return item ? item.quantity : 0;
    }

    get totalPrice(){
      let sum = 0;
      for(let productId in this.items)
         sum += this.items[productId].totalPrice;
      return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for(let productId in this.itemsMap)
          count += this.itemsMap[productId].quantity;
        return count;
    }
}
