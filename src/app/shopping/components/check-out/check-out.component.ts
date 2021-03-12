import { Observable } from 'rxjs/Observable';
import { ShoppingCardService } from 'shared/services/shopping-card.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(private shoppingcardservice: ShoppingCardService){}

  async ngOnInit() {
    this.cart$ = await this.shoppingcardservice.getCart();
  }
}
