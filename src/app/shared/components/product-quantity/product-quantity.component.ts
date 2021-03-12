import { Product } from 'shared/models/products';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCardService } from 'shared/services/shopping-card.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product: Product;
  @Input('shoping-cart') shoppingCart;

  constructor(private shoppingcardservice: ShoppingCardService) { }

  addToCard(){
    this.shoppingcardservice.addToCart(this.product);
  }

  removeFromCart(){
    this.shoppingcardservice.removeFromCart(this.product);
  }

  

}
