import { ShoppingCardService } from 'shared/services/shopping-card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$;

  constructor(private shoppingcardservice: ShoppingCardService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingcardservice.getCart();
  }

  clearCart(){
    this.shoppingcardservice.clearCart();
  }

}
