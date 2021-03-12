import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCardService } from 'shared/services/shopping-card.service';
import { Product } from 'shared/models/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showAction = true;
  @Input('shoping-cart') shoppingCart: ShoppingCart;

  constructor(private shoppingcardservice: ShoppingCardService) { }

  addToCard(){
    this.shoppingcardservice.addToCart(this.product);
  }
}

