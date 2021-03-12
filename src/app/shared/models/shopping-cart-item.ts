import { Product } from './products';

export class shopingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<shopingCartItem>){
        Object.assign(this, init);
    }

    get totalPrice(){
        return this.price * this.quantity;
    }
}